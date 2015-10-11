'use strict';

module.exports = {
	app: {
		title: 'Portfolio',
		description: 'Tyler Freeman, Personal Portfolio',
		keywords: 'Tyler, Freeman, Personal, Portfolio'
	},
	port: process.env.PORT || 8080,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/components-font-awesome/css/font-awesome.min.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-aria/angular-aria.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-material/angular-material.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/aungular-ui-bootstrap/angular-ui-bootstrap.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/lib/angular-material/angular-material.css',
			'public/styles/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js',
			'public/modules/*/*[!tests]*/**/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
