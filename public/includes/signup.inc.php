<?php

/**
 * The signup.inc.php script. This script receives JSON encoded signup information.
 * It then decodes the data and checks if the email is already in use.
 * The script will then, using PDO will insert the new user into the 'users' table,
 * Finally it returns a successful promise to the caller.
 * 
 * PHP version 7
 *
 * LICENSE: This source file is subject to version 3.01 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://www.php.net/license/3_01.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to license@php.net so we can mail you a copy immediately.
 *
 * @category   CategoryName
 * @package    PackageName
 * @author     Eric Arnold (beatzz) <elsheepo@protonmail.com>
 * @copyright  1997-2018 The PHP Group
 * @license    http://www.php.net/license/3_01.txt  PHP License 3.01
 * @version    SVN: $Id$
 * @link       http://www.beatzz.co/
 * @see        NetOther, Net_Sample::Net_Sample()
 * @since      File available since Release 1.2.0
 * @deprecated File deprecated in Release 2.0.0
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

}

exit;