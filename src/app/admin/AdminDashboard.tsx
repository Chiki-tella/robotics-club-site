import { useState } from "react";
import { Users, Calendar, FolderKanban, UserCheck, LogOut, LayoutDashboard } from "lucide-react";
import { ManageProjects } from "./ManageProjects";
import { ManageEvents } from "./ManageEvents";
import { ManageMembers } from "./ManageMembers";
import { DashboardOverview } from "./DashboardOverview";

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "events" | "members">("overview");

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: LayoutDashboard },
    { id: "projects" as const, label: "Projects", icon: FolderKanban },
    { id: "events" as const, label: "Events", icon: Calendar },
    { id: "members" as const, label: "Members", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/robotics_club_dark.png" 
                alt="RCA Robotics Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">RCA Robotics Club</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800 border border-cyan-500/20"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-gray-900 rounded-lg border border-cyan-500/30 p-6">
          {activeTab === "overview" && <DashboardOverview />}
          {activeTab === "projects" && <ManageProjects />}
          {activeTab === "events" && <ManageEvents />}
          {activeTab === "members" && <ManageMembers />}
        </div>
      </div>
    </div>
  );
}
