$(document).ready(function(){
    
    //로딩 이펙트
    $(window).on('load', function(){
        setTimeout(() => {
            $('.log_bg').fadeOut();
        }, 500);
    });

    let executed = false;

    //스크롤 이팩트
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let scrollBottom = $(document).height() - $(window).height() - scrollTop;
        
        let section1 = $("#section1").height()/2;
        let section2 = $("#section2").offset().top;
        let section3 = $("#section3").offset().top;
        let section4 = $("#section4").offset().top;
        
        let offset2 = scrollTop - section2;
        let offset3 = scrollTop - section3;
        let offset4 = scrollTop - section4;
        // console.log(section2);
    

        //section1
        if( scrollTop >= section1 ){
            
            $("#section1").find("figure.intro_imgWrap, div.intro_desc").animate({
                opacity: 0
            },800, function(){
                $(this).addClass("active");
            });
        }
        // 스크롤에 따라 글씨 위치변경
        $('.intro_TRL').css({right : scrollTop});
        $('.intro_RTB').css({bottom : scrollTop});
        $('.intro_BLR').css({left : scrollTop});
        $('.intro_LTB').css({top : scrollTop});

        //section2에서부터 가로 스크롤링과 nav title이 보이도록
        if (scrollTop >= section2){
            $(".nav").animate({left : 0},500);
            $("#section2").find("h2.about_title").addClass("show");
            $('#section2 .about_wrap').css('left', -offset2);
            
            // about parallax
            $(".about_item").each(function(){
                if(scrollTop > $(this).offset().left){
                    $(this).addClass('show');

                    //counter 
                    if(!executed){
                        if(scrollTop > $(".my_skill").offset().left){

                            $(".counter").each(function(){
                                let $this =$(this);
                                let progressRate = $this.attr("data-rate");
                                // counter progress 사용자속성 값 percent >> 95%
                                // console.log(progressRate);
    
                                $({percent: 0}).animate({percent: progressRate},{
                                    duration: 4000,
                                    progress: function(){
                                        let now = this.percent;
                                        $($this).text(parseInt(now) + '%');
                                    }
                                })
                            });
                            executed = true;
                        }
                    }
                }
            });
        }

        //section3
        if(scrollTop >= section3){

            $("#section2").find("h2.about_title").removeClass("show");
            
            $('.work_title span').css({
                left : -offset3
            });

            $('.work_item').each(function(){
                if(scrollTop > $(this).offset().top){
                    $(this).addClass('show');
                }
            });
        }
        

        //section4
        if(scrollTop >= section4){
            $('#section4 .more_wrap').addClass('fixed');
            $('#section4 .more_wrap').css('left', -offset4);
        } else {
            $('#section4 .more_wrap').removeClass('fixed');
        }

        // footer
        if(scrollBottom <= 0){
            $('.footer').addClass('show');
        } else {
            $('.footer').removeClass('show');
        }
    });
    
});


// section5 contact
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spanSlow = document.querySelectorAll('.spanSlow');
const spanFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e){
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow =100 * normalizedPosition;
    let speedFast =200 * normalizedPosition;

    spanSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spanFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
    });
}

function handleWindowResize() {
    width = window.innerWidth;
}



