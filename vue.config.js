module.exports = {
    devServer: {
        port: 3333,
        open: true
    },
    // CSS: {
    //     loaderOptions: {
    //         sass: {
    //             data: '@import "@/assets/scss/-variable.scss";'
    //         }
    //     }
    // }
    css: {
        loaderOptions: {
          sass: {
            // 新版本sass-loader， 将data改成prependData进行配置
            prependData: `@import "@/assets/scss/_variable.scss";`
          }
        }
      }

}
// 项目进行全局配置都是在这里进行