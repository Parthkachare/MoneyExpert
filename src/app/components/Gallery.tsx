import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const images = [
    { title: 'Yavatmal Office', color: 'from-blue-500 to-blue-700' },
    { title: 'Amravati Branch', color: 'from-purple-500 to-purple-700' },
    { title: 'Team Meeting', color: 'from-green-500 to-green-700' },
    { title: 'Customer Service', color: 'from-orange-500 to-orange-700' },
    { title: 'Happy Customers', color: 'from-pink-500 to-pink-700' },
    { title: 'Award Ceremony', color: 'from-indigo-500 to-indigo-700' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-muted-foreground">Glimpses from our offices and events</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative h-64 rounded-2xl bg-gradient-to-br ${image.color} overflow-hidden cursor-pointer group`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
