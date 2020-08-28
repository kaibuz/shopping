<?php

    $username = $_POST["username"];
	$password = $_POST["password"];
	
	mysql_connect("localhost", "root","root");
	
	mysql_select_db("test");
	
	$sql = "SELECT *FROM test WHERE username = '$username' and password = '$password'";
	
	$result = mysql_query($sql);
	
	$count = mysql_num_rows($result);
	
	if($count == 1){
		$arr= array("error" =>0,"msg"=>"登录成功");
		
		setcookie("islogin","1",time()+3*1000,"/");
		setcookie("username",$username,time()+3*1000,"/");
		setcookie("password",$password,time()+3*1000,"/");
	}else{
		$arr= array("error"=>1,"msg"=>"用户名或密码错误");
	}
	echo json_encode($arr);
?>