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
      $(this).css({
        textDecoration: "underline",
        fontWeight: "bolder",
        cursor: "pointer"
      });
    });

    $('list span').mouseout(function(){
      $(this).css({
        textDecoration: "none",
        fontWeight: "normal"

      });
    });



    $("#1").css("display","block");
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
      $("arrow img").css({
        display: "none"
      });
      $("#f1").css({
        display: "block"
      });
    });

    $("#a2").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#2").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f2").css({
        display: "block"
      });
    });

    $("#a3").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#3").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f3").css({
        display: "block"
      });
    });

    $("#a4").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#4").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f4").css({
        display: "block"
      });
    });

    $("#a5").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#5").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f5").css({
        display: "block"
      });
    });

    $("#a6").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#6").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f6").css({
        display: "block"
      });
    });

    $("#a7").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#7").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f7").css({
        display: "block"
      });
    });

    $("#a8").mouseover(function(){
      $("box").css({
        display: "none"
      });
      $("#8").css({
        display: "block"
      });
      $("arrow img").css({
        display: "none"
      });
      $("#f8").css({
        display: "block"
      });
    });

});

    
