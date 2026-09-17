import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Shield, Star, Trophy } from 'lucide-react';

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const awards = [
    { icon: Award, title: 'AMFI Registered', desc: 'Certified Mutual Fund Distributor', color: 'from-blue-600 to-blue-800' },
    { icon: Shield, title: 'SEBI NISM Certified', desc: 'Securities Market Professional', color: 'from-green-600 to-green-800' },
    { icon: Trophy, title: 'Best Financial Advisor 2025', desc: 'Maharashtra Region', color: 'from-yellow-600 to-orange-600' },
    { icon: Star, title: 'Top Partner Bank', desc: '50+ Banking Partnerships', color: 'from-purple-600 to-purple-800' },
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
            Awards & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground">Recognized for excellence and trust</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all text-center group"
            >
              <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <award.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
