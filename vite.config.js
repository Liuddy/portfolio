import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  base: '/portfolio/',

  plugins: [vue()],

  esbuild: {
    supported: {
      'top-level-await': true
    }
  },

  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }

})
