$(function(){$(".wrapSearch p a").on("click",function(){var o=$(this),i=null,n=$(".wrapSearch form"),s=n.css("display");"none"==s?n.slideDown("2000",function(){i=o.css("background-position","0 -17px"),o.on("mouseover focus",function(){i=o.css("background-position","-30px -17px")}),o.on("mouseleave focusout",function(){i=o.css("background-position","0 -17px")})}):n.slideUp("2000",function(){o.css("background-position","0 0")})});var o=1;$(".autoSlider_vis1 .textVis1").eq(0);$(".autoSlider_vis1 .textVis1").eq(0).css({display:"block"});var i=$(".autoSlider_vis1").bxSlider({speed:1e3,pause:1e4,auto:!0,autoControls:!0,controls:!1,pager:!0,onSlideAfter:function(){slideNum=i.getCurrentSlide(),slideNum+=1,$(".autoSlider_vis1 .textVis1").hide(),$(".autoSlider_vis1 .textVis1").eq(slideNum).fadeIn("2000").delay(8e3).fadeOut("2000"),o++}});$(".btnSlide_vis2").bxSlider({auto:!1,autoControls:!1,controls:!0,pager:!0}),$(".autoSlide_vis3").bxSlider({auto:!0,autoControls:!0,controls:!1,pager:!0,minSlides:2,maxSlides:3,slideWidth:325.7});var o=0;$.fn.btnTop=function(){var o=$(this);$(window).on("scroll",function(){var i=$(this),n=i.scrollTop();n<400?o.css({display:"none"}):o.css({display:"block"})}),$(window).scroll()},$(".btnTop").btnTop(),$.fn.moveLnb=function(){var o=$(this);o.on("click",function(i){i.preventDefault;var n=o.index($(this)),s=$(".goLnb").eq(n),e=s.offset().top;$("html, body").animate({scrollTop:e+"px"},{easing:"linear"},1e3)})},$(".lnb>ul>li>a").moveLnb()});