const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.htm',
        './partials/**/*.htm',
        './layouts/**/*.htm'
    ],
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            gray: colors.neutral,
            white: colors.white,
            blue: colors.sky,
            amber: colors.amber,
            purple: colors.violet,
            green: colors.green,
            red: colors.red,
        },
        container: {
            center: true,
        },
        fontFamily: {
            heading: ["'Work Sans'", 'sans-serif'],
            body: ["'Heebo'", 'sans-serif'],
        },
        fontWeight: {
            light: 200,
            normal: 400,
            bold: 700,
            heading: 800,
        },
        extend: {},
    },
    plugins: [],
};
