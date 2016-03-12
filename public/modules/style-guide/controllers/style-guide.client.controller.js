angular.module('StyleGuide').controller('StyleGuideController', ['$state', 'Atoms', '$log',
	function($state, Atoms, $log) {
		this.currentState = $state.current.name;
	}
]);