import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Home, Briefcase, DollarSign, Building2, Car, Bike,
  Heart, Shield, TrendingUp, ArrowRight
} from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Competitive interest rates and flexible repayment options for your dream home',
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      icon: DollarSign,
      title: 'Personal Loans',
      description: 'Quick approval for your personal needs with minimal documentation',
      gradient: 'from-green-500 to-green-700',
      bgGradient: 'from-green-50 to-green-100',
    },
    {
      icon: Briefcase,
      title: 'Business Loans',
      description: 'Fuel your business growth with customized loan solutions',
      gradient: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-50 to-purple-100',
    },
    {
      icon: Building2,
      title: 'Mortgage Loans',
      description: 'Unlock the value of your property with competitive mortgage rates',
      gradient: 'from-orange-500 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100',
    },
    {
      icon: Car,
      title: 'Car Insurance',
      description: 'Comprehensive coverage for your vehicle with hassle-free claims',
      gradient: 'from-red-500 to-red-700',
      bgGradient: 'from-red-50 to-red-100',
    },
    {
      icon: Bike,
      title: 'Bike Insurance',
      description: 'Affordable two-wheeler insurance with instant policy issuance',
      gradient: 'from-cyan-500 to-cyan-700',
      bgGradient: 'from-cyan-50 to-cyan-100',
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with comprehensive life insurance plans',
      gradient: 'from-pink-500 to-pink-700',
      bgGradient: 'from-pink-50 to-pink-100',
    },
    {
      icon: Shield,
      title: 'General Insurance',
      description: 'Protection for your assets with customized insurance solutions',
      gradient: 'from-indigo-500 to-indigo-700',
      bgGradient: 'from-indigo-50 to-indigo-100',
    },
    {
      icon: TrendingUp,
      title: 'Mutual Fund Investment',
      description: 'AMFI registered advisory for wealth creation through systematic investments',
      gradient: 'from-yellow-500 to-yellow-700',
      bgGradient: 'from-yellow-50 to-yellow-100',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white dark:bg-navy">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">Our Services</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Financial Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From loans to insurance and investments, we provide complete financial services under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} dark:from-blue-900/10 dark:to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
