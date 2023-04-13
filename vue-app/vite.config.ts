import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//1.下载依赖vite-plugin-qiankun
import qiankun from "vite-plugin-qiankun";
//2.配置base，使用插件
export default defineConfig({
  base: "/sub-vue", // 与基座中配置的activeRule一致
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002", //根据其服务的端口而变
  },
  plugins: [
    vue(),
    qiankun("sub-vue", {
      // 配置qiankun插件
      useDevMode: true,
    }),
  ],
});
