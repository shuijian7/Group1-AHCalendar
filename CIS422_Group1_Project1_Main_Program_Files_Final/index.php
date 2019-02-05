<?php
// Main index php file:
// 
// Languages Used:
// HTML, Javascript, PHP, SQL, CSS
// Written by Bryce Di Geronimo {BG} and Tyler Millan {TM}
//Last Updated: Febuary 4th, 2019

//Description:
// The file below is the main index file for the Calendar Application. This file invokes all of the helper functions
//to give user fucntionality in adding,editing, and deleting items. The formatting of the Calendar and all of the values
//the user sees are HTML objects that have been manipulated through CSS styling. The manipulation of values including the
//dynamic fill in of Calendar dates is done through Javascript. Handling of popup form objects and switching between months
//is also handles by Javascript. PHP is used to manipulate values from the webpage forms and pass them to an external database
//MYSQL database through SQL commands. 
//
// 
// 
//The config.php and common.php are helper files for the following SQL commands. The config.php file stores the variables to connect
//to the database. The common.php file houses the escape option which allows html objects to save their HTML properties when they are
// run in php

//Start of code written by {TM}
require "config.php";
require "common.php";

//sets variables for to pass database to allow access, the four variables below are pulled from config.php
$connection = new PDO($dsn, $username, $password, $options);

//If the add form in the webpage is submitted, then this function is invoked.

//The following SQL functions are lightly derived from the tutorial found on https://www.taniarascia.com/create-a-simple-database-app-connecting-to-mysql-with-php/.



if (isset($_POST['add'])) {
    
    //The following try/catch block attempts to pass the values entered in the new event form. If it is successful, it will insert the 
    //values into the Database. If it does not succeed, it will return the error message. 
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
//After this function is run, the page will reload to show the newly added event if the above function was invoked.
header('Location:index.php');
    
}

//The following try/catch block attempts to read all the values from the database to display them on the calendar. 
// If it is successful, it will display the values on the calendar on their corresponding days. If it does not succeed, 
//it will return the error message. 

try {
	//Selects from the database and sorts them in ascending order by their start time.
  $sql = "SELECT * FROM Calendar ORDER BY start_time ASC";

  $statement = $connection->prepare($sql);
  //executes the SQL query
  $statement->execute();

  $events = $statement->fetchAll();

} catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
}
//if successful stores all the events in an array with each events describing fields.
  $all_events = array();
  $counter = 0;
  foreach ($events as $item) {
    $all_events[$counter] = $item;
    $counter++;
  }


//The following try/catch block attempts to delete an event when a user clicks the option to. 
// If it is successful, it will remove the event from the database. If it does not succeed, 
//it will return the error message. 

if (isset($_POST['delete'])) {
    try {
        $id = $_POST["date123"];
     	//the SQL query to delete any instance in the database that matches the clicked items unique id.
        $sql = "DELETE FROM Calendar WHERE id = :id";
        
        $statement = $connection->prepare($sql);
        $statement->bindValue(':id', $id);
        $statement->execute();
    } catch(PDOException $error) {
        echo $sql . "<br>" . $error->getMessage();
    }
//The page will reload to show the updated calendar without the deleted event.
header('Location:index.php');

}

//The following try/catch block to edit values of an event when invoked.
// If it is successful, it will overwrite the events attributes with the newly desired ones.
//If it does not succeed, it will return the error message. 

if (isset($_POST['edit'])) {
	try {

    $update_event =[
      "id123"        => $_POST['date123'],
      "date123"        => $_POST['actualDate'],
      "description123" => $_POST['description123'],
      "start_time123"  => $_POST['start_time123'],
      "end_time123"     => $_POST['end_time123'],
      "title123"       => $_POST['title123'],
      "priority123"  => $_POST['priority123'],
      // "categories123"      => $_POST['categories123']
    ];

    $sql2 = "UPDATE Calendar 
            SET id = :id123,
              date = :date123,
              description = :description123, 
              start_time = :start_time123, 
              end_time = :end_time123, 
              title = :title123, 
              priority = :priority123, 
              categories = :categories123 
            WHERE id = :id123";
  $statement = $connection->prepare($sql2);
  $statement->execute($update_event);
  } catch(PDOException $error) {
        echo $sql2 . "<br>" . $error->getMessage();
  }
  //After this function is run, the page will reload to show the newly edited event.
  header('Location:index.php');

}
?>

<!-- //end of code written by {TM} -->


<!-- HTML, CSS, and Javascript derived from:
https://udemy.com/2019-calendar-app-lets-build-it
Author Jesse Cain
Will use shorthand notation Derived from JC to represent the above source
 -->


<!-- Start of code written by {BG} -->
 <!-- Derived from JC line 115 -->
