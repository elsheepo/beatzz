<?php

/**
 * The login.inc.php script.
 * 
 * This script receives JSON encoded username and password,
 * decodes the data, queries the database,
 * then executes error handling for the username and password.
 * Finally it returns either true or false and error handling data to the caller.
 *
 * PHP version 7
 *
 * @author    Eric Arnold (beatzz) <elsheepo@protonmail.com>
 * @copyright 2017-2019 beatzz.co
 * @license   https://www.gnu.org/licenses/gpl-3.0.html  GNU GPLv3
 * @link      http://www.beatzz.co/
 */

require_once 'dbh.inc.php';

// receive JSON data and decode
$requestBody = file_get_contents('php://input');
$jsonData = json_decode($requestBody);

// initialize variables
$email = $jsonData->email;
$password = $jsonData->password;

// query database for user by email
try {
    $sql = $conn->prepare("SELECT user_first, user_last, user_email, user_pwd FROM users WHERE user_email = ?");
    $sql->execute([$email]);
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $ex) {
    logException($ex);

}

// check if email address is in database
if (count($result) < 1) {
    // close connection to database, and return promise
    $conn = null;
    $promise['success'] = false;
    $promise['message'] = "that email doesn't seem to be in our database!";
    header('Content-type: application/json');
    echo json_encode($promise);

} else {
    // verify the password
    $hashedPwdCheck = password_verify($password, $result[0]['user_pwd']);

    if ($hashedPwdCheck == false) {
        // close connection to database, and return promise
        $conn = null;
        $promise['success'] = false;
        $promise['message'] = "incorrect password!";
        header('Content-type: application/json');
        echo json_encode($promise);

    } else {
        // close connection to database, and return promise
        $conn = null;
        $promise['success'] = true;
        $promise['message'] = "Welcome back " . $result[0]['user_first'] . "!";
        header('Content-type: application/json');
        echo json_encode($promise);

    }

}

exit;