<?php
    include 'connection_to_db.php';
    $sql = $conn->prepare('SELECT * FROM painting_art');
    $sql->execute();
    $paintings = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($paintings);
?>