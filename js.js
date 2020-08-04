$(document).ready(function(){


    $("#contacto").click(function(){
	    $("front").animate({
		    	width: '100%'
		  	}
	    );
	    $("contacto").css({
	    	display: 'block'
	    });
	    $("contacto").animate({
	    	opacity: '1'
	    });
	    $("logo img").css({
	    	filter: 'invert(1)'
	    })
  	});

  	function loop(){

  		t1 = 1500;
  		t2 = t1*2;

  		t3 = t1*32;


  		$('mouth img#1').fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#2').delay(t1*4).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#3').delay(t1*8).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#4').delay(t1*12).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#5').delay(t1*16).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#6').delay(t1*20).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#7').delay(t1*24).fadeIn(t1).delay(t2).fadeOut(t1);
    	$('mouth img#8').delay(t1*28).fadeIn(t1).delay(t2).fadeOut(t1);

  	};

    loop();

  	var looper = window.setInterval(loop, 49500);

    $('list span').mouseover(function(){
      $('list span').css({
        textDecoration: "none"});
      $(this).css({
        textDecoration: "underline",
        fontWeight: "bold",
        cursor: "pointer"
      });
    });

    $('list span').mouseout(function(){
      $(this).css({
        textDecoration: "underline",
        fontWeight: "normal"

      });
    });

    function deploy(){
      var wimg = -76.6;
      $(".s2").animate({
        right:wimg+"vw",
        textAlign:"center"
      });
      $(".s3").animate({
        right:(wimg*2)+"vw"
      });
      $(".s4").animate({
        right:(wimg*3)+"vw"
      });
      $(".s5").animate({
        right:(wimg*4)+"vw"
      });
      $(".s6").animate({
        right:(wimg*5)+"vw"
      });
      $(".s7").animate({
        right:(wimg*6)+"vw"
      });
      $(".s8").animate({
        right:(wimg*7)+"vw"
      });
      $(".s9").animate({
        right:(wimg*8)+"vw"
      });
      $(".s10").animate({
        right:(wimg*9)+"vw"
      });
      $(".s11").animate({
        right:(wimg*10)+"vw"
      });
      $(".s12").animate({
        right:(wimg*11)+"vw"
      });
      $(".s13").animate({
        right:(wimg*12)+"vw"
      });
      $(".s14").animate({
        right:(wimg*13)+"vw"
      });
      $(".s15").animate({
        right:(wimg*14)+"vw"
      });
      $(".s16").animate({
        right:(wimg*15)+"vw"
      });
    }

    deploy();


    $("#1").css(
      "display","block"
    );

    $("#f1").css({
          display: "block"
    });



    $("#a1").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#1").css({
        display: "block",
        right:"0px"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f1").css({
        display: "block"
      });
      deploy();
    });

    $("#a2").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#2").css({
        display: "block",
        right:"0px"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f2").css({
        display: "block"
      });
      deploy();
    });

    $("#a3").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#3").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f3").css({
        display: "block"
      });
      deploy();
    });

    $("#a4").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#4").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f4").css({
        display: "block"
      });
      deploy();
    });

    $("#a5").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#5").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f5").css({
        display: "block"
      });
      deploy();
    });

    $("#a6").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#6").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f6").css({
        display: "block"
      });
      deploy();
    });

    $("#a7").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#7").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f7").css({
        display: "block"
      });
      deploy();
    });

    $("#a8").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#8").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f8").css({
        display: "block"
      });
      deploy();
    });

    $("#a9").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#9").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f9").css({
        display: "block"
      });
      deploy();
    });

    $("#a10").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#10").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f10").css({
        display: "block"
      });
      deploy();
    });

    
     //Firefox
    $('back').bind('DOMMouseScroll', function(e){
       if(e.originalEvent.detail > 0) {
           //scroll down
           $(this).parent().next().animate({right:"+=76.6vw"});
       }else {
           //scroll up
           $(this).parent().next().animate({right:"-=76.6vw"});
       }

       //prevent page fom scrolling
       return false;
    });

    $('next').bind('DOMMouseScroll', function(e){
       if(e.originalEvent.detail > 0) {
           //scroll down
           $(this).parent().next().animate({right:"+=76.6vw"});
       }else {
           //scroll up
           $(this).parent().next().animate({right:"-=76.6vw"});
       }

       //prevent page fom scrolling
       return false;
    });

    //IE, Opera, Safari
    $('back').bind('mousewheel', function(e){
       if(e.originalEvent.wheelDelta < 0) {
           //scroll down
           $(this).parent().next().animate({right:"+=76.6vw"});
       }else {
           //scroll up
           $(this).parent().next().animate({right:"-=76.6vw"});
       }

       //prevent page fom scrolling
       return false;
    });

    $('next').bind('mousewheel', function(e){
       if(e.originalEvent.wheelDelta < 0) {
           //scroll down
           $(this).parent().next().animate({right:"+=76.6vw"});
       }else {
           //scroll up
           $(this).parent().next().animate({right:"-=76.6vw"});
       }

       //prevent page fom scrolling
       return false;
    });

   

    $("next").click(function(){
      $(this).parent().next().animate({right:"+=76.6vw"});
    });

    $("back").click(function(){
      $(this).parent().next().animate({right:"-=76.6vw"});
    });

    if ($(window).width() < 800) {
      
    }
    else {
    }

    $(".next").click(function(){
      $("arrow").css({display:"none"});
      $(this).parent().css({display:"none"});
      $(this).parent().next().css({display:"block"});
      $(this).parent().next().next().css({display:"block"});
    });

    $(".a1").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a1").css({textDecoration:"underline"});
    });

    $(".a2").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a2").css({textDecoration:"underline"});
    });

    $(".a3").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a3").css({textDecoration:"underline"});
    });

    $(".a4").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a4").css({textDecoration:"underline"});
    });

    $(".a5").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a5").css({textDecoration:"underline"});
    });

    $(".a6").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a6").css({textDecoration:"underline"});
    });

    $(".a7").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a7").css({textDecoration:"underline"});
    });

    $(".a8").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a8").css({textDecoration:"underline"});
    });

    $(".a9").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a9").css({textDecoration:"underline"});
    });

    $(".a10").click(function(){
      $("list span").css({textDecoration:"none"});
      $("#a10").css({textDecoration:"underline"});
    });

    if($(window).width() <= 800){
      
      $("body").css({animation:"none"});
      $("#a1").click(function(){
        $("box").css({});
        $("#f1 next").trigger("click");
        $("#1 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a2").click(function(){
        $("#f2 next").trigger("click");
        $("#2 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a3").click(function(){
        $("#f3 next").trigger("click");
        $("#3 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a4").click(function(){
        $("#f4 next").trigger("click");
        $("#4 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a5").click(function(){
        $("#f5 next").trigger("click");
        $("#5 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a6").click(function(){
        $("#f6 next").trigger("click");
        $("#6 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a7").click(function(){
        $("#f7 next").trigger("click");
        $("#7 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a8").click(function(){
        $("#f8 next").trigger("click");
        $("#8 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a9").click(function(){
        $("#f9 next").trigger("click");
        $("#9 item img").css({padding:"50vh 20vw 50vh"});
      });
      $("#a10").click(function(){
        $("#f10 next").trigger("click");
        $("#10 item img").css({padding:"50vh 20vw 50vh"});
      });
    }

    if($("box item img").width()>"900"){
      $(this).parent().css("textAlign","right");
    };

});

    

