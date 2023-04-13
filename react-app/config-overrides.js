//此文件是为了不eject所有的webpack配置而修改webpack配置
//前提
// 1. npm i react-app-rewired
// 2. 更改script脚本
// "scripts": {
// ​    "start": "react-app-rewired start",
// ​    "build": "react-app-rewired build",
// ​    "test": "react-app-rewired test",
// ​    "eject": "react-app-rewired eject"
// },
// 3.在根目录下新增config-overrides.js文件并新增如下配置
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config;
  },
};
