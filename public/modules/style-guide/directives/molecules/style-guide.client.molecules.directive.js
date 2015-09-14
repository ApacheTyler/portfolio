angular.module('StyleGuide').directive('styleguideMolecules',
	function() {
		return{
			restrict: 'E',
			templateUrl: 'modules/style-guide/directives/molecules/style-guide.client.molecules.directive.view.html',
			scope: {},
			controllerAs: 'StyleGuideMolecules',
			controller: function($scope, Atoms){
				
			}
		}
	}
);