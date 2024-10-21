/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
	addWebpackAlias({
		'@components': path.resolve(__dirname, 'src/components'),
		'@assets': path.resolve(__dirname, 'src/assets'),
		'@utils': path.resolve(__dirname, 'src/utils'),
	})
);
