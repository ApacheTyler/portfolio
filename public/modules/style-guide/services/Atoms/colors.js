'use strict';//

//Colors service for atomic/atoms/colors
angular.module('StyleGuide').service('Colors',
	function() {
		
		var createSelectedColors = function(colors){
			var selectedColors = {}
			Object.keys(colors).forEach(function(color){
				var selectedColor = 'selected ' + color;
				selectedColors[selectedColor] = selectedColor;
			})
			return selectedColors;
		}
		
		this.baseColors = {
			yellow: 'yellow',
			green: 'green',
			pink: 'pink',
			blue: 'blue'
		}
		
		this.selectedColors = createSelectedColors(this.baseColors);
		
		this.colors = [
			'yellow',
			'selected yellow',
			'green',
			'selected green',
			'pink',
			'selected pink',
			'blue',
			'selected blue'	
		];
		
		return{
			baseColors: this.baseColors,
			selectedColors: this.selectedColors,
			colors: this.colors
		}
	}
);