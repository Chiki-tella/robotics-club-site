import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Mail } from "lucide-react";

export function Team() {
  const members = [
    {
      id: 1,
      name: "Muhumure Bonheur Christian",
      role: "Club President",
      description: "Leading the club with passion for robotics and AI innovation",
      image:
        "https://images.unsplash.com/photo-1686543971025-15aa01b5f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNjk1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Zigirumugabe Louis Miguel",
      role: "Vice President",
      description: "Specializing in mechanical design and embedded systems",
      image:
        "https://images.unsplash.com/photo-1612014206380-b282e27ebb7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI2OTU3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Igihozo Belise",
      role: "Systems Integration",
      description: "Expert in robotics systems and project coordination",
      image:
        "https://images.unsplash.com/photo-1770922809545-edc679cdf6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBhY2FkZW1pYyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2OTU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Nshuti Mulindwa Christian",
      role: "Hardware Engineer",
      description: "Building circuit boards and sensor integration systems",
      image:
        "https://images.unsplash.com/photo-1763673375520-c5562a39a2c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNjk1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Kayinamura Geoffrey",
      role: "Software Lead",
      description: "Developing control algorithms and automation software",
      image:
        "https://images.unsplash.com/photo-1758685848521-ff7e4d136384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjY5NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Niyobyose Isaac Precieux",
      role: "Technical Lead",
      description: "Ensuring all components work together seamlessly",
      image:
        "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBvcnRyYWl0JTIwdGVjaCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2OTU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="team" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
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
            <span className="text-cyan-400 text-sm">Meet the Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Our{" "}
            <span className="text-cyan-400">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the talented individuals driving innovation and excellence at
            RCA Robotics Club
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Social Icons - Appear on Hover */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl text-white mb-1">{member.name}</h3>
                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-3">
                  {member.role}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-4">
              Want to be part of our amazing team?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
