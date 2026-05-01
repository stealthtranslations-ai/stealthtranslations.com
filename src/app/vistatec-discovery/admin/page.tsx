import type { Metadata } from "next";
import { useState, useEffect } from 'react';
import { Download, Eye, Trash2, Filter, Search } from 'lucide-react';
import PasswordGate from '@/components/PasswordGate';
import { VistatecDiscoveryService } from '@/lib/supabase';
import { DatabaseResponse } from '@/types/vistatec-discovery';

export const metadata: Metadata = {
  title: "Discovery Admin | Stealth Translations",
  description: "Admin interface for managing Vistatec discovery form submissions",
};

export default function VistatecDiscoveryAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [responses, setResponses] = useState<DatabaseResponse[]>([]);
  const [filteredResponses, setFilteredResponses] = useState<DatabaseResponse[]>([]);
  const [selectedResponse, setSelectedResponse] = useState<DatabaseResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'submitted'>('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const authData = sessionStorage.getItem('vistatec_admin_auth');
    if (authData) {
      try {
        const { authenticated, timestamp } = JSON.parse(authData);
        // Check if authentication is still valid (24 hours)
        if (authenticated && Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          setIsAuthenticated(true);
          loadResponses();
        } else {
          sessionStorage.removeItem('vistatec_admin_auth');
        }
      } catch (error) {
        sessionStorage.removeItem('vistatec_admin_auth');
      }
    }
  }, []);

  useEffect(() => {
    // Filter responses based on search and status
    let filtered = responses;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(r => r.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(r => 
        r.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.contact_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.contact_role?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResponses(filtered);
  }, [responses, searchTerm, statusFilter]);

  const loadResponses = async () => {
    setLoading(true);
    try {
      const data = await VistatecDiscoveryService.getResponses();
      setResponses(data);
    } catch (error) {
      console.error('Failed to load responses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    loadResponses();
  };

  const handleExportJSON = async () => {
    try {
      const data = await VistatecDiscoveryService.exportResponses(
        statusFilter === 'all' ? undefined : statusFilter
      );
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `vistatec-discovery-responses-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  const handleExportCSV = async () => {
    try {
      const data = await VistatecDiscoveryService.exportResponsesCSV(
        statusFilter === 'all' ? undefined : statusFilter
      );
      const blob = new Blob([data], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `vistatec-discovery-responses-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    setDeleteTarget(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      const result = await VistatecDiscoveryService.deleteResponse(deleteTarget);
      if (result.success) {
        setResponses(prev => prev.filter(r => r.id !== deleteTarget));
        if (selectedResponse?.id === deleteTarget) {
          setSelectedResponse(null);
        }
      } else {
        alert('Failed to delete response');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Delete failed. Please try again.');
    } finally {
      setShowDeleteConfirm(false);
      setDeleteTarget(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-yellow-100 text-yellow-800',
      submitted: 'bg-green-100 text-green-800'
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  if (!isAuthenticated) {
    return (
      <PasswordGate 
        onAuthenticated={handleAuthenticated}
        type="admin"
        title="Admin Access"
        subtitle="Please enter the admin password to access the discovery responses"
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Vistatec Discovery Admin
              </h1>
              <p className="text-slate-600 mt-1">Manage discovery form submissions</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleExportJSON}
                className="flex items-center space-x-2 px-4 py-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
              >
                <Download className="w-4 h-4" />
                <span>Export JSON</span>
              </button>
              <button
                onClick={handleExportCSV}
                className="flex items-center space-x-2 px-4 py-2 text-green-600 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="submitted">Submitted</option>
            </select>
          </div>

          <div className="flex-1" />
          
          <span className="text-sm text-slate-600">
            {filteredResponses.length} of {responses.length} responses
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Response list */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-lg">
              <div className="px-4 py-3 border-b border-slate-200">
                <h2 className="font-semibold text-slate-900">Responses</h2>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center text-slate-500">Loading...</div>
                ) : filteredResponses.length === 0 ? (
                  <div className="p-4 text-center text-slate-500">No responses found</div>
                ) : (
                  <div className="divide-y divide-slate-200">
                    {filteredResponses.map((response) => (
                      <div
                        key={response.id}
                        className={`p-4 cursor-pointer hover:bg-slate-50 ${
                          selectedResponse?.id === response.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setSelectedResponse(response)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 truncate">
                              {response.contact_name}
                            </p>
                            <p className="text-sm text-slate-600 truncate">
                              {response.contact_email}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {formatDate(response.created_at)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
                            {getStatusBadge(response.status)}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(response.id);
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Response details */}
          <div className="lg:col-span-2">
            {selectedResponse ? (
              <div className="bg-white border border-slate-200 rounded-lg">
                <div className="px-6 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {selectedResponse.contact_name}
                      </h2>
                      <p className="text-slate-600">{selectedResponse.contact_email}</p>
                      {selectedResponse.contact_role && (
                        <p className="text-sm text-slate-500">{selectedResponse.contact_role}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(selectedResponse.status)}
                      <span className="text-sm text-slate-500">
                        {formatDate(selectedResponse.created_at)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Contact Details */}
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Contact Details</h3>
                    <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                      <div><strong>Name:</strong> {selectedResponse.contact_name}</div>
                      <div><strong>Email:</strong> {selectedResponse.contact_email}</div>
                      {selectedResponse.contact_role && (
                        <div><strong>Role:</strong> {selectedResponse.contact_role}</div>
                      )}
                      {selectedResponse.additional_stakeholders && (
                        <div><strong>Additional Stakeholders:</strong> {selectedResponse.additional_stakeholders}</div>
                      )}
                    </div>
                  </div>

                  {/* Strategic Intent */}
                  {selectedResponse.strategic_intent && (
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Strategic Intent</h3>
                      <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                        <div>
                          <strong>Primary Objectives:</strong>
                          <p className="mt-1 text-slate-700">{selectedResponse.strategic_intent.primaryObjectives}</p>
                        </div>
                        <div><strong>Classification:</strong> {selectedResponse.strategic_intent.initiativeClassification}</div>
                        <div>
                          <strong>Time Horizon:</strong>
                          <p className="mt-1">{selectedResponse.strategic_intent.timeHorizon?.join(', ') || 'None specified'}</p>
                        </div>
                        <div>
                          <strong>Success Criteria:</strong>
                          <p className="mt-1 text-slate-700">{selectedResponse.strategic_intent.successCriteria}</p>
                        </div>
                        {selectedResponse.strategic_intent.revenueTargets && (
                          <div>
                            <strong>Revenue Targets:</strong>
                            <p className="mt-1 text-slate-700">{selectedResponse.strategic_intent.revenueTargets}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Opportunity Landscape */}
                  {selectedResponse.opportunity_landscape && (
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Opportunity Landscape</h3>
                      <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                        <div>
                          <strong>Request Types:</strong>
                          <p className="mt-1">{selectedResponse.opportunity_landscape.requestTypes?.join(', ') || 'None specified'}</p>
                        </div>
                        <div>
                          <strong>Recent Examples:</strong>
                          <p className="mt-1 text-slate-700">{selectedResponse.opportunity_landscape.recentExamples}</p>
                        </div>
                        <div><strong>Request Source:</strong> {selectedResponse.opportunity_landscape.requestSource}</div>
                        <div>
                          <strong>Promising Opportunities:</strong>
                          <p className="mt-1 text-slate-700">{selectedResponse.opportunity_landscape.promisingOpportunities}</p>
                        </div>
                        <div>
                          <strong>Risky Opportunities:</strong>
                          <p className="mt-1 text-slate-700">{selectedResponse.opportunity_landscape.riskyOpportunities}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional sections would follow the same pattern... */}
                  {selectedResponse.additional_notes && (
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Additional Notes</h3>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-700">{selectedResponse.additional_notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
                <Eye className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Select a response to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Confirm Delete</h3>
            <p className="text-slate-600 mb-6">
              Are you sure you want to delete this response? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 border-t border-slate-200 bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-slate-500">
            Prepared by Stealth Translations Ltd
          </p>
        </div>
      </div>
    </div>
  );
}
