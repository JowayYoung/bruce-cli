module.exports = {
	extends: "stylelint-config-standard",
	rules: {
		/* eslint-disable quote-props */
		"alpha-value-notation": "number",
		"at-rule-empty-line-before": "never",
		"at-rule-no-unknown": [true, { ignoreAtRules: ["content", "each", "error", "extend", "for", "function", "if", "include", "mixin", "return", "while"] }],
		"color-function-notation": "legacy",
		"color-no-invalid-hex": true,
		"comment-empty-line-before": "never",
		"custom-property-empty-line-before": "never",
		"declaration-colon-newline-after": null,
		"declaration-empty-line-before": "never",
		"function-linear-gradient-no-nonstandard-direction": null,
		"function-no-unknown": null,
		"indentation": "tab",
		"max-line-length": null,
		"no-descending-specificity": null,
		"no-empty-source": null,
		"no-missing-end-of-source-newline": null,
		"number-leading-zero": "never",
		"rule-empty-line-before": "never"
		/* eslint-enable quote-props */
	}
};