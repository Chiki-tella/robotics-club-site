import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Blog() {
  const articles = [
    {
      id: 1,
      title: "How to Build Your First Robot: A Beginner's Guide",
      excerpt:
        "Learn the fundamentals of robotics construction, from selecting components to programming your first autonomous robot.",
      image:
        "https://images.unsplash.com/photo-1655088651367-f9f4e1328f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHNlbnNvcnMlMjBlbGVjdHJvbmljcyUyMHByb2plY3R8ZW58MXx8fHwxNzcyNjk1NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 28, 2026",
      readTime: "8 min read",
      category: "Tutorial",
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence in Robotics",
      excerpt:
        "Explore how AI and machine learning are revolutionizing the field of robotics and creating smarter autonomous systems.",
      image:
        "https://images.unsplash.com/photo-1768323102310-965beb4849ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaHVtYW5vaWQlMjByb2JvdCUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI2OTU3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 25, 2026",
      readTime: "12 min read",
      category: "AI & ML",
    },
    {
      id: 3,
      title: "Preparing for Robotics Competitions: Tips & Strategies",
      excerpt:
        "Expert advice on how to excel in robotics competitions, from team coordination to technical preparation.",
      image:
        "https://images.unsplash.com/photo-1771909715670-083a55b7f354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwZXZlbnQlMjBhcmVuYXxlbnwxfHx8fDE3NzI2OTU3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 20, 2026",
      readTime: "10 min read",
      category: "Competitions",
    },
    {
      id: 4,
      title: "Essential Engineering Tips for High School Robotics",
      excerpt:
        "Master the core engineering principles and best practices that will elevate your robotics projects to the next level.",
      image:
        "https://images.unsplash.com/photo-1651231960369-3c31ab2a490c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NvbnRyb2xsZXIlMjBhcmR1aW5vJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcyNjk1NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 15, 2026",
      readTime: "15 min read",
      category: "Engineering",
    },
    {
      id: 5,
      title: "Programming Languages for Robotics: A Comparison",
      excerpt:
        "Compare Python, C++, and other programming languages to find the best fit for your robotics projects.",
      image:
        "https://images.unsplash.com/photo-1603351130949-476794ec3dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2OTU3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 10, 2026",
      readTime: "11 min read",
      category: "Programming",
    },
    {
      id: 6,
      title: "The Future of Robotics: Trends to Watch in 2026",
      excerpt:
        "Discover the latest innovations and emerging trends shaping the future of robotics and automation technology.",
      image:
        "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGluZHVzdHJpYWwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MjY5NTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 5, 2026",
      readTime: "9 min read",
      category: "Industry",
    },
  ];

  return (
    <section id="blogs" className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
            <span className="text-cyan-400 text-sm">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and tips from our robotics experts and community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-full text-xs text-cyan-400">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
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
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
