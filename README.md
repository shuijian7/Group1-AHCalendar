# Group1-Calendar

### Introduction

Simple Calendar application that allows users to track their tasks provides organization and a way to measure progress which makes a large amount of tasks much more manageable.

### Team Members

- Tyler Green
- Tyler Milian
- Shuijian "Micheal" Zhang
- Bryce Di Geronimo
- Haojun "Jarvis" Dong

### User Guide

#### 1. How to run the calendar

1. The application works on MacOS10.13 or later, Windows10 1709 or later, any distro Linux with kernel 4.0 or newer. Make sure your computer runs one of them.

2. The application only works flawlessly on Google Chrome latest version. If you haven't installed yet, please click [here](https://www.google.com/chrome/) to install.
3. Open the application by clicking [here](http://ec2-18-236-175-93.us-west-2.compute.amazonaws.com/index.php)

#### 2. How to use the calendar

Once you clicked and jumped into calendar, it will have a interface with current month displayed.

You can do:

- ##### 		Navigate between the months

  - Left click the left arrow to go to the next month
  - Left click the right arrow to go to the previous month	

- ##### 		Add an event

  - To add an event, choose a day block, left click an empty area, and a form box will pop up(required)
  - Feel free to fill anything in title blank but only limited in 20 English letters.(required)
  - Fill the event start time and end time by left clicking spin box up/down buttons or manully type the time digits.(required)
  - There are 3 categories work, home, school to choose to speicfy what kind of event are you adding. (optional)
  - There are 3 priority low, medium, high to choose to speicfy the priority level of the event are you adding. (optional)
  - The description blank is for your adding some notes for the event you are adding.(optional)

- #####		Check your event

  - To check an event you've added, left click the event title or time that you want to check. A box will popup.
  - It will present your event title, start time, end time, description, priority and catergories in order.
  - To close and continue use, click button "Close".

- ##### 		Delete an event

  - To delete an event you've added, left click the pencil shape button. A box will pop up.
  - If you are regret and don't want delete this event, left click button "Cancel".(optional)
  - Click the button "Delete".

- #####		Edit an event

  - To edit an event you've added, left click the pencil shape button. A box will pop up.
  - Change the form and make it what you want. 
  - If you are regret and don't want edit this event, left click button "Cancel".(optional)
  - Click the button "Edit".


### To-do List

##### Absolutely Required Functional

- [x] User can create new event on each day with the following minimum amount of options: Name of event, start time, end time, description.

- [x] User can see what is on the calendar for today, tomorrow, and the next day.

- [x] Program keeps track of changes and gives the user the option to save the data before exiting the program. This will be achieved by saving the data to a SQL database that provides the saved data everytime the application is launched. 

- [x] User are able to edit and delete existing events.

- [x] The system will enter and retrieve or exchange properly formatted calendar data without loss or error.

- [x] The calendar software will ensure that data entered is consistent with HH:MM and DD/MM/YYYY date time standard.

- [x] User can edit the name (or other fields) at any time while keeping the associated data.

- [x] It will be possible to make likely changes to the system without extensive re-design. Simple changes should require changes to only a single system component (module).

- [x] Permit user to categorize events as work, school, or home.

- [x] User can define multiple events in the same time range.

##### Absolutely Required Non-Functional

- [x] The software will respond to user requests at a speed equal to or better than competing applications, in any event not to exceed 500ms(Unit test).

  

- [x] System user interface responds to user interactive at a adequate speed, which is not exceed 500ms(User interface test).

  

- [x] Application will work on Linux with kernel 4.0 or newer, OSX(MacOS) with version 10.9 or later and on Windows 10.

  

- [x] System ensures data display and I/O properly formatted without error and loss.

  

- [x] System is broken down into separate modules that can be tested individually as well as a whole.



#### How To Test

##### 1. Install Npm.js

   1. Npm.js is installed with Node.js. To install [Node.js](https://nodejs.org/en/), click the link and follow the instruction on the page.

   2. To check if you have Node.js installed, run this command in your terminal:

      ``` shell
      node -v
      ```

   3. To confirm that you have npm installed you can run this command in your terminal:
      ``` shell
      npm -v
      ```

   4. If both print out version number v11.9.0 and 6.7.0, Node.js and Npm.js are successfully installed.

##### 2. Install Jest

This is a simple step if Npm.js is installed. Run command in terminal:

```shell
npm install --save-dev jest
```

##### 3. Test Project

In directory *Group1-Calendar*, run command in terminal:

```shell
npm test
```

#### Testing Result

- After a few seconds, a complete report on testing result will show on terminal, which includes all detail infomation on how many test cases get passed and how many do not. 
- For test cases that not get passed, there are print statements specify where is the cases that not passed and reason why the expected result didn't show up.
