jQuery(function($){
    var updateArrows = function(){
        $('.expanded-right').removeClass('disabled');
        $('.expanded-left').removeClass('disabled');
        var curIndex = $('.expanded-carousel.active').data('index');
        updateArrows.nbrOfItems = updateArrows.nbrOfItems || $('.expanded-carousel').length -1;

        curIndex === updateArrows.nbrOfItems && $('.expanded-right').addClass('disabled');
        curIndex === 0 && $('.expanded-left').addClass('disabled');
    };

});