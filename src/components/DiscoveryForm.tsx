'use client';

import { useState, useEffect, useCallback } from 'react';
import { Save, Send, Clock, CheckCircle } from 'lucide-react';
import { DiscoveryFormData, FormSection } from '@/types/vistatec-discovery';
import { VistatecDiscoveryService } from '@/lib/supabase';
import FormSectionComponent, { 
  FormField, 
  TextAreaField, 
  SelectField, 
  CheckboxGroup, 
  RadioGroup 
} from './FormSection';

interface DiscoveryFormProps {
  onFormSubmit?: () => void;
}

const initialFormData: DiscoveryFormData = {
  contactDetails: {
    name: '',
    email: '',
    role: '',
    additionalStakeholders: ''
  },
  strategicIntent: {
    primaryObjectives: '',
    initiativeClassification: 'under_assessment',
    timeHorizon: [],
    successCriteria: '',
    revenueTargets: ''
  },
  opportunityLandscape: {
    requestTypes: [],
    recentExamples: '',
    requestSource: 'not_sure',
    promisingOpportunities: '',
    riskyOpportunities: ''
  },
  existingCapability: {
    involvedTeams: [],
    existingStrengths: '',
    gapsUncertainties: '',
    relevantExperience: '',
    existingSystems: ''
  },
  decisionProcess: {
    assessmentProcess: '',
    decisionMakers: '',
    feasibilityTiming: 'not_consistently',
    influencingFactors: [],
    salesDeliveryConcerns: ''
  },
  deliveryConstraints: {
    knownConstraints: [],
    securityComplianceRequirements: '',
    limitingSystemsProcesses: '',
    operationalBottlenecks: '',
    scalingChallenges: ''
  },
  riskUnknowns: {
    confidenceGaps: '',
    concerningRisks: [],
    missingInformation: '',
    scalingPreventers: '',
    difficultDecisions: ''
  },
  pilotCandidate: {
    hasCandidate: 'not_yet',
    description: '',
    dataWorkflowTypes: [],
    suitabilityReasons: '',
    unknownFactors: '',
    urgency: 'unknown'
  },
  additionalNotes: ''
};

const formSections: FormSection[] = [
  { id: 'contactDetails', title: 'Contact Details', purpose: 'Basic contact information for follow-up', isCompleted: false },
  { id: 'strategicIntent', title: 'Strategic Intent', purpose: 'To understand the strategic reason behind developing data engineering and annotation capability', isCompleted: false },
  { id: 'opportunityLandscape', title: 'Current Opportunity Landscape', purpose: 'To understand the types of requests already coming in and where early commercial pressure exists', isCompleted: false },
  { id: 'existingCapability', title: 'Existing Capability', purpose: 'To understand where Vistatec already has relevant strengths and where additional support may be required', isCompleted: false },
  { id: 'decisionProcess', title: 'Current Decision Process', purpose: 'To understand how new opportunities are evaluated before being accepted, priced, or declined', isCompleted: false },
  { id: 'deliveryConstraints', title: 'Delivery Constraints', purpose: 'To identify practical constraints that may affect feasibility, scalability, quality, or commercial viability', isCompleted: false },
  { id: 'riskUnknowns', title: 'Risk & Unknowns', purpose: 'To identify where uncertainty is highest before committing to a pilot or broader engagement', isCompleted: false },
  { id: 'pilotCandidate', title: 'Pilot Candidate', purpose: 'To identify one practical starting point that could be shaped into a focused pilot', isCompleted: false },
  { id: 'additionalNotes', title: 'Additional Context', purpose: 'Any additional information that would be useful at this stage', isCompleted: false }
];

