$(document).ready(function(){

    $("#header").addClass("closed");

    $(".close-menu i").click(function(){
        $("#header").addClass("closed");
        $("#main-mask").removeClass("active");
    });

    $("#menu-icon").click(function(){
        $("#header").addClass("open").removeClass("closed");
        $("#main-mask").addClass("active");
    });

    $("#skills-container .banner-list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $("#exp-container .exp-list li").hover(function(){
        $(this).toggleClass("animate__animated animate__rubberBand")
    });

    $(window).scroll(function() {
		if ($(this).scrollTop()) {
			$('.backTop').fadeIn();
            $('#menu-icon').fadeIn();
		} else {
			$('.backTop').fadeOut();
            $('#menu-icon').fadeOut();
		}
	});

	$(".backTop").click(function () {
	   $("html, body").animate({scrollTop: 0}, 100);
	});
});