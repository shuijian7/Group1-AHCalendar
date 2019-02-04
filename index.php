<?php
    require "./config.php";
	require "./common.php";

	$connection = new PDO($dsn, $username, $password, $options);
	
    if (isset($_POST['add'])) {
        
        try {
            
            $new_event = array(
                               "date" => $_POST['date'],
                               "title"  => $_POST['title'],
                               "start_time" => $_POST['start_time'],
                               "end_time"  => $_POST['end_time'],
                               "description"     => $_POST['description'],
                               "priority"       => $_POST['priority'],
                               "categories"  => $_POST['categories'],
                               );
            
            $sql1 = sprintf(
                           "INSERT INTO %s (%s) values (%s)",
                           "Calendar",
                           implode(", ", array_keys($new_event)),
                           "'".implode("', '", array_values($new_event))."'"
                           );

            $state = $connection->prepare($sql1);
            $state->execute($new_event);
        } catch(PDOException $error) {
            echo $sql1 . "<br>" . $error->getMessage();
        }
    header('Location:index.php');
        
    }


	try {

	  $sql = "SELECT * FROM Calendar ORDER BY start_time ASC";

	  $statement = $connection->prepare($sql);
	  $statement->execute();

	  $events = $statement->fetchAll();

	} catch(PDOException $error) {
	  echo $sql . "<br>" . $error->getMessage();
	}

	$all_events = array();
	  $counter = 0;
	  foreach ($events as $item) {
	    $all_events[$counter] = $item;
	    $counter++;
	  }



if (isset($_POST['delete'])) {
    try {
        $id = $_POST["date123"];
        
        $sql = "DELETE FROM Calendar WHERE id = :id";
        
        $statement = $connection->prepare($sql);
        $statement->bindValue(':id', $id);
        $statement->execute();
    } catch(PDOException $error) {
        echo $sql . "<br>" . $error->getMessage();
    }
header('Location:index.php');
}
?>



<head>
	<title>Calendar</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/note.css">
	<script src="https://unpkg.com/ionicons@4.5.1/dist/ionicons.js"></script>
	<link href="https://unpkg.com/ionicons@4.5.1/dist/css/ionicons.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">




</head>
<body>
	<div id="cal">
		<table id="table">
			<tr>
				<th colspan="7">
					<!-- Taken from Udemy -->
					<div id="titleDiv">
						<i onclick="previousMonth();" class="fas fa-caret-left icon" id="leftArrow"></i>
						<h1 id="cal-month">Januaaryyy</h1>
						<h1 id="cal-year">2019</h1>
						<i onclick="nextMonth();" class="fas fa-caret-right icon" id="rightArrow"></i>
					</div>

					
				</th>
			</tr>
			<tr class="height">
				<th class="weekday">Sun</th>
				<th class="weekday">Mon</th>
				<th class="weekday">Tue</th>
				<th class="weekday">Wed</th>
				<th class="weekday">Thur</th>
				<th class="weekday">Fri</th>
				<th class="weekday">Sat</th>
			</tr>
			<tbody id="table-body">
				<tr>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
				</tr>
				<tr>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
				</tr>
				<tr>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
				</tr>
				<tr>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
				</tr>
				<tr>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
					<td class="border">7</td>
				</tr>
			</tbody>
		</table>

		
	<dialog id="modal" closed>
		<div id="make-note" hidden>
			<div class = "popup">
				<h2 id="event">Event</h2>
				<form method="post">
					<input type="hidden" id="date" name="date" value="1" required>
					<div id="left">
						<div class="time">
							<label for="title">Title</label>
							<input type="text" id="title" name="title" required maxlength="15">
						</div>

						<div class="time">
							<label for="start_time">Start Time</label>
							<input type="time" name="start_time" id="start_time" required>
						</div>
					
						<div class="time">
							<label for="end_time">End Time</label>
							<input type="time" name="end_time" id="end_time" required>
						</div>
					</div> <!-- end left -->


					<div id="right">
						<div class="dropdown">
							<label for="categories">Category</label>
								<select name="categories" required>
						  			<option value="Work">Work</option>
						  			<option value="Home">Home</option>
						  			<option value="School">School</option>
								</select>
						</div>
						<div class="dropdown">
							<label for="priority">Priority</label>
								<select name="priority" required>
						  			<option value="Low">Low</option>
						  			<option value="Medium">Medium</option>
						  			<option value="High">High</option>
								</select>
						</div>
					</div> <!-- end right -->

					<div id="textBox">
						<label for="description">Description</label>
						<textarea name="description" id="description" required maxlength="30"></textarea>
					</div>

					<input type="submit" name="add" value="Submit" id="add" class="buttons">
					<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons" value="Cancel"/>
					<!-- <input type="button" onclick = "window.location(index.php)" class="buttons" value="Cancel"> -->
				</form>
			</div>
	
		</div>
	</dialog>
	<dialog id="edit" closed>
		<div id="make-note1" hidden>
			<div class = "popup">
				<h2 id="event">Event</h2>
				<form id="edit_form" method="post">
					<input type="hidden" id="date123" name="date123" value="1">
					<div id="left">
						<div class="time">
							<label for="title">Title</label>
							<input type="text" id="title123" name="title"  maxlength="15">
						</div>

						<div class="time">
							<label for="start_time">Start Time</label>
							<input type="time" name="start_time" id="start_time" >
						</div>
					
						<div class="time">
							<label for="end_time">End Time</label>
							<input type="time" name="end_time" id="end_time" >
						</div>
					</div> <!-- end left -->


					<div id="right">
						<div class="dropdown">
							<label for="categories">Category</label>
								<select name="categories" >
						  			<option value="Work">Work</option>
						  			<option value="Home">Home</option>
						  			<option value="School">School</option>
								</select>
						</div>
						<div class="dropdown">
							<label for="priority">Priority</label>
								<select name="priority" >
						  			<option value="Low">Low</option>
						  			<option value="Medium">Medium</option>
						  			<option value="High">High</option>
								</select>
						</div>
					</div> <!-- end right -->

					<div id="textBox">
						<label for="description">Description</label>
						<textarea name="description" id="description" maxlength="30"></textarea>
					</div>
					<input type="submit" name="submit" value="Edit" id="edit" class="buttons">
					<input type="submit" name="delete" value="Delete" id="delete" class="buttons">
					<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons1" value="Cancel"/>
				</form>
			</div>

			</div>
		
	</dialog>

	<dialog id="display1" closed>
		<div id="make-note2" hidden>
				<h2 id="event">Event</h2>
						<div class="divCover">
							<div class="inline first">Event Title</div>
							<div id="displayTitle" class="inline">a</div>
						</div>
						<div class="divCover">
							<div class="inline first">Start Time</div>
							<div id="displayStart_Time" class="inline">a</div>
						</div>
						<div class="divCover">
							<div class="inline first">End Time</div>
							<div id="displayEnd_Time" class="inline">a</div>
						</div>
						<div class="divCover">
							<div class="inline first">Description</div>
							<div id="displayDescription" class="inline">a</div>
						</div>
						<div class="divCover">
							<div class="inline first">Priority</div>
							<div id="displayPriority" class="inline">a</div>
						</div>

						<div class="divCover">
							<div class="inline first">Categories</div>
							<div id="displayCategories" class="inline">a</div>
						</div>
						
					<form>
						<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons secondForm" value="Close"/>	
					</form>
				</table>
		
		</div>
	</dialog>
</div>







	
</body>
<script type="text/javascript">
		var jsEvents = <?php echo json_encode($all_events);?>;

</script>
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/modal.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/note.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/start.js"></script>
</html>
