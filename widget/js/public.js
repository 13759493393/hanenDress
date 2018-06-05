$(function(){

    var deviceWidth = document.documentElement.clientWidth;
  	if(deviceWidth > 750){deviceWidth = 750;}
  	fontSize =  (deviceWidth / 7.5)+"px";
    $("html").css('font-size',fontSize);

    /* 新闻分类*/
    var swiper = new Swiper('.news-stype .swiper-container', {
        pagination: '.news-stype .swiper-pagination',
        slidesPerView:3,
        paginationClickable: true,
        spaceBetween:10,
        freeMode: true
    });
	
    /* 返回顶部*/
    $(window).bind("resize scroll", function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >120) {
           $('.back-top').css({visibility: 'visible'});
        } else {
           $('.back-top').css({visibility: 'hidden'});
        }
    });
    $(".back-top").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    })

    /* 导航*/
    $('.index-head span').click(function() {
        if ($('.navmenu').is(":hidden")) {
            $(this).removeClass("open");
            $(this).addClass("close");
            $('body').addClass('scrollstyle');
            $('html').addClass('scrollstyle');
            $('.navmenu').stop(true, false).slideDown();
         }
         else {
            $(this).removeClass("close");
            $(this).addClass("open");
            $('body').removeClass('scrollstyle');
            $('html').removeClass('scrollstyle');
            $('.navmenu').hide();
         }
     })

    /* 产品列表栏目展开*/
    $('.product-stypeList dt').click(function() {
        if ($(this).parent().parent().find("ul").is(":hidden")) {
            $(this).parent().parent().find("ul").stop(true, false).slideDown();
         }
         else {
            $(this).parent().parent().find("ul").hide();
         }
     })
    
});


 
