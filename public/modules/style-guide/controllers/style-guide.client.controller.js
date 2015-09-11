angular.module('StyleGuide').controller('StyleGuideController', ['$scope', '$stateParams', 'Atoms', '$log',
	function($scope, $stateParams, Atoms, $log) {
		this.colors = Atoms.colors;
		this.text = Atoms.text;
		$log.log(Atoms.text);
	}
]);