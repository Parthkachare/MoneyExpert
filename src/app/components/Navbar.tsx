import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Branches", href: "#branches" },
    { name: "Franchise", href: "#franchise" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex cursor-pointer items-center"
          >
            <img
              src={new URL(
                "../../imports/WhatsApp_Image_2026-05-11_at_10.36.47_AM-removebg-preview.png",
                import.meta.url
              ).href}
              alt="MoneyExpert Finserv Logo"
              className="h-14 w-auto object-contain"
            />
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center space-x-7 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className="cursor-pointer font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />

            <ThemeToggle />

            <motion.a
              href="tel:+918007897555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2.5 font-medium text-white shadow-lg transition-all hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg bg-muted p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-2 px-4 py-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block rounded-lg px-4 py-3 font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="tel:+918007897555"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 font-medium text-white"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}