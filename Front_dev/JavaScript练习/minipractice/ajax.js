/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-01 01:06:40
 * @version $Id$
 */
var xhr=new XMLHttpRequest();
//当从服务器拿到数据时，我们在sun那个段落显示
xhr.onreadystatechange=function () {
	if (xhr.readyState==4 && xhr.status==200) {
		document.getElementById("sum").innerHTML=xhr.responseText;
	}
}
//它的功能时发送数据
function cal() {
	xhr.open("GET","star.php?a=1&b=2",true);
	xhr.send();
}