function enterShoppingCar(superEle){
	this.superEle=superEle;
	this.createView();
}
enterShoppingCar.prototype.createView=function(){
	var enter=document.createElement("div");
	enter.innerHTML="加入购物车";
	this.superEle.appendChild(enter);
	return this;
};
