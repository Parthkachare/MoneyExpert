create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  request_type text not null check (request_type in ('callback', 'service', 'franchise')),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  mobile text not null check (char_length(btrim(mobile)) between 3 and 32),
  email text not null default '' check (char_length(email) <= 254),
  city text not null default '' check (char_length(city) <= 120),
  service text not null check (char_length(btrim(service)) between 1 and 120),
  message text not null default '' check (char_length(message) <= 5000),
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.leads enable row level security;
alter table public.admin_users enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on public.admin_users from public, anon, authenticated;
revoke all on public.leads from public, anon, authenticated;

grant insert (request_type, name, mobile, email, city, service, message)
  on public.leads to anon, authenticated;
grant select on public.leads to authenticated;
grant update (status) on public.leads to authenticated;

create or replace function public.is_lead_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_lead_admin() from public, anon;
grant execute on function public.is_lead_admin() to authenticated;

drop policy if exists "Anyone can submit a lead" on public.leads;
create policy "Anyone can submit a lead"
  on public.leads for insert
  to anon, authenticated
  with check (status = 'new');

drop policy if exists "Admins can view leads" on public.leads;
create policy "Admins can view leads"
  on public.leads for select
  to authenticated
  using ((select public.is_lead_admin()));

drop policy if exists "Admins can update lead status" on public.leads;
create policy "Admins can update lead status"
  on public.leads for update
  to authenticated
  using ((select public.is_lead_admin()))
  with check ((select public.is_lead_admin()));
