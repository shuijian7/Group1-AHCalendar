<?php

/**
 * This is a helper file that houses the variables for connecting to the database. When called upon by the index.php file, it passes these variables. Allows for greater information hiding for index file. Written by Tyler Millan.
 Last Updated: Febuary 4th, 2019
 
 */

$host       = "localhost";
$username   = "user";
$password   = "password";
$dbname     = "calenda_group1";
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
