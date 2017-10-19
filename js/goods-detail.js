(function (){
	function GoodsDetail(){
		
	}
	GoodsDetail.prototype.createView=function(url,superView){
		var gid=location.search.slice(location.search.lastIndexOf('=')+1);
		$.get(url,{goods_id:gid},function(result){
			var obj='';
			if(result.data.length==1 || result.data.length==2){
				obj=result.data[0];
				console.log(obj);
			}
			$(superView).append($("<div class='goods-detail-img'><img src='"+obj.goods_thumb+"'/></div><div class='goods-detail-content'><h5>"+obj.goods_name+"</h5><h5>￥"+obj.price+"</h5><p>"+obj.goods_desc+"</p></div>"));
			new Addcontrol(superView,10);
			$(superView).append($("<ul><li>立即购买</li><li>加入购物车</li></ul>"));
		});
	};
	window.GoodsDetail=GoodsDetail;
})();

