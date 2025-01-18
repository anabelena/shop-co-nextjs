import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['var(--body-font)','sans-serif'],
        heading:['var(--heading-font)','sans-serif']
      },
      screens: {
        'tablet': '768px',  
        'laptop': '1024px', 
        'desktop': '1280px',
      },
      backgroundImage: {
        'hero': "url('/assets/images/hero.svg')",
        'hero-mobile': "url('/assets/images/hero-mobile.svg')", 
      },
    },
  },
  plugins: [],
} satisfies Config;
