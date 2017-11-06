// JavaScript Document
$(function(){
	 //recommend
	 var olW=$('#recommend>ol>li').length*200
	 $('#recommend>ol').css({'width':olW+'px'})
	 var timer=null
	 function play(){
		timer=setInterval(function(){
			$('#recommend>ol').animate({marginLeft:'-200px'},function(){
				$(this).css({'margin-left':'0'}).find('li:first').appendTo(this)	
			})
		},2000)	 
	}
	play()
	$('#recommend').hover(function(){
		clearInterval(timer)	
	},function(){
		play()
	})
	//click small picture change pig picture
	var len=$('#small_pic>ul>li').length
	var ulW=len*149
	$('#small_pic>ul').css({'width':ulW+'px'})
		$('.btn_left').click(function(){
			$('#small_pic>ul').animate({marginLeft:'-149px'},function(){
				$(this).css({'margin-left':'0'}).find('li:first').appendTo(this)
			})
		})
		$('.btn_right').click(function(){
			$('#small_pic>ul').css({'margin-left':'-149px'}).find('li:last').prependTo('#small_pic>ul')
			$('#small_pic>ul').animate({marginLeft:'0'})
		})
		$('#small_pic>ul>li').click(function(){
			var smallPic=$(this).children().children().attr('src')
			$('.content_left>img').attr('src',smallPic)
			$(this).addClass('on').siblings().removeClass('on')
		})
				
})
