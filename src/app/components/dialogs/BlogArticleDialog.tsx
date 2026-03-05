import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X, Clock, Calendar, User } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogArticleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: Article | null;
}

export function BlogArticleDialog({ open, onOpenChange, article }: BlogArticleDialogProps) {
  if (!article) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity z-50"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="space-y-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-80 object-cover rounded-lg"
          />
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400">
              {article.category}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              RCA Robotics Team
            </span>
          </div>

          <DialogTitle className="text-3xl text-white leading-tight">
            {article.title}
          </DialogTitle>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <h3 className="text-xl text-white mt-8 mb-4">Introduction</h3>
            <p className="text-gray-300 leading-relaxed">
              Robotics has become an increasingly important field in modern technology, combining elements of 
              mechanical engineering, electrical engineering, and computer science. Whether you're a complete 
              beginner or looking to expand your knowledge, understanding the fundamentals is crucial for success.
            </p>

            <h3 className="text-xl text-white mt-8 mb-4">Key Concepts</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              In this comprehensive guide, we'll explore the essential concepts that every robotics enthusiast 
              should know. From basic components to advanced programming techniques, you'll gain the knowledge 
              needed to start your robotics journey.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Understanding sensors and actuators</li>
              <li>Programming microcontrollers</li>
              <li>Mechanical design principles</li>
              <li>Power management and electronics</li>
              <li>Testing and debugging strategies</li>
            </ul>

            <h3 className="text-xl text-white mt-8 mb-4">Getting Started</h3>
            <p className="text-gray-300 leading-relaxed">
              The best way to learn robotics is through hands-on experience. Start with simple projects and 
              gradually increase complexity as you build confidence. Join our robotics club to access resources, 
              mentorship, and a community of like-minded individuals who share your passion for innovation.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 mt-8">
              <h4 className="text-lg text-cyan-400 mb-2">Want to Learn More?</h4>
              <p className="text-gray-300 mb-4">
                Join RCA Robotics Club to access exclusive tutorials, workshops, and hands-on projects.
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-semibold shadow-lg shadow-blue-500/30">
                Join the Club
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
