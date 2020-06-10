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


  	var i;
  	for (var i = Things.length - 1; i < 8; i--) {
  		Things[i]
  	}


	$("#1").animate({opacity: '1'}, "slow");
	$("#1").animate({opacity: '1'}, "slow");

	$("#2").animate({opacity: '1'}, "slow");
	$("#2").animate({opacity: '0'}, "slow");

	$("#3").animate({opacity: '1'}, "slow");
	$("#3").animate({opacity: '0'}, "slow");

	$("#4").animate({opacity: '1'}, "slow");
	$("#4").animate({opacity: '0'}, "slow");

	$("#5").animate({opacity: '1'}, "slow");
	$("#5").animate({opacity: '0'}, "slow");

	$("#6").animate({opacity: '1'}, "slow");
	$("#6").animate({opacity: '0'}, "slow");

	$("#7").animate({opacity: '1'}, "slow");
	$("#7").animate({opacity: '0'}, "slow");


});

    
