//为了防止其他插件与jquery重名，可以通过noconflict找到jquery对象，重新更改表示jquery的符号
var $=jQuery.noConflict();
(function(){
	function Login(success){
		this.showLogin(success);
	}
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class='loginContainer'></div>");
		var closeButton=$("<p>关闭</p>");
		var usernameInput=$("<p><input type='text' placeholder='用户名'></p>");
		var passwordInput=$("<p><input type='password' placeholder='密码'></p>");
		var loginButton=$("<p>登录</p>");
		loginContainer.css({
			"width":"400px",
			"height":"300px",
			"background-color":"#FE4411",
			"border":"2px solid #BF3009",
			"position":"absolute",
			"top":"50%",
			"left":"50%",
			"box-sizing":"border-box",
			"margin":"-150px -200px"			
		});
		closeButton.css({
			"float":"right",
			"color":"white",
			"padding":"5px"			
		});		
		var inputCSS={
			"padding":"20px 0",
			"width":"300px",
			"margin":"0 auto",
			"text-align":"center"
		};
		usernameInput.css(inputCSS);
		passwordInput.css(inputCSS);
		loginButton.css({
			"color":"white"
		});
		loginButton.css(inputCSS);
		closeButton.click(function(){
			loginContainer.stop().fadeOut(1000,function(){
				loginContainer.remove();
			});
		});
		loginButton.click(function(){
			$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function(data){
				console.log(data);
				//登录成功后移除输入框
				if(data.code==0){
					loginContainer.stop().fadeOut(1000,function(){
						loginContainer.remove();
						// TODO:执行外面传入的方法
						success(data.data);
					});
				}else{
					alert(data.message);
				}
				localStorage.setItem("username",data.data.username);
				localStorage.setItem("token",data.data.token);
				localStorage.setItem("user_id",data.data.user_id);
			});
		});
		loginContainer.append(closeButton);
		loginContainer.append(usernameInput);
		loginContainer.append(passwordInput);
		loginContainer.append(loginButton);
		$(document.body).append(loginContainer);
	};
	window.Login=Login;
})();
