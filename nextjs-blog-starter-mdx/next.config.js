const path = require('path')

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },

  env: {
    ROOT: __dirname,
    CONTENT_PATH: path.join(__dirname, '_posts'),
  }
}
