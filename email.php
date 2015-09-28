<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $type = $_POST['emailStatus'];
    mail('thegajannagaraj@gmail.com', "TUTORING " . $type . "FROM " . $email, $message);
?>