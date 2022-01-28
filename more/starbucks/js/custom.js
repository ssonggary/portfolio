$(document).ready(function(){
	var imgs ='';

	for(var i=0;i<148;i++){
		imgs+='<img src="img/pic'+i+'.jpg">';
		// += 복합연산자를 사용하여 마지막 이미지만 나오는것이 아닌 0 다음 1번 1번 다음 2번이 나올 수 있게 기존값에 추가를 해준다는 의미
	}

	$('section').html(imgs);
	// html 안에 삽입

	$('body').on('mousemove', function(e){
		var posX=e.pageX;
		// 매게변수에 있는 페이지의 X값을 가져와라
		var wid=$(window).width();
		// 현재 포지션 위치/ 창의 너비 * 이미지갯수
		var percent=Math.floor((posX/wid)*147);
		// 메스 객체에 플로어를 사용하여 소수점 이하는 제외시킨다.

		$('section>img').hide();
		$('section>img').eq(percent).show();
		// 먼저 이미지는 숨기고 지정 이미지를 보여줘
	});
});