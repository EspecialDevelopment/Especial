
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

			$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S�bado");

			$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

			echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;

 			echo '<p class="titulo2" style="text-align: center;">';

 			if (isset($_SESSION['vuelta']))
 			{
				$_SESSION['vuelta'] = $_SESSION['vuelta']+1;
 			}
 			else 
 			{ 
 				$_SESSION['vuelta'] = obtenNoVuelta();
 			}
 			
 			echo "Vuelta No." . $_SESSION['vuelta'];
 			echo'</p>';
  	?>

 		<form name="vueltascentralizado" method="post" action="vueltas_centralizado.php">
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
				<tr>
 					<td class="tdClassMenor">
 						Total:
 					</td>
 					<td class="tdClassMenor">
						<input value="0" name="resultado" type="number" required class="tdClassMenor" style="border:none;width:150px;"/>
 					</td>
 				</tr>
 			</table>
 			<p style="text-align: center;">
 				<input type="submit" value="Guardar" class="titulo2" >
 			</p>
 		</form>

 		<?php
			$valoresREQUEST = array(
				'1000', '500', '200', '100',
				'50', '20', '10', '5', '1',
				'c50', 'c20', 'c10');
			$valoresREQUESTvalidos = true;
			foreach ($valoresREQUEST as $num) {
				if (!isset($_REQUEST[$num])) {
					$valoresREQUESTvalidos = false;
					break;
				}
			}
 			if ($valoresREQUESTvalidos) {
 				if ((isset($_SESSION['vuelta']))&&(isset($_SESSION['corte'])))
 				{
 					
 					insertaVuelta($_SESSION['corte'],obtenNoVuelta(), $_REQUEST, $_REQUEST['resultado']);
 				}
 			}
 			 			
 			
 		?>

	</div>
	<script type="text/javascript" src="js/libreria.js"></script>
</body>

</html>
