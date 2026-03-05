import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function ManageProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "DoorAura", status: "In Development", date: "13/02/2026" },
    { id: 2, title: "Clap Switch", status: "Completed", date: "08/02/2026" },
    { id: 3, title: "TrafficInfo", status: "In Development", date: "08/02/2026" },
    { id: 4, title: "EchoScout", status: "Prototype Testing", date: "04/02/2026" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    status: "",
    teamSize: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add project logic here
    alert("Project added successfully!");
    setShowForm(false);
    setFormData({ title: "", description: "", tags: "", status: "", teamSize: "", duration: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-cyan-500/20 rounded-lg p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-300">Project Title</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                required
              />
            </div>
            <div>
              <Label className="text-gray-300">Status</Label>
              <Input
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="e.g., In Development"
                required
              />
            </div>
          </div>
          <div>
            <Label className="text-gray-300">Description</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-gray-800 border-cyan-500/30 text-white min-h-[100px]"
              required
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label className="text-gray-300">Tags (comma separated)</Label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="IoT, Automation"
              />
            </div>
            <div>
              <Label className="text-gray-300">Team Size</Label>
              <Input
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="4 members"
              />
            </div>
            <div>
              <Label className="text-gray-300">Duration</Label>
              <Input
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="3 months"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
              Save Project
            </Button>
            <Button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-700 hover:bg-gray-600"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-cyan-500/20 rounded-lg p-4 flex items-center justify-between hover:border-cyan-500/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-gray-400">{project.date}</span>
                <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-400">
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
