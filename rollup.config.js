import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
// import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const dist = 'dist'
const bundle = 'bundle'
// const production = !process.env.ROLLUP_WATCH

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
        react: 'React',
        'react/jsx-runtime': 'jsxRuntime',
        'styled-components': 'styled'
      },
      format: 'umd'
    }
  ],
  external: ['react', 'react/jsx-runtime', 'styled-components'],
  plugins: [
    resolve({
      preferBuiltins: false
    }),
    clear({
      targets: ['dist']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    sizeSnapshot({
      snapshotPath: './.tmp/.size-snapshot.json'
    })
    // production &&
    //   terser({
    //     compress: true,
    //     mangle: true
    //   })
  ]
}
