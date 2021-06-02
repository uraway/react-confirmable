import babel from '@rollup/plugin-babel';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default [
  {
    input: 'dist/esm/index.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      babel({
        extensions,
      }),
    ],
  },
];
