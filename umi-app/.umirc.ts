//1.安装npm i @umijs/plugins  qiankun的umi插件
//2.配置.umirc.ts 2步就可以接入主应用基座了
//如果想用生命周期，可以在入口文件qpp.ts引入,

export default {
  base: "/sub-umi",
  npmClient: "npm",
  plugins: ["@umijs/plugins/dist/qiankun"],
  qiankun: {
    slave: {},
  },
  headScripts: [
    { src: "https://unpkg.com/axios@1.1.2/dist/axios.min.js", ignore: true },
  ],
};