export default function DiscoveryForm({ onFormSubmit }: DiscoveryFormProps) {
  const [formData, setFormData] = useState<DiscoveryFormData>(initialFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [currentSection, setCurrentSection] = useState(0);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (saveStatus === 'idle') {
        handleAutoSave();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [formData, saveStatus]);

  const handleAutoSave = useCallback(async () => {
    setSaveStatus('saving');
    const result = await VistatecDiscoveryService.saveResponse(formData, 'draft', sessionId);
    
    if (result.success) {
      setLastSaved(new Date());
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } else {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  }, [formData, sessionId]);

  const handleSave = async () => {
    setIsSaving(true);
    await handleAutoSave();
    setIsSaving(false);
  };

  const validateForm = (): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Required contact fields
    if (!formData.contactDetails.name.trim()) errors.push('Name is required');
    if (!formData.contactDetails.email.trim()) errors.push('Email is required');
    if (!formData.contactDetails.email.includes('@')) errors.push('Valid email is required');

    // Check that each section has at least some content
    const sections = [
      { key: 'strategicIntent', name: 'Strategic Intent' },
      { key: 'opportunityLandscape', name: 'Opportunity Landscape' },
      { key: 'existingCapability', name: 'Existing Capability' },
      { key: 'decisionProcess', name: 'Decision Process' },
      { key: 'deliveryConstraints', name: 'Delivery Constraints' },
      { key: 'riskUnknowns', name: 'Risk & Unknowns' },
      { key: 'pilotCandidate', name: 'Pilot Candidate' }
    ];

    sections.forEach(section => {
      const sectionData = formData[section.key as keyof DiscoveryFormData];
      const hasContent = Object.values(sectionData as any).some(value => {
        if (!value) return false;
        if (typeof value === 'string') return value.trim().length > 0;
        if (Array.isArray(value)) return value.length > 0;
        return true; // For other types like numbers, booleans, etc.
      });
      if (!hasContent) {
        errors.push(`${section.name} section requires at least one response`);
      }
    });

    return { isValid: errors.length === 0, errors };
  };

  const handleSubmit = async () => {
    const validation = validateForm();
    
    if (!validation.isValid) {
      alert('Please complete all required sections:\n\n' + validation.errors.join('\n'));
      return;
    }

    setIsSubmitting(true);
    
    const result = await VistatecDiscoveryService.saveResponse(formData, 'submitted', sessionId);
    
    if (result.success) {
      onFormSubmit?.();
    } else {
      alert('Failed to submit form. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const updateFormData = (section: keyof DiscoveryFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderContactSection = () => (
    <FormSectionComponent id="contact" title="Contact Details" purpose="Basic contact information for follow-up">
      <FormField label="Name" required>
        <TextAreaField
          value={formData.contactDetails.name}
          onChange={(value) => updateFormData('contactDetails', 'name', value)}
          placeholder="Enter your full name"
          required
          rows={1}
        />
      </FormField>
      
      <FormField label="Email" required>
        <TextAreaField
          value={formData.contactDetails.email}
          onChange={(value) => updateFormData('contactDetails', 'email', value)}
          placeholder="Enter your email address"
          required
          rows={1}
        />
      </FormField>
      
      <FormField label="Role / Department">
        <TextAreaField
          value={formData.contactDetails.role}
          onChange={(value) => updateFormData('contactDetails', 'role', value)}
          placeholder="Your role and department"
          rows={1}
        />
      </FormField>
      
      <FormField label="Who else should be involved in this discovery process?">
        <TextAreaField
          value={formData.contactDetails.additionalStakeholders}
          onChange={(value) => updateFormData('contactDetails', 'additionalStakeholders', value)}
          placeholder="Names and roles of other team members who should contribute"
          rows={2}
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderStrategicIntentSection = () => (
    <FormSectionComponent id="strategic" title="Strategic Intent" purpose="To understand the strategic reason behind developing data engineering and annotation capability">
      <FormField label="What are the primary objectives for developing this capability?" required>
        <TextAreaField
          value={formData.strategicIntent.primaryObjectives}
          onChange={(value) => updateFormData('strategicIntent', 'primaryObjectives', value)}
          placeholder="Describe the main goals and motivations"
          required
        />
      </FormField>
      
      <FormField label="How would you currently classify this initiative?" required>
        <SelectField
          value={formData.strategicIntent.initiativeClassification}
          onChange={(value) => updateFormData('strategicIntent', 'initiativeClassification', value as any)}
          placeholder="Select classification"
          required
        >
          <option value="core_strategic">Core strategic direction</option>
          <option value="adjacent_expansion">Adjacent service expansion</option>
          <option value="opportunistic_revenue">Opportunistic revenue stream</option>
          <option value="under_assessment">Still under internal assessment</option>
        </SelectField>
      </FormField>
      
      <FormField label="What time horizon are you considering?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'immediate', label: 'Immediate opportunities' },
            { value: '3_6_months', label: '3–6 months' },
            { value: '6_12_months', label: '6–12 months' },
            { value: '12_plus_months', label: '12+ months' }
          ]}
          values={formData.strategicIntent.timeHorizon}
          onChange={(values) => updateFormData('strategicIntent', 'timeHorizon', values)}
          required
        />
      </FormField>
      
      <FormField label="What would make this initiative successful internally?" required>
        <TextAreaField
          value={formData.strategicIntent.successCriteria}
          onChange={(value) => updateFormData('strategicIntent', 'successCriteria', value)}
          placeholder="Define success criteria and key metrics"
          required
        />
      </FormField>
      
      <FormField label="Are there any internal revenue or growth targets associated with this area?">
        <TextAreaField
          value={formData.strategicIntent.revenueTargets}
          onChange={(value) => updateFormData('strategicIntent', 'revenueTargets', value)}
          placeholder="Optional: Any specific revenue or growth targets"
          rows={2}
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderOpportunitySection = () => (
    <FormSectionComponent id="opportunity" title="Current Opportunity Landscape" purpose="To understand the types of requests already coming in and where early commercial pressure exists">
      <FormField label="What types of data-related requests are currently being received?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'data_collection', label: 'Data collection' },
            { value: 'data_annotation', label: 'Data annotation' },
            { value: 'llm_evaluation', label: 'LLM evaluation' },
            { value: 'prompt_generation', label: 'Prompt generation / prompt evaluation' },
            { value: 'audio_speech', label: 'Audio / speech data' },
            { value: 'image_video', label: 'Image / video data' },
            { value: 'multilingual_evaluation', label: 'Multilingual evaluation' },
            { value: 'domain_expert_review', label: 'Domain-specific expert review' },
            { value: 'other', label: 'Other' }
          ]}
          values={formData.opportunityLandscape.requestTypes}
          onChange={(values) => updateFormData('opportunityLandscape', 'requestTypes', values)}
          required
        />
      </FormField>
      
      <FormField label="Briefly describe 2–3 recent examples of client requests." required>
        <TextAreaField
          value={formData.opportunityLandscape.recentExamples}
          onChange={(value) => updateFormData('opportunityLandscape', 'recentExamples', value)}
          placeholder="Describe specific recent client requests"
          required
        />
      </FormField>
      
      <FormField label="Are these requests mainly coming from existing clients or new prospects?" required>
        <RadioGroup
          label=""
          options={[
            { value: 'existing_clients', label: 'Existing clients' },
            { value: 'new_prospects', label: 'New prospects' },
            { value: 'both', label: 'Both' },
            { value: 'not_sure', label: 'Not sure' }
          ]}
          value={formData.opportunityLandscape.requestSource}
          onChange={(value) => updateFormData('opportunityLandscape', 'requestSource', value as any)}
          required
        />
      </FormField>
      
      <FormField label="Which opportunities feel most promising at this stage?" required>
        <TextAreaField
          value={formData.opportunityLandscape.promisingOpportunities}
          onChange={(value) => updateFormData('opportunityLandscape', 'promisingOpportunities', value)}
          placeholder="Describe the most promising opportunities"
          required
        />
      </FormField>
      
      <FormField label="Which opportunities feel most risky or unclear?" required>
        <TextAreaField
          value={formData.opportunityLandscape.riskyOpportunities}
          onChange={(value) => updateFormData('opportunityLandscape', 'riskyOpportunities', value)}
          placeholder="Describe the riskiest or least clear opportunities"
          required
        />
      </FormField>
    </FormSectionComponent>
  );

  // Continue with remaining sections in next component...
  const renderCapabilitySection = () => (
    <FormSectionComponent id="capability" title="Existing Capability" purpose="To understand where Vistatec already has relevant strengths and where additional support may be required">
      <FormField label="Which internal teams would likely be involved?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'sales', label: 'Sales' },
            { value: 'programme_management', label: 'Programme Management' },
            { value: 'production_delivery', label: 'Production / Delivery' },
            { value: 'quality', label: 'Quality' },
            { value: 'multimedia', label: 'Multimedia' },
            { value: 'it_security', label: 'IT / Information Security' },
            { value: 'vendor_management', label: 'Vendor Management' },
            { value: 'finance_commercial', label: 'Finance / Commercial' },
            { value: 'other', label: 'Other' }
          ]}
          values={formData.existingCapability.involvedTeams}
          onChange={(values) => updateFormData('existingCapability', 'involvedTeams', values)}
          required
        />
      </FormField>
      
      <FormField label="Where do you feel Vistatec already has strong capability?" required>
        <TextAreaField
          value={formData.existingCapability.existingStrengths}
          onChange={(value) => updateFormData('existingCapability', 'existingStrengths', value)}
          placeholder="Describe existing strengths and advantages"
          required
        />
      </FormField>
      
      <FormField label="Where do you feel there are gaps or uncertainties?" required>
        <TextAreaField
          value={formData.existingCapability.gapsUncertainties}
          onChange={(value) => updateFormData('existingCapability', 'gapsUncertainties', value)}
          placeholder="Describe gaps, uncertainties, or areas needing development"
          required
        />
      </FormField>
      
      <FormField label="What existing experience do you have with structured review, QA, arbitration, or large-scale resource coordination?" required>
        <TextAreaField
          value={formData.existingCapability.relevantExperience}
          onChange={(value) => updateFormData('existingCapability', 'relevantExperience', value)}
          placeholder="Describe relevant experience in these areas"
          required
        />
      </FormField>
      
      <FormField label="What systems or platforms are currently used that may be relevant?">
        <TextAreaField
          value={formData.existingCapability.existingSystems}
          onChange={(value) => updateFormData('existingCapability', 'existingSystems', value)}
          placeholder="Optional: Current systems, platforms, or tools"
          rows={2}
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderDecisionSection = () => (
    <FormSectionComponent id="decision" title="Current Decision Process" purpose="To understand how new opportunities are evaluated before being accepted, priced, or declined">
      <FormField label="How are new data-related opportunities currently assessed?" required>
        <TextAreaField
          value={formData.decisionProcess.assessmentProcess}
          onChange={(value) => updateFormData('decisionProcess', 'assessmentProcess', value)}
          placeholder="Describe the current assessment process"
          required
        />
      </FormField>
      
      <FormField label="Who is typically involved in go/no-go decisions?" required>
        <TextAreaField
          value={formData.decisionProcess.decisionMakers}
          onChange={(value) => updateFormData('decisionProcess', 'decisionMakers', value)}
          placeholder="List the roles involved in decision making"
          required
        />
      </FormField>
      
      <FormField label="At what point is feasibility assessed?" required>
        <RadioGroup
          label=""
          options={[
            { value: 'before_pricing', label: 'Before pricing' },
            { value: 'during_pricing', label: 'During pricing' },
            { value: 'after_award', label: 'After award' },
            { value: 'not_consistently', label: 'Not consistently assessed' },
            { value: 'not_sure', label: 'Not sure' }
          ]}
          value={formData.decisionProcess.feasibilityTiming}
          onChange={(value) => updateFormData('decisionProcess', 'feasibilityTiming', value as any)}
          required
        />
      </FormField>
      
      <FormField label="What factors currently influence whether an opportunity is accepted or declined?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'revenue_potential', label: 'Revenue potential' },
            { value: 'margin_potential', label: 'Margin potential' },
            { value: 'resource_availability', label: 'Resource availability' },
            { value: 'technical_complexity', label: 'Technical complexity' },
            { value: 'client_relationship', label: 'Client relationship' },
            { value: 'security_compliance', label: 'Security/compliance requirements' },
            { value: 'timeline_pressure', label: 'Timeline pressure' },
            { value: 'strategic_value', label: 'Strategic value' },
            { value: 'other', label: 'Other' }
          ]}
          values={formData.decisionProcess.influencingFactors}
          onChange={(values) => updateFormData('decisionProcess', 'influencingFactors', values)}
          required
        />
      </FormField>
      
      <FormField label="What concerns exist around sales accepting work before delivery implications are fully understood?">
        <TextAreaField
          value={formData.decisionProcess.salesDeliveryConcerns}
          onChange={(value) => updateFormData('decisionProcess', 'salesDeliveryConcerns', value)}
          placeholder="Optional: Any concerns about sales/delivery alignment"
          rows={2}
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderConstraintsSection = () => (
    <FormSectionComponent id="constraints" title="Delivery Constraints" purpose="To identify practical constraints that may affect feasibility, scalability, quality, or commercial viability">
      <FormField label="What delivery constraints are currently known?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'tight_timelines', label: 'Tight timelines' },
            { value: 'unclear_specifications', label: 'Unclear client specifications' },
            { value: 'unknown_data_formats', label: 'Unknown data formats' },
            { value: 'security_compliance', label: 'Security / compliance requirements' },
            { value: 'large_scale_recruitment', label: 'Large-scale recruitment' },
            { value: 'specialist_domain', label: 'Specialist domain knowledge' },
            { value: 'qa_complexity', label: 'QA complexity' },
            { value: 'customer_platform_limitations', label: 'Customer platform limitations' },
            { value: 'integration_requirements', label: 'Integration requirements' },
            { value: 'other', label: 'Other' }
          ]}
          values={formData.deliveryConstraints.knownConstraints}
          onChange={(values) => updateFormData('deliveryConstraints', 'knownConstraints', values)}
          required
        />
      </FormField>
      
      <FormField label="Are there any specific security or compliance requirements that commonly arise?" required>
        <TextAreaField
          value={formData.deliveryConstraints.securityComplianceRequirements}
          onChange={(value) => updateFormData('deliveryConstraints', 'securityComplianceRequirements', value)}
          placeholder="Describe common security or compliance requirements"
          required
        />
      </FormField>
      
      <FormField label="Are there internal systems or processes that may limit speed or flexibility?" required>
        <TextAreaField
          value={formData.deliveryConstraints.limitingSystemsProcesses}
          onChange={(value) => updateFormData('deliveryConstraints', 'limitingSystemsProcesses', value)}
          placeholder="Describe systems or processes that may limit speed/flexibility"
          required
        />
      </FormField>
      
      <FormField label="What operational bottlenecks are you most concerned about?" required>
        <TextAreaField
          value={formData.deliveryConstraints.operationalBottlenecks}
          onChange={(value) => updateFormData('deliveryConstraints', 'operationalBottlenecks', value)}
          placeholder="Describe the most concerning operational bottlenecks"
          required
        />
      </FormField>
      
      <FormField label="What would make scaling difficult?" required>
        <TextAreaField
          value={formData.deliveryConstraints.scalingChallenges}
          onChange={(value) => updateFormData('deliveryConstraints', 'scalingChallenges', value)}
          placeholder="Describe factors that would make scaling difficult"
          required
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderRiskSection = () => (
    <FormSectionComponent id="risk" title="Risk & Unknowns" purpose="To identify where uncertainty is highest before committing to a pilot or broader engagement">
      <FormField label="Where do you feel least confident today?" required>
        <TextAreaField
          value={formData.riskUnknowns.confidenceGaps}
          onChange={(value) => updateFormData('riskUnknowns', 'confidenceGaps', value)}
          placeholder="Describe areas where confidence is lowest"
          required
        />
      </FormField>
      
      <FormField label="What risks are most concerning?" required>
        <CheckboxGroup
          label=""
          options={[
            { value: 'unprofitable_work', label: 'Taking on unprofitable work' },
            { value: 'poor_quality', label: 'Poor quality outcomes' },
            { value: 'insufficient_resources', label: 'Insufficient resources' },
            { value: 'lack_infrastructure', label: 'Lack of technical infrastructure' },
            { value: 'sales_delivery_misalignment', label: 'Sales/delivery misalignment' },
            { value: 'security_compliance_blockers', label: 'Security/compliance blockers' },
            { value: 'lack_ownership', label: 'Lack of internal ownership' },
            { value: 'expectation_mismatch', label: 'Client expectation mismatch' },
            { value: 'other', label: 'Other' }
          ]}
          values={formData.riskUnknowns.concerningRisks}
          onChange={(values) => updateFormData('riskUnknowns', 'concerningRisks', values)}
          required
        />
      </FormField>
      
      <FormField label="What information is usually missing at the quoting or procurement stage?" required>
        <TextAreaField
          value={formData.riskUnknowns.missingInformation}
          onChange={(value) => updateFormData('riskUnknowns', 'missingInformation', value)}
          placeholder="Describe information gaps during quoting/procurement"
          required
        />
      </FormField>
      
      <FormField label="What would prevent this initiative from scaling successfully?" required>
        <TextAreaField
          value={formData.riskUnknowns.scalingPreventers}
          onChange={(value) => updateFormData('riskUnknowns', 'scalingPreventers', value)}
          placeholder="Describe factors that could prevent successful scaling"
          required
        />
      </FormField>
      
      <FormField label="What decisions are currently difficult to make because of incomplete information?" required>
        <TextAreaField
          value={formData.riskUnknowns.difficultDecisions}
          onChange={(value) => updateFormData('riskUnknowns', 'difficultDecisions', value)}
          placeholder="Describe decisions that are difficult due to information gaps"
          required
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderPilotSection = () => (
    <FormSectionComponent id="pilot" title="Pilot Candidate" purpose="To identify one practical starting point that could be shaped into a focused pilot">
      <FormField label="Do you currently have a candidate opportunity suitable for a pilot?" required>
        <RadioGroup
          label=""
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'possibly', label: 'Possibly' },
            { value: 'not_yet', label: 'Not yet' }
          ]}
          value={formData.pilotCandidate.hasCandidate}
          onChange={(value) => updateFormData('pilotCandidate', 'hasCandidate', value as any)}
          required
        />
      </FormField>
      
      {(formData.pilotCandidate.hasCandidate === 'yes' || formData.pilotCandidate.hasCandidate === 'possibly') && (
        <>
          <FormField label="If yes or possibly, briefly describe it." required>
            <TextAreaField
              value={formData.pilotCandidate.description}
              onChange={(value) => updateFormData('pilotCandidate', 'description', value)}
              placeholder="Describe the potential pilot opportunity"
              required
            />
          </FormField>
          
          <FormField label="What type of data or workflow does it involve?" required>
            <CheckboxGroup
              label=""
              options={[
                { value: 'text', label: 'Text' },
                { value: 'audio', label: 'Audio' },
                { value: 'image', label: 'Image' },
                { value: 'video', label: 'Video' },
                { value: 'multilingual_review', label: 'Multilingual review' },
                { value: 'llm_evaluation', label: 'LLM output evaluation' },
                { value: 'prompt_generation', label: 'Prompt generation/evaluation' },
                { value: 'domain_expert_review', label: 'Domain-specific expert review' },
                { value: 'other', label: 'Other' }
              ]}
              values={formData.pilotCandidate.dataWorkflowTypes}
              onChange={(values) => updateFormData('pilotCandidate', 'dataWorkflowTypes', values)}
              required
            />
          </FormField>
          
          <FormField label="Why might this be a suitable starting point?" required>
            <TextAreaField
              value={formData.pilotCandidate.suitabilityReasons}
              onChange={(value) => updateFormData('pilotCandidate', 'suitabilityReasons', value)}
              placeholder="Explain why this opportunity would be a good pilot"
              required
            />
          </FormField>
          
          <FormField label="What is currently unknown about this opportunity?" required>
            <TextAreaField
              value={formData.pilotCandidate.unknownFactors}
              onChange={(value) => updateFormData('pilotCandidate', 'unknownFactors', value)}
              placeholder="Describe what is unknown about this opportunity"
              required
            />
          </FormField>
          
          <FormField label="How urgent is this opportunity?" required>
            <SelectField
              value={formData.pilotCandidate.urgency}
              onChange={(value) => updateFormData('pilotCandidate', 'urgency', value as any)}
              placeholder="Select urgency level"
              required
            >
              <option value="immediate">Immediate</option>
              <option value="within_2_weeks">Within 2 weeks</option>
              <option value="within_1_month">Within 1 month</option>
              <option value="longer_term">Longer term</option>
              <option value="unknown">Unknown</option>
            </SelectField>
          </FormField>
        </>
      )}
    </FormSectionComponent>
  );

  const renderAdditionalSection = () => (
    <FormSectionComponent id="additional" title="Additional Context" purpose="Any additional information that would be useful at this stage">
      <FormField label="Anything else that would be useful to know at this stage?">
        <TextAreaField
          value={formData.additionalNotes}
          onChange={(value) => setFormData(prev => ({ ...prev, additionalNotes: value }))}
          placeholder="Any additional context, questions, or considerations"
          rows={4}
        />
      </FormField>
      
      <FormField label="Any documents, links, or internal notes that should be reviewed later?">
        <TextAreaField
          value={formData.additionalNotes}
          onChange={(value) => setFormData(prev => ({ ...prev, additionalNotes: value }))}
          placeholder="Optional: Links to documents or internal resources"
          rows={2}
        />
      </FormField>
    </FormSectionComponent>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderContactSection();
      case 1: return renderStrategicIntentSection();
      case 2: return renderOpportunitySection();
      case 3: return renderCapabilitySection();
      case 4: return renderDecisionSection();
      case 5: return renderConstraintsSection();
      case 6: return renderRiskSection();
      case 7: return renderPilotSection();
      case 8: return renderAdditionalSection();
      default: return renderContactSection();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Data Engineering Capability & Opportunity Discovery
              </h1>
              <p className="text-slate-600 mt-1">Private discovery workspace for Vistatec</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-md">
                <p className="text-xs text-amber-800">Private & Confidential</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              This discovery form is intended to capture the current opportunity landscape, internal capability, delivery constraints, and potential pilot candidates for Vistatec's data engineering and annotation service development.
            </p>
            <p className="text-sm text-blue-800 mt-2">
              The aim is not to define a full solution at this stage, but to identify the most practical starting point and understand the level of support required to move forward with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">
              Section {currentSection + 1} of {formSections.length}
            </span>
            <div className="w-32 bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / formSections.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {saveStatus === 'saved' && (
              <div className="flex items-center space-x-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs">Saved</span>
              </div>
            )}
            {saveStatus === 'saving' && (
              <div className="flex items-center space-x-1 text-blue-600">
                <Clock className="w-4 h-4 animate-spin" />
                <span className="text-xs">Saving...</span>
              </div>
            )}
            {saveStatus === 'error' && (
              <span className="text-xs text-red-600">Save failed</span>
            )}
            {lastSaved && saveStatus === 'idle' && (
              <span className="text-xs text-slate-500">
                Last saved: {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              {formSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    index === currentSection
                      ? 'bg-blue-600 text-white'
                      : index < currentSection
                      ? 'bg-green-100 text-green-800'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {index + 1}. {section.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {renderCurrentSection()}

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-4 py-2 text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Section
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Draft'}</span>
            </button>

            {currentSection < formSections.length - 1 ? (
              <button
                onClick={() => setCurrentSection(Math.min(formSections.length - 1, currentSection + 1))}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Next Section
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Discovery Response'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-slate-200 bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-slate-500">
            Prepared by Stealth Translations Ltd
          </p>
        </div>
      </div>
    </div>
  );
}
