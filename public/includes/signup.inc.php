<?php

/**
 * The signup.inc.php script. This script recieves JSON encoded signup information
 * such as name, email, username, password. It then decodes the data and executes
 * some error handling on the name, checks if the username is available, and
 * wether or not the passwords match. Provided all is well, the script then, using
 * PDO will insert the new user into the 'login' database, immediately after it logs
 * the user in. 
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
// recieve JSON encoded data from Ajax call
$requestBody = file_get_contents('php://input'); 
$jsonData = json_decode($requestBody); 
// initialize variables
$first = $jsonData->first;
$last = $jsonData->last;
$email = $jsonData->email;
$uid = $jsonData->uid;
$pwd = $jsonData->pwd;
$pwdRepeat = $jsonData->pwdRepeat;
// check if input characters are valid
if (!preg_match("/^[a-zA-Z]*$/", $first)) {
    $conn = null;
    $data['status'] = 'error';
    $data['code'] = '1';
    $data['message'] = "Invalid characters found in name!";
    $data['url'] = "?signup=invalid_char";
    header('Content-type: application/json');
    echo json_encode($data);
    return false;
} else {
    if (!preg_match("/^[a-zA-Z]*$/", $last)) {
        $conn = null;
        // Ajax return
        $data['status'] = 'error';
        $data['code'] = '2';
        $data['message'] = "Invalid characters found in name!";
        $data['url'] = "?signup=invalid_char";
        header('Content-type: application/json');
        echo json_encode($data);
        return false;
    } else {
        // check if username is available
        $stmt = $conn->prepare("SELECT * FROM users WHERE user_uid = ?");
        $stmt->execute([$uid]);
        if ($stmt->rowCount() > 0) {
            $conn = null;
            // Ajax return
            $data['status'] = 'error';
            $data['code'] = '3';
            $data['message'] = "Username allready taken!";
            $data['url'] = "?signup=username_taken";
            header('Content-type: application/json');
            echo json_encode($data);
            return false;
        } else {
            // check if the password was validated by the user
            if ($pwdRepeat !== $pwd) {
                $conn = null;
                // Ajax return
                $data['status'] = 'error';
                $data['code'] = '4';
                $data['message'] = "Passwords don't match!";
                $data['url'] = "?signup=check_passwords";
                header('Content-type: application/json');
                echo json_encode($data);
                return false;
            } else {
                // hashing the password
                $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
                // insert the user into database
                $sql = "INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd) VALUES (?,?,?,?,?)";
                $conn->prepare($sql)->execute([$first, $last, $email, $uid, $hashedPwd]);
                // login the user
                $stmt = $conn->prepare("SELECT user_id FROM users WHERE user_uid = ?");
                $stmt->execute([$uid]);
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                // initialize SESSION variables
                $_SESSION['user_id'] = $result[0]['user_id'];
                $_SESSION['user_first'] = $first;
                $_SESSION['user_last'] = $last;
                $_SESSION['user_email'] = $email;
                $_SESSION['user_uid'] = $uid;

                $conn = null;
                // Ajax return
                $data['status'] = 'success';
                $data['code'] = '5';
                $data['message'] = "Signup successful, welcome " . $_SESSION['user_uid'] . "!";
                $data['url'] = "?login=success";
                header('Content-type: application/json');
                echo json_encode($data);
                return true;
            }
        }
    }
}
?>