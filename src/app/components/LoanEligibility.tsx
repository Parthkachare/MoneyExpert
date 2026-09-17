import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { CheckCircle, XCircle } from 'lucide-react';

export default function LoanEligibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    income: '',
    age: '',
    employment: '',
    creditScore: '',
  });
  const [result, setResult] = useState<null | 'eligible' | 'not-eligible'>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.income || !formData.age || !formData.employment || !formData.creditScore) {
      toast.error('Please fill all fields');
      return;
    }

    const income = parseInt(formData.income);
    const age = parseInt(formData.age);
    const score = parseInt(formData.creditScore);

    if (income >= 25000 && age >= 21 && age <= 65 && score >= 650) {
      setResult('eligible');
      toast.success('Great! You are eligible for a loan');
    } else {
      setResult('not-eligible');
      toast.error('You may need to improve some criteria');
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Check Your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Loan Eligibility</span>
          </h2>
          <p className="text-muted-foreground">Get instant results in seconds</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-xl"
        >
          <form onSubmit={checkEligibility} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Monthly Income (₹)</label>
                <input
                  type="number"
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                  placeholder="Enter monthly income"
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Enter your age"
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Employment Type</label>
              <select
                value={formData.employment}
                onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select employment type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business">Business Owner</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Credit Score (Approx.)</label>
              <input
                type="number"
                value={formData.creditScore}
                onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                placeholder="Enter credit score (300-900)"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-lg font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              Check Eligibility
            </button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-6 p-6 rounded-2xl border-2 ${
                result === 'eligible'
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500'
              }`}
            >
              <div className="flex items-center space-x-3">
                {result === 'eligible' ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600" />
                )}
                <div>
                  <h3 className="font-bold text-lg">
                    {result === 'eligible' ? 'Congratulations!' : 'Not Eligible Yet'}
                  </h3>
                  <p className="text-muted-foreground">
                    {result === 'eligible'
                      ? 'You meet our basic eligibility criteria. Apply now!'
                      : 'You may need to improve income or credit score. Contact us for guidance.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
