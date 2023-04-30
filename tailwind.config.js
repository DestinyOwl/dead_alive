/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        xeare: ["xeare"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#06080a",
        
          "secondary": "#f3f4f6",
        
          "accent": "#4b5563",
        
          "neutral": "#374151",
        
          "base-100": "#FFFFFF",
        
          "info": "#3ABFF8",
        
          "success": "#36D399",
        
          "warning": "#FBBD23",
        
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}