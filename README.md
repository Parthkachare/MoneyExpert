# MoneyExpert Finserv

MoneyExpert Finserv website built with React, Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Customer requests and admin panel

Callback, service inquiry, and franchise forms store submissions in Supabase.
The admin panel is available at `/admin`; only accounts added to the
`admin_users` allowlist can view requests or change their status.

1. Create a Supabase project and run [`supabase/schema.sql`](./supabase/schema.sql)
   in its SQL Editor.
2. In Supabase Authentication, create an email/password account for each admin
   (confirm the account if email confirmation is enabled). Add each account to
   the allowlist by running this in the SQL Editor (replace the email):

   ```sql
   insert into public.admin_users (user_id)
   select id from auth.users where email = lower('admin@example.com')
   on conflict do nothing;
   ```

3. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` from the Supabase project's API settings. These are
   public client settings; never put a Supabase service-role key in the website.
4. Configure the same environment variables in the production hosting settings,
   then rebuild and deploy the site. Ensure the host serves the app's `index.html`
   for `/admin` so the admin panel loads on a direct visit.

After setup, sign in at `/admin` to review requests, search by customer or
service, refresh the list, and mark requests as new, contacted, or closed.
