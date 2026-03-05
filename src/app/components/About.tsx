import { motion } from "motion/react";
import { Cpu, Code, Lightbulb, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Cpu,
      title: "Robotics",
      description: "Build cutting-edge robots and automated systems",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Master Python, C++, and embedded programming",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Turn creative ideas into real-world solutions",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborate on exciting engineering projects",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
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
            <span className="text-cyan-400 text-sm">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Welcome to{" "}
            <span className="text-cyan-400">
              RCA Robotics Club
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a community of passionate students dedicated to exploring the
            frontiers of robotics, artificial intelligence, and engineering. Our
            mission is to inspire innovation and empower the next generation of
            technology leaders.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-2xl p-8 lg:p-12 mb-16 backdrop-blur-sm"
        >
          <h3 className="text-2xl text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            At RCA Robotics Club, we believe in hands-on learning and
            real-world application. We provide students with the tools,
            mentorship, and opportunities to design, build, and program
            sophisticated robotic systems. Through competitions, workshops, and
            collaborative projects, we cultivate critical thinking, problem-solving
            skills, and a deep understanding of emerging technologies.
          </p>
        </motion.div>

        {/* What Students Learn */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6 group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-xl text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
