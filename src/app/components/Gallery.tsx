import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGJ1aWxkaW5nJTIwcm9ib3RpY3MlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI2OTU3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Students building robots in workshop",
      category: "Workshop",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1771909715670-083a55b7f354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwZXZlbnQlMjBhcmVuYXxlbnwxfHx8fDE3NzI2OTU3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Robotics competition arena",
      category: "Competition",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwd29ya3Nob3AlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzI2OTU3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "STEM workshop classroom",
      category: "Workshop",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1754572861240-5b3f5a5959ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY2lyY3VpdCUyMGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI1OTUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Electronic circuit board",
      category: "Projects",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGluZHVzdHJpYWwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MjY5NTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Robot arm automation",
      category: "Projects",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1651231960369-3c31ab2a490c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NvbnRyb2xsZXIlMjBhcmR1aW5vJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcyNjk1NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Arduino microcontroller",
      category: "Electronics",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1603351130949-476794ec3dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2OTU3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Coding and programming",
      category: "Programming",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1655088651367-f9f4e1328f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHNlbnNvcnMlMjBlbGVjdHJvbmljcyUyMHByb2plY3R8ZW58MXx8fHwxNzcyNjk1NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Robot sensors and electronics",
      category: "Projects",
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-black overflow-hidden">
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
            <span className="text-cyan-400 text-sm">Visual Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Club{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A visual journey through our workshops, competitions, and innovative
            projects
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index % 7 === 0 || index % 7 === 4
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400 mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
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
            className="px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-500/50 transition-all"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
