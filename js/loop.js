$(document).ready(function(){
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
      $('mouth img#9').delay(t1*32).fadeIn(t1).delay(t2).fadeOut(t1);
      $('mouth img#10').delay(t1*36).fadeIn(t1).delay(t2).fadeOut(t1);

  	};

    loop();

  	var looper = setInterval(loop, t1*40);
});