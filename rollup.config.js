import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.tsx', // Ganti dengan file entry point proyek Anda
  output: {
    file: 'dist/bundle.js', // Output bundle
    format: 'esm',           // Format output
  },
  plugins: [
    scss({
      output: 'dist/styles.css', // Output file CSS
    }),
    // Plugin lain yang digunakan di proyek Anda
  ],
};
