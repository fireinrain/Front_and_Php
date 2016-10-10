/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-17 21:52:40
 * @version $Id$
 */
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

function displayCitations(){
	if (!document.getElementsByTagName||!document.createTextNode||!document.createElement)return false; 
	
	//取得所有引用
	var quotes=document.getElementsByTagName("blockquote");
	//遍历引用
	for (var i = 0; i < quotes.length; i++) {
		//如果没有cite属性，继续循环
		if (!quotes[i].getAttribute("cite")) {
			continue;
		}
		//保存cite属性
		var url=quotes[i].getAttribute("cite");
		//取得引用中所有节点
		var quoteChildren=quotes[i].getElementsByTagName("*");
		//如果没有节点元素，继续循环
		if (quoteChildren.length<1) continue;
		//取得引用中最后一个元素节点
		var elem=quoteChildren[quoteChildren.length-1];
		//创建标记
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript=document.createElement("sup");
		superscript.appendChild(link);
		//把标记添加到最后一个元素节点
		elem.appendChild(superscript);

		// quotes[i].lastChild
	}
}


function displayAccesskeys(){
	if (!document.getElementsByTagName||!document.createTextNode||!document.createElement)return false; 
	var links=document.getElementsByTagName("a");
	if (links.length<1)return false;
	var akeys=new Array();
	//遍历这些缩略词
	for (var i = 0; i < links.length; i++) {
		var current_link=links[i];
		if (!current_link.getAttribute("accesskey"))continue;
		var key=current_link.getAttribute("accesskey");
		var text=current_link.lastChild.nodeValue;
		akeys[key]=text;
	}
    
    //创建定义列表
		var list=document.createElement("ul");
	//遍历定义
	for(key in akeys){
		var text=akeys[key];
		//创建定义的标题
		var str=key +":"+text
		var item=document.createElement("li");
		var item_text=document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
		//创建定义描述
		var header=document.createElement("h3");
		var header_text=document.createTextNode("Accesskeys");
		header.appendChild(header_text);
		//把它们添加到列表
		document.body.appendChild(header);
		document.body.appendChild(list);
		
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
 addLoadEvent(displayCitations);
 addLoadEvent(displayAccesskeys);



