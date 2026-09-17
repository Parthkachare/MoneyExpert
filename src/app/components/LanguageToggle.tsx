import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { motion } from "motion/react";

declare global {
  interface Window {
    google?: any;
  }
}

export default function LanguageToggle() {
  const [isMarathi, setIsMarathi] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "mr") {
      setIsMarathi(true);
    }
  }, []);

  const changeLanguage = (language: "en" | "mr") => {
    const tryTranslate = () => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (!select) {
        setTimeout(tryTranslate, 300);
        return;
      }

      select.value = language;
      select.dispatchEvent(new Event("change"));

      localStorage.setItem("language", language);
      setIsMarathi(language === "mr");
    };

    tryTranslate();
  };

  const toggleLanguage = () => {
    changeLanguage(isMarathi ? "en" : "mr");
  };

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isMarathi ? "Switch to English" : "मराठीत पहा"}
      aria-label={isMarathi ? "Switch to English" : "Switch to Marathi"}
      className="flex h-10 items-center gap-2 rounded-full border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted"
    >
      <Languages className="h-4 w-4" />

      <span>{isMarathi ? "English" : "मराठी"}</span>
    </motion.button>
  );
}