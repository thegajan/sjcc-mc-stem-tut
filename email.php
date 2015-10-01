<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$type = $_POST['type'];
//mail('thegajannagaraj@gmail.com', "TUTORING " . $type . "FROM " . $name . " at " . $email, $message);
mail('thegajannagaraj@gmail.com', "TUTORING " . $type . "FROM " . $name . " at " . $email, $message);

?>