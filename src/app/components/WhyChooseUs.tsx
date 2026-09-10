import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Users, Zap, Shield, Award, TrendingUp, FileCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [counts, setCounts] = useState({
    customers: 0,
    partners: 0,
    processing: 0,
    loansApproved: 0,
    amountDisbursed: 0,
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        customers: 1000,
        partners: 50,
        processing: 48,
        loansApproved: 2500,
        amountDisbursed: 250,
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounts({
          customers: Math.floor((targets.customers / steps) * step),
          partners: Math.floor((targets.partners / steps) * step),
          processing: Math.floor((targets.processing / steps) * step),
          loansApproved: Math.floor((targets.loansApproved / steps) * step),
          amountDisbursed: Math.floor((targets.amountDisbursed / steps) * step),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const reasons = [
    {
      icon: Users,
      title: '1000+ Happy Customers',
      description: 'Trusted by thousands of families and businesses across Maharashtra',
      stat: `${counts.customers}+`,
    },
    {
      icon: Shield,
      title: 'Multiple Banking Partners',
      description: 'Access to 50+ nationalized and private banks for best rates',
      stat: `${counts.partners}+`,
    },
    {
      icon: Zap,
      title: 'Fast Loan Processing',
      description: 'Get loan approval in as fast as 48 hours with minimal documentation',
      stat: `${counts.processing}hrs`,
    },
    {
      icon: Award,
      title: 'Personalized Financial Guidance',
      description: 'Expert advisors to help you make informed financial decisions',
      stat: 'Expert',
    },
    {
      icon: TrendingUp,
      title: 'Trusted Financial Advisors',
      description: 'AMFI registered and SEBI NISM certified professionals',
      stat: 'Certified',
    },
    {
      icon: FileCheck,
      title: 'Transparent Documentation',
      description: 'Clear, transparent process with full documentation support',
      stat: '100%',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">Why Choose Us</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MoneyExpert
            </span>
            {' '}Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our customer-first approach and expert financial guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                    {reason.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Success Stories</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white text-center shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2">{counts.loansApproved}+</div>
              <div className="text-blue-100">Loans Approved</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white text-center shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2">₹{counts.amountDisbursed}Cr+</div>
              <div className="text-green-100">Amount Disbursed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-br from-accent to-yellow-600 rounded-3xl p-8 text-white text-center shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-yellow-100">Customer Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
