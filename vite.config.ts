import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["dotenv/config"],
    },
  },
  plugins: [react(), nodePolyfills()],
});