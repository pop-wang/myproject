/*封装一个加减按钮
 * 1.有界面
 * 2.点击加减，可以出发事件：更改显示的数字，更改后的数字需要给使用我们插件的地方
 * 3.点击加减按钮的时候需要抽取出一个更新界面的方法
 * 4.需要考虑到一个界面可能需要创建多个加减按钮
 * 5.链式函数
 */
function Addcontrol(superEle,maxNum){//直接将父元素定义成属性，每次创建的时候直接从外部传入
	this.superEle=superEle;
	this.maxNum=maxNum;//这样设置不能时时监控数量
	this.curNum=1;
	this.createView();
}
Addcontrol.prototype.createView=function(){//在创建的时候我们需要知道父元素是谁
	var container=document.createElement("div");
	var self=this;
	var datas=[{type:"button",content:"-",action:self.lessAction()},{type:"input",content:"1",action:self.changeAction()},{type:"button",content:"+",action:self.moreAction()}];
	datas.forEach(function(info){//循环给每个元素绑定事件
		var ele=document.createElement(info.type);
		if(info.type==="input"){ //吧input框设置为其的一个属性
			self.showNumView=ele;
		}
		info.type==="input"?ele.value = info.content:ele.textContent = info.content;
        info.type==="input"?ele.onblur = info.action:ele.onclick = info.action;
        container.appendChild(ele);

	});

/*	var lessBtn=document.createElement("button");
	var showNum=document.createElement("input");
	var moreBtn=document.createElement("button");	
	container.appendChild(lessBtn);
	container.appendChild(showNum);
	container.appendChild(moreBtn);*/
	this.superEle.appendChild(container);
	return this;
}
Addcontrol.prototype.lessAction=function(){
	var self=this;
	return function(){
		--self.curNum;
		self.curNum=self.curNum<1?0:self.curNum;
		self.updateUI();
	}
	
}
Addcontrol.prototype.changeAction=function(event){
	var self=this;
	return function(){
		self.curNum=event.currentTarget.value;
		self.curNum=self.curNum>self.maxNum?self.maxNum:self.curNum;
		self.curNum=self.curNum<1?0:self.curNum;
		self.updateUI();
	}
	
}
Addcontrol.prototype.moreAction=function(){
	var self=this;
	return function(){
		++self.curNum;
		self.curNum=self.curNum>self.maxNum?self.maxNum:self.curNum;
		self.updateUI();
	}
}
Addcontrol.prototype.updateUI=function(){
	this.showNumView.value=this.curNum;
	
}
