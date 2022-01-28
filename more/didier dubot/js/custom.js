$(document).ready(function(){
	var ht = $(window).height();
	$('section').height(ht);
	// 윈도우의 헤잇값을 섹션에 적용하여 내비를 클릭할때 섹션의 헤잇값이 딱 맞게 적용되도록 해준다

	$(window).on('resize',function(){
		var ht = $(window).height();
		$('section').height(ht);
	});
	// 리셋을 안하고 윈도우창을 사이즈 조절 했을때 헤잇값이 흔들리는 것을 제어
	// 리셋을 하면 윈도우창의 헤잇값이 변경되기 때문에 다시 불러와야한다.


	$('section').on('mousemove', function(e){

		// 이벤트 매개변수 안에 페이지의 x값과 y값을 가져온다
		var posX = e.pageX;
		var posY = e.pageY;
		// console.log(posX);

		$('.p11').css({
			'bottom': (posY/30),'right': -100-(posX/10)
		});
		$('.p12').css({
			'bottom': 300-(posY/20),'right': 100-(posX/20)
		});
		// $('.p13').css({
		// 	'bottom': 550-(posY/20),'right': 550-(posX/20)
		// });


		$('.p21').css({
			'bottom': (posY/20),'right': 50-(posX/20)
		});
		$('.p22').css({
			'bottom': 300-(posY/20),'right': 150-(posX/20)
		});


		$('.p31').css({
			'bottom': (posY/30),'right': (posX/30)
		});
		$('.p32').css({
			'bottom': 300-(posY/20),'right': 300-(posX/20)
		});
		// $('.p33').css({
		// 	'bottom': 50-(posY/20),'right': 50-(posX/20)
		// });


		$('.p41').css({
			'bottom': -10-(posY/60),'right': -10-(posX/60)
		});
		$('.p42').css({
			'bottom': 300-(posY/20),'right': 200-(posX/20)
		});
	});

	$('.menu li').on('click', function(){
		// var nowTop;
		// 0,1000
		// 1000*0
		// 1000*1
		// 1000*2
		var i = $(this).index();
		var ht = $(window).height();
		// 리사이즈 이벤트 안에 있는 ht를 호출해준다.
		// console.log(ht);
		var nowTop = i*ht;
		// var nowTop = i*1000;
		$('html').animate({'scrollTop':nowTop},1400);
		// *********스크롤 탑은 윈도우에 해당하는 메서드이기 때문에 html에 적용
		// $('.wrap').animate({'scrollTop':nowTop},1400);
	});

	// 섹션이 마우스 휠에대한 대상이 될수 있게 제어
	$('section').on('mousewheel', function(event,delta){
		// 휠의 위(양수) 아래(음수) 값을 가져오는 매개변수 delta
		
		// 마우스 휠이 위로 올라갔을 때
		if(delta>0) {
			var prev = $(this).prev().offset().top;
			// offset 선택한 요소의 좌표를 가져오거느 특정 좌표로 이동시킨다.
			// 속성은 소괄호가 붙지 않는다.
			$('html').stop().animate({'scrollTop':prev},1000,'easeOutBounce');
		}else if(delta<0){
			var next = $(this).next().offset().top;
			$('html').stop().animate({'scrollTop':next},1000,'easeOutBounce');
			// 애니메이트의 시간 조절과 스탑메서드로 기존 행동으로 인해 느려지는 것을 방지해준다.
		}
	});

	// 스크롤 탑이 섹션 탑의 위치에 따라 네비도 해당 영역에 같이 선택된다
	$(window).on('scroll', function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		// 포문으로 조건문 줄이기
		for (var i=0; i<5; i++) {
			// for문 (초기문; 조건문; 증감문;)
			if(scroll>=i*ht && scroll<(i+1)*ht) {
				// $('.menu li').removeClass('on');
				// $('.menu li').eq(i).addClass('on');
				$('.menu li').eq(i).addClass('on').siblings().removeClass('on');
			}
		}

		// // 첫번째 li 지정 0, 1000
		// if(scroll>=0*ht && scroll<ht) {
		// 	$('.menu li').eq(0).addClass('on').siblings().removeClass('on');
		// }
		// // 두번째 li 지정 1000, 2000
		// else if (scroll>=1*ht && scroll<ht*2) {
		// 	$('.menu li').eq(1).addClass('on').siblings().removeClass('on');
		// }
		// // 세번째 li 지정 2000, 3000
		// else if (scroll>=2*ht && scroll<ht*3) {
		// 	$('.menu li').eq(2).addClass('on').siblings().removeClass('on');
		// }
		// // 두번째 li 지정 3000, 4000
		// else if (scroll>=3*ht && scroll<ht*4) {
		// 	$('.menu li').eq(3).addClass('on').siblings().removeClass('on');
		// }
	});


});