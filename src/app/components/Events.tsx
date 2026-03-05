import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { EventDetailsDialog } from "./dialogs/EventDetailsDialog";

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLearnMore = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };
  const events = [
    {
      id: 1,
      name: "Robotics Workshop: Building Your First Robot",
      date: "March 15, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Lab 101",
      description:
        "A hands-on workshop for beginners to learn the fundamentals of robot construction, programming, and control systems.",
      status: "upcoming",
      color: "cyan",
    },
    {
      id: 2,
      name: "AI & Robotics Hackathon",
      date: "March 22-23, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Auditorium",
      description:
        "48-hour intensive hackathon where teams compete to build innovative AI-powered robotics solutions. Amazing prizes await!",
      status: "upcoming",
      color: "blue",
    },
    {
      id: 3,
      name: "STEM Innovation Camp",
      date: "April 5-7, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center",
      description:
        "Three-day immersive camp covering robotics, programming, electronics, and engineering principles for all skill levels.",
      status: "upcoming",
      color: "purple",
    },
    {
      id: 4,
      name: "Regional Tech Competition 2026",
      date: "April 20, 2026",
      time: "8:00 AM - 6:00 PM",
      location: "State Convention Center",
      description:
        "Compete against the best high school robotics teams in the region. Showcase your skills and win scholarships!",
      status: "registration",
      color: "cyan",
    },
  ];

  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400 text-sm">What's Happening</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Upcoming{" "}
            <span className="text-cyan-400">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us for workshops, competitions, and collaborative learning
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 uppercase">
                  {event.status === "upcoming" ? "Upcoming" : "Open Registration"}
                </span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>

              {/* Event Name */}
              <h3 className="text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {event.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {event.description}
              </p>

              {/* Action Button */}
              <motion.button
                onClick={() => handleLearnMore(event)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-500/50 transition-all group/btn w-full justify-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg inline-flex items-center space-x-2"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <EventDetailsDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        event={selectedEvent}
      />
    </section>
  );
}
