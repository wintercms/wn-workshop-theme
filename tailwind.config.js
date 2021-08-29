const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './pages/**/*.htm',
            './partials/**/*.htm',
            './layouts/**/*.htm'
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            gray: colors.trueGray,
            white: colors.white,
            blue: colors.sky,
            purple: colors.violet,
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
    variants: {
        extend: {
            translate: ['group-hover'],
        },
    },
    plugins: [],
};
