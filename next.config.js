module.exports = {
  reactStrictMode: true,
  env:{
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://www.google.com',
        permanent: true
      }
    ]
  }
}
