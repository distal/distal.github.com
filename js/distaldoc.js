;
(function ($) {

    $(function(){

        // fix sub nav on scroll
        var $win = $(window),
        $body = $('body'),
        $navbar = $('.dont-leave'),
        navbarHeight = $('.dont-leave').first().height(),
        navbarTop = $('.dont-leave').length && $('.dont-leave').offset().top,
        marginTop = parseInt($body.css('margin-top'), 10),
	$navlist = $('.nav-list'),
	$parent = $navbar.parent();
        isFixed = 0;

/*	setTimeout(function () {
     		$('.distal-docs-nav-list').affix({
        		offset: {
        	  	top: 17,
        		bottom: 270
       		 	}
      		})
    	}, 100)
*/
        processScroll();
	copyWidth();
        $win.on('scroll', processScroll);
	$win.on('resize', function() { copyWidth()});

	function copyWidth() {
		$navbar.css('width', $parent.css('width'));
	}	

        function processScroll() {
            var scrollTop = $win.scrollTop();

            if (scrollTop >= navbarTop && !isFixed) {
                isFixed = 1;
		//if($navlist.length)
		//  $body.css('margin-top', $navlist.offset().top);
		//else
                  //$body.css('margin-top', marginTop + navbarHeight + 'px');
                $navbar.addClass('distal-navbar-fixed-top');
		copyWidth();
            } else if (scrollTop <= navbarTop && isFixed) {
                isFixed = 0;
                $navbar.removeClass('distal-navbar-fixed-top');
                // $body.css('margin-top', marginTop + 'px');
            }
        }
    });

})(window.jQuery);
