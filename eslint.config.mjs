import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

const tsconfig = tseslint.config({
	files: ['**/*.js', '**/*.ts', '**/*.svelte'],
	extends: [
		js.configs.recommended,
		...tseslint.configs.strictTypeChecked,
		...tseslint.configs.stylisticTypeChecked,
		...svelte.configs['flat/recommended']
	],
	ignores: ['svelte.config.js'],
	languageOptions: {
		globals: globals.browser,
		parser: tseslint.parser,
		parserOptions: {
			project: true,
			tsconfigRootDir: import.meta.dirname,
			extraFileExtensions: ['.svelte']
		}
	}
});

const svelteConfig = tseslint.config({
	files: ['**/*.svelte'],
	extends: [...svelte.configs['flat/recommended']],
	languageOptions: {
		parser: svelteParser,
		parserOptions: { parser: tseslint.parser }
	}
});

const jsConfig = {
	files: ['**/*.js'],
	rules: { '@typescript-eslint/explicit-function-return-type': 'off' }
};

const configConfig = {
	files: ['**/*.config.*'],
	rules: { '@typescript-eslint/naming-convention': 'off' }
};

export default [
	{
		ignores: ['.svelte-kit/*', '.vercel/*', 'node_modules']
	},
	...tsconfig,
	...svelteConfig,
	jsConfig,
	configConfig
];
