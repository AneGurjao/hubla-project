const cypressTypeScriptPreprocessor = './cy-ts-preprocessor'

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}