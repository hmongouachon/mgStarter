






/////////////////////////////////

// INIT APP

/////////////////////////////////

jQuery(document).ready(function($) {

         
        // init var on dom ready
        home = $('#home');
        lab = $('#lab');
        


		//////////////////////////////////////////////

		//  HOME

		/////////////////////////////////////////////

        
        // if resa block exist
		if( home.length ) {
			$.home.init();
		};


		/////////////////////////////////

        // LAB / BLOG

		/////////////////////////////////

		if( lab.length ) {
			$.lab.init();
		}


		////////////////////////////////

		// helpers

		////////////////////////////////

		// this will outline element that make scrollbar horizontal extra space bug 
		[].forEach.call($$("*"), function(a) {
		  a.style.outline =
		    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
		});
        

        

});
















// (function ($, root, undefined) {
	
// 	$(function () {
		
// 		'use strict';
		
// 		// DOM ready, take it away
		
// 	});
	
// })(jQuery, this);
