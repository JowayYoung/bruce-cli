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
		"plugin:vue/recommended"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		babelOptions: {
			cwd: join(__dirname, "../..")
		},
		ecmaVersion: "latest",
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
		sourceType: "module"
	},
	plugins: [
		"html",
		"vue"
	],
	root: true,
	rules: {
		/* eslint-disable quote-props */
		"eol-last": ["error", "never"],
		"handle-callback-err": ["error", "err"],
		"indent": ["error", "tab"],
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
		"space-before-function-paren": ["error", "never"],
		"switch-colon-spacing": ["error"],
		"vue/component-definition-name-casing": ["error", "kebab-case"], // vue
		"vue/component-tags-order": ["error", { order: ["template", "style", "script"] }], // vue
		"vue/html-indent": ["error", "tab"], // vue
		"vue/html-self-closing": ["off"], // vue
		"vue/max-attributes-per-line": ["off"], // vue
		"vue/multi-word-component-names": ["off"], // vue
		"vue/mustache-interpolation-spacing": ["error", "never"], // vue
		"vue/singleline-html-element-content-newline": ["off"] // vue
		/* eslint-enable quote-props */
	}
};