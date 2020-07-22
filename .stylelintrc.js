module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
    'stylelint-config-rational-order'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'function-parentheses-space-inside': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': /^[a-z]+(?:(?:__|-{1,2})[a-z]+)*$/,
    'scss/dollar-variable-pattern': [/^--/, { ignore: 'local' }],
    'selector-max-id': 1,
    'max-nesting-depth': [
      4,
      {
        ignore: ['pseudo-classes']
      }
    ]
  }
}
