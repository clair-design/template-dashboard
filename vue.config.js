const path = require('path')
const { pathToRegexp } = require('path-to-regexp')

const isMock = process.env.MOCK
const webpackConfig = {
  devServer: {}
}

// mock API response
if (isMock) {
  const mockDir = path.resolve(__dirname, './mock')
  webpackConfig.devServer.before = app => {
    app.use((req, res, next) => {
      // TODO: need to optimize
      // remove require cache for every request
      Object.keys(require.cache).forEach(file => {
        if (file.startsWith(mockDir)) delete require.cache[file]
      })
      const mocks = require('./mock')
      const matched = Object.keys(mocks).find(key => {
        const [method, url] = key.split(/\s+/)
        const isMethodMatch = req.method === method
        const isUrlMath = pathToRegexp(url).test(req.path)
        return isMethodMatch && isUrlMath
      })
      if (matched) {
        const mock = mocks[matched]
        const mockData =
          typeof mock === 'function' ? mock(req.query, req.params) : mock
        res.send(mockData)
      } else {
        next()
      }
    })
  }
}

module.exports = {
  configureWebpack: webpackConfig
}
