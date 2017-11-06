// JavaScript Document
$(function(){
	 $('.product>.produce>ul>li:last-child').css({'margin-right':'0px'})
	 $('.introduce>ul>li:last-child').css({'margin-right':'0px'})
	 //product
	 var ulW=$('#product>ul>li').length*410
	 $('#product>ul').css({'width':ulW+'px'})
	 var timer=null
	 function play(){
		timer=setInterval(function(){
			$('#product>ul').animate({marginLeft:'-410px'},function(){
				$(this).css({'margin-left':'0'}).find('li:first').appendTo(this)	
			})
		},2000)	 
	}
	play()
	$('.produce').hover(function(){
		clearInterval(timer)	
	},function(){
		play()
	})
	$('.bnt_right').click(function(){
		$('#product>ul').animate({marginLeft:'-410px'},function(){
			$(this).css({'margin-left':'0'}).find('li:first').appendTo(this)	
		})
	})
	$('.bnt_left').click(function(){
		$('#product>ul').css({'margin-left':'-410px'}).find('li:last').prependTo('#product>ul')	
		$('#product>ul').animate({marginLeft:'0'})
	})
})