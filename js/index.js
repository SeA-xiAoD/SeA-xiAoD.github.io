/*
 * @Author: omtech.cn
 * @Date: 2018-05-31 10:06:18
 * @Last Modified by: Doris.Lee
 * @Last Modified time: 2019-12-14 14:01:52
 */

$(function () {

    /*=====================
      opening 寮€鍦哄姩鐢�
    =====================*/
    if($('.opening').length > 0) {
        // 绂佹婊氬姩
        $('body').css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
        setTimeout(function () { $('.opening-box').fadeIn(); }, 800);
        $('.opening .line').animate({ opacity: '0.5' }, 0);
        $('.opening .line').delay(800).animate({ left: '2000px' }, 1000);
        $('.opening .open-bg-3').delay(800).animate({ left: '2000px' }, 1000);
        $('.opening .line-short').delay(1500).fadeIn();
        $('.opening .title').delay(1500).fadeIn();
        // 寮€鍦洪€€鍑�
        setTimeout(function () {
            $('.opening').fadeOut();
            // 鍙栨秷绂佹婊氬姩
            $('body').css({
                "overflow-x": "auto",
                "overflow-y": "auto"
            });
            $('html, body').animate({ scrollTop: 0 }, 0);
        }, 2500);
    }

    /*=====================
      header 瀵艰埅
    =====================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });

    /*=====================
      banner 杞挱
    =====================*/
    // var banner = $('.banner');
    // banner.slide({
    //     titCell: '.dot span',
    //     mainCell: '.carousel-inner ul',
    //     effect: 'leftLoop',
    //     autoPlay: true,
    //     vis: 1,
    //     scroll: 1,
    //     interTime: 5000
    // });
    // banner.hover(function () {
    //     $(this).find('.prev').css('left', 0);
    //     $(this).find('.next').css('right', 0);
    // }, function () {
    //     $(this).find('.prev').css('left', '-50px');
    //     $(this).find('.next').css('right', '-50px');
    // });

});