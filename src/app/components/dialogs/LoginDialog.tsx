import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple admin check (replace with actual authentication)
    if (email === "admin@rca.ac.rw" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      onOpenChange(false);
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-cyan-400">Login to RCA Robotics</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border-cyan-500/30 text-white placeholder:text-gray-500"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              Forgot password?
            </a>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
