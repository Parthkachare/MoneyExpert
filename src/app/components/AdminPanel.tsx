import { useCallback, useEffect, useMemo, useState } from 'react';
import { LogOut, RefreshCw, Search } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import {
  isSupabaseConfigured,
  supabase,
  type Lead,
  type LeadStatus,
} from '../lib/supabase';

const statusLabels: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  closed: 'Closed',
};

export default function AdminPanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sessionReady, setSessionReady] = useState(false);
  const [session, setSession] = useState<{
    access_token: string;
    user: { email?: string };
  } | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    if (!supabase) return;

    let active = true;
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (active) {
        setSession(nextSession);
        setIsAdmin(null);
        setLeads([]);
      }
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (!active) return;
      if (error) {
        toast.error('Could not restore your admin session.');
        console.error('Could not restore admin session:', error);
      }
      setSession(data.session);
      setSessionReady(true);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadLeads = useCallback(async () => {
    if (!supabase || !session) return;
    setLoading(true);

    const { data: adminResult, error: adminError } = await supabase.rpc('is_lead_admin');
    if (adminError) {
      toast.error('Could not verify admin access. Check the Supabase setup.');
      console.error('Could not verify lead admin access:', adminError);
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    setIsAdmin(adminResult);
    if (!adminResult) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Could not load requests. Please try again.');
      console.error('Could not load customer requests:', error);
    } else {
      setLeads(data as Lead[]);
    }
    setLoading(false);
  }, [session]);

  useEffect(() => {
    if (session) {
      void loadLeads();
    } else {
      setIsAdmin(null);
      setLeads([]);
    }
  }, [session, loadLeads]);

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      const matchesSearch = !query || [
        lead.name,
        lead.mobile,
        lead.email,
        lead.city,
        lead.service,
        lead.request_type,
      ].some((value) => value?.toLowerCase().includes(query));
      return matchesStatus && matchesSearch;
    });
  }, [leads, search, statusFilter]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error('Sign-in failed. Check your email and password.');
      console.error('Admin sign-in failed:', error);
    }
  }

  async function handleSignOut() {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Could not sign out. Please try again.');
      console.error('Admin sign-out failed:', error);
    }
  }

  async function updateStatus(id: string, status: LeadStatus) {
    if (!supabase) return;
    const { error } = await supabase.from('leads').update({ status }).eq('id', id);
    if (error) {
      toast.error('Could not update request status.');
      console.error('Could not update request status:', error);
      return;
    }
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    );
    toast.success('Request status updated.');
  }

  const cardClass = 'rounded-xl border border-border bg-card p-6 shadow-sm';

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6">
      <Toaster position="top-right" richColors />
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">MoneyExpert Finserv</p>
            <h1 className="mt-1 text-3xl font-bold">Customer requests</h1>
          </div>
          {session && (
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          )}
        </header>

        {!isSupabaseConfigured ? (
          <section className={cardClass}>
            <h2 className="text-xl font-semibold">Admin setup required</h2>
            <p className="mt-2 text-muted-foreground">
              Add your Supabase project URL and publishable key as
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5">VITE_SUPABASE_URL</code>
              and
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5">VITE_SUPABASE_ANON_KEY</code>
              environment variables, then rebuild the site.
            </p>
          </section>
        ) : !sessionReady ? (
          <section className={cardClass}>Checking admin session…</section>
        ) : !session ? (
          <form onSubmit={handleLogin} className={`${cardClass} mx-auto max-w-md space-y-4`}>
            <h2 className="text-xl font-semibold">Admin sign in</h2>
            <label className="block text-sm font-medium">
              Email
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium">
              Password
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-primary-foreground"
            >
              Sign in
            </button>
          </form>
        ) : isAdmin === false ? (
          <section className={cardClass}>
            <h2 className="text-xl font-semibold">Admin access not enabled</h2>
            <p className="mt-2 text-muted-foreground">
              This account is not on the admin allowlist. Add it to
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5">public.admin_users</code>
              in Supabase, then sign in again.
            </p>
          </section>
        ) : isAdmin === null || loading ? (
          <section className={cardClass}>Loading requests…</section>
        ) : (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(['all', 'new', 'contacted', 'closed'] as const).map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setStatusFilter(filter)}
                  className={`${cardClass} text-left transition hover:border-primary ${
                    statusFilter === filter ? 'border-primary ring-1 ring-primary' : ''
                  }`}
                >
                  <span className="block text-sm text-muted-foreground">
                    {filter === 'all' ? 'All requests' : statusLabels[filter]}
                  </span>
                  <span className="mt-1 block text-2xl font-bold">
                    {filter === 'all'
                      ? leads.length
                      : leads.filter((lead) => lead.status === filter).length}
                  </span>
                </button>
              ))}
            </div>

            <section className={cardClass}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Incoming requests</h2>
                <div className="flex flex-wrap gap-2">
                  <label className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search requests"
                      aria-label="Search requests"
                      className="w-56 rounded-lg border border-border bg-background py-2 pl-9 pr-3"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => void loadLeads()}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </button>
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <p className="py-10 text-center text-muted-foreground">
                  {leads.length ? 'No requests match your search.' : 'No customer requests yet.'}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground">
                        <th className="px-3 py-3 font-medium">Received</th>
                        <th className="px-3 py-3 font-medium">Request</th>
                        <th className="px-3 py-3 font-medium">Customer</th>
                        <th className="px-3 py-3 font-medium">Contact</th>
                        <th className="px-3 py-3 font-medium">Service / details</th>
                        <th className="px-3 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="border-b border-border align-top last:border-0">
                          <td className="whitespace-nowrap px-3 py-4">
                            {new Intl.DateTimeFormat(undefined, {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            }).format(new Date(lead.created_at))}
                          </td>
                          <td className="px-3 py-4 capitalize">{lead.request_type}</td>
                          <td className="px-3 py-4">
                            <p className="font-semibold">{lead.name}</p>
                            {lead.city && <p className="mt-1 text-muted-foreground">{lead.city}</p>}
                          </td>
                          <td className="px-3 py-4">
                            <a className="text-primary hover:underline" href={`tel:${lead.mobile}`}>
                              {lead.mobile}
                            </a>
                            {lead.email && (
                              <a className="mt-1 block text-primary hover:underline" href={`mailto:${lead.email}`}>
                                {lead.email}
                              </a>
                            )}
                          </td>
                          <td className="max-w-xs whitespace-normal px-3 py-4">
                            <p className="font-medium">{lead.service}</p>
                            {lead.message && (
                              <p className="mt-1 whitespace-pre-wrap text-muted-foreground">{lead.message}</p>
                            )}
                          </td>
                          <td className="px-3 py-4">
                            <select
                              value={lead.status}
                              onChange={(event) => void updateStatus(lead.id, event.target.value as LeadStatus)}
                              aria-label={`Status for ${lead.name}`}
                              className="rounded-lg border border-border bg-background px-2 py-1.5"
                            >
                              {Object.entries(statusLabels).map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
