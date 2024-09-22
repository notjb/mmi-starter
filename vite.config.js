import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    stylelint({ fix: false }),
    eslint({ fix: true }),
  ],
});
