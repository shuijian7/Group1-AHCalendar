<?php include "templates/header.php"; ?>

<link href="//cdn.jsdelivr.net/timepicker.js/latest/timepicker.min.css"  rel="stylesheet">
<script src="//cdn.jsdelivr.net/timepicker.js/latest/timepicker.min.js"></script>


<h2>Add New Event</h2> 
<!--added the heading for page-->

<!--forms for creating a new event-->
<form method="post">

	<label for="starttime">Start Time</label>
	<input type="time" name="starttime" id="starttime">

	<label for="endtime">End Time</label>
	<input type="time" name="endtime" id="end">
	
	<label for="description">Description</label>
	<input type="text" name="description" id="description">

	<label for="priority">Priority</label>
		<select name="priority">
  			<option value="Low">Low</option>
  			<option value="Medium">Medium</option>
  			<option value="High">High</option>
		</select>

	<label for="category">Category</label>
		<select name="category">
  			<option value="Work">Work</option>
  			<option value="Home">Home</option>
  			<option value="School">School</option>
		</select>

	<input type="submit" name="submit" value="Submit">
</form>

<a href="index.php">Back to home</a>

<?php include "templates/footer.php"; ?>
