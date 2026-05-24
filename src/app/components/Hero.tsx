import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const trustBadges = [
    { icon: Shield, text: 'AMFI Registered' },
    { icon: Award, text: 'SEBI NISM Certified' },
    { icon: CheckCircle2, text: 'Trusted Banking Partners' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-navy dark:via-blue-900/20 dark:to-navy" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            >
              <span className="text-blue-800 dark:text-blue-300 font-medium">
                #1 Financial Services in Maharashtra
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Fast, Trusted &
              </span>
              <br />
              <span className="text-foreground">Hassle-Free</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                Financial Solutions
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Home Loans, Mutual Funds, Insurance & Financial Guidance Under One Roof
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Apply for Loan</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-navy border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center justify-center"
              >
                Talk to an Advisor
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-blue-100 dark:border-blue-800"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-blue-200 dark:border-blue-800 p-6"
              >
                <div className="bg-white/90 dark:bg-navy/90 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full" />
                    <span className="text-2xl font-bold text-green-600">+28%</span>
                  </div>
                  <h3 className="font-bold mb-2">Investment Growth</h3>
                  <p className="text-sm text-muted-foreground">Your portfolio is performing well</p>
                  <div className="mt-4 h-20 flex items-end space-x-2">
                    {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-green-400 to-green-600 rounded-t" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-64 bg-gradient-to-br from-accent/20 to-yellow-600/20 rounded-3xl backdrop-blur-sm border border-accent/30 p-6"
              >
                <div className="bg-white/90 dark:bg-navy/90 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Loan Approved!</h3>
                      <p className="text-xs text-muted-foreground">₹25,00,000</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Your home loan has been approved in just 48 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-navy to-transparent" />
    </section>
  );
}
