var $=jQuery.noConflict();
(function(){
//显示在导航上的每个按钮
	function NavigaterItem(obj){
		var obj=obj||{};//如果没有，定义一个空对象也就不会报错
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");//创建它显示的界面
	}
	NavigaterItem.prototype.itemClick=function(callback){//添加点击事件属性
		this.item.on("click",this,callback);//this 代表NavigaterItem本身
		return this;
	};
//	new NavigaterItem().click(function(){});使用的时候这样使用
	function Navigater(){//显示导航

	}
	//点击导航按钮的时候需要知道点击按钮的商品类型的id、
	Navigater.prototype.createView=function(url,superView,callback){
		$.get(url,function(result){
			console.log(result);
			if(result.code==0){
				result.data.forEach(function(obj){
					//创建导航列表
					superView.append(new NavigaterItem(obj).itemClick(callback).item);//将有点击事件的item(li)加入superView中
				});
			}
		});
		return this;//方便后面用链式函数
	};
	window.Navigater=Navigater;
	window.NavigaterItem=NavigaterItem;
})();
