module.exports = {
  extends: 'plugin:vue/base',
  rules: {

    // base rules
    'vue/comment-directive': 'error',
    'vue/experimental-script-setup-vars': 'error',
    'vue/jsx-uses-vars': 'error',

    // priority A: essential
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': [ 'error', { allowCoexistClass: true, allowCoexistStyle: true }],
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: false
      }
    ],
    'vue/no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': [ 'error', { allowUsingIterationVar: false }],
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',

    // priority A: essential for Vue 3
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/valid-v-is': 'error',

    // priority A: essential for Vue 2
    'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-multiple-template-root': 'error',
    'vue/no-v-for-template-key': 'error',
    'vue/no-v-model-argument': 'error',
    'vue/valid-v-bind-sync': 'error',

    // priority B: strongly recommended
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/component-definition-name-casing': [ 'error', 'kebab-case' ],
    'vue/html-closing-bracket-newline': [ 'error', { singleline: 'never', multiline: 'never' }],
    'vue/html-closing-bracket-spacing': [
      'error',
      { startTag: 'never', endTag: 'never', selfClosingTag: 'never' }
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [ 'error', 2, { attribute: 2, baseIndent: 1, closeBracket: 2, alignAttributesVertically: false }],
    'vue/html-quotes': [ 'error', 'double', { avoidEscape: false }],
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'never', component: 'always' },
        svg: 'any',
        math: 'any'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: Infinity,
        multiline: { max: 1, allowFirstLine: true }
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/one-component-per-file': 'error',
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': [ 'error', 'shorthand' ],
    'vue/v-on-style': [ 'error', 'shorthand' ],
    'vue/v-slot-style': 'off',

    // priority B: strongly recommended for Vue 3
    'vue/require-explicit-emits': [ 'error', { allowProps: false }],

    // priority C: recommended
    'vue/attributes-order': 'off',
    'vue/component-tags-order': [ 'error', { order: [ 'template', 'script', 'style' ] }],
    'vue/no-lone-template': [ 'error', { ignoreAccessible: false }],
    'vue/no-multiple-slot-args': 'error',
    'vue/no-v-html': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'extends',
          'parent',
          'name',
          'functional',
          [ 'delimiters', 'comments' ],
          'mixins',
          'inheritAttrs',
          'model',
          [ 'props', 'propsData' ],
          'data',
          [ 'methods', 'computed', 'watch' ],
          'LIFECYCLE_HOOKS',
          [ 'components', 'directives', 'filters' ],
          [ 'template', 'render' ],
          'renderError'
        ]
      }
    ],
    'vue/this-in-template': [ 'error', 'never' ],

    // uncategorized
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase', { registeredComponentsOnly: true }],
    'vue/custom-event-name-casing': [ 'error', 'kebab-case' ],
    'vue/html-comment-content-newline': 'off',
    'vue/html-comment-content-spacing': 'off',
    'vue/html-comment-indent': 'off',
    'vue/match-component-file-name': 'off',
    'vue/new-line-between-multi-line-property': 'off',
    'vue/no-bare-strings-in-template': 'off',
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': 'off',
    'vue/no-reserved-component-names': 'error',
    'vue/no-restricted-block': 'off',
    'vue/no-restricted-call-after-await': 'off',
    'vue/no-restricted-component-options': 'off',
    'vue/no-restricted-custom-event': 'off',
    'vue/no-restricted-props': 'off',
    'vue/no-restricted-static-attribute': 'off',
    'vue/no-restricted-v-bind': 'off',
    'vue/no-static-inline-styles': 'off',
    'vue/no-template-target-blank': 'off',
    'vue/no-unregistered-components': 'off',
    'vue/no-unsupported-features': 'off',
    'vue/no-unused-properties': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': [ 'error', 'always' ],
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'off',
    'vue/script-indent': [ 'off', 2, { baseIndent: 0, switchCase: 0 }],
    'vue/sort-keys': 'off',
    'vue/static-class-names-order': 'off',
    'vue/v-for-delimiter-style': [ 'error', 'in' ],
    'vue/v-on-event-hyphenation': [ 'error', 'always', { autofix: false }],
    'vue/v-on-function-call': [ 'error', 'never' ],

    // extension
    'vue/array-bracket-newline': [ 'error', { multiline: true }],
    'vue/array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'vue/arrow-spacing': [ 'error', { before: true, after: true }],
    'vue/block-spacing': [ 'error', 'always' ],
    'vue/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
    'vue/camelcase': [ 'error', { properties: 'never' }],
    'vue/comma-dangle': [ 'error', 'never' ],
    'vue/comma-spacing': [ 'error', { before: false, after: true }],
    'vue/comma-style': [ 'error', 'last' ],
    'vue/dot-location': [ 'error', 'property' ],
    'vue/dot-notation': [ 'error', { allowKeywords: true, allowPattern: '' }],
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': [ 'error', 'never' ],
    'vue/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'vue/keyword-spacing': [ 'error', { before: true, after: true }],
    'vue/max-len': 'off',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': [ 'error', 'all', { ignoreJSX: 'multi-line', nestedBinaryExpressions: false }],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-restricted-syntax': 'off',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': 'off',
    'vue/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'vue/object-property-newline': 'off',
    'vue/operator-linebreak': [ 'off', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': [ 'error', 'never' ],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': [ 'error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': [ 'error', 'always' ]
  }
};
