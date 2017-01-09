(function(){
	
	/***회원가입 체크되고 다음 넘어가기***/
	$(function(){
		var th = $(this);
		var $chkForm = $("form .agreeChk").find(":checkbox");
		var joinSubmit = $("form .join input[type=submit]").on("click", function(){
			if($($chkForm[0]).is(":checked") == false || $($chkForm[1]).is(":checked") == false){
				alert("회원가입 약관에 동의 해주세요");
			};
		});
	});

	$(function(){

		/***상단 서치 버튼 토글***/
		var $openA  = null;
		var $schForm = $(".wrapSearch > form");
		var $sForm = $schForm.attr("display");
		var $btnA = $(".wrapSearch p a");
		var bP = "background-position";
		//th.css("background-position","0 0");//화이트큐
		//th.css("background-position","-17px 0");//블랙큐
		//th.css("background-position","0 -17px");//화이트엑스
		//th.css("background-position","-30px -17px");//블랙엑스
		/***서치 슬라이드 토글, 백그라운드 이미지 변경***/
		var aClick = function (){
			var th = $(this);
			$schForm.slideToggle("2000", function(){
				if($schForm.is(":hidden")){
					th.css(bP,"0 0");//화이트큐
				}else if($schForm.is(":visible")){
					th.css(bP,"0 -17px");//화이트엑스
				}
			});
		}
		$(".wrapSearch p a").on({"click ":  aClick });


		/***서치 슬라이드 마우스 오버, 백그라운드 이미지 변경***/
		var hA = function(){
			var th = $(this);
			if($schForm.is(":hidden")){
				th.css(bP,"-30px 0");//블렉큐
			}else if($schForm.is(":visible")){
				th.css(bP,"-30px -17px");//블렉엑스
			}
		}	
		$(".wrapSearch p a").on({"mouseover": hA}); 

		/***서치 슬라이드 마우스 리브, 백그라운드 이미지 변경***/
		var lA = function(){
			var th = $(this);
			if($schForm.is(":hidden")){
				th.css(bP,"0 0");//화이트큐
			}else if($schForm.is(":visible")){
				th.css(bP,"0 -17px");//화이트엑스
			}
		}
		$(".wrapSearch p a").on({"mouseleave": lA});

	});	


				


	/***bxSlider***/
	$(function(){
		/***비주얼1 슬라이드***/
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
		
	

		/***비주얼2,3 슬라이드***/
		$(".btnSlide_vis2").bxSlider({auto:false, autoControls: false, controls:true, pager:true});
		$(".autoSlide_vis3").bxSlider({auto:true, autoControls: true, controls:false, pager:true, minSlides:2, maxSlides:3, slideWidth: 325.7});

	});	

	$(function(){
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
	});	//문서 로딩되고 나서 실행


		
}());//지역변수로 만드려고	

