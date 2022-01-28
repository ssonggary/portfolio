$(document).ready(function(){
	$('article').on('mouseover',function(){
		$(this).stop().animate({'width':'35%'},1000,function(){
			// ******위에 애니메이션을 동작하고 난 다음 아래 동작을 하게 순서를 만들어준다.*******
			$(this).find('h3').animate({'right':'10px'},400);
			$(this).find('p').animate({'right':'10px'},800);
		});
		$(this).find('img').stop().animate({'opacity':'1'},1200);
		// $(this).find('h3').animate({'right':'10px'},400);
		// $(this).find('p').animate({'right':'10px'},800);
	});

	$('article').on('mouseout',function(){
		$(this).stop().animate({'width':'12%'},1000);
		$(this).find('img').stop().animate({'opacity':'0'},1200);
		$(this).find('h3').animate({'right':'-310px'},200);
		$(this).find('p').animate({'right':'-310px'},400);
	});
});