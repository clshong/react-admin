import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.less";`
      }
    }
  },
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 5173,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
     /** 接口代理 */
    proxy: {
      "/api": {
        target: "http://www.ggapi.cn/api",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: path => path.replace("/api", "")
      }
    }
  }
});
