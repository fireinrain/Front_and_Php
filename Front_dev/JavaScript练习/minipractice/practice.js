/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-31 00:41:09
 * @version $Id$
 */
 // 循环结构
// var a=1;
// do{
// 	document.write("辛星永远爱小倩，第");
// 	document.write(a);
// 	document.write("次，<br/>")
// 	a++;
// 	// break;
// }while(a<5);
//函数
// function xin(a,b) {
// 	return a+b;
// }
// document.write("最后的结果是：");
// document.write(xin(3,4));
//变量作用域
// var xin=new Array();
// xin[0]="辛兴";
// xin[1]="小倩";
// xin[2]="陆杰";
// xin[3]="辛勇";
// document.write(xin);
//对象
// var person=new Object();
// person.myname="xinxing";
// person.myaim="zai zhan woshi nian";
// person.msg=function () {
// 	document.write("woshi"+this.myname+":"+this.myaim);
// }
// person.msg();
// 首先获得这个元素

//var el=document.getElementById("xin");
//alert(typeof el);
////然后修改这个元素
//el.innerHTML ="小倩--求祝福";
//var msg=document.getElementById("star").innerHTML;
// alert("标签div中的内容是："+msg);
//查看修改html元素的属性
var name=document.getElementsByTagName("img")[0];
//直接给其src属性赋值即可
name.src = "mayuyubg.jpg";
//alert(name.src);
//?为什么没有替换图片,



