// 제이쿼리 호출문 또 다른 축약형
jQuery(function(){
	var countNum =0;
	$('.menu-toggle-btn').click(function(){
		$('.header .gnb').stop().slideToggle();
		countNum++;
		if (countNum%2 == 1) {openNav();}else {closeNav();}
		if (countNum%2 == 0){countNum=0;}
	});

	function openNav(){
		$('.menu-toggle-btn').children('span').eq(0).css({
			transform: 'rotate(45deg)',
			position: 'absolute', 
			top: '0',
			transition: 'all 0.5s'
		});
		$('.menu-toggle-btn').children('span').eq(2).css({
			transform: 'rotate(-45deg)',
			position: 'absolute', 
			// bottom: '8px',
			transition: 'all 0.5s'
		});
		$('.menu-toggle-btn').children('span').eq(1).css({
			display: 'none',
			transition: 'all 0.5s'
		});
	}

	function closeNav(){
		$('.menu-toggle-btn').children('span').eq(0).css({
			transform: 'rotate(0deg)',
			position: 'absolute', 
			top: '-2px',
			transition: 'all 0.5s',
		});
		$('.menu-toggle-btn').children('span').eq(2).css({
			transform: 'rotate(0deg)',
			// position: 'absolute', 
			// bottom: '8px',
			transition: 'all 0.5s'
		});
		$('.menu-toggle-btn').children('span').eq(1).css({
			display: 'block',
			transition: 'all 0.5s'
		});
	}




});

// $(funtion(){});




// $(document).ready(function(){
// 	$('.menu-toggle-btn').click(function(){
// 		$('.header .gnb').stop().slideToggle();
// 		$(this).find('span').eq(0).css({
// 			transform : 'rotateX(45deg)'
// 		});
// 	});
// });