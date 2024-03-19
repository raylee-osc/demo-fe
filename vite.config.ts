import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { default as tsConfigPaths} from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 8080
  }
})
