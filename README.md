# vue-cli-plugin-undefined

> Note: path is replaced by `PROJECT_ROOT`

`vue inspect --mode production --plugin copy`

```js
/* config.plugin('copy') */
new CopyPlugin(
  {
    patterns: [
      {
        from: 'PROJECT_ROOT\\public',
        to: 'PROJECT_ROOT\\dist',
        toType: 'dir',
        noErrorOnMissing: true,
        globOptions: {
          ignore: [
            '**/.DS_Store',
            'PROJECT_ROOT/public/index.html',
            'favicon.ico'
          ]
        }
      }
    ]
  }
)
```

```sh
yarn build
yarn run v1.22.10
$ vue-cli-service build

✔  Building legacy bundle for production...
 ERROR  Error: Cannot call .tap() on a plugin that has not yet been defined. Call plugin('copy').use(<Plugin>) first.
Error: Cannot call .tap() on a plugin that has not yet been defined. Call plugin('copy').use(<Plugin>) first.
    at Object.tap (PROJECT_ROOT\node_modules\webpack-chain\src\Plugin.js:26:15)
    at chainWebpack (PROJECT_ROOT\vue.config.js:3:27)
    at PROJECT_ROOT\node_modules\@vue\cli-service\lib\Service.js:252:40
    at Array.forEach (<anonymous>)
    at Service.resolveChainableWebpackConfig (PROJECT_ROOT\node_modules\@vue\cli-service\lib\Service.js:252:26)
    at PluginAPI.resolveChainableWebpackConfig (PROJECT_ROOT\node_modules\@vue\cli-service\lib\PluginAPI.js:145:25)
    at module.exports (PROJECT_ROOT\node_modules\@vue\cli-service\lib\commands\build\resolveAppConfig.js:9:22)
    at build (PROJECT_ROOT\node_modules\@vue\cli-service\lib\commands\build\index.js:147:50)
    at PROJECT_ROOT\node_modules\@vue\cli-service\lib\commands\build\index.js:77:13
    at Service.run (PROJECT_ROOT\node_modules\@vue\cli-service\lib\Service.js:246:12)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
