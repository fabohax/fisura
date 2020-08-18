$(document).ready(function(){

    //index

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

  	

});

    

