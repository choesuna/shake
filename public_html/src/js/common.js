$(function(){
	$(".wrapSearch p a").on("click",function(){
		$(".wrapSearch form").slideToggle();	
	});
	$(".autoSlider_vis1").bxSlider({auto:true, autoControls: true, controls:false, pager:true});
	$(".btnSlide_vis2").bxSlider({auto:false, autoControls: false, controls:true, pager:true});
	$(".autoSlide_vis3").bxSlider({auto:true, autoControls: true, controls:false, pager:true, minSlides:2, maxSlides:3, slideWidth: 325.7});
	
	
	

});