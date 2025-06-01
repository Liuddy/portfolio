module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'media-feature-range-notation': null
  }
}