import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import {
  Award, TrendingUp, Users, Briefcase, Target, Handshake, ArrowRight
} from 'lucide-react';

export default function Franchise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.city) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Franchise inquiry submitted successfully! We will contact you soon.');
    setFormData({ name: '', mobile: '', city: '' });
  };

  const benefits = [
    {
      icon: Award,
      title: 'Brand Support',
      description: 'Leverage our established brand name and reputation in the market',
    },
    {
      icon: Users,
      title: 'Training Assistance',
      description: 'Comprehensive training program for you and your team',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Marketing support and lead generation systems',
    },
    {
      icon: Briefcase,
      title: 'Banking Network',
      description: 'Access to our extensive network of banking partners',
    },
    {
      icon: Target,
      title: 'Marketing Guidance',
      description: 'Proven marketing strategies and promotional materials',
    },
    {
      icon: Handshake,
      title: 'Business Growth',
      description: 'Continuous support for sustainable business growth',
    },
  ];

  return (
    <section id="franchise" ref={ref} className="py-20 bg-white dark:bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-blue-600/5" />
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-yellow-600/20 border border-accent/30 rounded-full mb-4"
          >
            <span className="text-accent font-medium">Franchise Opportunity</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Own{' '}
            <span className="bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
              MoneyExpert Finserv
            </span>
            <br />
            Franchise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with MoneyExpert Finserv and build a successful financial services business in your city with our guidance, banking partnerships, and support system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-accent/10 to-yellow-600/10 rounded-3xl p-8 md:p-12 border border-accent/30"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Grow Your Business?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our network of successful franchise partners and become part of India's growing financial services sector. We provide complete support from setup to success.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Low investment requirement',
                  'Proven business model',
                  'Ongoing support & training',
                  'Exclusive territory rights',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-accent/30 shadow-xl">
              <h4 className="text-xl font-bold mb-6">Express Your Interest</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent to-yellow-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Become a Franchise Partner</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
