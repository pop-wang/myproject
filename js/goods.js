(function(){
	//商品元素的类
	function GoodItem(obj){
		this.des=obj;
		var space=20;
		var colume=5
		var width=(1200-space*(colume-1))/colume;
		 this.item = $("<div class='good-box'></div>");
        var name = $("<p class='goods-name'>"+obj.goods_name+"</p>");
        var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb+"' alt=''></p><h3>￥"+obj.price+"</h3><p>"+obj.goods_desc+"</p>");
        this.item.append(name);
        this.item.append(other);		
		this.item.css({
			"width":width+"px",
			"height":"384px",
			"border":"2px solid #ff4411",
			"box-sizing":"border-box",
			"overflow":"hidden",
			"margin-bottom":"15px",
			"position":"relative"
		});
		name.css({
			"position":"absolute",
			"height":"20px",
			"line-height":"20px",
			"display":"none"
		});
		this.item.hover(function(){
			$(this).children(".goods-name").css("display","block");
		},function(){
			$(".goods-name").css("display","none");
		});
	}
	GoodItem.prototype.click=function(callback){
		this.item.on("click",this,callback);
		return this;
	};
	//商品的类
	function Good(url,parm,superView,action){//如果不想传参数定义成属性也行this.superView=superView,下面就不需要一级一级去传参数了
		this.loadData(url,parm,superView,action);
	}
	Good.prototype.loadData=function(url,parm,superView,action){
		$.get(url,parm,function(result){
			if(result.code==0){
				this.showGoodsView(result.data,superView,action);
			}
		}.bind(this));
	};
	Good.prototype.showGoodsView=function(goods,superView,action){
		goods.forEach(function(data){
			superView.append(new GoodItem(data).click(action).item);
		});
	};
	window.Good=Good;
})();
