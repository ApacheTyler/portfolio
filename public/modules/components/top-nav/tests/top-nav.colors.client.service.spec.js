'use strict';

(function() {
	describe('colorsService', function() {
		//Initialize global variables
	    var colorService;
        
		// Load the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));
		beforeEach(inject(function(colorsService) {
			colorService = colorsService;
		}));

		it('should be injectable', function() {
			expect(colorService).toBeTruthy();
		});
        
        it('should always have 0 as current index when no colors are added', function () {
            colorService.incrementColorIndex();
            expect(colorService.currentColorIndex).toEqual(0);
        });
        
         it('should always have the first element when next index is out of bounds', function () {
            addColorsToColorArray();
            colorService.incrementColorIndex();
            expect(colorService.currentColorIndex).toEqual(1);
        });
        
        it('should set the color index to the next available element in the array', function () {
            addColorsToColorArray();
            colorService.incrementColorIndex();
            colorService.incrementColorIndex();
            expect(colorService.currentColorIndex).toEqual(0); 
        });
        
        it('should set color index to 0', function () {
           addColorsToColorArray();
           colorService.resetCurrentColorIndex();
           expect(colorService.currentColorIndex).toEqual(0);
        });
        
        it('should add colors to the colors array', function () {
           addColorsToColorArray();
           expect(colorService.colors[0]).toEqual(firstColor);
           expect(colorService.colors[1]).toEqual(secondColor);
        });
        
        var firstColor = {
               hexValue: 'foo',
               colorName: 'bar'
        };
        var secondColor = {
            hexValue: 'baz',
            colorName: 'qux'
        };
        
        var addColorsToColorArray = function () {
           colorService.addColor('foo', 'bar');
           colorService.addColor('baz', 'qux');
        }
        
        
	});
})();