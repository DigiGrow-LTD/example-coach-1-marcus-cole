export const siteConfig = {
  name: "Marcus Cole",
  title: "Marcus Cole | Performance Mindset Coach | Manchester",
  description:
    "Performance mindset coaching for athletes and ambitious professionals. Book a free discovery call with Manchester-based coach Marcus Cole.",
  url: "https://marcuscole.co.uk",
  locale: "en_GB",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Coaching", href: "/coaching" },
  { label: "Results", href: "/#testimonials" },
] as const;

export const ctaCopy = {
  hero: {
    primary: "BOOK YOUR FREE DISCOVERY CALL",
    secondary: "SEE HOW I WORK",
  },
  nav: "BOOK A CALL",
  services: {
    primary: "BOOK YOUR FREE CALL",
    secondary: "LEARN MORE",
  },
  leadMagnet: "GET THE FREE GUIDE",
  footer: "BOOK YOUR FREE DISCOVERY CALL",
  about: "WORK WITH ME",
  mobile: "BOOK YOUR FREE CALL",
} as const;
