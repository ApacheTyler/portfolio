'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state //
		$stateProvider.
		state('landing', {
			url: '/landing',
			templateUrl: 'modules/landing/views/landing.client.view.html'
		})
	}
]);