<?php
    include (connectdata.txt);
    $db = mysqli_connect($server, $user, $pass , $dbname)
    or die('Error connecting to sql server.');


?>
<html>
<head>
<style>
  .container{   

display: grid;   

grid-template-columns: 1fr 2fr 2fr 2fr;   

grid-template-rows: 1fr 1fr;   

grid-auto-flow: row;  
grid-column-gap:20px;


}
.item-a{   

grid-column: 1;   

grid-row: 1 / 3;  

background:Yellow; 
}  
</style>
</head>
<body>
<section class = "container">
          <div class = "item-a">
          <h1>Link</h1>
            <ul>
            <li><a href = "../index.html">Home</a></li>
            </ul>
        </div>
        <?php
        $id = $_GET['id'];
        $query = "Select * from Calendar where id = ".$id;
        $result = mysqli_query($db,$query) or die(mysqli_error($db));
        ?>
        <?php while($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {?>
        <div class = "item-b">
          <h1>Title</h1>
        <ul>
          <li><?php echo $row['title'];?></li>
        </ul>
        </div>
        <div class = "item-c">
          <h1>Description</h1>
        <ul>
          <li><?php echo $row['description'];?></li>
        </ul>
        </div>
        <div class = "item-d">
          <h1>Other Information</h1>
          <ul>
          <li><?php echo "start time"." ".$row['start_time'];?></li>
          <li><?php echo "end time"." ".$row['end_time'];?></li>
        </div>
</section>
<?php
}
mysqli_free_result($result);

mysqli_close($db);
?>
</body>
<center><h2><a onclick = "return confirm('Are you sure to delete this advertisement?')" href ="delete.php?id=<?php echo $row['id'];?>">Delete</a></h2></center>
</html>