// TypeScript types for Vistatec Discovery Form

export interface ContactDetails {
  name: string;
  email: string;
  role: string;
  additionalStakeholders: string;
}

export interface StrategicIntent {
  primaryObjectives: string;
  initiativeClassification: 'core_strategic' | 'adjacent_expansion' | 'opportunistic_revenue' | 'under_assessment';
  timeHorizon: string[];
  successCriteria: string;
  revenueTargets?: string;
}

export interface OpportunityLandscape {
  requestTypes: string[];
  recentExamples: string;
  requestSource: 'existing_clients' | 'new_prospects' | 'both' | 'not_sure';
  promisingOpportunities: string;
  riskyOpportunities: string;
}

export interface ExistingCapability {
  involvedTeams: string[];
  existingStrengths: string;
  gapsUncertainties: string;
  relevantExperience: string;
  existingSystems?: string;
}

export interface DecisionProcess {
  assessmentProcess: string;
  decisionMakers: string;
  feasibilityTiming: 'before_pricing' | 'during_pricing' | 'after_award' | 'not_consistently' | 'not_sure';
  influencingFactors: string[];
  salesDeliveryConcerns?: string;
}

export interface DeliveryConstraints {
  knownConstraints: string[];
  securityComplianceRequirements: string;
  limitingSystemsProcesses: string;
  operationalBottlenecks: string;
  scalingChallenges: string;
}

export interface RiskUnknowns {
  confidenceGaps: string;
  concerningRisks: string[];
  missingInformation: string;
  scalingPreventers: string;
  difficultDecisions: string;
}

export interface PilotCandidate {
  hasCandidate: 'yes' | 'possibly' | 'not_yet';
  description: string;
  dataWorkflowTypes: string[];
  suitabilityReasons: string;
  unknownFactors: string;
  urgency: 'immediate' | 'within_2_weeks' | 'within_1_month' | 'longer_term' | 'unknown';
}

export interface DiscoveryFormData {
  contactDetails: ContactDetails;
  strategicIntent: StrategicIntent;
  opportunityLandscape: OpportunityLandscape;
  existingCapability: ExistingCapability;
  decisionProcess: DecisionProcess;
  deliveryConstraints: DeliveryConstraints;
  riskUnknowns: RiskUnknowns;
  pilotCandidate: PilotCandidate;
  additionalNotes: string;
}

export interface DatabaseResponse {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'draft' | 'submitted';
  contact_name: string;
  contact_email: string;
  contact_role: string;
  additional_stakeholders: string;
  strategic_intent: StrategicIntent;
  opportunity_landscape: OpportunityLandscape;
  existing_capability: ExistingCapability;
  decision_process: DecisionProcess;
  delivery_constraints: DeliveryConstraints;
  risk_unknowns: RiskUnknowns;
  pilot_candidate: PilotCandidate;
  additional_notes: string;
  session_id?: string;
  user_agent?: string;
  ip_address?: string;
}

export interface FormSection {
  id: keyof DiscoveryFormData;
  title: string;
  purpose: string;
  isCompleted: boolean;
}

export interface AutoSaveData {
  formData: Partial<DiscoveryFormData>;
  lastSaved: string;
  sessionId: string;
}
