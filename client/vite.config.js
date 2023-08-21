import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { defineConfig } from "vite";

// import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), nodePolyfills()],

	// vite: {
	// 	define: {
	// 		global: {},
	// 	},
	// },
});
