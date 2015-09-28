<?php
if (@isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER'] == "http://www.thegajan.github.com/sjcc-mc-stem-tut") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $type = $_POST['emailStatus'];
    mail('thegajannagaraj@gmail.com', "TUTORING " . $type . "FROM " . $email, $message);
} else {
    header('Location: http://www.thegajan.github.com/sjcc-mc-stem-tut');
}
?>