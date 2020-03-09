/*=========================================================================================================================================================
 
 functions.js
 
 
 Index of FUNCTIONS:
 ===================
 
 // #01.00 - PRIMARY NAVIGATION - Hamburger
 // #02.00 - XYZ Function
 
 
 =========================================================================================================================================================*/


//
// #01.00 - PRIMARY NAVIGATION - Hamburger
// --------------------------------------------------
function primaryNavigation() {
    var navWrap = $('#nav-primary-wrap'),
            nav = $('#nav-primary', navWrap),
            burger = $('#burger', navWrap);

    burger.click(function () {
        var burger = $(this);

        // Show Menu
        nav.slideToggle('fast');

        // Change text in Burger
        if (!navWrap.hasClass('open')) {
            $('.label', burger).text('Close');
        }
        else {
            $('.label', burger).text('Menu');
        }

        navWrap.toggleClass('open');
    });
}   // END of primaryNavigation()








// --------------------------------------------------------------------------------------------------------------------------------------------------------
//
//          Harmony Spa Functions
//
// --------------------------------------------------------------------------------------------------------------------------------------------------------


// Swap text
// -------------------------
function swap_text(e) {
    var newText = e.attr('data-text'),
            oldText = e.text();

    // Store previous text in "data-" attribute
    e.text(newText);
    e.attr('data-text', oldText);
}



//
// Mini Search form
// --------------------------------------------------
function miniSearch() {
    jQuery('.searchform .submit').on('click', function(){
        var _this = $(this);

        _this.toggleClass('act');

        if ( _this.hasClass('act') ) {
            // show search input
            $('#header .mini-search .field')
                .show()
                .css('visibility', 'visible')
                .trigger('focus');  
            //$('.searchform input').show().css('visibility', 'visible');  // show search input
        }
        else {
            $('.searchform input').hide();  // hide search input
        }



        return false;
    });
}


//
// Show more Masseurs
// --------------------------------------------------
function showMoreMasseurs() {
    jQuery('#showMore-masseurs').on('click', function(){
        var _this = $(this);

        _this.toggleClass('active');


        if ( _this.hasClass('active') ) {
            $('.more-masseurs').slideDown();
            swap_text(_this);
        }
        else {
            $('.more-masseurs').slideUp();
            swap_text(_this);
        }
    });
}

