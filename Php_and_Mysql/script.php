<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Information Display</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<style type="text/css">
/*设置错误提示样式*/
  .error,.hello{
    height: 25px;
    width: auto;
    border: 1px solid #999;
    border-radius: 6px;
    color: white;
    background-color: #666;
    text-align: center;
  }

</style>
</head>
<body>
    <?php 
    	//从全局变量下接受变量值
    // $name=$_REQUEST['name'];
    // $emal=$_REQUEST['email'];
    // $gender=$_REQUEST['gender'];
    // $age=$_REQUEST['age'];
    // $comment=$_REQUEST['comment'];


    // 判断是否设置了,验证表单
   

      if (!empty($_REQUEST['name'])){
      $name=$_REQUEST['name'];
      
      }else{
        $name=NULL;
        echo "<p class='error'>"."您还没有填写名字哦！"."</p>";
      }

       if (!empty($_REQUEST['gender'])){
      $gender=$_REQUEST['gender'];
      if ($gender=='male'){
        echo "<p class='hello'>"."Hello,$name"."</p>";
      }elseif ($gender=="female") {
        echo "<p class='hello'>"."Nice to see you miss $name"."</p>";
      }
    }else{
      $gender=NULL;
      echo "<p class='error'>"."您还没有填写性别哦！"."</p>";
    }


        if (!empty($_REQUEST['age'])){
      $age=$_REQUEST['age'];
      
      }else{
        $age=NULL;
        echo "<p class='error'>"."您还没有填写年龄哦！"."</p>";
      }
        if (!empty($_REQUEST['email'])){
      $email=$_REQUEST['email'];
      
      }else{
        $email=NULL;
        echo "<p class='error'>"."您还没有填写邮箱哦！"."</p>";
      }
        if (!empty($_REQUEST['comment'])){
      $comment=$_REQUEST['comment'];
      
      }else{
        $comment=NULL;
        echo "<p class='error'>"."您还没有填写评论哦！"."</p>";
      }
      // echo "{$_REQUEST['name']}";

    if($name&&$age&&$gender&&$comment&&$email){
        foreach ($_REQUEST as $key => $value) {
    # code...
          if(is_array($value)){
            var_dump($value);
          }else{
            echo $key."--->".$value.'<br/>';
          }
          
        }
    }
    // foreach ($_REQUEST['hobby'] as  $value) {
    //   echo "$value";
    // }
    var_dump($_REQUEST);
   

     ?>
</body>
</html>