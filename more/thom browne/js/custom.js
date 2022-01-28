$(document).ready(function(){
	$('.btnMenu').on('click',function(){
		$(this).fadeOut();
		$('nav').addClass('on');
		$('section').addClass('on');
	});

	// 내비게이션을 클릭하면 해당 아티클이 나온다
	$('#gnb li').on('click',function(){
		$('.btnMenu').fadeIn();
		$('nav').removeClass('on');
		$('section').removeClass('on');

		// 클릭한 li의 인덱스 값을 가져와서 아티클의 인덱스 값으로 위치를 찾는다
		var i = $(this).index();
		$('section>article').removeClass('on');
		$('section>article').eq(i).addClass('on');
	});

});