$(function(){
			var screen_bg=$(".screen_bg");
			var menu=$("nav li");
			var active_menu = $("nav li a")

			menu.click(function(){
				menu.removeClass("active");
				$(this).addClass("active");
			})

		//스크롤시에 현재영역에 해당하는 nav가 active
			var ht=$(window).height();
			$("#wrapper").height(ht);
			$(window).resize(function(){
				var ht=$(window).height();
				$("#wrapper").height(ht);
			})

			$(window).on("scroll",function(){
			var scrollLeft=$(window).scrollLeft();
			// alert(scrollTop);
			var bg1_Left=$("#main").offset().left;
			// alert(bg1_top);
			var bg2_Left=$("#story").offset().left;
			var bg3_Left=$("#product").offset().left;
			var bg4_Left=$("#event").offset().left;
			var bg5_Left=$("#sns").offset().left;

			if(scrollLeft>=0 && scrollLeft<bg1_Left+100){
				menu.removeClass("active");
				menu.eq(0).addClass("active");
			}else if(scrollLeft>=bg1_Left+100 && scrollLeft<bg2_Left+100){
				menu.removeClass("active");
				menu.eq(1).addClass("active");
			}else if(scrollLeft>=bg2_Left+100 && scrollLeft<bg3_Left+100){
				menu.removeClass("active");
				menu.eq(2).addClass("active");
			}else if(scrollLeft>=bg3_Left+100 && scrollLeft<bg4_Left+100){
				menu.removeClass("active");
				menu.eq(3).addClass("active");
			}else if(scrollLeft>=bg4_Left+100 && scrollLeft<bg5_Left+100){
				menu.removeClass("active");
				menu.eq(4).addClass("active");
			}
			})
		//로그인 클릭시 로그인 모달창 오픈
			var login=$(".login");
			var login_modal=$("#main .login_modal");
			var login_Xbtn=$(".login_Xbtn");
			var login_joinBtn=$(".modal_footer input");
			var join_modal=$("#main .join_modal");
			var screen_bg=$(".screen_bg");

			login_modal.hide();
			login.click(function(){
				login_modal.show();
				screen_bg.show();
			})

			login_Xbtn.click(function(){
				login_modal.hide();
				screen_bg.hide();
			})

			screen_bg.click(function(){
				login_modal.hide();
			})

			login_joinBtn.eq(1).click(function(){
				join_modal.show();
			})

		// //회원가입 클릭 시 모달창 오픈
			var join=$(".join");
			var join_modal=$("#main .join_modal");
			var join_Xbtn=$(".join_Xbtn");
			var join_footer=$(".join_footer input");
			var login_modal=$("#main .login_modal");

			join_modal.hide();
			join.click(function(){
				join_modal.show();
				screen_bg.show();
			})

			join_Xbtn.click(function(){
				join_modal.hide();
				screen_bg.hide();
			})

			screen_bg.click(function(){
				join_modal.hide();
			})

			join_footer.click(function(){
				alert("가입을 축하드립니다.");
			})
		// main product 클릭 시 section3에 있는 모달창 오픈
		 	var main=$(".main_product");
		 	var mainBtn=$(".button");
		 	var i=$(window).index();
		 	var wd = $(window).width();
			var nowLeft=i*wd;

		 	main.click(function(){
				$("html,body").stop().animate({"scrollLeft":3840},700,"linear");
				$(".explain").delay(950).fadeIn(1000);
			});
			mainBtn.click(function(){
				$("html,body").stop().animate({"scrollLeft":3840},700,"linear");
			});

		//-------------------- 브랜드스토리 모달창 생성--------------
			var modal=$("#story .modal");
			var modal02=$("#story .modal02");
			var story01=$("#story .story01");
			var story02=$("#story .story02");
			var x_btn01=$("#story .x_btn01");
			var x_btn02=$("#story .x_btn02");
			var click01=$("#story .click01");
			var click02=$("#story .click02");
			
			
			// 첫번째 모달
			screen_bg.hide();
			modal.hide();

			story01.click(function(){
				modal.fadeIn();
				screen_bg.fadeIn();
			})

			click01.click(function(){
				modal.fadeIn();
				screen_bg.fadeIn();
			})

			x_btn01.click(function(){
				modal.fadeOut();
				screen_bg.fadeOut();
			})

			screen_bg.click(function(){
				modal.fadeOut();
				screen_bg.fadeOut();
			})

			// 두번째 모달
			modal02.hide();
			screen_bg.hide();

			click02.click(function(){
				modal02.fadeIn();
				screen_bg.fade();
			})

			story02.click(function(){
				modal02.fadeIn();
				screen_bg.fadeIn();
			})

			x_btn02.click(function(){
				 modal02.fadeOut();
				 screen_bg.fadeOut();
			})
			screen_bg.click(function(){
				modal02.fadeOut();
				screen_bg.fadeOut();
			})

		// ---------------------상품구매창---------------------
			var carousel_img = $("#product_shop li");
			var current = 0;
			var carousel_prevBtn=$("#btn_set .prev");
			var carousel_nextBtn=$("#btn_set .next");
			var shop_btn=$("#shop_btn .shop_btn");
			var buy_btn=$("#shop_btn .buy_btn");
			var photo01=$(".line .photo01");
			var photo02=$(".line .photo02");
			var photo03=$(".line .photo03");
			var photo04=$(".line .photo04");
			
			
			// 상품구매 모달창 생성
			$(".explain").hide();
			screen_bg.hide();

			$(".click03,.milk_man").click(function(){
				$(".explain").fadeIn();
				screen_bg.fadeIn();
			})
			$(".x_btn03").click(function(){
				$(".explain").fadeOut();
				screen_bg.fadeOut();
			})
			screen_bg.click(function(){
				$(".explain").fadeOut();
				screen_bg.fadeOut();
			})

			// prev 버튼 클릭시 
			carousel_prevBtn.click(function(){
				var currentImg = carousel_img.eq(current);
				var prevImg = carousel_img.eq(current-=1);
				currentImg.stop().css("left",0).animate({"left":"100%"});
				prevImg.stop().css("left","-100%").animate({"left":0});

				if(current==-1){
					current=7;
					var currentImg = carousel_img.eq(current);
					var prevImg = carousel_img.eq(current-=1);
					currentImg.stop().css("left",0).animate({"left":"100%"});
					prevImg.stop().css("left","-100%").animate({"left":0});
				}
			})
			// next 버튼 클릭시
			carousel_nextBtn.click(function(){
				var currentImg = carousel_img.eq(current);
				var nextImg = carousel_img.eq(current=current+1);
				currentImg.stop().css("left",0).animate({"left":"-100%"});
				nextImg.stop().css("left","100%").animate({"left":0});

				if(current==7){
					current=-1;
					var currentImg = carousel_img.eq(current);
					var nextImg = carousel_img.eq(current=current+1);
					currentImg.stop().css("left",0).animate({"left":"-100%"});
					nextImg.stop().css("left","100%").animate({"left":0});
				}
			})
			shop_btn.click(function(){
				alert("페이지 준비 중입니다.");
			})
			buy_btn.click(function(){
				alert("페이지 준비 중입니다.");
			})

		// -----------이벤트 배너 클릭시 모달창 / 종료 alert---------		
			photo01.click(function(){
				alert("이벤트 준비 중입니다.")
			})
			$(".event_modal01").hide();
			screen_bg.hide();
			photo02.click(function(){
				$(".event_modal01").fadeIn();
				$(".x_btn04").fadeIn();
				screen_bg.fadeIn();
			})

			$(".x_btn04").click(function(){
				$(".event_modal01").fadeOut();
				screen_bg.fadeOut();
			})

			$(".event_modal02").hide();
			photo04.click(function(){
				screen_bg.fadeIn();
				$(".event_modal02").fadeIn();
			})

			$(".x_btn05").click(function(){
				$(".event_modal02").fadeOut();
				screen_bg.fadeOut();
			})

			$(".coupon_btn").click(function(){
				alert("쿠폰이 발급 되었습니다.")
			})

			$(".event_modal03").hide();
			photo03.click(function(){
				$(".event_modal03").fadeIn();
				screen_bg.fadeIn();
			})

			$(".x_btn06").click(function(){
				$(".event_modal03").fadeOut();
				screen_bg.fadeOut();
			})

			screen_bg.click(function(){
				screen_bg.fadeOut();
				$(".event_modal01").fadeOut();
				$(".event_modal02").fadeOut();
				$(".event_modal03").fadeOut();
			})

			
		// -------마우스휠을 이용한 가로 스크롤 구현---------
			var wrapper=$("#wrapper");
			var txt=$(".txt");
			
			// -------마우스휠을 이용한 가로 스크롤 구현(모달창 구현시 스크롤 반응X)---------
			wrapper.on("mousewheel",function(event, delta){
				if ($(".modal").css("display") == "block" || $(".modal02").css("display") == "block" || $(".explain").css("display") == "block" || $(".event_modal01").css("display") == "block" || $(".event_modal02").css("display") == "block" || $(".event_modal03").css("display") == "block") {
                    return 0;
                }

				if(delta>0){
					//마우스휠이 올려졌을 때 실행될 구문
					var left = $(window).scrollLeft();
					var width = $(window).width();
                    var leftMore = left - width+1200;
                     $("html, body").stop().animate({
                        "scrollLeft": leftMore
                    },400, "linear");
				
				}else if(delta<0){
					//마우스휠이 내려졌을 때 실행될 구문
					var left = $(window).scrollLeft();
                    var width = $(window).width();
                    var leftMore = left + width-1200;
                    $("html, body").stop().animate({
                        "scrollLeft": leftMore
                    },600, "linear");
				}
			})
			//section2_bus title 올라옴
			//마우스 스크롤 했을때 윈도우 3500이상이면 title 올라오도록
			$(window).scroll(function(){
				var title=$(".title");
				if($(window).scrollLeft()>=3500){
					title.animate({"bottom":"49%"},1500,"linear");
				}
			})
		})