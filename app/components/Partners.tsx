import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const partners = [
    { name: 'SBI', color: 'from-blue-600 to-blue-800' },
    { name: 'HDFC', color: 'from-red-600 to-red-800' },
    { name: 'LIC Housing', color: 'from-orange-600 to-orange-800' },
    { name: 'Bandhan Bank', color: 'from-purple-600 to-purple-800' },
    { name: 'ICICI Prudential', color: 'from-orange-500 to-orange-700' },
    { name: 'HDFC Life', color: 'from-red-500 to-red-700' },
    { name: 'SBI Life', color: 'from-blue-500 to-blue-700' },
    { name: 'Aditya Birla', color: 'from-green-600 to-green-800' },
    { name: 'UTI Mutual Fund', color: 'from-indigo-600 to-indigo-800' },
    { name: 'Axis Bank', color: 'from-red-700 to-pink-700' },
    { name: 'Kotak Mahindra', color: 'from-red-600 to-orange-600' },
    { name: 'TATA AIG', color: 'from-blue-700 to-purple-700' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
          >
            <span className="text-blue-800 dark:text-blue-300 font-medium">Our Partners</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Leading Banks
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with top nationalized and private banks to bring you the best financial products
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 dark:from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 dark:from-navy to-transparent z-10" />

          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-48 h-32 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <div className={`bg-gradient-to-br ${partner.color} bg-clip-text text-transparent`}>
                  <span className="text-2xl font-bold">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '50+', label: 'Banking Partners' },
            { value: '100%', label: 'Success Rate' },
            { value: '24/7', label: 'Support Available' },
            { value: '1000+', label: 'Happy Customers' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
