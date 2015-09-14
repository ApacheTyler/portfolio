angular.module('StyleGuide').directive('styleguideAtoms',
	function() {
		return{
			restrict: 'E',
			templateUrl: 'modules/style-guide/directives/atoms/style-guide.client.atoms.directive.view.html',
			scope: {},
			controllerAs: 'StyleGuideAtoms',
			controller: function($scope, Atoms){
				this.colors = Atoms.colors;
				this.text = Atoms.text;
			}
		}
	}
);