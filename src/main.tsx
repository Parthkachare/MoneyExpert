import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

/* -----------------------------
   DARK MODE
----------------------------- */

const savedTheme = localStorage.getItem("theme");

const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const shouldUseDark =
  savedTheme === "dark" ||
  (!savedTheme && prefersDark);

if (shouldUseDark) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

/* -----------------------------
   LANGUAGE
----------------------------- */

const savedLanguage = localStorage.getItem("language");

if (savedLanguage === "mr") {
  document.documentElement.setAttribute("lang", "mr");
} else {
  document.documentElement.setAttribute("lang", "en");
}

/* -----------------------------
   GOOGLE TRANSLATE COOKIE
----------------------------- */

if (savedLanguage === "mr") {
  document.cookie =
    "googtrans=/en/mr;path=/";

  document.cookie =
    "googtrans=/en/mr;path=/;domain=" +
    window.location.hostname;
} else {
  document.cookie =
    "googtrans=/en/en;path=/";
}

/* -----------------------------
   REACT
----------------------------- */

createRoot(
  document.getElementById("root")!
).render(
  <App />
);