<?php 
 	include 'libreria.php';
		 	
 	session_start();
		 	
 	if (!(isset($_SESSION['inicios'])))
 	{
 		$_SESSION['inicios']= 1;
 	}
 	else
 	{
 		$_SESSION['inicios']++;
 	}
	if(isset($_REQUEST['sucursal']))
	{	 	
 		$_SESSION['sucursal']= $_REQUEST['sucursal'];
		echo $_REQUEST['sucursal'];
 		setcookie("sucursal_default",$_REQUEST['sucursal'],time() + (86400 * 30));	 	
	}	 	
?>

<html>
	<head>
		 <link rel="stylesheet" href="style.css">
		 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	</head>

<body>
 
 	<div class="divCentral">
 	
 		<p class="titulo1" style="text-align: center;">
 	
 			Captura tu existencia de 080 en Suc.
 			
  		</p>
 		
		<form action="principal.php" method="post">
			<table class="tableClass">
			
				<tr>
					<td class="tdClass">
						<img src="imgs/50c.jpg" style="width:100px;height:100px">
					</td>
					<td class="tdClass">
						083
					</td>
					<td class="tdClass">
						<input type="number" name="centavos" required="required" value="0" class="titulo1" style="width:100px">
					</td>
				</tr>
				<tr>
					<td class="tdClass">
					 	<img src="imgs/peso.jpg" style="width:100px;height:100px">
					</td>
					<td class="tdClass">
						084
					</td>
					<td class="tdClass">
						<input type="number" name="peso" required="required" value="0" class="titulo1" style="width:100px">
					</td>
				</tr>
				<tr>
					<td class="tdClass">
						<img src="imgs/dospesos.jpg"  style="width:100px;height:100px">
					</td>
					<td class="tdClass">
						085
					</td>
					<td class="tdClass">
						<input type="number" name="dospesos" required="required" value="0" class="titulo1" style="width:100px">
					</td>
				</tr>
			</table>
			<p style="text-align: center; margin: 20px;">

				<input type="submit" value="ENVIAR" class="titulo1">
			
			</p>
			
		</form>
		
		<?php 
		
			if ((isset($_REQUEST['centavos']))&&
				(isset($_REQUEST['peso']))&&
				(isset($_REQUEST['dospesos']))&&
				($_REQUEST['centavos']>=0)&&
				($_REQUEST['peso']>=0)&&
				($_REQUEST['dospesos']>=0))
			{ 
				enviaMorralla($_SESSION['sucursal'], 
							  $_REQUEST['centavos'],
							  $_REQUEST['peso'],
							  $_REQUEST['dospesos']);

					
		
					
			}
			else
			{
				if ($_SESSION['inicios']<>1)
				{
					echo '<p style="text-align:center" class="error">
					POR FAVOR CAPTURE LOS DATOS DE LA 080 COMPLETOS</p>';
					
					echo '<p style="text-align:center" class="error">
					SI NO TIENE EXISTENCIA CAPTURE 0 (CERO) </p>';
						
				}
			}
			
		
		?>

	</div>  
</body>

</html>

