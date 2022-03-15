const withPWA = require('next-pwa');

module.exports = withPWA ({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true, 
  images: {
    domains: ['placeimg.com'],
  },
});

// module.exports = {
//   reactStrictMode: true, 
//   images: {
//     domains: ['placeimg.com'],
//   },
// };