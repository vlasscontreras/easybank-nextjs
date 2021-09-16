/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'source.unsplash.com']
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
