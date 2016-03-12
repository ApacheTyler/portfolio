angular.module('HeaderNav').service('colorsService', [
   
   function () {
       
       this.currentColorIndex = 0;
       
       this.colors = [];
       
       this.addColor = function (newHexValue, newColorName) {
           this.colors.push(
               {
                   hexValue: newHexValue,
                   colorName: newColorName
               }
           );
       };
       
       this.incrementColorIndex = function () {
           this.currentColorIndex += 1;
           var lastAvailableIndex = this.colors.length - 1;
           if (this.currentColorIndex > lastAvailableIndex) {
               this.resetCurrentColorIndex();
           }
       };
       
       this.resetCurrentColorIndex = function () {
           this.currentColorIndex = 0;
       };
       
   }
    
]);