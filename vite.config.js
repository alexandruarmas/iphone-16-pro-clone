import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/iphone-16-pro-clone/',

  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-p0",
      project: "javascript-react"
    })
  ],

  build: {
    sourcemap: true
  }
})
