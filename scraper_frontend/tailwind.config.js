/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          main: '#00539B'
        },
        hiring: '#ea7a57',
        competition: "#357CD2",
        workshop: "#7fa900",
        network: "#dc2626",
      },
    },
  },
  plugins: [],
}

