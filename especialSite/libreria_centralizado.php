<?php
	function conexionString()
	{
		$xml=simplexml_load_file("conexion_db_centralizado.xml");
		
		/* INTENTA CONECTAR LOCALMENTE */
		
		if ($xml->pswl == '-')
		{
			$conn= mysqli_connect($xml->hostl,$xml->userl,"",$xml->dbl);
		}
		else
		{
			$conn= mysqli_connect($xml->hostl,$xml->userl,$xml->pswl,$xml->dbl);
		}
		
		return $conn;
	}

	function inicializaCorte()
	{
		$conexion = conexionString();
		
		echo $conexion->connect_error;
		
		date_default_timezone_set("America/Mexico_City");

		$fecha = date("Y-m-d");
		
		$sql = "SELECT id_corte FROM cortes ".
			   "WHERE (fecha_corte =". "'".$fecha."')";
		
		$resultado = $conexion->query($sql); 
		
		if ($resultado->num_rows == 0)
		{
			$sql = "INSERT INTO cortes VALUES (NULL,"."'".$fecha."',"."0)";
		
			$resultado = $conexion->query($sql); 
			
			$sql = "SELECT id_corte FROM cortes ".
			   	   "WHERE (fecha_corte =". "'".$fecha."')";

			$resultado = $conexion->query($sql); 
			
			$noCorte = $resultado->fetch_assoc();
			
		}
		else
		{
			$noCorte = $resultado->fetch_assoc();
		}

		
		$conexion->close();
		
		return $noCorte['id_corte'];
	}
	
	function obtenNoVuelta()
	{
		date_default_timezone_set("America/Mexico_City");

		$fecha = date("Y-m-d");
		
		$conexion = conexionString();
		
		echo $conexion->connect_error;
		
		$sql = "SELECT vueltas.id_vuelta, cortes.id_corte FROM vueltas ".
			   "INNER JOIN cortes ".
			   "ON (cortes.id_corte = vueltas.cortes_id_corte )".
			   "WHERE (cortes.fecha_corte =". "'".$fecha."')";
		
		$resultado = $conexion->query($sql); 
		
		$vuelta = $resultado->num_rows + 1;

		$conexion->close();
		
		return $vuelta;
		
	}
	
	function insertaVuelta($corte,$vuelta,$efectivo,$monto)
	{ 
		$conexion = conexionString();

		echo $conexion->connect_error;
			
		//SE ALMACENA LA VUELTA
		
		$sql = "INSERT INTO vueltas VALUES (NULL,".$corte.",".$vuelta.",".$monto.")";
		
		$resultado = $conexion->query($sql); 
		
		foreach ($efectivo AS $indice => $valor)
		{
			if ($indice == "c50")
			{
				$sql = "INSERT INTO efectivo VALUES (NULL,".$vuelta.","."0.50".",".$valor.")";
			}
			elseif ($indice == "c20")
			{
				$sql = "INSERT INTO efectivo VALUES (NULL,".$vuelta.","."0.20".",".$valor.")";
			}
			elseif ($indice == "c10")
			{
				$sql = "INSERT INTO efectivo VALUES (NULL,".$vuelta.","."0.10".",".$valor.")";
			}
			else
			{
				$sql = "INSERT INTO efectivo VALUES (NULL,".$vuelta.",".$indice.",".$valor.")";
			}
			
			$resultado = $conexion->query($sql); 
		}
		
		
		$conexion->close();
	}

?>