
/////////////////////////////////////////////

// lab 

/////////////////////////////////////////////

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($) {
    $.lab = {

        init : function() {

            $.lab.init_js();
        },

        init_js : function() {

        	console.log('is lab');

         
            // $.ajax({
            //     type: "POST",
            //     url: baseUrl + '/wp-admin/admin-ajax.php',
            //     data: {
            //         action: "get_product_data",
            //         product_id: product_id,
            //     },
            //     success: function(results) {
                    

            //     },
            //     error: function(results) {

            //         alert('Une erreure est survenue.')
            //     }
            // });
        },
    };
}(jQuery));