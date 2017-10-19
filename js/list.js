/**
 * Created by CDLX on 2017/8/26.
 */
(function (){
    function List(){

    }
    List.prototype.createView=function(url,superView){
        var listid=decodeURIComponent(location.search.slice(location.search.lastIndexOf('=')+1));
        $.get(url,{cat_id:listid},function(result){
            result.data.forEach(function(obj){
                var space=20;
                var colume=5;
                var width=(1200-space*(colume-1))/colume;
                $(superView).append($("<div class='good-box'><p class='goods-name'>"+obj.goods_name+"</p><p><img width='"+width+"px' src='"+obj.goods_thumb+"' alt=''></p><h3>￥"+obj.price+"</h3><p>"+obj.goods_desc+"</p></div>"));
            });

        });

    };
    window.List=List;
})();
