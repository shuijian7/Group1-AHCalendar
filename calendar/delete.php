<?php

###If delete buttton clicked, run delete.php
session_start();
require "../config.php";
require "../common.php";

$db = new PDO($server, $user, $pass , $dbname , $port)
or die('Error connecting to Mysql server.');

if(!empty($_GET['id'])){
  $id = $_GET['id'];
  $delete = mysqli_query($db,"Delete from Calendar where id = $id")
	  or die(mysqli_error($db));
  header("Location: ".$_SERVER['HTTP_REFERER']);
}
?>