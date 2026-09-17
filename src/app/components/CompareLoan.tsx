import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

export default function CompareLoan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const loans = [
    {
      name: 'Home Loan',
      rate: '8.5% - 9.5%',
      tenure: 'Up to 30 years',
      amount: '₹25L - ₹5Cr',
      processing: '0.5% - 1%',
      features: ['Tax Benefits', 'Balance Transfer', 'Top-up Loan', 'Low Interest'],
    },
    {
      name: 'Personal Loan',
      rate: '10.5% - 15%',
      tenure: 'Up to 5 years',
      amount: '₹50K - ₹40L',
      processing: '1% - 2%',
      features: ['No Collateral', 'Quick Approval', 'Flexible Use', 'Minimal Docs'],
    },
    {
      name: 'Business Loan',
      rate: '9% - 16%',
      tenure: 'Up to 10 years',
      amount: '₹1L - ₹50Cr',
      processing: '1% - 2.5%',
      features: ['Working Capital', 'Equipment Finance', 'Expansion Fund', 'Tax Benefits'],
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
            Compare <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Loan Types</span>
          </h2>
          <p className="text-muted-foreground">Choose the right loan for your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {loans.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {loan.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="text-xl font-bold text-blue-600">{loan.rate}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">Tenure</div>
                    <div className="font-bold text-sm">{loan.tenure}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">Amount</div>
                    <div className="font-bold text-sm">{loan.amount}</div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Processing Fee</div>
                  <div className="font-bold">{loan.processing}</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {loan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
