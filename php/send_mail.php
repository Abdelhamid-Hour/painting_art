<?php 
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $to = 'hourabdelhamid403@gmail.com';
        $name = htmlspecialchars($_POST['Name']);
        $email = htmlspecialchars($_POST['Email']);
        $message = htmlspecialchars($_POST['Message']);
        $subject = 'New Message From Hr_Art Website user';
        $send_check = '';
        $color = '';
        if (mail($to, $subject, "From: $email\r\nName: $name\r\nMessage: \r\n$message")) {
            $color = "green";
            $message = "Message sent successfully!";
        }else {
            $color = "red";
            $message = "Failed to send the message.";
        }
    }
?>