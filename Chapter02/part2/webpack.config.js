// 引入一个包
const { default: test } = require('node:test');
const path = require('path');

// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入webpack-clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 


// webpack中的所有配置信息都应该卸载module.exports
module.exports = {
    mode: 'development',
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后的文件名字
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    {
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方法，usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'     // 先执行
                ],
                // 
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "This is a self-defined title"
        }),
    ],

    // 设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};