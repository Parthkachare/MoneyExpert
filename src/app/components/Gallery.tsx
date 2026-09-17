import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      title: 'Home Loan',
      description: 'Understand home loans, eligibility and EMI basics',
      src: '/videos/home-loan.mp4',
      color: 'from-blue-500 to-blue-700',
      icon: '🏠',
    },
    {
      title: 'SIP',
      description: 'Learn how Systematic Investment Plans work',
      src: '/videos/sip.mp4',
      color: 'from-purple-500 to-purple-700',
      icon: '📈',
    },
    {
      title: 'Mutual Funds',
      description: 'A simple introduction to mutual fund investing',
      src: '/videos/mutual-funds.mp4',
      color: 'from-green-500 to-green-700',
      icon: '💰',
    },
    {
      title: 'Personal Loan',
      description: 'Know the basics of personal loans and eligibility',
      src: '/videos/personal-loan.mp4',
      color: 'from-orange-500 to-orange-700',
      icon: '💳',
    },
    {
      title: 'Business Loan',
      description: 'Explore business financing and loan requirements',
      src: '/videos/business-loan.mp4',
      color: 'from-pink-500 to-pink-700',
      icon: '💼',
    },
    {
      title: 'Financial Planning',
      description: 'Simple tips to understand and manage your finances',
      src: '/videos/financial-planning.mp4',
      color: 'from-indigo-500 to-indigo-700',
      icon: '📊',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Financial{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about loans, investments and personal finance through
            simple and informative videos.
          </p>
        </motion.div>

        {/* Videos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedVideo(video.src)}
              className={`relative h-64 rounded-2xl bg-gradient-to-br ${video.color} overflow-hidden cursor-pointer group`}
            >
              {/* Video preview */}
              <video
                src={video.src}
                muted
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-all" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/95 text-blue-700 shadow-xl group-hover:scale-110 transition-transform">
                  <Play
                    className="w-7 h-7 ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-3xl mb-1">
                  {video.icon}
                </div>

                <h3 className="font-bold text-lg">
                  {video.title}
                </h3>

                <p className="text-sm text-white/80 mt-1 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Player */}
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}