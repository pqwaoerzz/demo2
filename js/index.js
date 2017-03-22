$(function(){
	//焦点图样式
	var picHeight = $(window).height();
	$(".navbg").css({"height" : picHeight + "px"});
	$(".cloth").css({"height" : picHeight + "px"});
	$(window).resize(function(){
		var picHeight = $(window).height();
		$(".navbg").css({"height" : picHeight + "px"});
		$(".cloth").css({"height" : picHeight + "px"});
	});
	//焦点图轮播
	$(".navbg .slide li").hide();
	$(".navbg .slide li").eq(0).show();
	var index = 0;
	var time = setInterval(showMove,3000);
	function showMove(){
		var picNum = $(".navbg .slide li").length;
		index++;
		if(index == picNum){
			index = 0;
		}
		$(".navbg .slide li").eq(index).fadeIn("fast").siblings().hide();
	}
});