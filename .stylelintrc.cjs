module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-no-unsupported-browser-features'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'media-feature-range-notation': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'error',
      }
    ]
  }
}