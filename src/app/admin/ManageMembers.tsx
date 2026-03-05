import { useState } from "react";
import { Check, X, Mail } from "lucide-react";

export function ManageMembers() {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", grade: "10th Grade", date: "March 3, 2026" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", grade: "11th Grade", date: "March 2, 2026" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", grade: "9th Grade", date: "March 1, 2026" },
  ]);

  const handleApprove = (id: number) => {
    setPendingRequests(pendingRequests.filter(req => req.id !== id));
    alert("Member approved!");
  };

  const handleReject = (id: number) => {
    setPendingRequests(pendingRequests.filter(req => req.id !== id));
    alert("Request rejected!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Manage Members</h2>
        <p className="text-gray-400">Review and approve membership requests</p>
      </div>

      {/* Pending Requests */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Pending Requests ({pendingRequests.length})
        </h3>
        <div className="space-y-4">
          {pendingRequests.length === 0 ? (
            <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-8 text-center">
              <p className="text-gray-400">No pending requests</p>
            </div>
          ) : (
            pendingRequests.map((request) => (
              <div
                key={request.id}
                className="bg-gray-900 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{request.name}</h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{request.email}</span>
                      </div>
                      <span>•</span>
                      <span>{request.grade}</span>
                      <span>•</span>
                      <span>{request.date}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors"
                    >
                      <Check className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Current Members Stats */}
      <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Current Members</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-gray-400">Total Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">15</div>
            <div className="text-sm text-gray-400">Active Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">8</div>
            <div className="text-sm text-gray-400">Pending Requests</div>
          </div>
        </div>
      </div>
    </div>
  );
}
