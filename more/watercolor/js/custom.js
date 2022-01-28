$(document).ready(function(){
	// length는 아티클의 갯수를 물어보는 속성 속성이기 때문에 ()가 없음 (3.0이상)
	var numAc = $('article').length;
	// 사이즈는 아티클의 갯수를 물어보는 메서드 (3.0이하)
	// var numAc = $('article').size();
	
	// 아티클의 갯수만큼 아티클의 위드값을 곱해준다.
	var widSec = 200*numAc;
	// 아티클의 이미지가 확대된 경우 : 180px -> 780px
	// var widTotal=widSec+600;
	// $('section').width(widTotal);
	// console.log(widSec);

	// 헤잇값과 스크롤 연결 (아티클의 위드* 갯수 곱한 값)
	$('body').height(widSec);
	// 스르륵 바뀌도록 애니메이트 적용
	$('html,body').animate({'scrollTop':widSec},2000);
	// 스크롤 탑과 레프트값 연결
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		$('section').stop().animate({'left':-scroll},600);
	});

	// 아티클을 클릭했을때 이미지가 확대
	$('article h2').on('click', function(e){
		e.preventDefault();
		// .preventDefault(); 원래 가지고 있는 기능을 차단시킨다. h2 태그 안에 a 태그의 링크 연결을 차단

		var src = $(this).children('a').attr('href');
		// h2의 a 태그 href의 속성을 가져와라

		// 클릭했을때 화면의 왼쪽 첫번째로 이동 (스크롤탑과 연결하여 움직임)
		var index = $(this).parent().index();
		var posAc = index*200;
		$('html,body').scrollTop(posAc);


		$('article').removeClass('on');
		$(this).parent().addClass('on');

		$(this).siblings('p').find('img').attr({'src':src});
		// h2의 형제중 p를 찾아서 p의 img에 속성을 넣어준다. {속성src에 변수 src를 넣어준다.}
	});

	// 클로즈 클릭
	$('article span').on('click',function(){
		$(this).parent().removeClass('on');
	});


	// 네비게이션 클릭시 위치 이동 (스크롤에 적용)
	$('#navi li').on('click',function(){
		// 아티클의 이미지가 확대되어있을 경우 이미지를 축소시키고 진행
		$('#navi li,article').removeClass('on');
		// 선택된 li의 색상 표시
		$(this).addClass('on');
		
		var i = $(this).index();
		var posNavi=1000*i;

		// 스크롤바 제어
		$('html,body').scrollTop(posNavi);
		// body와 html에 대한 영역이 0이기 때문에 css 제어 해준다.
	});


});