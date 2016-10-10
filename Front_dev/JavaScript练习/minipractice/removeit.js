/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-31 14:46:51
 * @version $Id$
 */
 //元素的删除
//获取父元素

// // alert("nihao");
// var e1=document.getElementById('xin');
// //获取子元素
// var e2=document.getElementById("xin2");
// //移除子元素
// e1.removeChild(e2);//发现问题了，是我自己没有看清楚getelementbyid(看清楚啊 


//添加元素

//传建一个p标签
// var e1 =document.createElement("p");
// //设置他的文本内容
// e1.innerHTML="宝刀未老，再战十年";
// //得到他的父元素
// var e2=document.getElementById("xin");

// //把元素添加到父元素里面去
// e2.appendChild(e1);




//操纵css
//设置字体颜色
// document.getElementById("xin").style.color="red";


//事件
// function xin() {
// 	alert("我被点击了");
// 	document.write("我是刘朝阳啊 ！！")
// }

//事件监听
//定义事件处理函数
// function lucky() {
// 	alert("祝你事事顺利，万事如意，身体健康");
// }
// //为该按钮的点击事件添加事件处理函数
// //document.getElementById("xin").addEventListener("click",lucky);
// //也可以使用匿名函数
// document.getElementById("xin").addEventListener("click",function(){
// 	alert("渡边麻友呀呀呀");
// });


//冒泡，，，捕获
//定义一个外部事件
// function outter() {
// 	alert("外部事件被触发");
// }
// //定义一个内部事件
// function inner() {
// 	alert("内部事件被触发");
// }
// //分别监听xin和star这两个元素
// document.getElementById("xin").addEventListener("click",inner);
// //这里强制设置为先触发外部元数被点击事件
// document.getElementById("star").addEventListener("click",outter,true);//移除监听用removeeventlistener
// //注意在ie8或以下版本element.attchevent("事件"，"处理函数")
// //移除用detachevent（命名驼峰）


// bom部分
// var h=window.innerHeight;
// var w=window.innerWidth;
// document.write("浏览器的高度："+h+"px");
// document.write("<br/>");
// document.write("浏览器的宽度："+w+"px");//当时的浏览器窗口的大小
// document.write("<br/>");
// document.write("屏幕可用高度"+screen.availHeight+"px");
// document.write("<br/>");
// document.write("屏幕可用高度"+screen.availWidth+"px");


//计时 cookie
//得到时间
// function mytime() {
// 	var t=new Date();
// 	var mt=t.toLocaleTimeString();
// 	document.getElementById("time").innerHTML=mt;
// }
// //开始计时
// function start() {
// 	timeline=setInterval(mytime,1000);
// }
// //终止计时
// function stop() {
// 	clearInterval(timeline);
// }
// //事件绑定
// document.getElementById("begin").addEventListener("click",start);
// document.getElementById("stop").addEventListener("click",stop);

// cookie设置
// function start() {
// 	document.cookie="name=xingxing";
// }
// //查看cookie
// function stop() {
// 	var text=document.cookie;
// 	alert(text);
// }
// //事件绑定
// document.getElementById("begin").addEventListener("click",start);
// document.getElementById("stop").addEventListener("click",stop);


//location  history

