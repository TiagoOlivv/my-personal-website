module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
	rules: {
		'max-len': [
			'error',
			{
				code: 80,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/forbid-prop-types': 'off',
	},
}
