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

  		t1 = 2500;
  		t2 = t1*2;
  		t3 = t1*3;
  		t4 = t1*4;
  		t6 = t1*6;


  		$("mouth img#1").animate({opacity: '0',display:'block'}, t1);
	  	$("mouth img#1").animate({opacity: '1'}, t1);
	  	$("mouth img#1").animate({opacity: '1'}, t1);
	  	$("mouth img#1").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#2").animate({opacity: '0',display:'block'}, t1*5);
	  	$("mouth img#2").animate({opacity: '1'}, t1);
	  	$("mouth img#2").animate({opacity: '1'}, t1);
	  	$("mouth img#2").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#3").animate({opacity: '0',display:'block'}, t1*8);
	  	$("mouth img#3").animate({opacity: '1'}, t1);
	  	$("mouth img#3").animate({opacity: '1'}, t1);
	  	$("mouth img#3").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#4").animate({opacity: '0',display:'block'}, t1*11);
	  	$("mouth img#4").animate({opacity: '1'}, t1);
	  	$("mouth img#4").animate({opacity: '1'}, t1);
	  	$("mouth img#4").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#5").animate({opacity: '0',display:'block'}, t1*14);
	  	$("mouth img#5").animate({opacity: '1'}, t1);
	  	$("mouth img#5").animate({opacity: '1'}, t1);
	  	$("mouth img#5").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#6").animate({opacity: '0',display:'block'}, t1*17);
	  	$("mouth img#6").animate({opacity: '1'}, t1);
	  	$("mouth img#6").animate({opacity: '1'}, t1);
	  	$("mouth img#6").animate({opacity: '0',display:'none'}, t1);

	  	$("mouth img#7").animate({opacity: '0',display:'block'}, t1*20);
	  	$("mouth img#7").animate({opacity: '1'}, t1);
	  	$("mouth img#7").animate({opacity: '1'}, t1);
	  	$("mouth img#7").animate({opacity: '0',display:'none'}, t1);

  	}


	 setInterval(loop(),t1*4);

});

    
