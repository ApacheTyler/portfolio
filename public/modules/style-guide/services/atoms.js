'use strict';

angular.module('StyleGuide').factory('Atoms', ['Colors', 'Text',
	function(Colors, Text) {
		var colors = Colors.colors;
		var text = Text.text;
		return{
			colors: colors,
			text: text
		}
	}
]);