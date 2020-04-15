import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import clear from 'rollup-plugin-clear'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import multiEntry from 'rollup-plugin-multi-entry'

const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'SecretDinoClaws',
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: 'React'
      },
      format: 'umd'
    }
  ],
  external: ['react'],
  plugins: [
    resolve({
      preferBuiltins: false,
      browser: true
    }),
    clear({
      targets: ['dist']
    }),
    multiEntry(),
    peerDepsExternal(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    sizeSnapshot({
      snapshotPath: './.tmp/.size-snapshot.json'
    }),
    production &&
      terser({
        compress: true,
        mangle: true
      })
  ]
}
