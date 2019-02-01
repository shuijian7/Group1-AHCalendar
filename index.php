<?php
    require "../config.php";
	require "../common.php";

	$connection = new PDO($dsn, $username, $password, $options);
    
    if (isset($_POST['submit'])) {
        
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
                           ":" . implode(", :", array_keys($new_event))
                           );
            
            $state = $connection->prepare($sql1);
            $state->execute($new_event);
        } catch(PDOException $error) {
            echo $sql1 . "<br>" . $error->getMessage();
        }
        
    }



	try {

	  $sql = "SELECT * FROM Calendar";

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

	  echo $all_events[0]["id"];
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
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
				</tr>
				<tr>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
				</tr>
				<tr>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
				</tr>
				<tr>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
				</tr>
				<tr>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
					<td class="border" onclick="dayClicked(this);">7</td>
				</tr>
			</tbody>
		</table>

		
	<dialog id="modal" closed>
		<div id="make-note" hidden>
			<div class = "popup">
				<h2 id="event">Event</h2>
				<form method="post">
					<input type="hidden" id="date" name="date" value="1">
					<div id="left">
						<div class="time">
							<label for="title">Title</label>
							<input type="text" id="title" name="title">
						</div>

						<div class="time">
							<label for="start_time">Start Time</label>
							<input type="time" name="start_time" id="start_time">
						</div>
					
						<div class="time">
							<label for="end_time">End Time</label>
							<input type="time" name="end_time" id="end_time">
						</div>
					</div> <!-- end left -->


					<div id="right">
						<div class="dropdown">
							<label for="categories">Category</label>
								<select name="categories">
						  			<option value="Work">Work</option>
						  			<option value="Home">Home</option>
						  			<option value="School">School</option>
								</select>
						</div>
						<div class="dropdown">
							<label for="priority">Priority</label>
								<select name="priority">
						  			<option value="Low">Low</option>
						  			<option value="Medium">Medium</option>
						  			<option value="High">High</option>
								</select>
						</div>
					</div> <!-- end right -->

					<div id="textBox">
						<label for="description">Description</label>
						<textarea name="description" id="description"></textarea>
					</div>

					<input type="submit" name="submit" value="Submit" id="submit" class="buttons">
					<input type="submit" name="cancel" value="Cancel" id="cancel" class="buttons">
				</form>
			</div>

			</div>
		
		</div>
	</dialog>

	<form>
		<div id="test123" hidden>
			<label for="description">Description</label>
			<textarea name="description" id="description"></textarea>
		</div>
		<input type="submit" name="submit" value="Submit" id="submit" class="buttons">
		<input type="submit" name="cancel" value="Cancel" id="cancel" class="buttons">
	</form>

	<script type="text/javascript">
		var jsEvents = <?php echo json_encode($all_events);?>;

	</script>



	
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/modal.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/note.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/start.js"></script>
</body>
</html>
