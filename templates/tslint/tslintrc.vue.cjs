const { cwd } = require("process");

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	extends: [
		"standard-with-typescript",
		"plugin:vue/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		createDefaultProgram: true,
		ecmaVersion: "latest",
		extraFileExtensions: [".vue"],
		parser: "@typescript-eslint/parser",
		project: "tsconfig.json",
		sourceType: "module",
		tsconfigRootDir: cwd()
	},
	plugins: [
		"html",
		"vue",
		"@typescript-eslint"
	],
	root: true,
	rules: {
		/* eslint-disable quote-props */
		"@typescript-eslint/indent": ["error", "tab"], // ts
		"@typescript-eslint/no-confusing-void-expression": ["off"], // ts
		"@typescript-eslint/no-dynamic-delete": ["off"], // ts
		"@typescript-eslint/no-inferrable-types": ["off"], // ts
		"@typescript-eslint/no-misused-promises": ["off"], // ts
		"@typescript-eslint/no-unused-vars": ["error"], // ts
		"@typescript-eslint/quotes": ["error", "double"], // ts
		"@typescript-eslint/semi": ["error", "always"], // ts
		"@typescript-eslint/space-before-function-paren": ["error", "never"], // ts
		"@typescript-eslint/strict-boolean-expressions": ["off"], // ts
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