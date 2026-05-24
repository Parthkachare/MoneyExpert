import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { MessageCircle, Phone, X, Send } from 'lucide-react';

export default function FloatingActions() {
  const [showCallback, setShowCallback] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.service) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Callback request submitted! We will call you within 30 minutes.');
    setFormData({ name: '', mobile: '', service: '' });
    setShowCallback(false);
  };

  return (
    <>
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-all group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </motion.a>

      <motion.button
        onClick={() => setShowCallback(!showCallback)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-all"
      >
        {showCallback ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </motion.button>

      <AnimatePresence>
        {showCallback && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-44 right-6 z-50 w-80 bg-white dark:bg-navy rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-800 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
              <h3 className="font-bold text-lg mb-1">Request a Callback</h3>
              <p className="text-sm text-blue-100">We'll call you within 30 minutes</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                >
                  <option value="">Select a service</option>
                  <option>Home Loan</option>
                  <option>Personal Loan</option>
                  <option>Business Loan</option>
                  <option>Mortgage Loan</option>
                  <option>Car Insurance</option>
                  <option>Bike Insurance</option>
                  <option>Life Insurance</option>
                  <option>Mutual Fund</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Request Callback</span>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
