import { motion } from 'motion/react';
import {
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Mail, Phone, MapPin, ArrowRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Home Loans',
      'Personal Loans',
      'Business Loans',
      'Mortgage Loans',
      'Car Insurance',
      'Bike Insurance',
      'Life Insurance',
      'Mutual Funds',
    ],
    quickLinks: [
      'About Us',
      'Our Services',
      'Branches',
      'Franchise',
      'EMI Calculator',
      'Contact Us',
      'Privacy Policy',
      'Terms & Conditions',
    ],
    branches: [
      {
        name: 'Yavatmal Branch',
        manager: 'Ravindra J. Kachare',
        phone: '+91 98765 43210',
      },
      {
        name: 'Amravati Branch',
        manager: 'Rahul Dhale',
        phone: '+91 98765 43211',
      },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-600' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-navy border-t border-blue-200 dark:border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={new URL('../../imports/WhatsApp_Image_2026-05-11_at_10.36.47_AM-removebg-preview.png', import.meta.url).href}
                alt="MoneyExpert Finserv Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for loans, insurance, and investment solutions across Maharashtra.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center border border-blue-200 dark:border-blue-800 text-muted-foreground transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center space-x-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => {
                const href = `#${link.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center space-x-2 group cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{link}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Our Branches</h4>
            <div className="space-y-6">
              {footerLinks.branches.map((branch, index) => (
                <div key={index} className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h5 className="font-bold mb-2">{branch.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Manager: {branch.manager}
                  </p>
                  <a href={`tel:${branch.phone}`} className="flex items-center space-x-2 text-sm text-blue-600 hover:underline">
                    <Phone className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 dark:border-blue-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center space-x-6">
              <a href="mailto:info@moneyexpert.com" className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>info@moneyexpert.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 98765 43210</span>
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground md:justify-end">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Yavatmal & Amravati, Maharashtra</span>
            </div>
          </div>

          <div className="bg-blue-100/50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> MoneyExpert Finserv is a loan consultant and financial advisory service. We work with multiple banks and financial institutions to provide you with the best financial products. Final loan approval is subject to bank policies and eligibility criteria. AMFI Registration ensures compliance with mutual fund distribution regulations. Insurance products are subject to terms and conditions of respective insurance companies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} MoneyExpert Finserv. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 font-medium">
                AMFI Registered
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 font-medium">
                SEBI NISM Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
