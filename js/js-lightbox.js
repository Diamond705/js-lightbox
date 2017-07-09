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
                modalHtml += "<div class='expanded-scrollbox' style='max-height:" + maxHeight + "px'><div class='expanded-modal-image'>";
                modalHtml += "<img src='" + imagepath + "' alt='expanded image'>";
                modalHtml += "</div>";
                modalHtml += "<div class='expanded-modal-text'>";
                modalHtml += "<span class='expanded-modal-username'><a href='" + postURL + "'>" + username + "</a> </span>";
                modalHtml += "<span class='expanded-item-modal-likes'>";
                modalHtml += "<ul class='list-inline'>";
                modalHtml += "<li>";

                modalHtml += "<span class='icons icon-arrow-up2'></span>";
                modalHtml += "<a href='" + postURL + "'>" + likes + "</a>";
                modalHtml += "</li>";
                modalHtml += "<li>";


                modalHtml += "<span class='icons icon-arrow-down2'></span>";
                modalHtml += "<a href='" + postURL + "'>" + dislikes + "</a>";
                modalHtml += "</li>";

                modalHtml += "</ul>";


                modalHtml += "</span>";
                modalHtml += "<span class='expanded-modal-imagetext'>";
                modalHtml += "<p>" + imagetext + "</p>";
                modalHtml += "</span></div></div></div></div></div>";
                $('body').append(modalHtml).fadeIn(2500);
            }
        }


    };

    $('body').on('click', '.expanded-wrapper', function (e) {
        if ($(e.target).hasClass('.expanded-wrapper')) {
            removeModal();
        }
    });
    $('body').on('click', '.expanded-modal .iconscircle-cross', function (e) {
        removeModal();
    });

    var removeModal = function () {
        $('body').find('.expanded-wrapper').remove();
        $('body').removeClass('noscroll');
        $('body').css('position', 'static');
        $('body').animate({
            scrollTop: scrollTo
        }, 0);
    };

    // Avoid break on small devices
    var expandedScrollMaxHeight = function() {
        if ($('.expanded-scrollbox').length) {
            maxHeight = $(window).height()-100;
            $('.expanded-scrollbox').css('max-height',maxHeight+'px');
        }
    }

});