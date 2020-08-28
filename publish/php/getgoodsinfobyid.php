<?php
    $id = $_GET["id"];
	
	mysql_connect("localhost", "root", "root");
	// 选择数据库
	mysql_select_db("test");
	// 定义sql语句
	$sql = "select * from goods where goods_id='$id'";
	$result = mysql_query($sql);
	// 抽取数据 
	$row = mysql_fetch_array($result);
	// 组装json
	$arr = array("error" => 0, "data" => $row);
	// 返回json
	echo json_encode($arr);
?>