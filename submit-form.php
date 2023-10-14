<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "adamoo23221@gmail.com";
    $subject = "New form submission from $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
}
?>