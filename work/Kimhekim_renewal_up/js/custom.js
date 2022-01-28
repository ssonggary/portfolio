$(document).ready(function(){
    // ***************************************헤더 스크롤시 사이즈 축소
    $(window).scroll(function(){
        var headerH = 200;
        var scroll = getCurrentScroll();
        if (scroll >= headerH) {
            $('header').addClass('roll');
        }else{
            $('header').removeClass('roll');
        }
    });

    function getCurrentScroll() {
        return window.pageYoffset || document.documentElement.scrollTop;
    }

	//********************************************************* 네비게이션 서브메뉴
	$('.gnb li').mouseover(function(){
		$(this).find('.col_list').stop().fadeIn();
	});
	$('.gnb li').mouseout(function(){
		$(this).find('.col_list').stop().fadeOut();
	});

	$('.pay li').mouseover(function(){
		$(this).find('.cur_list').stop().fadeIn();
	});
	$('.pay li').mouseout(function(){
		$(this).find('.cur_list').stop().fadeOut();
	});



    //******************************************************* 이레이져 캔버스 제어
    // 백그라운드 이미지 사이즈 리사이즈
    var container = $('.box');

    $(window).resize(function(){
        var currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowHeight = currentWindow.height(),
            broswerRatio = currentWindow.width() / currentWindow.height(),
            imgRatio = 1500/1000;

        if (imgRatio > broswerRatio) {
            container.css({
                height: '100%',
                width: windowHeight * imgRatio,
                left: (windowWidth - windowHeight * imgRatio)/2,
                // left: (windowHeight * imgRatio - windowWidth)/2,
                top: 0
            });
        }else {
            container.css({
                height: windowWidth / imgRatio,
                width:'100%',
                left:0,
                top: (windowHeight - windowWidth / imgRatio)/2
            });
        }

    });
    $(window).trigger('resize');


    var imgLoad = function(img){
        img.onload = function () {
            // var width = Math.min(1000, img.width);
            // var height = img.height * (width / img.width);
            // 이미지 가로 비율 = 이미지 세로 길이/ 이미지 가로길이 = 1.5
            // 이미지 세로 비율 = 이미지 세로 길이/ 이미지 가로길이 = 0.6
            var imgRatio = 1500/1000;
            var width = $(window).width();
            // var height = .height();
            var height = width/imgRatio;
            // console.log(width);



            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            // $(this).fadeIn(6000);
        }
    }


    var i = 1;
    var url = 'img/eraser'+i+'.jpg';
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var cnt = 1;


    var img = new Image();
        img.src = url;

    imgLoad(img);

    var isPress = false;
    var old = null;



    canvas.addEventListener('mousedown', function (e){

        $('.smudge').animate({'opacity':0},500,function(){
            $(this).css('display','none');
        });

        isPress = true;
        old = {x: e.offsetX, y: e.offsetY};


        // var x = mouseEvent.cllientX;
        // var y = mouseEvent.cllientY;
        
        var x = e.offsetX;
        var y = e.offsetY;
        // console.log("x="+x , "Y="+y);
        ctx.globalCompositeOperation = 'destination-out';

            ctx.beginPath();
            ctx.arc(x, y, 80, 0, 2 * Math.PI);
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.fill();
    });

    canvas.addEventListener('mousemove', function (e){
        if(cnt == 200){

            $('#canvas').fadeOut('slow', function(){
                $('#canvas').fadeTo(0,1,function(){
                    url = 'img/eraser'+(i+1)+'.jpg';
                    img = new Image();
                    img.src = url;

                    imgLoad(img);
                    cnt = 0;
                    i++;
                    isPress = false;

                    setTimeout(function() {
                        $('.box').css({
                            'background':'url(img/eraser'+(i+1)+'.jpg)',
                            'background-size' : 'cover'
                        });
                    }, 500);

                });
            });

        }


        if (isPress) {
            var x = e.offsetX;
            var y = e.offsetY;
            ctx.globalCompositeOperation = 'destination-out';

            ctx.beginPath();
            ctx.arc(x, y, 80, 0, 2 * Math.PI);
            ctx.fill();

            ctx.lineWidth = 160;
            ctx.beginPath();
            ctx.moveTo(old.x, old.y);
            ctx.lineTo(x, y);
            ctx.stroke();

            old = {x: x, y: y};
            // console.log(old);

            cnt++;
        }
        if (i == 6) {i = 0;}
    });

    canvas.addEventListener('mouseup', function (e){
    isPress = false;
    });




    // 윈도우창 리사이즈시 리로드

    var resizeTimer;
    $(window).on('resize', function(){
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resizeFunction, 100);
    });

    function resizeFunction() {
        var currentLocation = window.location;
        var img = new Image();
        img.src = url;

        imgLoad(img);
        cnt = 1;
    }







    //**************************************************************** 컬렉션 영역

    $('.collection div').on('mouseover', function(){
        $(this).find('span').css({'opacity':1});
        $(this).find('p').stop().animate({
            'left' : '40px',
            'top' : '40px'
        },100);
    }).on('mouseout', function(){
        $(this).find('span').css({'opacity':0});
        $(this).find('p').stop().animate({
            'left' : 0,
            'top' : 0
        },100);
    });
    $('.collection div').click(function(e){
        e.preventDefault();
    });


    // **************************************************페이지 스크롤 제어
    // $(window).on('resize',function(){
    //     var ht = $(window).height();
    //     $('section').height(ht);
    // });

    $('section').on('mousewheel scroll', function(event,delta){
        var $section = $('section');
        if (delta>0) {
            var prev = $section.prev().offset().top-120;
            $('html').stop().animate({'scrollTop':prev},1000,'easeOutQuart');
        }else if (delta<0) {
            var next = $section.next().offset().top-50;
            $('html').stop().animate({'scrollTop':next},1000,'easeOutQuart');
        }
    });



    // *************************************************************푸터
    $('footer p').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.modal').css({display:'block'});
        $('.footer-mo').animate({opacity:1},500);
        popupOpen();
    });
    $('.close_btn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.footer-mo').animate({opacity:0},300,function(){
            $('.modal').css({display:'none'});
        });
        // $('.modal .company li, .footcon_wrap section').removeClass('on').eq(0).addClass('on');
        $('.modal .company li').removeClass('on').eq(0).addClass('on');
        $('.footcon_wrap section').eq(0).animate({
            opacity: 1
        },500,function(){
            $(this).css({display:'block'});
        }).siblings().animate({
            opacity: 0
        },500,function(){
            $(this).css({display:'none'});
        });
        popupClose();
    });

    $('.modal .company li').click(function(){
        var i = $(this).index();
        // console.log(i);
        $(this).addClass('on').siblings().removeClass('on');
        // $('.footcon_wrap section').eq(i).fadeIn().addClass('on').siblings().removeClass('on');
        $('.footcon_wrap section').eq(i).fadeIn('fast').animate({
            opacity: 1
        },500,function(){
            $(this).css({display:'block'});
        }).siblings().fadeOut('fast').animate({
            opacity: 0
        },500,function(){
            $(this).css({display:'none'});
        });
    });

    //푸터 반응형 (480 - 767)
    if(window.matchMedia("(min-width:480px) and (max-width:767px)").matches){
        console.log('테스트1');
        $('.modal .company li').click(function(){
            var i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.modal .company').animate({
                opacity : 0
            },function(){
                $(this).css('display','none');
            });
            $('.footcon_wrap section').eq(i).animate({
                left : '-106%',
                opacity: 1
            },500).siblings().fadeOut('fast').animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
        });

         // 뒤로가기 버튼
        $('.back_btn').click(function(){
            $('.footcon_wrap section').animate({
                left : 0,
                opacity: 0
            },700).siblings().animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
            $('.modal .company li').removeClass('on').eq(0).addClass('on');
            $('.modal .company').fadeIn().animate({
                opacity : 1
            },500,function(){
                $(this).css('display','block');
            });
        });

        $('.close_btn').click(function(){
            $('.footer-mo').animate({opacity:0},300,function(){
                $('.modal').css({display:'none'});
            });
            // $('.modal .company li, .footcon_wrap section').removeClass('on').eq(0).addClass('on');
            $('.modal .company li').removeClass('on').eq(0).addClass('on');
            $('.modal .company').animate({
                opacity : 1
            },500,function(){
                $(this).css('display','block');
            });
            $('.footcon_wrap section').eq(0).animate({
                opacity: 0,
                left : 0
            }).siblings().animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
            popupClose();
        });
    }
    //푸터 반응형 (479)
    if(window.matchMedia("(max-width:479px)").matches){
        console.log('테스트2');
        $('.modal .company li').click(function(){
            var i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.modal .company').animate({
                opacity : 0
            },function(){
                $(this).css('display','none');
            });
            $('.footcon_wrap section').eq(i).animate({
                left : '-119%',
                opacity: 1
            },500).siblings().fadeOut('fast').animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
        });

        // 뒤로가기 버튼
        $('.back_btn').click(function(){
            $('.footcon_wrap section').animate({
                left : 0,
                opacity: 0
            },700).siblings().animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
            $('.modal .company li').removeClass('on').eq(0).addClass('on');
            $('.modal .company').fadeIn().animate({
                opacity : 1
            },500,function(){
                $(this).css('display','block');
            });
        });

        $('.close_btn').click(function(){
            $('.footer-mo').animate({opacity:0},300,function(){
                $('.modal').css({display:'none'});
            });
            // $('.modal .company li, .footcon_wrap section').removeClass('on').eq(0).addClass('on');
            $('.modal .company li').removeClass('on').eq(0).addClass('on');
            $('.modal .company').animate({
                opacity : 1
            },500,function(){
                $(this).css('display','block');
            });
            $('.footcon_wrap section').eq(0).animate({
                opacity: 0,
                left : 0
            }).siblings().animate({
                opacity: 0
            },500,function(){
                $(this).css({display:'none'});
            });
            popupClose();
        });
    }


      //푸터 레이어 팝업시 메인페이지 스크롤 방지 제어
    var scrollHeight = 0;

    function popupOpen(){
        scrollHeight = $(window).scrollTop();
        $('body').css('overflow', 'hidden');
        $('#wrap').css({
            'position' : 'fixed',
            'top' : -scrollHeight
        });
        $('#wrap').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();

            return false;
        });
        console.log('before scrollTop ::' + scrollHeight);
    }

    function popupClose(){
        var scrollPosition = Math.abs($('#wrap').css('top').split('px')[0]);

        $('#wrap').removeAttr('style');
        $(window).scrollTop(scrollPosition);
        $('body').removeAttr('style');

        // $('body').css('overflow', 'auto');
        // $('#wrap').css({
        //     'top' : 0,
        //     'position' : 'relative'
        // });
        // $(window).scrollTop(scrollHeight);
        $('#wrap').off('scroll touchmove mousewheel');
        console.log('after scrollTop ::' + scrollPosition);
    }

    // var scroll={
    //     disable: function(){
    //         $('body').css('overflow-y', 'scroll');

    //         $('body').css({
    //             'position' : 'fixed',
    //             'top' : -$(win).scrollTop(),
    //             'left' : 0,
    //             'width' : '100%'
    //         });
    //     },
    //     enable: function(){
    //         var scrollPosition = Math.abs($('body').css('top').split('px')[0]);

    //         $('body').removeAttr('style');
    //         $(window).scrollTop(scrollPosition);
    //         $('body').removeAttr('style');
    //     }
    // };
    
    // $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    // $('footer p').on('scroll tuchmove mousewheel', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();

    //     return false;
    // });

    // $('html, body').css({'overflow': 'auto', 'height': '100%'});
    // $('footer p').off('scroll tuchmove mousewheel');

    // var body = $('body');
    // var scrollPosition = 0;

    // function enable(){
    //     scrollPosition = window.pageYOffset;
    //     body.css({
    //         'Overflow':'hidden',
    //         'position':'fixed',
    //         'top': scrollPosition+'px',
    //         'width' : '100%'
    //     });
    // }




    // 반응형 네비 햄버거 버튼
    var countNum =0;
	$('.hamburger-box').click(function(){
		$('.responsive-nav .small-nav').stop().slideToggle();
		countNum++;
		if (countNum%2 == 1) {openNav();}else {closeNav();}
		if (countNum%2 == 0){countNum=0;}
	});

	function openNav(){
        $('.hamburger-box').css('height','20px');
		$('.hamburger-box').children('span').eq(0).css({
			transform: 'rotate(45deg)',
			position: 'absolute', 
			top: '6px',
			transition: 'all 0.5s'
		});
		$('.hamburger-box').children('span').eq(2).css({
			transform: 'rotate(-45deg)',
			position: 'absolute', 
			bottom: '12px',
			transition: 'all 0.5s'
		});
		$('.hamburger-box').children('span').eq(1).css({
			display: 'none',
			transition: 'all 0.5s'
		});
	}

	function closeNav(){
		$('.hamburger-box').children('span').eq(0).css({
			transform: 'rotate(0deg)',
			position: 'absolute', 
			top: '-2px',
			transition: 'all 0.5s',
		});
		$('.hamburger-box').children('span').eq(2).css({
			transform: 'rotate(0deg)',
			// position: 'absolute', 
			bottom: '2px',
			transition: 'all 0.5s'
		});
		$('.hamburger-box').children('span').eq(1).css({
			display: 'block',
			transition: 'all 0.5s'
		});
	}






    // *********************************************풀페이지 스크롤****
    //  $('#fullpage').fullpage({
    //     //options here
    //     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //     autoScrolling:true,
    //     scrollHorizontally: true,
    //     nagivation: true,
    //     navigationPosition: 'right',
    // });

});



