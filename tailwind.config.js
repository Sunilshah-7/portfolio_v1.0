/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      "dm-sans": ["var(--font-dm-sans)"],
    },
    animation: {
      "fade-in": "fadeIn 1s ease-in-out",
      "fade-in-delayed": "fadeIn 1s ease-in-out 0.5s both",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
};
export const plugins = [];
