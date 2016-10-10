/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-18 16:47:14
 * @version $Id$
 */
 
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
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    // alert("nihao");
    if (xpos==final_x&&ypos==final_y) {
    	return true;
    }
    if (xpos<final_x) {
    	xpos++;
    }
    if (xpos>final_x) {
    	xpos--;
    }
    if (ypos<final_y) {
    	ypos++;
    }
    if (ypos>final_y) {
    	ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    // alert(elem.style.top);
    // console.log(elem.style.left);
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
    // return function();
	
}

//设置初始位置
function positionMessage(){
	if (!document.getElementById)return false; 
	if (!document.getElementById("message"))return false 
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="20px";
	elem.style.top="30px";
	moveElement("message",500,300,20);

	//第二个元素
	if (!document.getElementById)return false; 
	if (!document.getElementById("message2"))return false 
	var elem=document.getElementById("message2");
	elem.style.position="absolute";
	elem.style.left="20x";
	elem.style.top="500px";
	moveElement("message2",400,330,20);


}

addLoadEvent(positionMessage);




