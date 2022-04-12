import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/sdk", dest: "assets/" },
        { src: "src/assets/img", dest: "assets/" },
        { src: "CNAME", dest: "" },
        { src: "src/public/*", dest: "" },
      ],
    }),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "心动每一天",
        short_name: "HeartBeat",
        description: "心动每一天",
        start_url: "/",
        scope: "/",
        theme_color: "#b29dd1",
        background_color: "#b29dd1",
        lang: "en",
        display: "fullscreen",
        icons: [
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
		  },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "docs",
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        // additionalData: '@import "@/assets/scss/globalVariable.scss";'
      },
    },
  },
});
