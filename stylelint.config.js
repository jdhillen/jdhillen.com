import stylelintConfig from '@jdhillen/stylelint-config';

// Project-specific overrides for Nuxt/Vue/SCSS compatibility
const customRules = {
  // Allow special selectors for Nuxt framework
  'selector-id-pattern': null,

  // Allow @extend with regular classes (for .box-shadow, etc.)
  'scss/at-extend-no-missing-placeholder': null,

  // Allow empty blocks in Vue components
  'block-no-empty': null,

  // Override nesting depth for complex components
  'max-nesting-depth': 5,

  // Allow variable naming patterns used in the project
  'scss/dollar-variable-pattern': null,

  // Vendor files exceptions
  'number-max-precision': null,
  'no-descending-specificity': null,

  // Allow custom functions
  'function-no-unknown': [
    true,
    {
      ignoreFunctions: ['black', 'white', 'mix', 'shade', 'tint']
    }
  ]
};

export default {
  ...stylelintConfig,
  rules: {
    ...stylelintConfig.rules,
    ...customRules
  }
};
