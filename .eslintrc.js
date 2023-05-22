module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
	extends: [
		'standard-with-typescript',
		'airbnb-base',

		{
			'plugin': 'eslint:recommended',
		}
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		"sourceType": "module",
	},
	rules: {
	}
}



