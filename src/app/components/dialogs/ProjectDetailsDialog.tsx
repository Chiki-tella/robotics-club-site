import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X, Calendar, Users, Cpu } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
}

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const projectDetails: Record<number, {
  overview: string;
  technicalDetails: string[];
  features: string[];
  teamSize: string;
  duration: string;
  status: string;
}> = {
  1: {
    overview: "DoorAura revolutionizes door access in high-traffic public spaces by eliminating the need for physical contact. Using advanced sensor technology, the system detects user presence and automatically opens doors, reducing the spread of germs and improving accessibility for everyone.",
    technicalDetails: [
      "Infrared proximity sensors for presence detection",
      "Arduino-based microcontroller system",
      "Servo motor mechanism for door actuation",
      "Power-efficient design with sleep mode",
      "Adjustable sensitivity settings"
    ],
    features: [
      "Touchless door operation",
      "Automatic open/close timing",
      "Low power consumption",
      "Easy installation on existing doors",
      "Suitable for hospitals, schools, and offices"
    ],
    teamSize: "4 members",
    duration: "3 months",
    status: "In Development"
  },
  2: {
    overview: "The Clap Switch brings a fun and interactive way to control home lighting through acoustic recognition. By detecting specific clap patterns, this smart device allows users to turn lights on and off without touching any switches, making it perfect for accessibility and convenience.",
    technicalDetails: [
      "Sound sensor module for clap detection",
      "Pattern recognition algorithm",
      "Relay module for AC power control",
      "Noise filtering to prevent false triggers",
      "Adjustable sensitivity and pattern settings"
    ],
    features: [
      "Hands-free light control",
      "Customizable clap patterns",
      "Works with existing light fixtures",
      "Energy-efficient standby mode",
      "Easy to install and configure"
    ],
    teamSize: "3 members",
    duration: "2 months",
    status: "Completed"
  },
  3: {
    overview: "TrafficInfo is an intelligent traffic management system that dynamically adjusts traffic light timing based on real-time vehicle count in each lane. This reduces congestion, minimizes waiting times, and improves overall traffic flow in busy intersections.",
    technicalDetails: [
      "Computer vision for vehicle detection and counting",
      "Raspberry Pi processing unit",
      "Camera modules for lane monitoring",
      "Dynamic timing algorithm",
      "Real-time data processing and analysis"
    ],
    features: [
      "Automatic vehicle counting per lane",
      "Dynamic traffic light timing",
      "Reduces traffic congestion",
      "Data logging for traffic analysis",
      "Scalable to multiple intersections"
    ],
    teamSize: "5 members",
    duration: "4 months",
    status: "In Development"
  },
  4: {
    overview: "EchoScout is an autonomous navigation robot designed to assist visually impaired individuals. Using ultrasonic sensors and intelligent algorithms, it detects obstacles and navigates complex environments, providing a modern alternative to traditional white canes.",
    technicalDetails: [
      "Multiple ultrasonic sensors for 360° detection",
      "Arduino-based control system",
      "DC motors with encoder feedback",
      "Obstacle avoidance algorithms",
      "Audio feedback system for user guidance"
    ],
    features: [
      "Autonomous obstacle detection and avoidance",
      "Real-time audio feedback",
      "Adjustable navigation speed",
      "Rechargeable battery system",
      "Compact and portable design"
    ],
    teamSize: "6 members",
    duration: "5 months",
    status: "Prototype Testing"
  }
};

export function ProjectDetailsDialog({ open, onOpenChange, project }: ProjectDetailsDialogProps) {
  if (!project) return null;

  const details = projectDetails[project.id] || projectDetails[1];

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
            <p className="text-gray-300 leading-relaxed">{details.overview}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Calendar className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Duration</div>
              <div className="text-white">{details.duration}</div>
            </div>
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Users className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Team Size</div>
              <div className="text-white">{details.teamSize}</div>
            </div>
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4">
              <Cpu className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-sm text-gray-400">Status</div>
              <div className="text-white">{details.status}</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Technical Details</h3>
            <ul className="space-y-2 text-gray-300">
              {details.technicalDetails.map((detail, index) => (
                <li key={index}>• {detail}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              {details.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
