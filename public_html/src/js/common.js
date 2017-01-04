$(function(){
	var i = 1;
	var beforeTextZone = $(".autoSlider_vis1 .textVis1").eq(0);
	$(".wrapSearch p a").on("click",function(){
		$(".wrapSearch form").slideToggle("2000");	
	});
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
	
	
	

});