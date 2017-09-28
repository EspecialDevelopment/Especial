<html>	
	<head>
		 <link rel="stylesheet" href="style.css">
		 <?php 
		 	session_start();
			include 'libreria.php';
		?>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


	</head>
<body>
 
 	<div class="divCentral">
 	
 		<p class="titulo1" style="text-align: center;">
 			Selecciona tu sucursal
 		</p>
		<form action="principal.php" method="post">
			
			<p style="text-align: center; margin: 20px;">
				<?php
					listaSucursales();
				?>
			</p>
			
			<p style="text-align: center; margin: 20px;">

				<input type="submit" value="ACEPTAR" class="titulo1">
			
			</p>
		</form>
		<p  class="ok" style="text-align: center;"	>
			<?php 
				if (isset($_SESSION['envio']))
				{
					echo '<img src="imgs/floppy.jpg"/ width=50px height=50px>';
					echo '<br>';
					echo $_SESSION['envio'];
				}
			?>
		</p>
	</div>  
</body>

</html>