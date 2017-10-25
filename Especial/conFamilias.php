<?php
<<<<<<< HEAD

	$mysqli = new mysqli('127.0.0.1', 'root','','pve');
	
	if ($mysqli->connect_errno) 
	{
    	echo "Lo sentimos, este sitio web est� experimentando problemas.";
	    echo "Error: Fallo al conectarse a MySQL debido a: \n";
     	echo "Errno: " . $mysqli->connect_errno . "\n";
    	echo "Error: " . $mysqli->connect_error . "\n";
    	exit;
	}
	
	$sql = "SELECT DISTINCT fam_prod FROM productos";
	
	$resultado = $mysqli->query($sql);
	if ($resultado->num_rows >= 1) 
	{
		while($r = $resultado->fetch_row()) 
		{  
    		$rows[] = $r;
		}
	
		echo json_encode($rows);
	}
	
	$resultado->close();
	$mysqli->close();
	
?>
=======
// $server = 'localhost';
$server = '127.0.0.1';
$mysqli = new mysqli($server, 'root','','pve');

if ($mysqli->connect_errno)
{
	echo "Lo sentimos, este sitio web está experimentando problemas.";
	echo "Error: Fallo al conectarse a MySQL debido a: \n";
	echo "Errno: " . $mysqli->connect_errno . "\n";
	echo "Error: " . $mysqli->connect_error . "\n";
	exit;
}

$sql = "SELECT DISTINCT fam_prod FROM productos";

$resultado = $mysqli->query($sql);
if ($resultado->num_rows >= 1)
{
	while($r = $resultado->fetch_row())
	{
		$rows[] = $r;
	}

	echo json_encode($rows);
} else {
	// si no hay familias... enviar un arreglo vacío

	echo json_encode([0]);
}

$resultado->close();
$mysqli->close();
>>>>>>> Sergio
