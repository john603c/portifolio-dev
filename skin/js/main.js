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
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $("#social-container .social-list li").hover(function(){
        $(this).toggleClass("animate__animated animate__bounce")
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