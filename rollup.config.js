import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    scss({
      output: 'dist/styles.css',
    }),
    // Plugin lainnya
  ],
};
