/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-22 00:34:26
 * @version $Id$
 */

 //理解对象
// var person=new Object();
// person.name="刘朝阳";
// person.age=22;
// person.job="software engineer";
// person.sayName=function(){
// 	alert(this.name);
// }

// var person={
// 	name:"刘朝阳",
// 	age:22,
// 	job:"software engineer",
// 	sayName:function(){
// 		alert(this.name);
// 	}
// }
// person.sayName();

// //定义多个属性
// var book={};
// Object.defineProperties(book,{
// 	_year:{
// 		value:2004
// 	},
// 	edition:{
// 		value:1
// 	},
// 	year:{
// 		get:function(){
// 			return this._year;
// 		},
// 		set:function(newValue){
// 			if (newValue>2004) {
// 				this.year=newValue;
// 				this.edition+=newValue-2004;
// 			}
// 		}
// 	}

// });


// var num=0;
// var max=10;
// var intervalid=null;

// function increasenum(){
// 	num++;
// 	if (num==max) {
// 		clearInterval(intervalid);
// 		alert("done");
// 	}
// }
// intervalid=setInterval(increasenum,500);


// confirm("are you ok?");
// console.log("woshiqianduangongchengshi!");
// setTimeout(function(){location.replace("http://www.baidu.com/")},1000);
// window.onload=function(){
// 	var bod=document.getElementsByTagName("ul")[0];
// 	var nodelist=bod.cloneNode(true);
// 	var a=document.getElementsByTagName("li")[0];
// 	a.onclick=function(){
// 		var ntitle=document.title;
// 		document.title="hello,world!";
// 	}
// 	alert(document.URL);
// 	alert(document.referrer);
// }