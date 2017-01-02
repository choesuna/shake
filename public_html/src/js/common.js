$(function(){
	$(".wrapSearch p a").on("click",function(){
		$(".wrapSearch form").slideToggle();	
	});
	$(".autoSlider_vis1").bxSlider({auto:true, autoControls: true, controls:false, pager:true});

});