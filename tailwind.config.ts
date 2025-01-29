import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
          baseBg: 'hsla(0,0%,94%,1)',
          responsiveBg:'hsla(330, 7%, 95%, 1)',
      },
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
