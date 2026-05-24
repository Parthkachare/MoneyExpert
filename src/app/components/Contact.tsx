import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.city || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Your inquiry has been submitted! Our team will contact you within 2 hours.');
    setFormData({ name: '', mobile: '', email: '', city: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@moneyexpert.com', 'support@moneyexpert.com'],
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Yavatmal, Maharashtra', 'Amravati, Maharashtra'],
      gradient: 'from-green-600 to-green-800',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      gradient: 'from-orange-600 to-orange-800',
    },
  ];

  const services = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'Mortgage Loan',
    'Car Insurance',
    'Bike Insurance',
    'Life Insurance',
    'Mutual Fund Investment',
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">Contact Us</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to achieve your financial goals? Reach out to us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Response Guarantee</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We value your time! Our team responds to all inquiries within 2 hours during business hours. For urgent requirements, call us directly.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Response Time</div>
                  <div className="text-blue-100">Within 2 hours</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
