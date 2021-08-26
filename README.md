# Workshop Theme

The Workshop Theme is a simple theme built on Tailwind CSS that aims to be a testbed for the core Winter CMS plugins.

The theme tests the following plugins:

- [Static Pages](https://github.com/wintercms/wn-pages-plugin)
- [Blog](https://github.com/wintercms/wn-blog-plugin)
- [Forum](https://github.com/wintercms/wn-forum-plugin)
- [User](https://github.com/wintercms/wn-user-plugin)
- [Translate](https://github.com/wintercms/wn-translate-plugin)
- [Sitemap](https://github.com/wintercms/wn-sitemap-plugin)

And tests the following concepts:

- Inline component code
- Theme-based component template overrides

## Requirements

- The above plugins installed in Winter CMS
- `npm` 12 or above

## Development

Tailwind CSS requires the use of `npm` to compile both the development and final production stylesheets. The production
stylesheets use Tailwind's purging feature (through PurgeCSS) to include only the styles that are needed for displaying
the site, dramatically decreasing the resulting filesize of the stylesheet.

Run `npm install` on first installation to bring in all Node dependencies.

You can then run one of two commands depending on your environment:

- `npm run compile-dev` will compile the full Tailwind CSS framework for development.
- `npm run compile` will compile the production stylesheet.

Only the production stylesheet should be committed to Git.
