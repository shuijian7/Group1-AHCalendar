<?php

/**
 * Configuration for database connection
 * This file is written by Shuijian Zhang and it's a temporary database for DBTest since the actual databse we used has a private key that I can't visit. The DB informations as column name and key is same with the actual DB, see in sqlcreate.txt.
 */

$host       = "ix.cs.uoregon.edu";
$username   = "shuijianz";
$password   = "oP78l400";
$dbname     = "calenda_group1"; // will use later
$port= "3088";
$dsn        = "mysql:host=$host;port=$port;dbname=$dbname;"; // will use later
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
?>
