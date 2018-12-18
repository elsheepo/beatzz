<?php

/**
 * The signup.inc.php script. This script receives JSON encoded signup information.
 * It then decodes the data and checks if the email is already in use.
 * The script then, using PDO will insert the new user into the 'login' database,
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

session_start();
require_once 'dbh.inc.php';
// receive JSON encoded data from Ajax call
$requestBody = file_get_contents('php://input');
$jsonData = json_decode($requestBody);

// initialize variables
$first = $jsonData->firstName;
$last = $jsonData->lastName;
$email = $jsonData->email;
$pwd = $jsonData->password;

// check if username is available
$sql = $conn->prepare("SELECT * FROM users WHERE user_email = ?");
$sql->execute([$email]);
if ($sql->rowCount() > 0) {
    $conn = null;
    // promise return
    $data['message'] = "email already taken!";
    $data['success'] = false;
    header('Content-type: application/json');
    echo json_encode($data);
} else {
    // hashing the password
    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    // insert the user into database
    $sql = "INSERT INTO users (user_first, user_last, user_email, user_pwd) VALUES (?,?,?,?)";
    $conn->prepare($sql)->execute([$first, $last, $email, $hashedPwd]);
    $conn = null;

    // promise return
    $data['message'] = "Signup successful, welcome " . $first . "!";
    $data['success'] = true;
    header('Content-type: application/json');
    echo json_encode($data);
}
