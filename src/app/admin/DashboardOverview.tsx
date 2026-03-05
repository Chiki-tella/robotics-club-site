import { FolderKanban, Calendar, Users, UserCheck } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    { label: "Total Projects", value: "4", icon: FolderKanban, color: "cyan" },
    { label: "Upcoming Events", value: "4", icon: Calendar, color: "blue" },
    { label: "Total Members", value: "50+", icon: Users, color: "purple" },
    { label: "Pending Requests", value: "8", icon: UserCheck, color: "yellow" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h2>
        <p className="text-gray-400">Welcome back! Here's what's happening with your club.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
            blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
            purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
            yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
          };
          return (
            <div
              key={stat.label}
              className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colorClasses[stat.color as keyof typeof colorClasses]} border rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
            <div>
              <p>New member request from John Doe</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <div>
              <p>Event "Robotics Workshop" updated</p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
            <div>
              <p>New project "DoorAura" added</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
