$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });


});

$(function () {
    //클래스 .menu_btn인 a 태그를 클릭할시 발생되게 하는 이벤트

    $(".menu_btn").click(function (event) {

        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500)
    });
    //$(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동
    //500은 스크롤 이동


   
});
$(function(){
    var burger = $('.menu-trigger');

    burger.each(function(index){
      var $this = $(this);
      
      $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
      })
    });
});

$(function(){
    $(".menu-trigger").click(function(){
        $('.menu2>ul').toggle(300);
        $('.menu2>ul').animate({
            marginRight : 0
        },200);
    })
});



