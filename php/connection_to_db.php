<?php
    $hostname = 'sql111.infinityfree.com';
    $username = 'if0_37275213';
    $password = 'GkVlYeukgG1tZi';
    $databasename = 'if0_37275213_hr_art';
    $conn = new PDO("mysql:host=$hostname;dbname=$databasename;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>