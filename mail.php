<?php
$input=$_POST['input'];
$to      = 'scatterman16@gmail.com';
$subject = 'the subject';
$message = $input;
$headers = 'From: https://dannauu.github.io/thornbush-rc/' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>