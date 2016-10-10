<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<style type="text/css">
	/*表格样式*/
	.form_info{
		border: 2px solid pink;
		border-radius: 5px;
		background-color: #999; 
	}

	form p{
		font-family: yahei;
		font-size: 16px;
	}
	input,select,textarea{
		border-radius: 5px;
	}
	
	/*提交按钮*/
	.submit_bt{
		position: relative;
		width: 100%;
		height: 50px;
	}
	.btn{
		position: absolute;
		margin-left: 50%;
		margin-right: 50%;
	}

</style>
</head>
<body>
<!-- form start -->
<form  class="form_info" action="script.php" method="post">
	<fieldset><legend>客户评论信息</legend>
	<p class="info">名字：<input type="text" name='name'></p>
	<p class="info">邮箱地址：<input type="text" name='email'/></p>
	<p>性别：<input type="radio" name="gender" value="mail"/>男
			<input type="radio" name="gender" value="female"/>女
	</p>
	<p>年龄：<select name="age" id="age_select">
		<option value="0-29"> 30以下</option>
		<option value="30-60">30到60岁</option>
		<option value="60+">60岁以上</option>
	</select></p>
	<p> 爱好：
		<input type="checkbox" name="hobby[]" value="basketball">篮球</input>
		<input type="checkbox" name="hobby[]" value="swim">游泳</input>
		<input type="checkbox" name="hobby[]" value="running">跑步</input>
		

	</p>
	<p>评论：<textarea name="comment"></textarea></p>
	<p class="submit_bt"><input type="submit" class="btn" value="提交"/></p>

	</fieldset>

</form>

<!-- <?php 
echo "我爱你哟！";
define('INFOR', '[1,2,3]');
echo INFOR;
 ?> -->
    
</body>
</html>