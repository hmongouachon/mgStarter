






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
        

});