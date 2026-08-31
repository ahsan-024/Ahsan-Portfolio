// Used for SEO in meta tags, schema, sitemap and OG image URLs
const baseURL = "https://ahsan-ten.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  // "/blog": true, // Commented out - blog section disabled
  // "/gallery": true, // Commented out - gallery section disabled
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {};

import { Urbanist as mainFont } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = mainFont({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

const style = {
  theme: "system", // theme is not necessary when using ThemeProvider (default)
  neutral: "sand", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "green", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 50,
    radius: 32,
  },
  gradient: {
    display: true,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.5rem",
    height: "0.5rem",
  },
  lines: {
    display: true,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const display = {
  location: true,
  locationIcon: false, // Hide/Show location icon in the header
  time: true,
  themeSwitcher: true,
};

const mailchimp = {
  action:
    "https://gmail.us7.list-manage.com/subscribe/post?u=a25fe3df2b0fb2b8f228e87fc&amp;id=0c5ecd3ec0&amp;f_id=00768be0f0",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "1rem",
      height: "1rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 45,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };
