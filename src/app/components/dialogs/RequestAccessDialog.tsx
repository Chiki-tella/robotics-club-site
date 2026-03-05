import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { X } from "lucide-react";

interface RequestAccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestAccessDialog({ open, onOpenChange }: RequestAccessDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    experience: "",
    interests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration submitted:", formData);
    alert("Your request has been submitted! An admin will review it shortly.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-cyan-400">Request Club Access</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade" className="text-gray-300">Grade Level *</Label>
              <Input
                id="grade"
                placeholder="e.g., 10th Grade"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-gray-300">
              Previous Robotics/Programming Experience
            </Label>
            <Textarea
              id="experience"
              placeholder="Tell us about any relevant experience you have..."
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500 min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interests" className="text-gray-300">
              Why do you want to join? *
            </Label>
            <Textarea
              id="interests"
              placeholder="Share your interests and what you hope to learn..."
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500 min-h-[100px]"
              required
            />
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              Your application will be reviewed by our admin team. You'll receive an email within 3-5 business days.
            </p>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
