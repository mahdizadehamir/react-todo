module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["HalloBlack"],
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'fade-out-down': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      },
      },
      animation:{
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
        "fade-out-down": "fade-out-down 0.5s ease-in-out"
      }
    },
  },
  plugins: [require("daisyui")],
};
