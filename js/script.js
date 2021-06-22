$(document).ready(function(){

    var $slide = $(".slider ul li.slide");
    console.log($slide);

    // var currentSlide = 0;
    //굳이 안써도됨

    setInterval(function(){
        var $pause = $(".slider").hasClass("pause"); 
        
        if($pause == true){

        }else{
            //이미지 슬라이더,페이저
            var $active_index = $("main .slider ul li.active").index();
            var $show_index = $("main .slider ol li.show").index();
            console.log($active_index);
            $(".slider ul li").removeClass("active");
            $(".slider ol li").removeClass("show");
            if($active_index == $slide.length - 1){
                $(".slider ul li").eq(0).addClass("active");
                $(".slider ol li").eq(0).addClass("show");
            }else{
                $(".slider ul li").eq($active_index).next().addClass("active");
                $(".slider ol li").eq($show_index).next().addClass("show");
            };
        }                       
    }, 3000);

    //마우스 오버시 정지기능
    $(".slider").hover(function(){
        $(this).addClass("pause");
    }, function(){
        $(this).removeClass("pause");
    });

    //페이저
    $(".slider ol li").click(function(){
        var $both_index = $(this).index();  //지역함수
        $(".slider ol li").removeClass("show");
        $(this).addClass("show");
        $(".slider ul li").removeClass("active");
        $(".slider ul li").eq($both_index).addClass("active");
    });
    
    //arrow
    $(".slider .prev").click(function(){
        var $index = $(".slider ul li.active").index();
        $(".slider ul li").removeClass("active");
        $(".slider ol li").removeClass("show");

        if($index == 0){
            $(".slider ul li").eq($slide.length - 1).addClass("active");
            $(".slider ol li").eq($slide.length - 1).addClass("show");
        }else{
            $(".slider ul li").eq($index).prev().addClass("active");
            $(".slider ol li").eq($index).prev().addClass("show");
        }
        return false;
    });

    $(".slider .next").click(function(){
        var $index = $(".slider ul li.active").index();
        $(".slider ul li").removeClass("active");
        $(".slider ol li").removeClass("show");

        if($index == $slide.length - 1){
            $(".slider ul li").eq(0).addClass("active");
            $(".slider ol li").eq(0).addClass("show");
        }else{
            $(".slider ul li").eq($index).next().addClass("active");
            $(".slider ol li").eq($index).next().addClass("show");
        }
        return false;
    });
    //메뉴 클릭시 스크롤
    $("header ul li").click(function(){
		var $rel = $(this).attr("rel");
        console.log($rel);
		$("html, body").stop().animate({scrollTop:$("section." + $rel).offset().top}, 1000);
		return false;
	});

    //탭
    $(".tab .tab_btn li").click(function(){
        $index = $(this).index();
        $(".tab .tab_btn li").removeClass("active");
        $(this).addClass("active");
        $(".tab .tab_cont > div").removeClass("active");
        $(".tab .tab_cont > div").eq($index).addClass("active");
        return false;
    });

    //팝업
    $(".tab .tab_cont > div span").click(function(){
        var $index = $(this).closest("li").index()+1;
        console.log($index);
        $(this).closest("html").find(".popup .img").css({"background-image":"url(../img/interior_0"+$index+".jpg)"});
        $(".darkness").addClass("active");
        $(".popup").addClass("active");      
        return false;
    });
    $(".tab .tab_cont > div:nth-child(2) span").click(function(){
        var $index = $(this).closest("li").index()+1;
        console.log($index);
        $(this).closest("html").find(".popup .img").css({"background-image":"url(../img/exterior_0"+$index+".jpg)"});
        $(".darkness").addClass("active");
        $(".popup").addClass("active");      
        return false;
    });
    $(".tab .tab_cont > div:nth-child(3) span").click(function(){
        var $index = $(this).closest("li").index()+1;
        console.log($index);
        $(this).closest("html").find(".popup .img").css({"background-image":"url(../img/furniture_0"+$index+".jpg)"});
        $(".darkness").addClass("active");
        $(".popup").addClass("active");      
        return false;
    });
    


    $(".close").click(function(){
        var $index = $(this).closest("li").index();
        console.log($index);
        $(".darkness").removeClass("active");
        $(".popup").removeClass("active");       
        return false;
    });   
 
});