<head>
	<title>Calendar</title>
	<!-- imports the css style that manipulates the HTML code for improved visuals and usability. -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/note.css">
	<!--imports javascript files that are sourced on internet-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.js"></script>
	<script src="https://unpkg.com/ionicons@4.5.1/dist/ionicons.js"></script>
	<!--Below are references to css files that are found on the internet.-->
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
						<!-- Below are javascript functions from date.js that the app to switch months as well as update the calendar
						to reflect this change in months -->
						<i onclick="previousMonth();" class="fas fa-caret-left icon" id="leftArrow"></i>
						<h1 id="cal-month">Januaaryyy</h1>
						<h1 id="cal-year">2019</h1>
						<i onclick="nextMonth();" class="fas fa-caret-right icon" id="rightArrow"></i>
					</div>

					
				</th>
			</tr>
			<!-- Below sets the Days of the week to be displayed on the calendar, as well as seperate the month into days
			with a default value of 7 for all the days. -->
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

<!-- end of code written by {BG} -->

<!-- Start of pair written by {BG} & {TM} -->
	
	<!-- The form below creates a form that allows users to add new events which are then passed to 
		the database in the above functions which stores the values entered in the fields. All the below fields
		include a required tag which will force users to enter a value and not allow them to skip over any values.-->

		<!-- All of the id values below allow for variable reference that allow it to be passed to the database. -->
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
						<!-- Dropdown fields for priority and category. -->
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
						<textarea name="description" id="description" class="description" required maxlength="30"></textarea>
					</div>

					<input type="submit" name="add" value="Submit" id="add" class="buttons">
					<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons" value="Cancel"/>
					<!-- <input type="button" onclick = "window.location(index.php)" class="buttons" value="Cancel"> -->
				</form>
			</div>
	
		</div>
	</dialog>
	<!-- The form below creates a form that allows users to edit or delete prexisting events when a button is clicked 
		that accomponanies events that are being displayed on the calendar. When the event is clicked the fields are
		filled with the values that were originally entered for that event. All the below fields include a required tag 
		which will force users to enter a value and not allow them to skip over any values. The desired event is passed
		to the database php function at the top of this file which manipulates the date accordingly. -->
	<dialog id="edit" closed>
		<div id="make-note1" hidden>
			<div class = "popup">
				<h2 id="event">Event</h2>
				<form id="edit_form" method="post">
					<input type="hidden" id="actualDate" name="actualDate" value="1">
					<input type="hidden" id="date123" name="date123" value="1">
					<div id="left">
						<div class="time">
							<label for="title">Title</label>
							<input type="text" id="title123" name="title123" maxlength="15">
						</div>

						<div class="time">
							<label for="start_time">Start Time</label>
							<input type="time" name="start_time123" id="start_time123">
						</div>
					
						<div class="time">
							<label for="end_time">End Time</label>
							<input type="time" name="end_time123" id="end_time123">
						</div>
					</div> <!-- end left -->


					<div id="right">
						<div class="dropdown">
							<label for="categories">Category</label>
								<select name="categories123" id="categories123">
						  			<option value="Work">Work</option>
						  			<option value="Home">Home</option>
						  			<option value="School">School</option>
								</select>
						</div>
						<div class="dropdown">
							<label for="priority">Priority</label>
								<select name="priority123" id= "priority123">
						  			<option value="Low">Low</option>
						  			<option value="Medium">Medium</option>
						  			<option value="High">High</option>
								</select>
						</div>
					</div> <!-- end right -->

					<div id="textBox">
						<label for="description">Description</label>
						<textarea name="description123" id="description123" class="description" maxlength="30"></textarea>
					</div>
					<input type="submit" name="edit" value="Edit" id="edit" class="buttons">
					<input type="submit" name="delete" value="Delete" id="delete" class="buttons">
					<!-- The below button allows users to exit to the main calendar view and not manipulate the data values. -->
					<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons1" value="Cancel"/>
				</form>
			</div>

			</div>
		
	</dialog>

	<!-- Below HTML allows users to click a preexisting value on the short description displayed. Which then displays the detailed info
	on that specific event. -->

	<!-- Initializes as a hidden modal box but later can be invoked by note.js. -->
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
						<!-- button below allows for user to exit the display view and back to the main calendar view. -->
						<input type="button" name="cancel" onClick="document.location.href= 'index.php';" class="buttons secondForm" value="Close"/>	
					</form>
		</div>
	</dialog>
</div>

<!-- End of reference -->

<!-- end of pair written by {BG} & {TM} -->





	
</body>
<!-- store the values in an array of the current event to be used by javascript functions -->
<script type="text/javascript">
		var jsEvents = <?php echo json_encode($all_events);?>;
</script>
<!-- Javascript files are referenced for use below -->
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/note.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/start.js"></script>
</html>
