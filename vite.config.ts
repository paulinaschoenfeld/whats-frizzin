import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      vue({ template: { transformAssetUrls }}),
      // quasar({ sassVariables: 'src/quasar-variables.sass' })
      quasar({})
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@components': path.resolve(__dirname, 'src/components'),
        }
    }
})
