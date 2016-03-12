'use strict';

// Configuring the Articles module
angular.module('HeaderNav').run(['Menus',
	function(Menus) {
		// Set top bar menu items
        var headerNavMenuId = 'headernav'
        Menus.addMenu(headerNavMenuId, true);
		Menus.addMenuItem(headerNavMenuId, 'About', 'about');
        Menus.addMenuItem(headerNavMenuId, 'Resume', 'resume');
        Menus.addMenuItem(headerNavMenuId, 'Work', 'work');
        Menus.addMenuItem(headerNavMenuId, 'Experience', 'experience');
        Menus.addMenuItem(headerNavMenuId, 'Contact', 'contact');
	}
]);