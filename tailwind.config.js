/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './**/*.vue',
      './**/**/*.vue'
    ],
    options: {
      whitelistPatterns: [
        /^code/,
        /^pre/,
        /^token/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^router-link(|-exact)-active$/
      ]
    }
  }
};
