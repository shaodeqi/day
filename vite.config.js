import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/sdk", dest: "assets/" },
        { src: "CNAME", dest: "" },
      ],
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
			}
		}
	}
});
