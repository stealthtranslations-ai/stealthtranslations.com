import type { Metadata } from "next";
import { useState, useEffect } from 'react';
import PasswordGate from '@/components/PasswordGate';
import DiscoveryForm from '@/components/DiscoveryForm';

export const metadata: Metadata = {
  title: "Data Engineering Capability & Opportunity Discovery | Stealth Translations",
  description: "Private discovery workspace for Vistatec's data engineering and annotation service development",
};

export default function VistatecDiscoveryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authData = sessionStorage.getItem('vistatec_discovery_auth');
    if (authData) {
      try {
        const { authenticated, timestamp } = JSON.parse(authData);
        // Check if authentication is still valid (24 hours)
        if (authenticated && Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem('vistatec_discovery_auth');
        }
      } catch (error) {
        sessionStorage.removeItem('vistatec_discovery_auth');
      }
    }
  }, []);

  const handleFormSubmit = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">Thank You</h1>
          <div className="space-y-3 text-left">
            <p className="text-slate-600">
              Your discovery response has been submitted.
            </p>
            <p className="text-slate-600">
              The next step is to review the information and identify the most practical starting point for a focused pilot or strategy engagement.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Prepared by Stealth Translations Ltd
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <PasswordGate 
        onAuthenticated={() => setIsAuthenticated(true)}
        type="discovery"
        title="Vistatec Discovery Workspace"
        subtitle="Please enter the password to access the discovery form"
      />
    );
  }

  return <DiscoveryForm onFormSubmit={handleFormSubmit} />;
}
