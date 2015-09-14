'use strict';

// Setting up route
angular.module('StyleGuide').config(['$stateProvider',
	function($stateProvider) {
		// StyleGuide state //
		$stateProvider
			.state('styleGuide', {
				url: '/style-guide',
				templateUrl: 'modules/style-guide/views/style-guide.client.view.html',
				controllerAs: 'StyleGuide',
				controller: 'StyleGuideController'
			})
			.state('atoms', {
				url: '/style-guide/atoms',
				templateUrl: 'modules/style-guide/views/style-guide.client.view.html',
				controllerAs: 'StyleGuide',
				controller: 'StyleGuideController'
			})
			.state('molecules', {
				url: '/style-guide/molecules',
				templateUrl: 'modules/style-guide/views/style-guide.client.view.html',
				controllerAs: 'StyleGuide',
				controller: 'StyleGuideController'
			})
	}
]);