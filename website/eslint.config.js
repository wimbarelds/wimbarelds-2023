import tsParser from '@typescript-eslint/parser';
import solid from 'eslint-plugin-solid';
import prettier from 'eslint-plugin-prettier';
import ts from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      solid,
      prettier,
      '@typescript-eslint': ts,
      ts,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'solid/reactivity': 'error',
      'solid/no-destructure': 'error',
      'solid/jsx-no-undef': 'error',
      'solid/prefer-show': 'error',
      'prettier/prettier': 'error',
    },
  },
];
