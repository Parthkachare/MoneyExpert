import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Which banks do you work with?',
      answer: 'We partner with over 50+ leading nationalized and private banks including SBI, HDFC, ICICI, Axis Bank, Kotak Mahindra, LIC Housing Finance, Bandhan Bank, and many more. This allows us to get you the best rates and terms for your loan requirements.',
    },
    {
      question: 'How fast is loan approval?',
      answer: 'Loan approval time varies based on the type of loan and bank. However, we strive to get approvals in as fast as 48 hours for most loan types. Personal loans typically get approved within 24-48 hours, while home loans may take 3-7 days depending on documentation and property verification.',
    },
    {
      question: 'Do you provide mutual fund investment guidance?',
      answer: 'Yes! We are AMFI registered mutual fund distributors certified through SEBI NISM examination. Our expert advisor Parth Kachare provides personalized investment guidance, helps you build a diversified portfolio, and assists with systematic investment plans (SIP) for long-term wealth creation.',
    },
    {
      question: 'Is insurance renewal support available?',
      answer: 'Absolutely! We provide complete insurance support including new policy issuance, renewals, claim assistance, and policy modifications. We handle car insurance, bike insurance, life insurance, and general insurance for all major insurance companies.',
    },
    {
      question: 'How can I open a franchise branch?',
      answer: 'Opening a MoneyExpert Finserv franchise is simple! Contact us through the franchise inquiry form on our website or call our head office. We will guide you through the process, including investment requirements, training programs, territory allocation, and ongoing support systems.',
    },
    {
      question: 'What documents are required for a home loan?',
      answer: 'Basic documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips, ITR), bank statements for the last 6 months, property documents, and photographs. Our team will guide you through the complete documentation process to ensure smooth approval.',
    },
    {
      question: 'Do you charge any fees for loan consultation?',
      answer: 'Our initial consultation is completely free. We believe in transparency, so there are no hidden charges. Any applicable processing fees are communicated upfront and are typically charged by the bank, not by us. We earn commission from banks, so our service to you comes at no extra cost.',
    },
    {
      question: 'Can I get a loan with a low credit score?',
      answer: 'Yes, we can help! While a good credit score improves loan eligibility and interest rates, we work with multiple banks that consider applications with lower credit scores. We will assess your situation and recommend the best possible options available to you.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-800 dark:text-blue-300 font-medium">FAQ</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-blue-800 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Our team is here to help you with any queries you may have
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
