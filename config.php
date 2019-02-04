<?php

/**
 * Configuration for database connection
 *
 */

$host       = "ix.cs.uoregon.edu";
$username   = "shuijianz";
$password   = "oP78l400";
$dbname     = "calenda_group1"; // will use later
$port		= "3088";
$dsn        = "mysql:host=$host;port=$port;dbname=$dbname;"; // will use later
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
?>