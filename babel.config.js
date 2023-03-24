module.exports = function (api) {
  api.cache(true)

  const presets = ['babel-preset-expo', '@babel/preset-env']
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '@': './src'
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
