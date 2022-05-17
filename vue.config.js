const { defineConfig } = require('@vue/cli-service')

module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    // transpileDependencies: true,

    // publicPath: process.env.NODE_ENV === 'production'?'./':'/', // 构建好的文件输出到哪里
    publicPath: "./",

    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    productionSourceMap: false,
    // chainWebpack: () => {},
    //
    // configureWebpack: () => {}, // CSS 相关选项

    // css: {
    //   // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
    //
    //   // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    //
    //   extract: true, // 允许生成 CSS source maps?
    //
    //   sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
    //
    //   loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    //
    // }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores
    //
    // parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    //
    // pwa: {},
    devServer: {
        // open: process.platform === "darwin",

        // disableHostCheck: false,

        host: "localhost",

        port: 8080,

        https: false,

        // hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

        // proxy: null // string | Object
    },
}