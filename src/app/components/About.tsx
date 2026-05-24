import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Users, Zap, Award, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Shield,
      title: 'Trusted & Certified',
      description: 'AMFI Registered and SEBI NISM Certified financial advisors',
    },
    {
      icon: Users,
      title: 'Customer-First Approach',
      description: 'Personalized financial solutions tailored to your needs',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick loan approvals and hassle-free documentation',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Experienced team with deep knowledge of financial products',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-navy dark:to-blue-900/20">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">About Us</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Financial Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MoneyExpert Finserv is a trusted financial consultancy helping customers secure the best financial products from leading nationalized and private banks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded by <span className="font-semibold text-foreground">Ravindra J. Kachare</span>, MoneyExpert Finserv has grown to become one of Maharashtra's most trusted financial consultancies. We specialize in loans, insurance, and investment guidance with personalized customer support.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our team, led by <span className="font-semibold text-foreground">Parth Kachare</span> (AMFI Registered Mutual Fund Distributor certified through SEBI NISM examination), brings years of experience in helping families and businesses achieve their financial goals.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                    <Target className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold mb-1">Our Mission</h4>
                    <p className="text-sm text-muted-foreground">Simplifying financial decisions for everyone</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-yellow-100 dark:from-accent/5 dark:to-yellow-900/10 rounded-xl p-4 border border-accent/30">
                    <TrendingUp className="w-8 h-8 text-accent mb-2" />
                    <h4 className="font-bold mb-1">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">Building wealth for every Indian family</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
