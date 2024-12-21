import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    alias({
      entries: [
        { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      ],
    }),
    // Plugin lainnya
  ],
};
