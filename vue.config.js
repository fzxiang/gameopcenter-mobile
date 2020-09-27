const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const { merge } = require("webpack-merge");

const resolve = path.resolve;
module.exports = {
  publicPath: "./",
  css: {
    //是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    extract: true,
    //是否为 CSS 开启 source map
    sourceMap: false,
    //向 CSS 相关的 loader 传递选项。
    loaderOptions: {},
    //并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true
  },

  chainWebpack(config) {
    // if (process.env.NODE_ENV === "production") {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    // }
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test

    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap((options) => {
        options = merge(options, {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "esnext"
          }
        });
        return options;
      })
      .end();

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === "development", (config) =>
        config.devtool("cheap-source-map")
      );
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        esModule: false
      })
      .end();
  },
  configureWebpack: {
    devtool: "source-map",
    mode: "development",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      },
      extensions: [".js", ".vue", ".scss", ".css", ".ts"]
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  },
  productionSourceMap: false
};
