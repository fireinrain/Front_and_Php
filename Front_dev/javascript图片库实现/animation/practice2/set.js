 //加载函数
  function addLoadEvent(func){
     var oldonload=window.onload;
     if (typeof window.onload !="function") {
      window.onload=func;

     }else{
      window.onload=function(){
        oldonload();
        func();
      }
     }
 }

 //抽象出移动函数以适应一般情况
function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById)return false; 
	if (!document.getElementById(elementID))return false; 
	var elem=document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    //添加加速减速的效果
    // alert("nihao");
    // if (xpos==final_x&&ypos==final_y) {
    // 	return true;
    // }
    // if (xpos<final_x) {
    // 	xpos++;
    // }
    // if (xpos>final_x) {
    // 	xpos--;
    // }
    // if (ypos<final_y) {
    // 	ypos++;
    // }
    // if (ypos>final_y) {
    // 	ypos--;
    // }


     var dist=0;
    // alert("nihao");
    if (xpos==final_x&&ypos==final_y) {
      return true;
    }
    if (xpos<final_x) {
      dist=Math.ceil((final_x-xpos)/100);
      
      xpos=xpos+dist;
    }
    if (xpos>final_x) {
      dist=Math.ceil((xpos-final_x)/100);
      xpos=xpos-dist;
    }
    if (ypos<final_y) {
      dist=Math.ceil((ypos+final_y)/100);
      ypos=ypos+dist;
    }
    if (ypos>final_y) {
      dist=Math.ceil((ypos-final_y)/100);
      ypos=ypos-dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    // alert(elem.style.top);
    // console.log(elem.style.left);
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
    // return function();
	
}



function prepareSlideshow(){
	//确保浏览器支持dom方法
	if (!document.getElementsByTagName)return false;
	if (!document.getElementById) return false;
	//确保元素存在
	if (!document.getElementById("linklist"))return false;
	if (!document.getElementById("preview")) return false;


	//还可以通过js生成html标记来分离属性
	//创建div元素
	// var slideshow=document.createElement("div");
	// slideshow.setAttribute("id","slideshow");

	// //创建img元素
	// var preview=document.createElement("img");
	// preview.setAttribute("src","images/topics.JPG");
	// preview.setAttribute("alt","building blocks of web design");
	// preview.setAttribute("id","preview");

	// //把创建的img绑到div中
	// slideshow.appendChild(preview);
	// var list=document.getElementById("linklist");
	// insertAfter(slideshow,list);

	//为图片应用样式
	var preview=document.getElementById("preview");
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	//取得列表所有连接
	var list=document.getElementById("linklist");
	var links=document.getElementsByTagName("a");
	
	//为mouseover添加动画效果
	links[0].onmouseover=function(){
		moveElement("preview",0,0,10);
	}
	links[1].onmouseover=function(){
		moveElement("preview",-250,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-500,0,10);
	}
	links[3].onmouseover=function(){
		moveElement("preview",-750,0,10);
	}
}

addLoadEvent(prepareSlideshow);