<?php
$SERVER = 'localhost';
$USERNAME = '';
$PASSWORD = '';

// Create connection
$conn = new mysqli_connect($SERVER, $USERNAME, $PASSWORD);

// Check connection
if (!$conn) {
    die('Error de conexión: ' . mysqli_connect_error());
}

echo 'Conexión exitosa.';
