/**
 * Created by Administrator on 2017/5/20.
 */
$(function () {
    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function (i,item) {
            var $item = $(item);
            var aaa = isSmallScreen ? $item.data('img-xm') : $item.data('img-lg');
            $item.css('backgroundImage','url("'+aaa+'")');
            if(isSmallScreen){
                $item.html('<img src="'+aaa+'">')
            }else{
                $item.empty();
            }
        });
    }
$(window).on("resize",resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    var $ulcontainer = $('.nav-tabs');
    var width = 30;
    $ulcontainer.children().each(function (i, e) {
        width+=e.clientWidth;
    });
    if(width > $(window).width()){
        $ulcontainer.css('width',width).parent().css('overflow-x','scroll');
    }


    var $newstitle = $('.news-title');
    $('.aa').on('click', function () {
        var $this = $(this);
        var title = $this.data('title');
        $newstitle.text(title);
    });


    //手机触摸事件
    var tachstartx;
    var tachendx;
    //var t = Math.abs(tachstartx - tachendx);
    var $carousel = $('.carousel');
    $carousel.on('touchstart', function (e) {
        tachstartx = e.originalEvent.touches[0].clientX;
    });
    $carousel.on('touchmove', function (e) {
        tachendx = e.originalEvent.touches[0].clientX;
    });
    $carousel.on('touchend', function () {
        var distance = Math.abs(tachstartx - tachendx);
       //console.log(tachstartx > tachendx ? 'a':'b') ;
        if(distance > 100){
            $(this).carousel(tachstartx > tachendx ? 'next':'prev');
        }

    })


    //手机触摸事件

});