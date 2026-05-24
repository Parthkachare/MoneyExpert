import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';

export default function EMICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (monthlyRate === 0) {
      setEmi(loanAmount / months);
    } else {
      const emiValue =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiValue);
    }

    const total = emi * months;
    setTotalPayment(total);
    setTotalInterest(total - loanAmount);
  }, [loanAmount, interestRate, tenure, emi]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">EMI Calculator</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Monthly EMI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your loan repayment with our easy-to-use EMI calculator
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Loan Details</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-medium">Loan Amount</label>
                    <div className="flex items-center space-x-1">
                      <IndianRupee className="w-4 h-4 text-muted-foreground" />
                      <span className="font-bold text-xl">
                        {loanAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-blue-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-medium">Interest Rate (p.a.)</label>
                    <span className="font-bold text-xl">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-blue-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-medium">Loan Tenure</label>
                    <span className="font-bold text-xl">{tenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-blue-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100">Monthly EMI</span>
                  <IndianRupee className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  ₹{Math.round(emi).toLocaleString('en-IN')}
                </div>
                <p className="text-blue-100 text-sm">per month for {tenure} years</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg"
                >
                  <div className="text-sm text-muted-foreground mb-2">Principal Amount</div>
                  <div className="text-2xl font-bold text-blue-600">
                    ₹{(loanAmount / 100000).toFixed(1)}L
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg"
                >
                  <div className="text-sm text-muted-foreground mb-2">Total Interest</div>
                  <div className="text-2xl font-bold text-orange-600">
                    ₹{(totalInterest / 100000).toFixed(1)}L
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-accent/10 to-yellow-600/10 rounded-2xl p-6 border border-accent/30"
              >
                <div className="text-sm text-muted-foreground mb-2">Total Payment (Principal + Interest)</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                  ₹{(totalPayment / 100000).toFixed(1)}L
                </div>
              </motion.div>

              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all"
              >
                Apply for This Loan
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
