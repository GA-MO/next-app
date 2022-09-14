module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}