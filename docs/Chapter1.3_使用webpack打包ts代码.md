
1. 需要先生成`package.json`, which is used to manage our project
   1. `npm init -y`
2. Install webpack dependencies
3. Write webpack config file
4. Write tsconfig
5. Modify `package.json`


```shell
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config


npm install webpack webpack-cli typescript ts-loader --save-dev
npm i --save-dev html-webpack-plugin
npm install webpack-dev-server --save-dev

npm install --save-dev @babel/core @babel/preset-env babel-loader core-js
```

## Plugins
### `webpack`
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 



* Plugin `html-webpack-plugin`
  * This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.

## Reference
* https://stackoverflow.com/a/47252840/23092474
* https://stackoverflow.com/a/50639828/23092474
* https://webpack.js.org/configuration/mode/
* https://www.npmjs.com/package/webpack
* https://www.npmjs.com/package/html-webpack-plugin
* https://www.npmjs.com/package/clean-webpack-plugin
* https://www.npmjs.com/package/@babel/core
