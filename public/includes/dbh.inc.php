<?php

/**
 * The dbh.inc.php script.
 * 
 * This script initializes variables containing database
 * system login information, then tries to establishes a
 * connection to the database.
 *
 * PHP version 7
 *
 * @author    Eric Arnold (beatzz) <elsheepo@protonmail.com>
 * @copyright 2017-2019 beatzz.co
 * @license   https://www.gnu.org/licenses/gpl-3.0.html  GNU GPLv3
 * @link      http://www.beatzz.co/
 */

 // initialize variables
$servername = "localhost";
$username = "root";
$password = "";
$database = "login";

// establish a connection to the database
try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $ex) {
    $conn = null;
    logException($ex);

}