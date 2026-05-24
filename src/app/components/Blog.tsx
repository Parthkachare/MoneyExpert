import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const articles = [
    {
      title: '10 Tips for Getting Your Home Loan Approved',
      excerpt: 'Learn the essential strategies to improve your chances of home loan approval...',
      date: 'May 5, 2026',
      readTime: '5 min',
      category: 'Home Loans',
    },
    {
      title: 'How to Build Wealth with Mutual Funds',
      excerpt: 'A comprehensive guide to systematic investment planning for long-term wealth...',
      date: 'May 3, 2026',
      readTime: '7 min',
      category: 'Investments',
    },
    {
      title: 'Understanding Credit Scores in India',
      excerpt: 'Everything you need to know about CIBIL scores and how to improve them...',
      date: 'April 28, 2026',
      readTime: '6 min',
      category: 'Financial Tips',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Financial <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-muted-foreground">Latest articles and guides from our experts</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-6xl">
                📰
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm text-blue-800 dark:text-blue-300 mb-3">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
