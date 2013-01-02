
define([ 'jquery'
        , 'libs/jquery.cookie'
        , 'libs/jquery.event.move'
        , 'libs/jquery.event.swipe'
        , 'libs/foundation/jquery.foundation.accordion'
        , 'libs/foundation/jquery.foundation.alerts'
        , 'libs/foundation/jquery.foundation.buttons'
        , 'libs/foundation/jquery.foundation.clearing'
        , 'libs/foundation/jquery.foundation.forms'
        , 'libs/foundation/jquery.foundation.joyride'
        , 'libs/foundation/jquery.foundation.magellan'
        , 'libs/foundation/jquery.foundation.mediaQueryToggle'
        , 'libs/foundation/jquery.foundation.navigation'
        , 'libs/foundation/jquery.foundation.orbit'
        , 'libs/foundation/jquery.foundation.reveal'
        , 'libs/foundation/jquery.foundation.tabs'
        , 'libs/foundation/jquery.foundation.tooltips'
        , 'libs/foundation/jquery.foundation.topbar'
        , 'libs/jquery.offcanvas'
        , 'libs/jquery.placeholder'
        , 'libs/foundation/modernizr.foundation'
        , 'libs/foundation/foundation.min'
        ], function($) {
    
    var initialize = function() {
        
        'use strict';
        
        console.log( 'CLIENT | Init' );
        
        var $doc = $(document),
            Modernizr = window.Modernizr;
        
        $(document).ready(function() {
            
            console.log( 'CLIENT | DOM Ready' );
            
            // Stretch the page container's height to the full height of the browser canvas
            $('div#page').height( $doc.height() - $('div#page').offset().top );
            
            $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
            $.fn.foundationButtons          ? $doc.foundationButtons() : null;
            $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
            $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
            $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
            $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
            $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
            $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
            $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
            $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
            $.fn.foundationClearing         ? $doc.foundationClearing() : null;
            $.fn.placeholder                ? $('input, textarea').placeholder() : null;
            
            console.log($.foundationAccordion);
            
        }); // jQuery DOM ready
        
        // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
        // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
        // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
        // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
        // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
        
        // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
        if (Modernizr.touch && !window.location.hash) {
            $(window).load(function () {
                setTimeout(function () {
                    window.scrollTo(0, 1);
                }, 0);
            });
        }
        
    };
    
    return {
        initialize: initialize
    };
    
});