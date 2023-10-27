import { defineConfig } from 'vite';
import postcssCombineMediaQuery from 'postcss-combine-media-query';

const ASSETS_FOLDER = 'assets/';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${ASSETS_FOLDER}demo.js`,
        assetFileNames: (assetInfo: any) => {
          if (assetInfo.name === 'index.css')
            return `${ASSETS_FOLDER}bv8-grid.min.css`;
          return `${ASSETS_FOLDER}[name][extname]`;
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssCombineMediaQuery],
    },
  },
});
