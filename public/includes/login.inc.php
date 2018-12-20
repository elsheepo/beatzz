<?php

/**
 * The login.inc.php script.  The script receives JSON encoded username and password
 * sent from Ajax, decodes the JSON, connects to MySQL database,
 * then executes error handling for the username and password.
 * Finally returning either true or false and error handling data to the Ajax call.
 *
 * PHP version 7
 *
 * LICENSE: This source file is subject to version 3.01 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://www.php.net/license/3_01.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to license@php.net so we can mail you a copy immediately.
 * Thanks to TML for help refining the code!!
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