
$(document).ready(function(){
	
	// 시간을 1초마다 읽어와야한다.
	// Date(), setInterval()
	// setInterval(function(){ alert("Hello"); }, 3000); 문법
	// 변수가 각각 시간 : 분 : 초가 필요
	// 문자변경 text()
	// 조건 : 시간의 자릿수가 10미만(한자리수만 나온다)일때 앞에 0을 붙여라
	setInterval(function(){
		var now = new Date();

		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();

		// 시간을 두자리수로 표현
		if(hr<10){hr='0'+hr;}
		if(min<10){min='0'+min;}
		if(sec<10){sec='0'+sec;}

		$('figure p span').eq(0).text(hr);
		$('figure p span').eq(1).text(min);
		$('figure p span').eq(2).text(sec);
	},1000);
	// console.log(now);

	// var hr = now.getHours();
	// var min = now.getMinutes();
	// var sec = now.getSeconds();

	// $('figure p span').eq(0).text(hr);
	// $('figure p span').eq(1).text(min);
	// $('figure p span').eq(2).text(sec);



	// 때(아침, 점심, 저녁, 밤)에 맞춰서 백그라운드와 로고 등등 속성이 변경된다
	// 아침 06-11
	// 점심 12-17
	// 저녁 18-21
	// 밤 22-24, 0-06

	var now = new Date();

	var hr = now.getHours();

	// 아침 06-11
	if(hr>5 && hr<12){
		$('#wrap').removeClass();
		$('#wrap').addClass('morning');
		$('nav li').removeClass();
		$('nav li').eq(0).addClass('on');
	}

	// 점심 12-17
	if(hr>11 && hr<18){
		$('#wrap').removeClass();
		$('#wrap').addClass('afternoon');
		$('nav li').removeClass();
		$('nav li').eq(1).addClass('on');
	}

	// 저녁 18-21
	if(hr>17 && hr<22){
		$('#wrap').removeClass();
		$('#wrap').addClass('evening');
		$('nav li').removeClass();
		$('nav li').eq(2).addClass('on');
	}

	// 밤 22-24, 0-06
	if(hr>21 && hr<25){
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass();
		$('nav li').eq(3).addClass('on');
	}
	if(hr>=0 && hr<6){
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass();
		$('nav li').eq(3).addClass('on');
	}


	// 테마 버튼을 클릭시 백그라운드와 로고 이미지 등등이 바뀐다
	$('nav li').on('click',function(){
		// 해당버튼의 텍스트를 읽어와서 반영
		var className = $(this).children('a').text();
		$('#wrap').removeClass();
		$('#wrap').addClass(className);
		
		$('nav li').removeClass();
		$(this).addClass('on');
	});

});