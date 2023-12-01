import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({insertTypesEntry:true})],
  build:{
    lib:{
      entry:"src/lib.ts",
      name:"ui-kit"
    },
    rollupOptions:{
      external:['react','react-dom'],
      output:{
        globals:{
          react:"React",
          "react-dom":"ReactDOM"
        }
      }
    }
  }
})
