// Minimal Vite config to avoid import-time issues during startup
export default {
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  }
};