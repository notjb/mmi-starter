import { defineConfig } from 'vite';
import StylelintPlugin from 'vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [StylelintPlugin({ fix: true }), eslintPlugin({ fix: true })],
});
