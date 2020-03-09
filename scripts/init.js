//
// CONSOLE LOG - Fix for IE <=9 (IE donesn't have concole object, which couses Bug alert windows)
// --------------------------------------------------
if (typeof console == 'undefined') {
    this.console = {log: function () {}};
}




/*=========================================================================================================================================================
 
 #01.00 - EXECUTE when DOM is READY
 
 =========================================================================================================================================================*/

$(function () {

    // GENERAL functions
    // -------------------------	
    
    // Primary navigation (Hamburger menu)
    //primaryNavigation();


    // Search - Form in Header
    //miniSearch();


    // Initialize WOW.js Scrolling Animations
    // Initialize animations only on tablets and desktops
    new WOW().init();

/*
    if ( $( window ).width() >= 768 ) {
        new WOW().init();
    }
*/


    // Page #00 - HOMEPAGE
    // -------------------------
    //ModalWindow.init();
    

}); // End of DOM ready

