'use strict';//

//Colors service for atomic/atoms/colors
angular.module('StyleGuide').service('Text',
	function() {
		this.text = [
			'sub-text',
			'cta'
		];
		return{
			text: this.text
		}
	}
);