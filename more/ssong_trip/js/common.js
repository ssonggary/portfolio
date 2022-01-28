
// 여행정보 변수
var isOver1=false;
var isOver2=false;

// 공지사항 변수
var isOver3=false;
var isOver4=false;

// 상품투어 변수
var isOver5=false;
var isOver6=false;

// 티켓가이드 변수
var isOver7=false;
var isOver8=false;

// 여행정보 함수
function goHide1(){	
	// 여행정보도 mouseout 상태이고 국내도 mouseout이면  페이드 아웃을 해라
	// 페이드 아웃하는 것을 함수화 시켜서 setTimeout에 넣어준다.
	if (!isOver1 && !isOver2) {
		$('.gnb_depth2_1').fadeOut('fast');
	}
}

// 고객센터 함수
function goHide2(){
	if(!isOver3 && !isOver4){
		$('.gnb_depth2_2').fadeOut('fast');
	}
}

// 상품투어 함수
function goHide3(){
	if(!isOver5 && !isOver6){
		$('.gnb_depth2_3').fadeOut('fast');
	}
}

// 티켓가이드 함수
function goHide4(){
	if(!isOver7 && !isOver8){
		$('.gnb_depth2_4').fadeOut('fast');
	}
}



$(document).ready(function(){
	// top버튼 제어
	// 스크롤의 위치가 50이하이면 탑버튼이 보이지 않고 50이상이면 보인다.
	if($(document).scrollTop()<50){
		$('.to_top').addClass('hide');
	}else{$('.to_top').removeClass('hide');}
	// 스크롤이 움질일때마다 제어
	$(window).scroll(function(){
		if($(document).scrollTop()<50){
		// if($(document).scrollTop()<50){
			$('.to_top').addClass('hide');
		}else{$('.to_top').removeClass('hide');}
	});


	// console.log(1)
	// 네비게이션
	// 여행정보 (케이스1)
	$('.openAll1').mouseover(function(){

		// $('header').css('width') ** 위드값을 구해낸다.
		// parseInt()*****문자와 숫자가 있을때 숫자 값만 추출
		// parseInt($('header').css('width'))
		
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1 = true;
			console.log(isOver1); //ture
		};
	});
	$('.openAll1').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
		}
	});
	$('.openAll1').mouseout(function(){
		isOver1 = false;
		// ***셋타임아웃에 오는 함수는 소괄호를 빼고 넣어준다. 아니면 쿼테이션으로 넣어줘도 된다****
		// setTimeout(goHide1,1000);

		setTimeout('goHide1()',200);
		// setTimeout(goHide1(),1000);
		// goHide1();
		// **********두번째 레벨에 클릭하려고 이동하면 사라져서 클릭을 할 수가 없다.
		// $('.gnb_depth2_1').fadeOut('fast');
	});
	$('.openAll1').blur(function(){
		isOver1 = false;
		setTimeout(goHide1,200);
	});

	// 여행정보 2레벨
	$('.gnb_depth2_1').mouseover(function(){
		isOver2 = true;
	});
	$('.gnb_depth2_1 li a').focus(function(){
		isOver2 = true;
	})
	$('.gnb_depth2_1').mouseout(function(){
		isOver2 = false;
		// goHide1();
		setTimeout(goHide1,200);
	});
	// ********탭으로 이동시 마지막 a에 갔을때 사라지도록 *********
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver2 = false;
		setTimeout('goHide1()',200);
	});
	// $('.gnb_depth2_1').blur(function(){
	// 	isOver2 = false;
	// 	setTimeout('goHide1()',2000);
	// });

	// 고객센터 (케이스2)
	$('.openAll2').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver3=true;
		}
	});
	$('.openAll2').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver3=true;
		}
	});

	$('.openAll2').mouseout(function(){
		// 레벨2의 공지사항과 문의하기에서 사라진다.
		// 그래서 공지사항과 문의하기에 마우스 오버시 사라지지 않도록 한다.
		// 그렇기 때문에 상태에 대한 값을 조건으로 제어한다. (오버된 경우:true 아웃된 경우:false)
		isOver3=false;
		setTimeout('goHide2()', 200);
		// isOver2=false;
		// setTimeout(function(){$('.gnb_depth2_2').fadeOut('fast');}, 1000);
		// $('.gnb_depth2_2').fadeOut('fast');
	});
	$('.openAll2').blur(function(){
		isOver3=false;
		setTimeout('goHide2()', 200);
	});

	// 고객센터 레벨2
	$('.gnb_depth2_2').mouseover(function(){
		isOver4=true;
	});
	$('.gnb_depth2_2 li a').focus(function(){
		isOver4=true;
	});
	$('.gnb_depth2_2').mouseout(function(){
		isOver4=false;
		setTimeout(goHide2, 200);
	});
	$('.gnb_depth2_2 li a').blur(function(){
		isOver4=false;
		setTimeout(goHide2, 200);
	});

	// 상품투어
	$('.openAll3').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver5=true;
		}
	});
	$('.openAll3').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver5=true;
		}
	});
	$('.openAll3').mouseout(function(){
		isOver5=false;
		setTimeout('goHide3()',200);
	});
	$('.openAll3').blur(function(){
		isOver5=false;
		setTimeout('goHide3()',200);
	});
	// 상품투어 레벨2
	$('.gnb_depth2_3').mouseover(function(){
		isOver6=true;
	});
	$('.gnb_depth2_3 li a').focus(function(){
		isOver6=true;
	});
	$('.gnb_depth2_3').mouseout(function(){
		isOver6=false;
		setTimeout('goHide3()',200);
	});
	$('.gnb_depth2_3 li a').blur(function(){
		isOver6=false;
		setTimeout('goHide3()',200);
	});

	// 티켓가이드 (케이스3)
	$('.openAll4').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver7=true;
		}
	});
	$('.openAll4').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver7=true;
		}
	});
	$('.openAll4').mouseout(function(){
		isOver7=false;
		setTimeout(goHide4,200);
	});
	$('.openAll4').blur(function(){
		isOver7=false;
		setTimeout(goHide4,200);
	});
	// 레벨2
	$('.gnb_depth2_4').mouseover(function(){
		isOver8=true;
	});
	$('.gnb_depth2_4 li a').focus(function(){
		isOver8=true;
	});
	$('.gnb_depth2_4').mouseout(function(){
		isOver8=false;
		setTimeout(goHide4,200);
	});
	$('.gnb_depth2_4 li a').blur(function(){
		isOver8=false;
		setTimeout(goHide4,200);
	});

	// ********************************************모바일버전 네비게이션
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('.header_cont').slideDown('fast');
		// *****스타일이 디스플레이 넌이여도 슬라이드로 넣으면 디스플레이 형태가 바뀌면서 보인다.
		$('header .header_area .header_cont .closePop').show();
	});
	$('header .header_cont .closePop').click(function(){
		$('.header_cont').slideUp('fast');
		$('header').removeClass('on');
	});




});









 //**********************************************프로그램 program.html
 // 더보기  접기동작
  $(document).ready(function(){
  	$('.program_list li .btn_more a').click(function(){
  		if($(this).parent().parent().find('.subtxt').css('display')=='none'){
  			$(this).parent().parent().find('.subtxt').css({'display':'inline'});
  			$(this).text('접기');
  		}else {
  			$(this).parent().parent().find('.subtxt').css({'display':'none'});
  			$(this).text('더보기');
  		}
  	});
  	// 	$(this).parent().parent().find('.subtxt').css({'display':'inline'});
  	// });
  });