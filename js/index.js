function init(){
	$(".header-top-login").click(function(){//第一个li点击完了才实例化一个对象的
		new Login(function(user){
			$(".header-top-menu ul li:first-child").html("<a herf='#'>"+user.username+"</a>");
		});
	});
//创建导航
	new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
		console.log(event);
        window.open("html/list.html?cat_id="+event.data.id);
	});
//新建3个轮播
	new corouselView.Corouse("#left-course",[{imagePath:"resource/image/header/hot1.jpg"},{imagePath:"resource/image/header/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(2000);
	new corouselView.Corouse("#center-course",[{imagePath:"resource/image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"},{imagePath:"resource/image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"}],752,400).putSuperView().startTimer(2000,function(){
		/*var r=parseInt(Math.random()*256);
		var g=parseInt(Math.random()*256);
		var b=parseInt(Math.random()*256);
		$(".main-course").css("background-color","rgb("+r+","+g+","+b+")")*/

	});
    $(".main-course").css("background-color","#D5E3FE");
	new corouselView.Corouse("#right-course",[{imagePath:"resource/image/header/hot1.jpg"},{imagePath:"resource/image/header/hot2.jpg"}],200,400).putSuperView().startTimer(2000);
	//点击获取商品详情
	new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(event){
		console.log(event.data);
		window.open("html/goods-detail.html?goods_id="+event.data.des.goods_id);
	});
	//搜索商品
	$(".header-search-content-img").click(function(){
		var goods_input=$(".header-search-content-input").val();
		console.log(goods_input);
		window.open("html/search.html?search_text="+goods_input);
	});
	
}
init();