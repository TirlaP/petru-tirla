/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: { mont: ["var(--font-mont)", ...fontFamily.sans] },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96",
                primaryDark: "#58E6D9",
                primaryRed: "#FF0000",
                primaryBlue: "	#1E90FF",
                primaryPurple: "#FF00FF",
                primaryDarkOrange: "#FFA500",
                primaryDarkYellow: "#FFFF00",
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                "fade-in": "fadeIn 0.5s ease-in-out forwards",
                "slide-up": "slideUp 0.5s ease-in-out forwards",
                "slide-down": "slideDown 0.5s ease-in-out forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            },
            backgroundImage: {
                circularLight:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
                circularDark:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
                circularLightLg:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px);",
                circularDarkLg:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 80px);",
                circularLightMd:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);",
                circularDarkMd:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 60px);",
                circularLightSm:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px);",
                circularDarkSm:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 4px, #1b1b1b 40px);",
            },
            boxShadow: {
                "custom-light":
                    "0 10px 25px -3px rgba(182, 62, 150, 0.1), 0 4px 6px -2px rgba(182, 62, 150, 0.05)",
                "custom-dark":
                    "0 10px 25px -3px rgba(88, 230, 217, 0.1), 0 4px 6px -2px rgba(88, 230, 217, 0.05)",
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            lineClamp: {
                7: "7",
                8: "8",
                9: "9",
                10: "10",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
                ".gradient-mask-b": {
                    "mask-image": "linear-gradient(to bottom, black, transparent)",
                },
                ".gradient-mask-t": {
                    "mask-image": "linear-gradient(to top, black, transparent)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
