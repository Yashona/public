$(function() {
	
	//获取图片的长度
	var imgLen = $('.picmidmid > ul > li > img').length;

	//获取图片路径字符串
	var imgSrcStr = '';
	$('.picmidmid > ul > li').find('img').each(function(i){
		imgSrcStr += $(this).attr('src') + '@';
	});

	//图片路径字符串分割成数组;
	var imgSrcArr = imgSrcStr.split("@",imgLen);

	//获取显示多少张图片
	var divWidth = parseInt( $('.picmidmid').css('width') );
	var liWidth = parseInt( $('.picmidmid > ul > li').css('width') );
	var liShowLen = Math.floor( divWidth/liWidth ) ;


	//默认设置大图片显示路径
  $('#pic').attr('src',imgSrcArr[0]);
  $('.picmidmid > ul > li').eq(0).find('img').addClass("selectpic");

  //显示左点击按钮；
	$('#preArrow').bind('mouseover',function(){
		if( $('.picmidmid > ul > li:first').find('img').hasClass("selectpic") ){
			$("#preArrow_A").hide();
	  }else{
	  	$("#preArrow_A").show();
	  }
	})

	$('#preArrow').bind('mouseout',function(){
	  	$("#preArrow_A").hide();
	})

  //显示右点击按钮；
  $('#nextArrow').bind('mouseover',function(){
		if( $('.picmidmid > ul > li:last').find('img').hasClass("selectpic") ){
			$("#nextArrow_A").hide();
	  }else{
	  	$("#nextArrow_A").show();
	  }
	})

	$('#nextArrow').bind('mouseout',function(){
	  	$("#nextArrow_A").hide();
	})

  //申明变量；
	var i=0;
	var n=0;

	//大图向前点击事件
  $('#preArrow').bind('click',function(){
  	preArrow();
  })

  function preArrow(){
  	i--;
  	if( i<=imgLen && i >= 0 ){
  		$('#pic').attr('src',imgSrcArr[i]);
  		$('.picmidmid > ul > li').eq(i).find('img').addClass("selectpic");
  		$('.picmidmid > ul > li').eq(i).siblings().find('img').removeClass("selectpic");
  		if( $('.picmidmid > ul > li:first').find('img').hasClass("selectpic") ){
			$("#preArrow_A").hide();
	  	}
  		//向后返回显示图片
  		if( i <= liShowLen+1 ){
  			$('.picmidmid > ul > li').eq(i).show(); //超过显示的个数，从隐藏的最后一个向前一个陆续显示
  		}

  	}else{
	  	i=0;
	}

  }

  //小图左侧按钮
  $('#preArrow_B').click(function(){
  	preArrow();
  })

  //大图向后点击事件
  $('#nextArrow').bind('click',function(){
  	nextArrow();
  })

  function nextArrow(){
  	i++;
		if( i < imgLen ){
			$('#pic').attr('src',imgSrcArr[i]);
			$('.picmidmid > ul > li').eq(i).find('img').addClass("selectpic");
  		$('.picmidmid > ul > li').eq(i).siblings().find('img').removeClass("selectpic");
  		if( $('.picmidmid > ul > li:last').find('img').hasClass("selectpic") ){
			$("#nextArrow_A").hide();
	  	}
  		//向前返回显示图片
  		if( i > liShowLen-1 ){
  			$('.picmidmid > ul > li').eq(n).hide();  //超过显示的个数，第一个就隐藏
  			n++;
  		}else{
  			n=0;
  		}

		}else{
			i=imgLen-1;
		}
  }

  //小图右侧按钮
  $('#nextArrow_B').click(function(){
  	nextArrow();
  })


  //小图点击显示
  $('.picmidmid > ul > li').bind('click',function(){
  	var currentindex = $(this).index();
  	i = currentindex;
  	console.log(currentindex);
  	var smallImg = $(this).find('img').attr('src');
  	$('#pic').attr('src',smallImg);
	$(this).find('img').addClass("selectpic");
	$(this).siblings().find('img').removeClass("selectpic");
  })





  //浮动到小图列表上面图片显示变化
  $(".piclistshow li").hover(function() {
		$(this).css("background", "#fafafa")
	},function() {
		$(this).css("background", "#fff")
	});

});