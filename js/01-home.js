/////////////////////////////////////////////

// home 

/////////////////////////////////////////////

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($) {
    $.home = {

        init : function() {

            $.home.init_js();
        },

        init_js : function() {

        	console.log('is home');

         
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