import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X, Calendar, Users, Award } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

export function ProjectDetailsDialog({ open, onOpenChange, project }: ProjectDetailsDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-cyan-400">{project.title}</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Calendar className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Duration</div>
              <div className="text-white">6 months</div>
            </div>
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Users className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Team Size</div>
              <div className="text-white">8 members</div>
            </div>
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Award className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Status</div>
              <div className="text-white">Completed</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Technical Details</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Advanced sensor integration for environmental mapping</li>
              <li>• Real-time computer vision processing using OpenCV</li>
              <li>• Custom-built chassis with 4-wheel drive system</li>
              <li>• Autonomous navigation using SLAM algorithms</li>
              <li>• Raspberry Pi 4 as the main processing unit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Achievements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🏆 1st Place - Regional Robotics Competition 2025</li>
              <li>🎖️ Best Innovation Award - State Tech Fair</li>
              <li>📰 Featured in Local Tech Magazine</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