// 이레이져 캔버스 영역

// 페이드 효과
    // fadeCtx = fadeCanvas.getContext('2d');

    // for (var i = 0; i < sourceImage.width; i++) {
    //     fadeCtx.globalAlpha = (sourceImage.width - i) / sourceImage.width;
    //     console.log(fadeCtx.globalAlpha);
    //     fadeCtx.drawImage(sourceImage, i, 0, i + 1, sourceImage.height, i, 0, i + 1,    sourceImage.height);
    // }


// // 이미지에 그림 그리는 방법
// var pos = {
//     drawable: false,
//     x: -1,
//     y:-1
// };
// var canvas, ctx;

// window.onload = function(){
//     canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d');

//     canvas.addEventListener('mousedown',listener);
//     canvas.addEventListener('mousemove',listener);
//     canvas.addEventListener('mouseup',listener);
//     canvas.addEventListener('mouseout',listener);
// }

// function listener(event){
//     switch (event.type) {
//         case 'mousedown':
//             initDraw(event);
//             break;

//         case 'mousemove':
//             if(pos.drawable)
//                 draw(event);
//             break;

//         case 'mouseout':
//         case 'mouseup':
//             finishDraw();
//             break;
//     }
// }

// function initDraw(event){
//     ctx.beginPath();
//     pos.drawable = true;
//     var coors = getPosition(event);
//     pos.X = coors.X;
//     pos.Y = coors.Y;
//     ctx.stroke();
// }

// function draw(event){
//     var coors = getPosition(event);
//     ctx.lineTo(coors.X, coors.Y);
//     pos.X = coors.X;
//     pos.Y = coors.Y;
//     ctx.stroke();
// }

// function finishDraw(){
//     pos.drawable = false;
//     pos.X = -1;
//     pos.Y = -1;
// }

// function getPosition(event){
//     var x = event.pageX - canvas.offsetLeft;
//     var y = event.pageY - canvas.offsetTop;
//     return { X: x, Y: y};
// }


// // 이미지 지우기 방법
// var canvas = document.getElementById('canvas');
// canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

