import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function ManageEvents() {
  const [events, setEvents] = useState([
    { id: 1, name: "Robotics Workshop", date: "March 15, 2026", location: "Engineering Lab 101" },
    { id: 2, name: "AI & Robotics Hackathon", date: "March 22-23, 2026", location: "Main Campus" },
    { id: 3, name: "STEM Innovation Camp", date: "April 5-7, 2026", location: "Innovation Center" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Event added successfully!");
    setShowForm(false);
    setFormData({ name: "", date: "", time: "", location: "", description: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Events</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-cyan-500/20 rounded-lg p-6 space-y-4">
          <div>
            <Label className="text-gray-300">Event Name</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-gray-800 border-cyan-500/30 text-white"
              required
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label className="text-gray-300">Date</Label>
              <Input
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="March 15, 2026"
                required
              />
            </div>
            <div>
              <Label className="text-gray-300">Time</Label>
              <Input
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
                placeholder="2:00 PM - 5:00 PM"
                required
              />
            </div>
            <div>
              <Label className="text-gray-300">Location</Label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white"
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
          <div className="flex space-x-3">
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
              Save Event
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

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-900 border border-cyan-500/20 rounded-lg p-4 flex items-center justify-between hover:border-cyan-500/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{event.name}</h3>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.location}</span>
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
