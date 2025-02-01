import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Define how chunks are created
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separate all vendor libraries into a single "vendor" chunk
            return 'vendor';
          }
        },
      },
    },
  },
});

