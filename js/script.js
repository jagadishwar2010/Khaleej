$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<5;i++) {
        next=next.next();
        if (!next.length) {
            next=$(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});

$('.download-mobile').click(function(){
    window.location.href = 'contact-us.html';
});

$('.facebook_logo').click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/profile.php?id=100085934982401', '_blank');
    // window.location.href = 'https://www.facebook.com/profile.php?id=100085934982401';
});

$('.linkedin_logo').click(function(e){
    e.preventDefault();
    window.open('https://www.linkedin.com/company/khaleej-business-solutions/', '_blank');
    // window.location.href = 'https://www.linkedin.com/company/khaleej-business-solutions/';
});

$('.twitter_logo').click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/KhaleejBS', '_blank');
    // window.location.href = 'https://twitter.com/KhaleejBS';
});

$(window).on('load resize', function(){
    let width = $('.download-mobile').offset().left - $('.navbar-default').offset().left + $('.download-mobile').width() + 20;
    $('hr').width(width);

    let offset = $('.contact-us-box').offset().left + $('.contact-us-box').width() / 2;
    if ($(window).width() < 936) {
        $('.follow-us').css('left', offset - 80);
    } else {
        $('.follow-us').css('left', offset - 95);
    }
    $('.follow-us').css('position', 'absolute');

    let offset2 = $('.logo-box').offset().top + $('.logo-box').width() / 2;
});

if ($(window).width() < 936) {
    $("<span class='vh'></span>").insertAfter('.logo-box');
    $("<span class='vh'></span>").insertAfter('.text-box');
    $("<span class='vh'></span>").insertAfter('.contact-us-box');
}

$(document).ready(function(){
    let top  = $('.outer-img').offset().top;
    let height = $('.outer-img').height();
    let height2 = $('.inner-img').height();
    $('.inner-img').css('top', - ((height -height2) + 205) );
    $('.inner-img').css('margin', 'auto !important');

});


$('.shippers').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            if (now === 20000) {
                $(this).text(Math.ceil(now).toLocaleString()+'+');
                return;
            }
            $(this).text(Math.ceil(now).toLocaleString());
        }
    });
});

$('.frights-produced').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            if (now === 150) {
                $(this).text(Math.ceil(now).toLocaleString()+'M+');
                return;
            }
            $(this).text(Math.ceil(now).toLocaleString()+'M');
        }
    });
});

$('.frights-forwarded').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            if (now === 300) {
                $(this).text(Math.ceil(now).toLocaleString()+'+');
                return;
            }
            $(this).text(Math.ceil(now).toLocaleString());
        }
    });
});

$('.lines-integrated').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            if (now === 55) {
                $(this).text(Math.ceil(now).toLocaleString()+'+');
                return;
            }
            $(this).text(Math.ceil(now).toLocaleString());
        }
    });
});

$('.logistic-companies').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            if (now === 55) {
                $(this).text(Math.ceil(now).toLocaleString()+'+');
                return;
            }
            $(this).text(Math.ceil(now).toLocaleString());
        }
    });
});

$(document).ready(function() {
    let margin_right = $('.align-items-center').css('padding-right');
    $('.contact-us-form').css('margin-right', margin_right);
    $('.contact-us-form').css('margin-right', '+=2em');
    if (window.location.hash != null && window.location.hash != '')
        $('body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1500);
});