import { createClient } from '@supabase/supabase-js';
import { DatabaseResponse, DiscoveryFormData } from '@/types/vistatec-discovery';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if Supabase is configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Create Supabase client only if configured
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// Database operations
export class VistatecDiscoveryService {
  static async saveResponse(
    formData: DiscoveryFormData,
    status: 'draft' | 'submitted' = 'draft',
    sessionId?: string
  ): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!supabase) {
      // Fallback to localStorage
      try {
        const key = `vistatec_discovery_${sessionId || 'anonymous'}`;
        localStorage.setItem(key, JSON.stringify({
          formData,
          status,
          lastSaved: new Date().toISOString(),
          sessionId
        }));
        console.warn('Supabase not configured. Using localStorage fallback.');
        return { success: true };
      } catch (error) {
        console.error('LocalStorage fallback failed:', error);
        return { success: false, error: 'Storage not available' };
      }
    }

    try {
      const { data, error } = await supabase
        .from('vistatec_discovery_responses')
        .upsert({
          status,
          contact_name: formData.contactDetails.name,
          contact_email: formData.contactDetails.email,
          contact_role: formData.contactDetails.role,
          additional_stakeholders: formData.contactDetails.additionalStakeholders,
          strategic_intent: formData.strategicIntent,
          opportunity_landscape: formData.opportunityLandscape,
          existing_capability: formData.existingCapability,
          decision_process: formData.decisionProcess,
          delivery_constraints: formData.deliveryConstraints,
          risk_unknowns: formData.riskUnknowns,
          pilot_candidate: formData.pilotCandidate,
          additional_notes: formData.additionalNotes,
          session_id: sessionId,
          user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
          updated_at: new Date().toISOString()
        })
        .select('id')
        .single();

      if (error) throw error;
      return { success: true, id: data.id };
    } catch (error) {
      console.error('Database save error:', error);
      return { success: false, error: 'Failed to save to database' };
    }
  }

  static async getResponses(status?: 'draft' | 'submitted'): Promise<DatabaseResponse[]> {
    if (!supabase) {
      console.warn('Supabase not configured. Cannot retrieve responses.');
      return [];
    }

    try {
      let query = supabase
        .from('vistatec_discovery_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (status) {
        query = query.eq('status', status);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Database retrieval error:', error);
      return [];
    }
  }

  static async getResponse(id: string): Promise<DatabaseResponse | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Cannot retrieve response.');
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('vistatec_discovery_responses')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Database retrieval error:', error);
      return null;
    }
  }

  static async deleteResponse(id: string): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { error } = await supabase
        .from('vistatec_discovery_responses')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Database deletion error:', error);
      return { success: false, error: 'Failed to delete response' };
    }
  }

  // Export responses as JSON
  static async exportResponses(status?: 'draft' | 'submitted'): Promise<string> {
    const responses = await this.getResponses(status);
    return JSON.stringify(responses, null, 2);
  }

  // Export responses as CSV
  static async exportResponsesCSV(status?: 'draft' | 'submitted'): Promise<string> {
    const responses = await this.getResponses(status);
    
    if (responses.length === 0) {
      return 'No responses found';
    }

    const headers = [
      'ID', 'Created At', 'Status', 'Name', 'Email', 'Role',
      'Primary Objectives', 'Initiative Classification', 'Time Horizon',
      'Request Types', 'Request Source', 'Existing Strengths',
      'Assessment Process', 'Feasibility Timing', 'Known Constraints',
      'Confidence Gaps', 'Has Pilot Candidate', 'Urgency'
    ];

    const csvRows = [
      headers.join(','),
      ...responses.map(response => [
        response.id,
        response.created_at,
        response.status,
        `"${response.contact_name}"`,
        `"${response.contact_email}"`,
        `"${response.contact_role}"`,
        `"${response.strategic_intent?.primaryObjectives || ''}"`,
        response.strategic_intent?.initiativeClassification || '',
        `"${response.strategic_intent?.timeHorizon?.join('; ') || ''}"`,
        `"${response.opportunity_landscape?.requestTypes?.join('; ') || ''}"`,
        response.opportunity_landscape?.requestSource || '',
        `"${response.existing_capability?.existingStrengths || ''}"`,
        `"${response.decision_process?.assessmentProcess || ''}"`,
        response.decision_process?.feasibilityTiming || '',
        `"${response.delivery_constraints?.knownConstraints?.join('; ') || ''}"`,
        `"${response.risk_unknowns?.confidenceGaps || ''}"`,
        response.pilot_candidate?.hasCandidate || '',
        response.pilot_candidate?.urgency || ''
      ].join(','))
    ];

    return csvRows.join('\n');
  }
}
