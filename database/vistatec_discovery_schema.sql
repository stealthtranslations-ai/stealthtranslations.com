-- Supabase table schema for Vistatec Discovery Form
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS vistatec_discovery_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL CHECK (status IN ('draft', 'submitted')),
  
  -- Contact Information
  contact_name TEXT,
  contact_email TEXT,
  contact_role TEXT,
  additional_stakeholders TEXT,
  
  -- Form Sections (JSONB for flexible structure)
  strategic_intent JSONB,
  opportunity_landscape JSONB,
  existing_capability JSONB,
  decision_process JSONB,
  delivery_constraints JSONB,
  risk_unknowns JSONB,
  pilot_candidate JSONB,
  additional_notes TEXT,
  
  -- Metadata
  session_id TEXT,
  user_agent TEXT,
  ip_address TEXT
);

-- Create index for faster queries
CREATE INDEX idx_vistatec_discovery_status ON vistatec_discovery_responses(status);
CREATE INDEX idx_vistatec_discovery_created_at ON vistatec_discovery_responses(created_at DESC);
CREATE INDEX idx_vistatec_discovery_email ON vistatec_discovery_responses(contact_email);

-- Enable Row Level Security (RLS)
ALTER TABLE vistatec_discovery_responses ENABLE ROW LEVEL SECURITY;

-- Create policy for inserts (anyone can submit)
CREATE POLICY "Allow insert submissions" ON vistatec_discovery_responses
  FOR INSERT WITH CHECK (true);

-- Create policy for select (only authenticated users can view)
CREATE POLICY "Allow authenticated users to view" ON vistatec_discovery_responses
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for updates (only authenticated users can update)
CREATE POLICY "Allow authenticated users to update" ON vistatec_discovery_responses
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_vistatec_discovery_updated_at 
  BEFORE UPDATE ON vistatec_discovery_responses 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
