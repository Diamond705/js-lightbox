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

    var modalHTML = '';
    showModal = function (that) {
        //   console.log(that);

        //Declare data variables
        var username = that.data('username'),
            // location = that.data('location'),
            imagetext = that.data('imagetext'),
            likes = that.data('likes'),
            dislikes = that.data('dislikes'),
            imagepath = that.data('imagepath'),
            expandedUrl = that.data('url');
        postURL = that.data('posturl');

        maxHeight = $(window).height() - 100;

        if ($('.expanded-wrapper').length === 0) {
            if (typeof imagepath !== 'undefined') {
                modalHtml = "<div class='expanded-wrapper'>";
                modalHtml += "<div class='expanded-modal'><span class='expanded-left'><span class='icons icon-arrow-left6'></span></span><span class='expanded-right'><span class='icons icon-arrow-right6'></span></span>";
                modalHtml += "<div class='container'>";
                modalHtml += "<span class='icons iconscircle-cross close-icon'></span>";
            }
        }


    };

});