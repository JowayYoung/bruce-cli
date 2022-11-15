const { join } = require("path");

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	extends: [
		"standard",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	parser: "@babel/eslint-parser",
	parserOptions: {
		babelOptions: {
			cwd: join(__dirname, "../.."),
			presets: ["@babel/preset-react"]
		},
		ecmaFeatures: { jsx: true },
		ecmaVersion: "latest",
		requireConfigFile: false,
		sourceType: "module"
	},
	plugins: [
		"html",
		"react",
		"react-hooks"
	],
	root: true,
	rules: {
		/* eslint-disable quote-props */
		"eol-last": ["error", "never"],
		"handle-callback-err": ["error", "err"],
		"indent": ["error", "tab"],
		"jsx-quotes": ["error", "prefer-double"], // react
		"lines-between-class-members": ["error", "never"],
		"multiline-ternary": ["off"],
		"no-async-promise-executor": ["off"],
		"no-console": ["off"],
		"no-extend-native": ["off"],
		"no-extra-semi": ["error"],
		"no-new": ["off"],
		"no-proto": ["off"],
		"no-return-assign": ["off"],
		"no-sequences": ["off"],
		"no-tabs": ["off"],
		"no-unreachable": ["off"],
		"no-useless-constructor": ["off"],
		"no-var": ["error"],
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
		"space-before-function-paren": ["error", "never"],
		"switch-colon-spacing": ["error"]
		/* eslint-enable quote-props */
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};