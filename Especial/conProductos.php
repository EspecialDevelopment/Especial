<?php
$server = '127.0.0.1';
$mysqli = new mysqli($server, 'root', '', 'pve');

if ($mysqli->connect_errno) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
	echo "Error: Fallo al conectarse a MySQL debido a: \n";
	echo "Errno: " . $mysqli->connect_errno . "\n";
	echo "Error: " . $mysqli->connect_error . "\n";
	exit;
}


if (!isset($_POST['familia'])) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    echo "Error: No hay familia";
    exit;
}

$familia = $_POST['familia'];
$sql = "SELECT cv_prod, desc_prod, timp_prod, cantidad_prod FROM productos WHERE fam_prod = '$familia'";

$resultado = $mysqli->query($sql);
if ($resultado->num_rows >= 1)
{
	while($r = $resultado->fetch_row())
	{
        // $rows[] = $r;
		$rows[] = array_map('utf8_encode', $r);
    }
    /* Si se agregan acentos a las familias o productos o empleados, etc. entonces
     * el json_encode detiene el código al tratar de codificar la información. Estoy
     * usando el utf8_encode porque conserva los acentos, y JSON_UNESCAPED_UNICODE
     * hace que se envíe adecuadamente. En teoría se deberían aplicar estos cambios
     * a todas las llamadas de json_encode, pero por motivos de prueba sólo dejaré
     * a esta parte modificada. (Encontré este error cuando pasé el pan "danés". */
    // echo json_encode($rows);
    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
} else {
	// si no hay productos... enviar un arreglo vacío

	echo json_encode([0]);
}

$resultado->close();
$mysqli->close();
