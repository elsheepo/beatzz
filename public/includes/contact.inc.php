<?php

/**
 * The contact.inc.php script. This script receives JSON encoded data
 * from contact.js via an Ajax call, decodes the data, then initializes variables.
 * It finally executes the mail() to send the message to the administrator 
 * directly on the server itself.
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

$requestBody = file_get_contents('php://input'); 
$jsonData = json_decode($requestBody);

$name = $jsonData->name;
$email_address = $jsonData->email;
$message = $jsonData->message;

$to = 'beatzz@LIVA';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\nHere are the details:\nName: $name\nEmail: $email_address\nMessage:\n$message";
$headers = "From: noreply@beatzz.co\n";
$headers .= "Reply-To: $email_address";

mail($to, $email_subject, $email_body, $headers);
return true;

?>