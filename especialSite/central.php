<?php 
 	include 'libreria.php';

 ?>

<html>
	<head>
		 <link rel="stylesheet" href="style.css">
		 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


		 <script type="text/javascript">
				window.setTimeout(function recarga(){location.reload();},30000);
		 </script>
		 
	</head>

<body>
 
 	<div class="divCentral" style="width:1000px;border:none">
 		<?php 
 			
 			echo '<p class="titulo2" style="text-align: center;">';
 			
 			if (!isset($_REQUEST['fecha']))
 			{
  				echo utf8_encode('Existencia de 080 para morralla del día ');

  				$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S&aacutebado");
				
  				$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 			
  				echo $dias[date('w',strtotime('+1 day'))]." ".date('d',strtotime('+1 day'))." de ".$meses[date('n')-1]. " del ".date('Y') ;
  			}
 			else 
 			{
				echo utf8_encode('Existencia de 080 para morralla del día: '. $_REQUEST['fecha']);
 			}
 			echo'</p>';
 	
  		?>
	</div>  
	<div class="divCentral" style="width:900px;height:35px;margin-bottom:20px;border:none;text-align: left;">
		<div style="float:left;border:none;height:23px">
			<form action="central.php" method="post">
				<input style="height: 25px" type="date" name="fecha" required />
				<input class="titulo3" type="submit" value="BUSCAR FECHA ANTERIOR"/>
			</form>
		</div>
		
		<div style="float: left;border:none;height:23px;margin-left: 5px">
			<form action="central.php" method="post">
			
				<input class="titulo3" type="submit" value="REGRESAR A FECHA ACTUAL"/>
			
			</form>
		</div>
	</div>
	
	<div class="divCentral" style="border:none;width:930px;height: 500px;">
		<?php 
			if (isset($_REQUEST['fecha']))
			{
				muestraMorralla($_REQUEST['fecha']);
			}
			else
			{
				muestraMorralla('0');
			}
	  			
		?>
	</div>
</body>

</html>

