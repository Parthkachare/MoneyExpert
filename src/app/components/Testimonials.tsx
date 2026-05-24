import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Home Loan Customer',
      location: 'Yavatmal',
      rating: 5,
      text: 'MoneyExpert Finserv helped me get my dream home loan approved in just 48 hours! The team was professional, transparent, and guided me through every step. Highly recommended!',
      avatar: 'RS',
    },
    {
      name: 'Priya Deshmukh',
      role: 'Mutual Fund Investor',
      location: 'Amravati',
      rating: 5,
      text: 'Parth sir provided excellent guidance for my mutual fund investments. His expertise and personalized approach helped me build a strong investment portfolio. Very satisfied!',
      avatar: 'PD',
    },
    {
      name: 'Amit Patel',
      role: 'Business Loan Customer',
      location: 'Nagpur',
      rating: 5,
      text: 'Got my business loan sanctioned quickly with competitive interest rates. The documentation process was hassle-free, and the team was very supportive throughout.',
      avatar: 'AP',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Insurance Customer',
      location: 'Yavatmal',
      rating: 5,
      text: 'Excellent service for car insurance renewal. The team explained all the options clearly and helped me get the best coverage at a great price. Very professional!',
      avatar: 'SK',
    },
    {
      name: 'Rahul Joshi',
      role: 'Personal Loan Customer',
      location: 'Amravati',
      rating: 5,
      text: 'Quick and transparent personal loan approval. Ravindra sir and his team made the entire process smooth and stress-free. I got the funds exactly when I needed them!',
      avatar: 'RJ',
    },
    {
      name: 'Kavita Mehta',
      role: 'Life Insurance Customer',
      location: 'Yavatmal',
      rating: 5,
      text: 'The financial advisory services are top-notch. They helped me understand different life insurance plans and choose the one that perfectly fits my family\'s needs.',
      avatar: 'KM',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">Testimonials</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from satisfied customers who achieved their financial goals with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-600/20" />
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-5xl font-bold mb-2">4.9/5</div>
            <div className="flex space-x-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-blue-100">Average rating from 1000+ happy customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
