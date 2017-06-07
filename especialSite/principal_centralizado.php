
<html>
	<head>
		 <link rel="stylesheet" href="style.css">
		 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		 <?php 
		 	include 'libreria_centralizado.php';
		 	session_start();
		 ?>
	</head>

<body>
 
 	<div class="divCentral">
 	
 		<?php 
  			echo '<p class="titulo2" style="text-align: center;">';
 			
  			echo utf8_encode('Resumen del corte del día: ');

  			$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
			$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 			
  			echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;
  		
 			echo'</p>';
 			
 			$_SESSION['corte'] = inicializaCorte();
  		?>
 		
 		<a href="vueltas_centralizado.php">Capturar Efectivo </a>
 		

	</div>  
</body>

</html>

