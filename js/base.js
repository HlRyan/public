// JavaScript Document
$(function(){
	$('#banner>ul>li:gt(0)').hide()
	var len=$('#banner>ul>li').length
	var n=0
	var t
	function play (){
		$('#banner>ul>li').eq(n).show().siblings().hide()
		$('#num>a').eq(n).addClass('on').siblings().removeClass('on')
	}
	function autoPlay(){
		t=setInterval (function(){
			n++
			if(n>=len){
				n=0	
			}
			play()
		},3000)	
	}
	
	autoPlay()
	
	$('#banner').hover(function(){
		clearInterval(t)	
	},function(){
		autoPlay()
	})
	$('#num>a').each(function(index) {
        $(this).click(function(){
			n=index
			play()	
		})
    })
	//侧导航
	$('.nav_left>ul>li:last-child').css({'border':'none'})
})