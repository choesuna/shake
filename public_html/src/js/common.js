$(function(){
	
	/***상단 서치 버튼 보였다 숨기기***/
	//$(function(){
		$(".wrapSearch p a").on("click",function(){
			var th = $(this);
			var openA  = null;
			var downForm = $(".wrapSearch form");
			var sForm = downForm.css("display");
			if(sForm == "none"){
				downForm.slideDown("2000", function(){
					openA = th.css("background-position","0 -17px");
					th.on("mouseover focus", function(){
						openA = th.css("background-position","-30px -17px");
					}); 
					th.on("mouseleave focusout", function(){
						openA = th.css("background-position","0 -17px");
					});
				});
			}else{
				downForm.slideUp("2000", function(){
					th.css("background-position","0 0");
				});
			}
		});
	//});
	
	/***bxSlider***/
	var i = 1;
	var beforeTextZone = $(".autoSlider_vis1 .textVis1").eq(0);
	$(".autoSlider_vis1 .textVis1").eq(0).css({display:"block"});
	var autoSlider_vis1 = $(".autoSlider_vis1").bxSlider({speed:1000,pause:10000,auto:true, autoControls: true, controls:false, pager:true, onSlideAfter:function(){
		slideNum = autoSlider_vis1.getCurrentSlide();
		slideNum += 1;
		$(".autoSlider_vis1 .textVis1").hide();
		$(".autoSlider_vis1 .textVis1").eq(slideNum).fadeIn("2000").delay(8000).fadeOut("2000");
		i++;
		}
	});
	$(".btnSlide_vis2").bxSlider({auto:false, autoControls: false, controls:true, pager:true});
	$(".autoSlide_vis3").bxSlider({auto:true, autoControls: true, controls:false, pager:true, minSlides:2, maxSlides:3, slideWidth: 325.7});


	/***탑버튼 움직이기***/
	var i = 0;
	$.fn.btnTop = function(){
		var th = $(this);
		$(window).on("scroll", function(){
			var myTh = $(this)
			//console.log(posScroll);
			var posScroll = myTh.scrollTop();//윈도우에서 스크롤 위치 값 구하기
			if(posScroll < 400){
				th.css({display:"none"});
			}else{
				th.css({display:"block"});
			}
		});
		$(window).scroll();
	};
	$(".btnTop").btnTop();

	/***메뉴 클릭했을 때 위치로 이동***/
	$.fn.moveLnb = function(){
		var th = $(this);
		th.on("click", function(e){
			e.preventDefault;
			var idx = th.index($(this));
			var goLnbA = $(".goLnb").eq(idx);
			var top = goLnbA.offset().top;
			$("html, body").animate({scrollTop:top + "px"},{ easing:"linear"},1000);
		});
	};
	$(".lnb>ul>li>a").moveLnb();
	
	
	

});