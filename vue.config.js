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


        host: "localhost",

        port: 8081,
        open: false,
        https: false,
        proxy: { //配置跨域
            // 这个地方的 '/api'  名字要和底下 '^/api'  这个地方的名字一样。如果这里是 '/bpi'，那么底下就也要是 '^/bpi'
            '/': {
                target: 'http://localhost:8080/', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: false,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/': '/' //请求的时候使用这个api就可以
                        // 如：你需要访问：https://cms-api.csdn.net/v1/web_home/select_content?componentIds=www-recomend-community
                        // 现在只需这样子输入url： /api/v1/web_home/select_content?componentIds=www-recomend-community  即可
                        // 它会变成：http://localhost:8080/api/v1/web_home/select_content?componentIds=www-recomend-community  并允许跨域
                }
            }
        },
    }
}