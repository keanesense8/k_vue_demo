module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
          '^/api': {
            target: 'http://localhost:8090',
            ws: true,
            changeOrigin: true
          }
        }
    },
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    },
    css: {
      // Enable CSS source maps.
      sourceMap: true
    }
  };