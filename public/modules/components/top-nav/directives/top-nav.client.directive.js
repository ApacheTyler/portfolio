angular.module('HeaderNav').directive('topNav',
	function() {
		return{
			restrict: 'E',
			templateUrl: 'modules/components/top-nav/directives/top-nav.client.directive.view.html',
			scope: {},
			controllerAs: 'HeaderNav',
			controller: function(Menus, colorsService){
			     this.menu = Menus.getMenu('headernav');
			}
		}
	}
);