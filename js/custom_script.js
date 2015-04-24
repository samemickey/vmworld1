jQuery('document').ready(function () {
    var IE = (!!window.ActiveXObject && +(/msie\s(\d+)/i.exec(navigator.userAgent)[1])) || NaN;
    if (IE < 9) {
        document.documentElement.className += ' lt-ie9' + ' ie' + IE;
    }

    setElements();
    sidebarArrow();


    /*SCROLL SIDE BAR*/

    jQuery(window).scroll(function () {
        var height = jQuery(window).scrollTop();
        var setTop;
        if (jQuery(window).width() > 1024) {
            setTop = jQuery('.headWrap').height() + jQuery('.navbar').height();
        } else {
            setTop = jQuery('.navbar').height()
        }
        if (height > setTop) {
            jQuery('.sideBar').css({
                position: 'fixed',
                top: 0
            });
        } else {
            jQuery('.sideBar').css({
                position: 'absolute'
            });
            setElements();
        }
    });
});

jQuery(window).resize(function () {

    if (jQuery(window).width() > 1024) {
        jQuery('.sideBar, .sideBar ul').removeClass('open').removeAttr('style');
        jQuery('.sidebarContent').addClass('sidebarShadowNA');
        jQuery('.sideBarArrow a').removeClass('fa-caret-right').addClass('fa-caret-left');
    }
    setElements();
})

function setElements() {
    /*SIDE BAR*/
    if (jQuery('.sideBar').length) {
        if (jQuery(window).width() > 1007) {
            var contentPost = jQuery('.contentWrapper').position();
            jQuery('.sideBar').css('top', contentPost.top + 40);
        } else {
            var contentPost = jQuery('.navbar-toggle').position();
            jQuery('.sideBar').css('top', contentPost.top + +jQuery('.navbar-toggle').outerHeight() + 2);
        }

        /* HeroTEXT*/
        var logoPost = jQuery('.headerWrapper .logoWrap').position();
        jQuery('.heroText').css('left', logoPost.left);
        if (jQuery(window).width() < 750) {
            jQuery('.heroText').removeAttr('style');
        }
    }
}

function sidebarArrow() {
    jQuery('.sideBarArrow').on('click', function (e) {
        e.preventDefault();

        if (jQuery(window).width() < 1025) {
            if (jQuery('.sideBar').hasClass('open')) {
                jQuery(this).parent().removeClass('open');
                jQuery('.sidebarContent ul').show();
                jQuery('.sidebarContent ul').animate({
                    right: "-220px"
                }, 200, function () {
                    jQuery(this).hide();
                });

                jQuery('.sideBarArrow a').removeClass('fa-caret-right').addClass('fa-caret-left');

            } else {
                jQuery(this).parent().addClass('open');
                jQuery('.sidebarContent ul').show().animate({
                    right: "0px"
                }, 300);
                jQuery('.sideBar ul').addClass('sidebarShadow');
                jQuery('.sideBarArrow a').removeClass('fa-caret-left').addClass('fa-caret-right');
            }

        }

    })
}