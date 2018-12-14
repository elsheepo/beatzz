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

session_start();
require_once 'dbh.inc.php';
// receive JSON encoded Ajax data & decode
$requestBody = file_get_contents('php://input');
$jsonData = json_decode($requestBody); 
// initialize variables
$email = $jsonData->email;
$pwd = $jsonData->password;
// check if username is in database
try {
    $stmt = $conn->prepare("SELECT user_id, user_pwd, user_first, user_last, user_email, user_uid FROM users WHERE user_uid = ?");
    $stmt->execute([$email]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $ex) {
    logException($ex);
}
if (count($result) < 1) {
    $conn = null;
    // Ajax return
    $data['status'] = 'error';
    $data['code'] = '1';
    $data['message'] = "Username not found!";
    $data['url'] = "?login=username_not_found";
    header('Content-type: application/json');
    echo json_encode($data);
    exit;
}
// verify the password
$hashedPwdCheck = password_verify($pwd, $result[0]['user_pwd']);
if ($hashedPwdCheck == false) {
    $conn = null;
    // Ajax return
    $data['status'] = 'error';
    $data['code'] = '2';
    $data['message'] = "Invalid password!";
    $data['url'] = "?login=invalid_password";
    header('Content-type: application/json');
    echo json_encode($data);
    exit;
}
// initialize SESSION variables
$_SESSION['user_id'] = $result[0]['user_id'];
$_SESSION['user_first'] = $result[0]['user_first'];
$_SESSION['user_last'] = $result[0]['user_last'];
$_SESSION['user_email'] = $result[0]['user_email'];
$_SESSION['user_uid'] = $result[0]['user_uid'];

$conn = null;
// Ajax return
$data['status'] = 'success';
$data['code'] = '3';
$data['message'] = "Welcome " . $_SESSION['user_uid'] . "!";
$data['url'] = "?login=success";
header('Content-type: application/json');
echo json_encode($data);