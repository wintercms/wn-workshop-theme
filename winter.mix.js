const mix = require('laravel-mix');

mix.setPublicPath(__dirname);

// Render Tailwind style
mix.postCss('assets/css/base.css', 'assets/css/theme.css', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
]);
