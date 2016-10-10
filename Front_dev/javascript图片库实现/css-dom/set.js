/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-17 23:15:04
 * @version $Id$
 */
var paras=document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
	paras[i].onclick=function () {
		alert("You click on a paragraph!")
	}
}


function displayAbbreviation(){
	if (!document.getElementsByTagName||!document.createTextNode||!document.createElement)return false; 
	//取得缩略词
	var abbreviations=document.getElementsByTagName("abbr");
	if (abbreviations.length<1)return false;
	var defs=new Array();
	//遍历这些缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr=abbreviations[i];
		var definition=current_abbr.getAttribute("title");
		var key=current_abbr.lastChild.nodeValue;
		defs[key]=definition;
	}
    
    //创建定义列表
		var dlist=document.createElement("dl");
	//遍历定义
	for(key in defs){
		var definition=defs[key];
		//创建定义的标题
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
}

       
       //创建标题
		var header=document.createElement("h2");
		var header_text=document.createTextNode("Abbreviation");
		header.appendChild(header_text);
		//把标题添加到页面主体
		document.body.appendChild(header);
		//把定义列表添加到页面主体
		document.body.appendChild(dlist);

}
function highlightrows(){
	if (!document.getElementsByTagName)return false;
	var rows=document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].onmouseover=function(){
			this.style.fontWeight="bold";
		}
		rows[i].onmouseout=function(){
			this.style.fontWeight="normal"
		}
	}
}
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
 addLoadEvent(displayAbbreviation);
 addLoadEvent(highlightrows);
