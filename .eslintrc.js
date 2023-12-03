module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: '5',
    sourceType: 'module',
  },
  plugins: ['react', '@stylistic/js'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    // '@typescript-eslint/member-delimiter-style': [
    //    'warn',
    //    { multiline: { delimiter: 'none' } },
    //  ],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/indent': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],
    //'@stylistic/js/indent': ['error', 2],
    '@typescript-eslint/semi': ['error', 'always'],
    '@stylistic/js/multiline-ternary': ['warn', 'always-multiline'],
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
    'multiline-ternary': ['warn', 'always-multiline'],
  },
};
