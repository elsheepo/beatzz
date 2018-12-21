<?php

/**
 * The contact.inc.php script.
 * 
 * This script receives JSON encoded contact data.
 * It then decodes the data, initializes variables,
 * and finally executes the mail() to send the message
 * directly to the system administrator.
 *
 * PHP version 7
 *
 * @author    Eric Arnold (beatzz) <elsheepo@protonmail.com>
 * @copyright 2017-2019 beatzz.co
 * @license   https://www.gnu.org/licenses/gpl-3.0.html  GNU GPLv3
 * @link      https://www.beatzz.co/
 */

 // receive JSON data and decode
$requestBody = file_get_contents('php://input');
$decoded = json_decode($requestBody);

// initialize variables
$name = $decoded->name;
$email_address = $decoded->email;
$message = $decoded->message;

$to = 'beatzz@LIVA';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n";
$email_body .= "Here are the details:\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email_address\n";
$email_body .= "Message:\n$message";
$headers = "From: noreply@beatzz.co\n";
$headers .= "Reply-To: $email_address";

// send email
mail($to, $email_subject, $email_body, $headers);

// return promise
$data['success'] = true;
$data['message'] = "Message received!";
header('Content-type: application/json');
echo json_encode($data);

exit;