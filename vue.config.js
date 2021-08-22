module.exports = {
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options.patterns[0].globOptions.ignore.push('favicon.ico')
      return [options]
    })
  }
}
