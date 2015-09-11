'use strict';

// Setting up route
angular.module('StyleGuide').config(['$stateProvider',
	function($stateProvider) {
		// StyleGuide state //
		$stateProvider
			.state('style', {
				url: '/style-guide',
				templateUrl: 'modules/style-guide/views/style-guide.client.view.html',
				controllerAs: 'StyleGuide',
				controller: 'StyleGuideController'
			})
	}
]);