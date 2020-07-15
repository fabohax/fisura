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
        right:wimg+"vw"
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
        display: "block"
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
        display: "block"
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
      $("#f10").css({
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

    $("#a11").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#11").css({
        display: "block"
      });
      $("arrow").css({
        display: "none"
      });
      $("#f11").css({
        display: "block"
      });
      deploy();
    });

    


   

    $("next").click(function(){
      $(this).parent().next().animate({right:"+=76.6vw"});
    });

    $("back").click(function(){
      $(this).parent().next().animate({right:"-=76.6vw"});
    });

});

    
