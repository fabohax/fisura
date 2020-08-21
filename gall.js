$(document).ready(function(){

	$("list span").mouseover(function(){
		$("list span").css("textDecoration","none")
		$(this).css({
			textDecoration:"underline"
		});
	});

	$("box").css({display:"none"});
	$("#1").css({display:"flex"});

	$("#a1").mouseover(function(){$("box").css({display:"none"});$("#1").css({display:"flex"});});
	$("#a2").mouseover(function(){$("box").css({display:"none"});$("#2").css({display:"flex"});});
	$("#a3").mouseover(function(){$("box").css({display:"none"});$("#3").css({display:"flex"});});
	$("#a4").mouseover(function(){$("box").css({display:"none"});$("#4").css({display:"flex"});});
	$("#a5").mouseover(function(){$("box").css({display:"none"});$("#5").css({display:"flex"});});
	$("#a6").mouseover(function(){$("box").css({display:"none"});$("#6").css({display:"flex"});});
	$("#a7").mouseover(function(){$("box").css({display:"none"});$("#7").css({display:"flex"});});
	$("#a8").mouseover(function(){$("box").css({display:"none"});$("#8").css({display:"flex"});});
	$("#a9").mouseover(function(){$("box").css({display:"none"});$("#9").css({display:"flex"});});
	$("#a10").mouseover(function(){$("box").css({display:"none"});$("#10").css({display:"flex"});});

	/*$("back").click(function(){	$("box").animate({left:"+=75vw"});});
	$("next").click(function(){	$("box").animate({left:"-=75vw"});});*/
	$("box a img").click(function(){
		$(this).parent().parent().css("scrollTop","+=300");
	});

	if($(window).width() < 1025){
		$("#a1").click(function(){
			$("#1").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#1").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a2").click(function(){
			$("#2").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#2").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a3").click(function(){
			$("#3").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#3").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a4").click(function(){
			$("#4").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#4").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a5").click(function(){
			$("#5").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#5").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a6").click(function(){
			$("#6").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#6").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a7").click(function(){
			$("#7").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#7").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a8").click(function(){
			$("#8").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#8").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a9").click(function(){
			$("#9").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#9").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
		});
		$("#a10").click(function(){
			$("#10").css({transform: "rotate(-90deg) translate(0vh,-100vw)"});
			$("#10").animate({opacity:"1"});
			$("back").css("display","block");
			$("next").css("display","block");
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

		$("back").click(function(){$("box").animate({scrollTop:"-=210"});});
		$("next").click(function(){$("box").animate({scrollTop:"+=210"});});

		$("x").click(function(){
			$("box").scrollTop(0);
			$("box").css("display","none");
			$("back").css("display","none");
			$("next").css("display","none");
		});

	}
	
});