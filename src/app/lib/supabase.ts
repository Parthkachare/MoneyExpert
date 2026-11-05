import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type LeadType = 'callback' | 'service' | 'franchise';
export type LeadStatus = 'new' | 'contacted' | 'closed';

export type LeadSubmission = {
  request_type: LeadType;
  name: string;
  mobile: string;
  email?: string;
  city?: string;
  service: string;
  message?: string;
};

export type Lead = LeadSubmission & {
  id: string;
  created_at: string;
  status: LeadStatus;
};

export async function submitLead(lead: LeadSubmission) {
  if (!supabase) {
    throw new Error('Lead storage is not configured.');
  }

  const { error } = await supabase.from('leads').insert({
    ...lead,
    name: lead.name.trim(),
    mobile: lead.mobile.trim(),
    email: lead.email?.trim() ?? '',
    city: lead.city?.trim() ?? '',
    service: lead.service.trim(),
    message: lead.message?.trim() ?? '',
  });

  if (error) {
    throw error;
  }
}
