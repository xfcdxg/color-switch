module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/page1': { page: '/page1' },
    }
  },
  webpack: function(config, { buildId, dev }) {
    // Perform customizations to webpack config
    config.output.publicPath = './'
    // Important: return the modified config
    return config
  },
}
