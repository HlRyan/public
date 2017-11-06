// JavaScript Document
$(function(){
	$('.name').focus(function(){
		var searchValue=$(this).val()
		if(searchValue=='姓名'){
			$(this).val('')
			$(this).css({'color':'#000'})	
		}	
	})
	$('.name').blur(function(){
		var searchValue=$(this).val()
		if(searchValue==''){
			$(this).val('姓名')
			$(this).css({'color':'#666'})
		}
	})
	
	$('.number').focus(function(){
		var searchValue=$(this).val()
		if(searchValue=='电话号码'){
			$(this).val('')
			$(this).css({'color':'#000'})	
		}	
	})
	$('.number').blur(function(){
		var searchValue=$(this).val()
		if(searchValue==''){
			$(this).val('电话号码')
			$(this).css({'color':'#666'})
		}
	})
	
	$('textarea').focus(function(){
		var searchValue=$(this).val()
		if(searchValue=='给我留言'){
			$(this).val('')
			$(this).css({'color':'#000'})	
		}	
	})
	$('textarea').blur(function(){
		var searchValue=$(this).val()
		if(searchValue==''){
			$(this).val('给我留言')
			$(this).css({'color':'#666'})
		}
	})
	
	$('.auth').focus(function(){
		var searchValue=$(this).val()
		if(searchValue=='验证码'){
			$(this).val('')
			$(this).css({'color':'#000'})	
		}	
	})
	$('.auth').blur(function(){
		var searchValue=$(this).val()
		if(searchValue==''){
			$(this).val('验证码')
			$(this).css({'color':'#666'})
		}
	})
	$('.bnt').click(function(){
		$('.name,.number,.auth,textarea').css({'color':'#666'})
	})
})
