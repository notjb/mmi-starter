import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [stylelint({fix: true}), eslint({fix: true})],
});
