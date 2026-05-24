import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Navigation, MessageCircle } from 'lucide-react';

export default function Branches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const branches = [
    {
      name: 'Yavatmal Branch',
      manager: 'Ravindra J. Kachare',
      address: 'Yavatmal, Maharashtra',
      phone: '+919876543210',
      phoneDisplay: '+91 98765 43210',
      email: 'yavatmal@moneyexpert.com',
      gradient: 'from-blue-600 to-blue-800',
      mapUrl: 'https://maps.google.com/?q=Yavatmal,Maharashtra',
    },
    {
      name: 'Amravati Branch',
      manager: 'Rahul Dhale',
      address: 'Amravati, Maharashtra',
      phone: '+919876543211',
      phoneDisplay: '+91 98765 43211',
      email: 'amravati@moneyexpert.com',
      gradient: 'from-purple-600 to-purple-800',
      mapUrl: 'https://maps.google.com/?q=Amravati,Maharashtra',
    },
  ];

  return (
    <section id="branches" ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">Our Branches</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Branch Offices
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have branches across Maharashtra to serve you better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${branch.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all`} />
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${branch.gradient} text-white rounded-full mb-6`}>
                  <span className="font-medium">{branch.name}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${branch.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${branch.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href={`tel:${branch.phone}`} className="text-blue-600 hover:underline">
                        {branch.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${branch.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href={`mailto:${branch.email}`} className="text-blue-600 hover:underline text-sm">
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Branch Manager</p>
                  <p className="font-bold text-lg">{branch.manager}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${branch.gradient} text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all`}
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${branch.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
