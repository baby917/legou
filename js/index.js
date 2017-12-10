window.onload=function  () {
	//滚动出现搜索框
	//获取搜索框的高度
	var s_top=$("#search").offset().top+40;
	$(window).scroll(function  () {
		var scrollDistance=$(this).scrollTop();
		if (scrollDistance>s_top) {
			$("#display_search").show();
		}else if (scrollDistance<=s_top) {
			$("#display_search").hide();
		}
		
	})		
	
	
	//滚动条滚动顶部出现搜索框
	var tips2 = $("#search1").val();
	$("#search1").focus(function  () {
		if ($("#search1").val()==tips2) {
			$(this).val("");
		}	
	}).blur(function  () {
		if ($("#search1").val().trim() == "") {
			$(this).val(tips2);
		}
	}).keyup(function  () {
		var dis_val=$(this).val();
		$("#search").val(dis_val);
	})	
	

	//搜索框
	var tips1 = $("#search").val();
	$("#search").focus(function () {
		if ($("#search").val() == tips1) {
			$(this).val("");
		}
	}).blur(function  () {
		if ($("#search").val().trim() =="") {			
			$("#search").val(tips1);
		}		
	}).keyup(function  () {
		var search_val=$(this).val();
		$("#search1").val(search_val);
	})	

	
	//banner改bug
	//修改a 链接颜色
	$(".sonul").hover(function  () {
		$(this).addClass("current").siblings().removeClass("current");
		$(this).children().children().addClass("current");
	},function  () {
		$(this).removeClass("current");
		$(this).children().children().removeClass("current");
	})	
	//移入子菜单bug
	$(".menutree").hover(function  () {
		$(this).siblings().addClass("current");
		$(this).siblings().children().children().addClass("current");
	},function  () {
		$(this).siblings().removeClass("current");
		$(this).siblings().children().children().removeClass("current");
	})
	
	//图书电子书选项卡
	$("#books ul li").click(function  () {
		var i=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".bookscontent_lt").eq(i).show().siblings().hide();
	})
	//新书畅销榜
	$(".books_right .books_li_title").mouseover(function  () {
		$(this).hide();
		$(this).siblings().show();
	})
	$(".books_right .books_li_content").hover(function  () {
		$(this).show();
	},function  () {
		$(this).hide();
		$(this).siblings().show();
	})


	//楼层导航条
	var target=$(".floor_nav ul li");
	var colors=["#91D46B","#FF6600","#BA9DED","#FF7290","#C0EC4F"];
	$(target).click(function  () {
		var f_index=$(this).index();
		//恢复默认颜色
		$(target).children().css("background","#F1F1F1");
		//隐藏文字div
		$(".floor_nav ul li .navpic_text").hide();
		//点击的改变颜色
		$(this).children().css("background",colors[f_index]);
		//点击的文字div显示
		$(this).children().show();
		//改变字体颜色
		$(this).children().css("color","white");		
		
		//获取对应楼层div距离顶部高度
		var fc_top= $(".floor_content").eq(f_index).offset().top-100;
		//滚动条滚动到相应位置
	    $("body,html").animate({scrollTop:fc_top},1000);	    
        
	})
	//拖动滚动条对应导航点亮
	$(window).scroll(function  () {
		//滚动条高度
		var s_top= $(this).scrollTop();
		//1002 1556 2226 2896 3566
		console.log(s_top);
		//获取楼层div
		var divs= $(".floor_content");
		for (var i=0;i< divs.length;i++) {
			//楼层div距顶部高度
			var div_top = divs.eq(i).offset().top;
			//1102 1656 2326 2996 3666
			
			//若楼层div高度大于滚动条高度
			if (div_top>s_top) {
				//楼层导航点亮
				$(target).children().css("background","#F1F1F1");
				//隐藏文字div
				$(".floor_nav ul li .navpic_text").hide();
				//点击的改变颜色
				$(target).eq(i).children().css("background",colors[i]);
				//点击的文字div显示
				$(target).eq(i).children().show();
				//改变字体颜色
				$(target).eq(i).children().css("color","white");
				break;			
		}		
		}
		if (s_top<=500 || s_top>=4181) {
			//恢复默认颜色
			$(target).children().css("background","#F1F1F1");
			//隐藏文字div
			$(".floor_nav ul li .navpic_text").hide();			
		}			
		
	})
	
	
	//返回顶部
	$(".footer .ftcontent .returntop").click(function  () {
		$("html,body").animate({"scrollTop":"0"},100);
	})
	
	
	//登陆遮罩层
	//设置登陆框上间距
	$(".login_dialog .ld_box").css("margin-top",(($('.login_dialog').height()-300)/2));
	$(".login").click(function  () {
		$(".login_dialog").show();//点击登陆出现遮罩层
	})
	//获取焦点
	var ld_inputt=$(".ld_content .ld_username").val()
	$(".ld_content .ld_username").focus(function  () {
		if ($(this).val()==ld_inputt) {
			$(this).val("");
		}
		
	}).blur(function  () {
		if ($(".ld_content .ld_username").val().trim()=="") {
			$(this).val(ld_inputt);
		} 
	})
	//密码框获取焦点
	$(".ld_pwdtxt").focus(function  () {
		$(this).hide();
		$(".ld_pwd").show().focus().val("");
	})
	$(".ld_pwd").blur(function  () {	
		if ($(this).val().trim()=="") {
			$(this).hide();
			$(".ld_pwdtxt").show();
		}
	})	
	//点击x 或者取消关闭
	$(".login_dialog .ld_title a").click(function  () {
		$(".login_dialog").hide();
	})
	
	$(".login_dialog .ld_content .ld_cancel_btn").click(function  () {
	$(".login_dialog").hide();
})
	
	
	
}







