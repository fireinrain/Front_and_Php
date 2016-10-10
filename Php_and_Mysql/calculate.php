<!DOCTYPE html>
<html>
<head>
<?php 
$title="A Calculate";
 ?>

	<title><?php echo $title; ?></title>
</head>
<body>
<!-- jisuan -->
<?php 
if ($_SERVER['REQUEST_METHOD']=='POST'){
	// 验证表单
	if(isset($_POST['efficiency'],$_POST['distence'],$_POST['gallon_price'])&&(is_numeric($_POST['efficiency']))&& is_numeric($_POST['distence']) && is_numeric($_POST['gallon_price'])){
		$gallons=$_POST['distence']/$_POST['efficiency'];
		$dollars=$gallons*$_POST['gallon_price'];
		$hours=$_POST['distence']/65;

		// 打印结果
		echo "<h1>

			Total results
		</h1>";
		echo "<p>
			This trip takes".$gallons."gallon".$dollars."dollar".
			number_format(2,$hours)."hours.

		</p>";
	}else{

		echo "<h1>ERROR</h1>";
		echo "<p>plese enter the correct numbers</p>";

	}
}

 ?>

	<h1>Trip Cost Calculate</h1>
	<form action="" method="post">
		<p> Distence(in miles):<input type="text" name="distence" value="
          <?php if(isset($_POST['distence'])){echo trim($_POST['distence']);}?>
		"></input></p>
		<p>Price per gallon:<span>
			<input type="radio" name="gallon_price" value='3.0'<?php if(isset($_POST['gallon_price'])&&($_POST['gallon_price']=='3.0')){echo "checked='checked'";} ?>>3.0</input>
		<input type="radio" name="gallon_price" value='3.5'<?php if(isset($_POST['gallon_price'])&&($_POST['gallon_price']=='3.5')){echo "checked='checked'";} ?>>3.5</input>
		<input type="radio" name="gallon_price" value='4.0'<?php if(isset($_POST['gallon_price'])&&($_POST['gallon_price']=='4.0')){echo "checked='checked'";} ?>>4.0</input>
		</span></p>
		<p>Fuel Efficiency:<select name="efficiency">
			<option value="10" <?php if(isset($_POST['efficiency'])&&($_POST['efficiency']=='10')){echo "selected='selected'";} ?>>Terrible</option>
			<option value="20" <?php if(isset($_POST['efficiency'])&&($_POST['efficiency']=='20')){echo "selected='selected'";} ?>>Decent</option>
			<option value="30" <?php if(isset($_POST['efficiency'])&&($_POST['efficiency']=='30')){echo "selected='selected'";} ?>>Very Good</option>
			<option value="40" <?php if(isset($_POST['efficiency'])&&($_POST['efficiency']=='40')){echo "selected='selected'";} ?>>Outstanding</option>
		</select></p>
		<p> <input type="submit" value="Calculate" name="submit"></input></p>
	</form>
</body>
</html>