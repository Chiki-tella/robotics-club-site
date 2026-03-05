import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { RequestAccessDialog } from "./dialogs/RequestAccessDialog";

export function JoinCTA() {
  const [isRequestAccessOpen, setIsRequestAccessOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Start Your Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl text-white mb-6"
            >
              Join the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                RCA Robotics Club
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about robotics, AI, and technology? Apply to become a
              member and start building the future with us. No prior experience
              required—just bring your curiosity and enthusiasm!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => setIsRequestAccessOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Request Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-cyan-400/30 blur-xl" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => {
                  const aboutSection = document.querySelector('#about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 border border-cyan-500/30 text-white rounded-xl text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-cyan-500/20"
            >
              <div className="space-y-2">
                <div className="text-3xl text-cyan-400">🤖</div>
                <div className="text-white">Hands-On Projects</div>
                <div className="text-sm text-gray-400">
                  Build real robots and systems
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-cyan-400">🏆</div>
                <div className="text-white">Competitions</div>
                <div className="text-sm text-gray-400">
                  Compete at regional and national levels
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-cyan-400">🎓</div>
                <div className="text-white">Mentorship</div>
                <div className="text-sm text-gray-400">
                  Learn from experienced engineers
                </div>
              </div>
            </motion.div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-xl -z-10" />
        </motion.div>
      </div>

      <RequestAccessDialog open={isRequestAccessOpen} onOpenChange={setIsRequestAccessOpen} />
    </section>
  );
}
