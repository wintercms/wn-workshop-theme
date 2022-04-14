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

- The [Snowboard](https://wintercms.com/docs/snowboard/introduction) JavaScript framework
- Inline component code
- Theme-based component template overrides

## Requirements

- Winter CMS 1.1.8 or above.
- NodeJS 12 or above, if you wish to style the theme.

## Development

The theme is built on Tailwind CSS, which is built using the NodeJS framework. To be able to compile any changes made to the styling or content, you must use the Mix commands that are included with Winter CMS 1.1.8.

You must first install the Node dependencies required for the theme.

```bash
php artisan mix:install -p theme-workshop
```

Then, to compile the Tailwind CSS styles for development, run the following command in the root folder of the project:

```bash
php artisan mix:compile -p theme-workshop
```

To compile the Tailwind CSS styles for production (which should be done if you commit any changes to the Workshop theme), you must add the `--production` flag to the above command:

```bash
php artisan mix:compile -p theme-workshop --production
```

To make it easy to develop the theme, you can also watch the necessary template and stylesheet files for any changes:

```bash
php artisan mix:watch theme-workshop
```
