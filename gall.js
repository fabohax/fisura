$(document).ready(function(){

	if($(window).width() > 1025){
		$("list span").mouseover(function(){
			$("list span").css("textDecoration","none")
			$(this).css({textDecoration:"underline"});
		});
		$("box").css({display:"none"});
		$("#1").css({display:"flex"});
		$("#a1").mouseover(function(){$("box").css({display:"none"});$("#1").css({display:"flex"});$("box").scrollTop(0);});
		$("#a2").mouseover(function(){$("box").css({display:"none"});$("#2").css({display:"flex"});$("box").scrollTop(0);});
		$("#a3").mouseover(function(){$("box").css({display:"none"});$("#3").css({display:"flex"});$("box").scrollTop(0);});
		$("#a4").mouseover(function(){$("box").css({display:"none"});$("#4").css({display:"flex"});$("box").scrollTop(0);});
		$("#a5").mouseover(function(){$("box").css({display:"none"});$("#5").css({display:"flex"});$("box").scrollTop(0);});
		$("#a6").mouseover(function(){$("box").css({display:"none"});$("#6").css({display:"flex"});$("box").scrollTop(0);});
		$("#a7").mouseover(function(){$("box").css({display:"none"});$("#7").css({display:"flex"});$("box").scrollTop(0);});
		$("#a8").mouseover(function(){$("box").css({display:"none"});$("#8").css({display:"flex"});$("box").scrollTop(0);});
		$("#a9").mouseover(function(){$("box").css({display:"none"});$("#9").css({display:"flex"});$("box").scrollTop(0);});
		$("#a10").mouseover(function(){$("box").css({display:"none"});$("#10").css({display:"flex"});$("box").scrollTop(0);});
	}
	

	if($(window).width() < 1025){
			
		$("#a1").click(function(){
			$("list").hide();
			$("#1").css({display:"flex"});
			$("#1").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a2").click(function(){
			$("list").hide();
			$("#2").css({display:"flex"});
			$("#2").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a3").click(function(){
			$("list").hide();
			$("#3").css({display:"flex"});
			$("#3").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a4").click(function(){
			$("list").hide();
			$("#4").css({display:"flex"});
			$("#4").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a5").click(function(){
			$("list").hide();
			$("#5").css({display:"flex"});
			$("#5").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a6").click(function(){
			$("list").hide();
			$("#6").css({display:"flex"});
			$("#6").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a7").click(function(){
			$("list").hide();
			$("#7").css({display:"flex"});
			$("#7").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a8").click(function(){
			$("list").hide();
			$("#8").css({display:"flex"});
			$("#8").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a9").click(function(){
			$("list").hide();
			$("#9").css({display:"flex"});
			$("#9").animate({opacity:"1"});
			$("x").css("display","block");
		});
		$("#a10").click(function(){
			$("list").hide();
			$("#10").css({display:"flex"});
			$("#10").animate({opacity:"1"});
			$("x").css("display","block");
		});

		$("open").click(function(){
			$("front").animate({height:"100vh"});
			$(this).hide();
			$("close").show();
		});

		$("close").click(function(){
			$("front").animate({height:"3vh"});
			$(this).hide();
			$("open").show();
		});

		/*$("back").click(function(){$("box").animate({left:"+=100vw"},"slow");});
		$("next").click(function(){$("box").animate({left:"-=100vw"},"slow");});*/

		$("x").click(function(){
			$("box").scrollTop(0);
			$("box").animate({opacity:"0"});
			$(this).css("display","none");
			$("list").show();
			$("box").css({display:"none"});
		});

	}
	
});