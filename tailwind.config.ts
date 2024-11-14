import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs':'386px',
        'xs':'510px',
        'sm': '576px',   
            'md': '780px',    
            'lg': '1024px',   
            'xl': '1100px',
            '1.5xl':'1200px',   
            '2xl': '1400px',  
            '3xl': '1920px',  
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
