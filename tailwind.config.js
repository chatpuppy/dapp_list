module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        defaultcolor: "#242526",
        primary: "var(--primary-color)",
        darkbg:"#242526",
        darkMajor:"#fff",
        darkMinor:"#3A3B3C",
        lightbg:'#fff',
        lightMajor:'#3A3B3C',
        lightMinor:'#f6f8fa',
        lightLine:"gray-300"
      },
      gridTemplateColumns: {
        // Simple 8 row grid
       'auto': 'repeat(auto-fit, minmax(0, 1fr))',

      }
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s forwards",
    },
  },
  plugins: [],
};
