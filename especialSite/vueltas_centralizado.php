
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
 			
  			echo utf8_encode('Captura de Efectivo: ');

  			$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");

  			$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 			
  			echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;
  			
 			echo '<p class="titulo2" style="text-align: center;">';
 			
 			$_SESSION['vuelta'] = obtenNoVuelta(); 
 			
 			echo "Vuelta No. ".$_SESSION['vuelta'];
 			
 			echo'</p>';
  		?>
 	
 		<form action="vueltas_centralizado.php" method="post">
 		
 			<table class="tableClass">
 				<tr>
 					<td class="tdClassMenor">
 						$1000.00
 					</td>
 					<td class="tdClassMenor"	>
 						<input type="number" value="0" name="1000" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$500.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="500" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$200.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="200" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$100.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="100" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$50.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="50" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 			
 				<tr>
 					<td class="tdClassMenor">
 						$20.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="20" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$10.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="10" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$5.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="5" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$2.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="2" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$1.00
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="1" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$0.50
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="c50" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$0.20
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="c20" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 				<tr>
 					<td class="tdClassMenor">
 						$0.10
 					</td>
 					<td class="tdClassMenor">
 						<input type="number" value="0" name="c10" required class="tdClassMenor" style="border:none;width:150px">
 					</td>
 				</tr>
 			</table>
 		
 			<p style="text-align: center;">
 		
 				<input type="submit" value="Guardar" class="titulo2" >
 		
 			</p>
 		</form>	
 		<?php 
 		
 			if ((isset($_REQUEST["1000"]))&&
 				(isset($_REQUEST["500"]))&&
 				(isset($_REQUEST["200"]))&&
 				(isset($_REQUEST["100"]))&&
 				(isset($_REQUEST["50"]))&&
 				(isset($_REQUEST["20"]))&&
 				(isset($_REQUEST["10"]))&&
 				(isset($_REQUEST["5"]))&&
 				(isset($_REQUEST["2"]))&&
 				(isset($_REQUEST["1"]))&&
 				(isset($_REQUEST["c50"]))&&
 				(isset($_REQUEST["c20"]))&&
 				(isset($_REQUEST["c10"])))
 			{
 				$monto = "100";
 				
 				if ((isset($_SESSION['vuelta']))&&(isset($_SESSION['corte'])))
 				{
 					insertaVuelta($_SESSION['corte'],$_SESSION['vuelta'], $_REQUEST, $monto);
 			 		
 				}
 				
 			}
 		
 		?>

	</div>  
</body>

</html>

