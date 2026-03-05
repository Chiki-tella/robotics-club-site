import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { X, Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
  color: string;
}

interface EventDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: Event | null;
}

export function EventDetailsDialog({ open, onOpenChange, event }: EventDetailsDialogProps) {
  if (!event) return null;

  const handleRegister = () => {
    alert(`You've registered for ${event.name}! Check your email for confirmation.`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-cyan-400">{event.name}</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-xs text-gray-500">Date</div>
                  <div>{event.date}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-xs text-gray-500">Time</div>
                  <div>{event.time}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div>{event.location}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-xs text-gray-500">Capacity</div>
                  <div>50 participants</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">About This Event</h3>
            <p className="text-gray-300 leading-relaxed">{event.description}</p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Fundamentals of robotics design and engineering</li>
              <li>• Programming microcontrollers and sensors</li>
              <li>• Building and testing robot prototypes</li>
              <li>• Collaborative problem-solving techniques</li>
              <li>• Competition strategies and best practices</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">What to Bring</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Laptop (if you have one)</li>
              <li>• Notebook and pen</li>
              <li>• Enthusiasm and curiosity!</li>
            </ul>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <strong className="text-cyan-400">Note:</strong> This event is open to all skill levels. 
              No prior experience required!
            </p>
          </div>

          <Button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            Register for Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
