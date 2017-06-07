<?php 
 	include 'libreria.php';

 ?>

<html>
	<head>
		 <link rel="stylesheet" href="style.css">
		 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


		 <script type="text/javascript">
				window.setTimeout(function recarga(){location.reload();},60000);
		 </script>
		 
	</head>

<body>
 
 	<div class="divCentral" style="width:1000px;border:none">
 		<?php 
  			echo '<p class="titulo2" style="text-align: center;">';
 			
  			echo utf8_encode('Existencia de 080 para morralla del día ');

  			$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
			$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 			
  			echo $dias[date('w',strtotime('+1 day'))]." ".date('d',strtotime('+1 day'))." de ".$meses[date('n')-1]. " del ".date('Y') ;
  		
 			echo'</p>';
  		?>
	</div>  
	
	<div class="divCentral" style="border:none;width:930px;height: 500px;">
		<?php 
	  			muestraMorralla();
		?>
	</div>
</body>

</html>

