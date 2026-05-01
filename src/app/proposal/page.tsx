'use client';

import React, { useState } from 'react';

const ProposalPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'Burns2024';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-green-700 to-slate-900 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Secure Proposal Access</h1>
              <p className="text-slate-600">Please enter the password to view the proposal</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="Enter password"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-slate-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-slate-800 transition duration-200"
              >
                Access Proposal
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                For access assistance, contact Stealth Translations Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Cover Section */}
      <div className="bg-gradient-to-br from-slate-800 via-green-700 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 py-24">
          {/* Stealth Translations Ltd Branding */}
          <div className="flex items-center mb-8">
            <div className="text-white/90 font-semibold tracking-wide">Stealth Translations Ltd</div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Report Production System
              <span className="block text-3xl font-light mt-2 text-white/90">Phase 1 Proposal</span>
            </h1>
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
          </div>
          
          <div className="flex items-center space-x-8 text-white/90">
            <div>
              <p className="text-sm uppercase tracking-wider mb-1">Client</p>
              <p className="text-xl font-semibold">Shaun Burns</p>
              <p className="text-white/80">Burns & Co</p>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-1">Date</p>
              <p className="text-xl font-semibold">
                {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16 space-y-20">
        
        {/* Context Section */}
        <section className="print-break-after">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Context</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <p className="text-slate-600 mb-6">From our discussion, your current workflow has three constraints:</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Significant time spent converting site observations into structured reports</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Reliance on manual write-up and assistant support</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Capacity limitations despite strong demand (turning away work)</h3>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="text-red-900 font-medium">
                At present, report production is acting as the primary bottleneck to scaling your operation.
              </p>
            </div>
          </div>
        </section>

        {/* Objective Section - Highlighted */}
        <section className="print-break-after">
          <div className="bg-gradient-to-r from-green-600 to-slate-700 rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-slate-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Objective</h2>
              </div>
              
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Increase your report production capacity without increasing headcount
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-slate-700 rounded-full mx-auto"></div>
                <p className="text-xl text-slate-600 mt-4">
                  by removing the manual report writing bottleneck
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 1 Overview */}
        <section className="print-break-after">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Phase 1 Overview – Core System</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Phase 1 focuses on one outcome:</h3>
              <div className="bg-gradient-to-r from-green-50 to-slate-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-medium text-green-900">
                  Transforming site observations into a structured, near-complete report automatically
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Current workflow:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-slate-600 text-sm font-semibold">1</span>
                    </div>
                    <span className="text-slate-700">Site visit</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-slate-600 text-sm font-semibold">2</span>
                    </div>
                    <span className="text-slate-700">Notes + photos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-slate-600 text-sm font-semibold">3</span>
                    </div>
                    <span className="text-slate-700">Manual report writing (assistant + review)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Phase 1 workflow:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-semibold">1</span>
                    </div>
                    <span className="text-slate-700">Site visit</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-semibold">2</span>
                    </div>
                    <span className="text-slate-700">Structured voice capture (guided)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-semibold">3</span>
                    </div>
                    <span className="text-slate-700">System generates full draft report</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-semibold">4</span>
                    </div>
                    <span className="text-slate-700">You review and finalise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-slate-50 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Key shift</h4>
              <p className="text-green-800 text-lg">
                You move from <span className="font-bold">writing reports</span> → to <span className="font-bold">reviewing reports</span>
              </p>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="print-break-after">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Investment Options</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <p className="text-slate-600 mb-8">
              To keep this flexible, there are three ways to structure the engagement:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Option A - Recommended */}
              <div className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-slate-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-slate-50 rounded-2xl p-6 border-2 border-green-300 h-full">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Option A – Balanced</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Setup fee</p>
                      <p className="text-3xl font-bold text-green-600">£2,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Monthly</p>
                      <p className="text-2xl font-bold text-slate-900">£800<span className="text-lg font-normal text-slate-600">/month</span></p>
                    </div>
                    <div className="pt-4 border-t border-green-200">
                      <p className="text-sm text-green-700">6-month minimum term</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option B */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Option B – Lower upfront</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Setup fee</p>
                    <p className="text-3xl font-bold text-slate-900">£1,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Monthly</p>
                    <p className="text-2xl font-bold text-slate-900">£900<span className="text-lg font-normal text-slate-600">/month</span></p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">6-month minimum term</p>
                  </div>
                </div>
              </div>

              {/* Option C */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Option C – Priority</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Setup fee</p>
                    <p className="text-3xl font-bold text-slate-900">£2,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Monthly</p>
                    <p className="text-2xl font-bold text-slate-900">£1,000<span className="text-lg font-normal text-slate-600">/month</span></p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">Priority development and faster iteration cycles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Next Steps</h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Confirm preferred pricing option</h4>
                  <p className="text-green-700">Select Option A, B, or C based on your preferences</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Provide 2–3 recent reports for baseline structure</h4>
                  <p className="text-green-700">Help us understand your current format and requirements</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Define initial capture framework</h4>
                  <p className="text-green-700">Set up the guided voice capture structure</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Begin Phase 1 implementation</h4>
                  <p className="text-green-700">Start building your customized report production system</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-12 border-t border-slate-200">
          <div className="text-center mb-4">
            <div className="text-slate-600 font-medium tracking-wide">Stealth Translations Ltd</div>
          </div>
          <p className="text-slate-500">Report Production System • Phase 1 Proposal</p>
          <p className="text-slate-400 text-sm mt-2">Confidential • Prepared for Shaun Burns / Burns & Co</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
