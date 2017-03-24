(function(){
	//事件处理程序兼容性处理监听器
	var catchEvent = {
		evtListener: function(evtObj,evt,eventHandler){
			if(evtObj.addEventListener) {
				evtObj.addEventListener(evt,eventHandler);
			}else if(evtObj.attachEvent) {
				var evt = "on"+evt;
				evtObj.attachEvent(evt, eventHandler);
			}
		}
	}
	
	//导航条鼠标hover主菜单显示子菜单的方法封装
	window.subMenu = {
		parentClass: "has-child",
		firstMenuClass: "first-child",
		secondMenuClass: "second-child",
		hideChildren: function(){
			var firstChild = document.getElementsByClassName(this.firstMenuClass);
			var secondChild = document.getElementsByClassName(this.secondMenuClass);
			for(var i=0; i<firstChild.length; i++){
				firstChild[i].style.display = "none";
			}
			for(var i=0; i<secondChild.length; i++){
				secondChild[i].style.display = "none";
			}
		},
		showMenu: function(obj){
			this.toggleDisplay(obj, true);
		},
		hideMenu: function(obj){
			this.toggleDisplay(obj, false);
		},
		toggleDisplay: function(_obj, isHover){
			var curClass = _obj.getAttribute("class");
			var children = _obj.childNodes;
			if(isHover){
				if(curClass.indexOf('active') == -1){
					_obj.setAttribute("class",curClass+" active");
				}
			}else{
				if(curClass.indexOf('active') != -1){
					var pos = curClass.indexOf(' ');
					var removeClass = curClass.substring(0,pos);
					_obj.setAttribute("class",removeClass);
				}
			}
			for(var i=0; i<children.length; i++){
				if(children[i].nodeName !="#text"){
					var className = children[i].getAttribute("class");
					if(className == this.firstMenuClass || className == this.secondMenuClass){
						if(isHover){
							children[i].style.display = "block";
						}else{
							children[i].style.display = "none";
						}
						break;
					}
				}
			}
		},
		init: function(){
			//隐藏所有子菜单
			var _this = this;
			var parentMenu = document.getElementsByClassName(this.parentClass);
			catchEvent.evtListener(window,"load",function(){
				_this.hideChildren();
			});
			//鼠标hover事件调用显示子菜单组件对象方法subMenu.showMenu和subMenu.hideMenu
			for(var i=0; i<parentMenu.length; i++){
				catchEvent.evtListener(parentMenu[i], "mouseover", function(){
					_this.showMenu(this);
				})
			}
			for(var i=0; i<parentMenu.length; i++){
				catchEvent.evtListener(parentMenu[i], "mouseout", function(){
					_this.hideMenu(this);
				})
			}
		}
	}
})();