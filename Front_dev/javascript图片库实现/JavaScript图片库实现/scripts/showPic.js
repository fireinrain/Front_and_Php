/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-17 15:10:23
 * @version $Id$
 */
 //
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


 function insertAfter(newElement,targetElement){
  var parent=targetElement.parentNode;
  if (parent.lastChild==targetElement) {
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
 }

 function preparePlaceholder(){
  if (!document.createElement)return false; 
  if (!document.createTextNode)return false; 
  if (!document.getElementById)return false;
  if (!document.getElementById("imagegallery"))return false; 
  var placeholder=document.createElement("img");
  placeholder.setAttribute("id","placeholder");

  placeholder.setAttribute("src","images/placeholder.jpg");
  placeholder.setAttribute("alt","my image gallery");
  var description=document.createElement("p");
  description.setAttribute("id","description");
  var desctext=document.createTextNode("Choose an image");
  
  
  description.appendChild(desctext);
  var gallery=document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
 }

 //分离函数添加事件
function prepareGallery(){
   if (!document.getElementsByTagName) return false; 
   if (!document.getElementById)return false; 
 
  if (!document.getElementById("imagegallery"))return false; 
  var gallery=document.getElementById("imagegallery");
  var links=gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick=function(){
      
      return showPic(this);
  }
  links[i].onkeypress=links[i].onclick;
 }
 }


 function showPic(whichpic){
        if (!document.getElementById("placeholder"))return true; 
        var source=whichpic.getAttribute("href");
        // alert(source);
        var placeholder=document.getElementById("placeholder");
        // alert(placeholder);
        // if (palceholder.nodeName!="IMG")return false; 
        // console.log(palceholder.nodeName);

        placeholder.setAttribute("src",source);
        // alert(document.getElementById("description"));
        if (!document.getElementById("description"))return false;
        if (whichpic.getAttribute("title")) {
        var text=whichpic.getAttribute("title");
        // alert(text);
       }else{
        var text="";
       }
       var description=document.getElementById("description");
       if (description.firstChild.nodeType==3) {
          description.firstChild.nodeValue = text;
          // alert(text);
        }
        return false;
        // alert(description);
      
        }
        addLoadEvent(preparePlaceholder);
        addLoadEvent(prepareGallery);
        


//  //检测浏览器是否支持dom方法
// window.onload=function(){
//   if (!document.getElementsByTagName)return false ;
//    var links=document.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//       if (links[i].getAttribute("class")=="popup") {
//         links[i].onclick=function(){
//           poPup(this.getAttribute("href"));
//           return false;
//         }
//       }
//     }
// }

// function poPup(winURL){
//   window.open(winURL,"popup","width=320,height=480")
// }
//    //分离JavaScript
//    window.onload=prepareLinks;
//    function prepareLinks(){
//     var links=document.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//       if (links[i].getAttribute("class")=="popup"){
//         links[i].onclick=function(){
//           poPup(this.getAttribute("href"));
//           return false;
//         }
//       }
//     }
//    }


// addLoadEvent(prepareGallery);
//获取每一个图片的src并将其替换

	
//打印出body元素的所有子元素
   //  window.onload=countBodyChildren;

   // function countBodyChildren(){
   // 	var body_element=document.getElementsByTagName("body")[0];
   // 	alert(body_element.childNodes.length);
   // }




 


