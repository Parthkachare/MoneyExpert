import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from 'sonner';
import {
  Home, Phone, Mail, MapPin, Menu, X, ChevronDown,
  Shield, Users, Zap, Award, TrendingUp, CheckCircle2,
  Building2, Car, Heart, Briefcase, PiggyBank, FileText,
  Calculator, MessageSquare, Star, ChevronRight, Facebook,
  Twitter, Linkedin, Instagram, Youtube, MessageCircle,
  Clock, Target, Handshake
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';
import Branches from './components/Branches';
import Franchise from './components/Franchise';
import EMICalculator from './components/EMICalculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import LoanEligibility from './components/LoanEligibility';
import CompareLoan from './components/CompareLoan';
import Newsletter from './components/Newsletter';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Awards from './components/Awards';
import LiveChat from './components/LiveChat';
import LoadingScreen from './components/LoadingScreen';
import DownloadBrochure from './components/DownloadBrochure';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Toaster position="top-right" richColors />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <LoanEligibility />
      <CompareLoan />
      <Branches />
      <Franchise />
      <EMICalculator />
      <Awards />
      <Testimonials />
      <Gallery />
      <Blog />
      <DownloadBrochure />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <FloatingActions />
      <LiveChat />
      <ScrollToTop />
    </div>
  );
}
