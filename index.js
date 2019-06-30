
$(function () {

    $('.text-left').hide();
    $('.div-intro').hide();
    $('.right-content').hide();
    $('.div-center').hide();

    var leftContent = false;
    var rightContent = false;

    $('.door').click(function () {
        $('.door').toggleClass('doorOpen');
        if (!leftContent) {
            setTimeout(function () { $('.text-left').show(); }, 300);
            if (!rightContent) {
                setTimeout(function () { $(".div-intro").show(); }, 200);
            } else {
                setTimeout(function () { $(".div-center").show(); }, 200);
            }

            $('.cover-images').hide();
            leftContent = true;
            return;
        }
        leftContent = false;
        setTimeout(function () { 
            $('.div-center').hide();
            $('.cover-images').show(); 
            $('.div-intro').hide();
        }, 300);
        $(".text-left").hide();
        
    });

    $('.div-intro').click(function () {
        rightContent = true;
        $('.right-content').show();
        $('.right-content').toggleClass('right-content-open');
        $("right-content").css("left", "100%!important");

        if (leftContent) {
            $(".div-intro").hide();
            $('.div-center').show();
        } else {
            $(".div-intro").hide();
            $('.cover-images').show();
        }
    });

    $('.right-content').click(function () {
        rightContent = false;
        setTimeout(function () { $('.div-center').hide(); }, 300);
        setTimeout(function () { $('.right-content').hide(); }, 400);
        setTimeout(function () { $(".div-intro").show(); }, 300);
        $('.right-content').toggleClass('right-content-open');

        if (!leftContent) {
            setTimeout(function () { $('.cover-images').hide(); }, 300);
        }

    });


});