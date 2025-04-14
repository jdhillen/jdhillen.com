import createConfig from '@jdhillen/eslint-config';

// Create config with optional additional folder exclusions
// Note: node_modules, dist, and build are already ignored by default
const config = createConfig({
  ignorePaths: [
    '**/.nuxt/**',
    '**/.output/**',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/sw.*',
    '**/coverage/**',
    '**/public/**'
  ]
});

// Just use your custom config with Nuxt-specific rule overrides
export default [
  ...config,
  {
    // Override rules that conflict with Nuxt auto-imports
    rules: {
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'no-undef': 'off',
      // Allow unused variables starting with underscore
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
];
