

$( document ).ready(function() {

    $('.form__btn').click(function() {
        $('.mail__letter').toggleClass('move');
        $('.mail__top').toggleClass('closed');
        $('.form__btn--invisible').toggleClass('visible');
        $('.form__btn--visible').toggleClass('invisible');
        $('.form_contact').toggleClass('invisible');

    });

    $('input').focus(function() {
        $(this).parent().addClass('active');
        $('input').focusout(function() {
            if($(this).val() == '') { $(this).parent().removeClass('active');
            } else { $(this).parent().addClass('active');
            }
        })
    });

    var position = $('.scroll').scrollTop();

// should start at 0

    $('.scroll').scroll(function() {
        var scroll = $('.scroll').scrollTop();
        if(scroll > position) {
            console.log('scrollDown');
        } else {
            console.log('scrollUp');
        }
        position = scroll;
    });

});

