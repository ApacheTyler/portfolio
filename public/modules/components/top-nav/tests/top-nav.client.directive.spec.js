'use strict';

(function() {
	describe('topNavDirective', function() {
		//Initialize global variables
	    var $compile, 
            $rootScope;
        
		// Load the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));
        
		beforeEach(inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
            $rootScope = _$rootScope_;
		}));
        
        it("should be able to compile the directive", function () {
           var element = $compile("<top-nav></top-nav>");
           $rootScope.$digest();
        });
        
	});
})();