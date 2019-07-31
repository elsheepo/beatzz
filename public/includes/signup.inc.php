<?php

/**
 * The signup.inc.php script.
 * 
 * This script receives JSON encoded signup data.
 * It then decodes the data and queries the database for the email supplied.
 * If the email is not found in the database, the script will then,
 * insert the new user into the 'users' table,
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
$firstName = $jsonData->firstName;
$lastName = $jsonData->lastName;
$email = $jsonData->email;
$password = $jsonData->password;

// check if email address is in database
$sql = $conn->prepare("SELECT * FROM users WHERE user_email = ?");
$sql->execute([$email]);

if ($sql->rowCount() > 0) {
    // close connection to database, and return JSON encoded data
    $conn = null;
    $promise['success'] = false;
    $promise['message'] = "email already taken!";
    header('Content-type: application/json');
    echo json_encode($promise);

} else {
    // hash the password
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

    // insert the user into database and close connection to database
    $sql = "INSERT INTO users (user_first, user_last, user_email, user_pwd) VALUES (?,?,?,?)";
    $conn->prepare($sql)->execute([$firstName, $lastName, $email, $hashedPwd]);
    $conn = null;

    // return promise
    $promise['success'] = true;
    $promise['message'] = "Signup successful, welcome " . $firstName . "!";
    header('Content-type: application/json');
    echo json_encode($promise);

    $to = $email;
    $email_subject = "Welcome to beatzz.co $firstName";
    $email_body = "Thank you for signing up!\n";
    $headers = "From: noreply@beatzz.co\n";

    // send welcoming email
    mail($to, $email_subject, $email_body, $headers);

}

exit;