<?php

if (isset($_POST["number"]) && isset($_POST['password'])) {
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $number = validate($_POST['number']);
    $password = validate($_POST['password']);
    echo "$number\n";
    echo "$password";
    
} else {
    header("Location: student_login.html");
    exit();
}
