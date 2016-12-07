<?php
/* ---------------------------------------------------
* Projet synthèse : H2013 							 *
* Fait Par : Marc Grenier							 *
*--------------------------------------------------- */
?>
<!DOCTYPE html>
<html lang="fr" >
	<head>
		<title>
			Oups, désolé !
		</title>
	</head>
	<body>
		<h1>
		<?php
			if ($_GET["code"] == 403) {
				?>
				<h1>Erreur 403</h1>
					Va donc regarder ailleur!! 
				<br/>Ta pas de le droit d'être ici
				<?php
			}
			else if ($_GET["code"] == 404) {
				?>
				<h1>Erreur 404</h1>
				<b>Now that you're here I'm offering you 3 choices</b>
				</br>
				</br>
				1 - Go away and never come back
				<br/>
				2 - Click <a href="http://perdu.com">here</a> and go where you belong 
				<br/>
				3 - Make a wish and wait until we're back online
				
				<?php
			}
			else if ($_GET["code"] == 500) {
				?>
				<h1>Erreur 500</h1>
					Aye, erreur interne
				<?php
			}
		?>
		</h1>
	</body>
</html>

