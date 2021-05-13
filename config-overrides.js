const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
const path = require("path");
const theme = require("./src/styles/theme").theme;

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@icons": path.resolve(__dirname, "src/assets/icons"),
    "@images": path.resolve(__dirname, "src/assets/images"),
    "@types": path.resolve(__dirname, "src/types"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@api": path.resolve(__dirname, "src/api"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@services": path.resolve(__dirname, "src/services"),
    "@stores": path.resolve(__dirname, "src/stores"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: theme,
      javascriptEnabled: true,
    },
  })
);
