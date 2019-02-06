<?php
    session_start();
    include (connectdata.txt);
    $db = mysqli_connect($server, $user, $pass,$dbname)
    or die('Error connecting to sql server.');

if(!empty($_GET['id'])){
  $id = $_GET['id'];
  $delete = mysqli_query($db,"Delete from Calendar where id = $id")
	  or die(mysqli_error($db));
  header("Location: ../index.html");
}
?>