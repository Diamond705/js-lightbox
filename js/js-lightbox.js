//Determine arrow behaviour based on number of media items
jQuery(function ($) {
    var updateArrows = function () {
        $('.expanded-right').removeClass('disabled');
        $('.expanded-left').removeClass('disabled');
        var curIndex = $('.expanded-carousel.active').data('index');
        updateArrows.nbrOfItems = updateArrows.nbrOfItems || $('.expanded-carousel').length - 1;

        curIndex === updateArrows.nbrOfItems && $('.expanded-right').addClass('disabled');
        curIndex === 0 && $('.expanded-left').addClass('disabled');
    };

    //Display modal settings
    $('.expanded-carousel').on('click', function (e) {
        scrollTo = $('body').scrollTop();
        $('body').addClass('noscroll');
        $('body').css('position', 'fixed');
        $('.expanded-col-1, .expanded-col-2').removeClass('active');
        $(this).addClass('active');
        showModal($(this));
        updateArrows();
    });

});