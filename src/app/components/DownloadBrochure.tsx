import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function DownloadBrochure() {
  const handleDownload = (type: string) => {
    toast.success(`${type} brochure download started!`);
  };

  const brochures = [
    { title: 'Home Loan Brochure', icon: '🏠', type: 'Home Loan' },
    { title: 'Mutual Funds Guide', icon: '📈', type: 'Mutual Funds' },
    { title: 'Insurance Plans', icon: '🛡️', type: 'Insurance' },
    { title: 'Business Loans', icon: '💼', type: 'Business Loan' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Download <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Brochures</span>
          </h2>
          <p className="text-muted-foreground">Get detailed information about our services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brochures.map((brochure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="text-5xl mb-4">{brochure.icon}</div>
              <h3 className="font-bold mb-4">{brochure.title}</h3>
              <motion.button
                onClick={() => handleDownload(brochure.type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
