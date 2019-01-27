<?php
    
    
if (isset($_POST['submit'])) {
	require "../config.php";
    require "../common.php";

	try {
		$connection = new PDO($dsn, $username, $password, $options);
	
	$new_user = array(
		"start_time" => $_POST['start_time'],
		"end_time"  => $_POST['end_time'],
		"description"     => $_POST['description'],
		"priority"       => $_POST['priority'],
		"categories"  => $_POST['categories'],
	);

	$sql = sprintf(
		"INSERT INTO %s (%s) values (%s)",
		"Calendar",
		implode(", ", array_keys($new_user)),
		":" . implode(", :", array_keys($new_user))
	);

	$statement = $connection->prepare($sql);
	$statement->execute($new_user);
	} catch(PDOException $error) {
		echo $sql . "<br>" . $error->getMessage();
	}
	
}
?>

<?php require "templates/header.php"; ?>

<h2>Add New Event</h2> 
<!--added the heading for page-->

<!--forms for creating a new event-->
<form method="post">

	<label for="start_time">Start Time</label>
	<input type="time" name="start_time" id="start_time">

	<label for="end_time">End Time</label>
	<input type="time" name="end_time" id="end">
	
	<label for="description">Description</label>
	<input type="text" name="description" id="description">

	<label for="priority">Priority</label>
		<select name="priority">
  			<option value="Low">Low</option>
  			<option value="Medium">Medium</option>
  			<option value="High">High</option>
		</select>

	<label for="categories">Category</label>
		<select name="categories">
  			<option value="Work">Work</option>
  			<option value="Home">Home</option>
  			<option value="School">School</option>
		</select>

	<input type="submit" name="submit" value="Submit">
</form>

<a href="index.php">Back to home</a>

<?php include "templates/footer.php"; ?>
