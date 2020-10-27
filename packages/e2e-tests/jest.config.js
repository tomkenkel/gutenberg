module.exports = {
	...require( '@wordpress/scripts/config/jest-e2e.config' ),
	bail: true,
	setupFiles: [ '<rootDir>/config/gutenberg-phase.js' ],
	setupFilesAfterEnv: [
		'<rootDir>/config/setup-test-framework.js',
		'@wordpress/jest-console',
		'@wordpress/jest-puppeteer-axe',
		'expect-puppeteer',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/wordpress/',
		'e2e-tests/specs/experiments/',
		'e2e-tests/specs/performance/',
	],
};
