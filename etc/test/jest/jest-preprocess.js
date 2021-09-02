const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/typescript'],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
