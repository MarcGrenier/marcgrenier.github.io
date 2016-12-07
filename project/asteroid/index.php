<?php
	$titre = "Marc Grenier - Asteroid";
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/header.php");
?>
<div class="jumbotron">
	<div class="container">
		<div class="presentation">
			<h1>Asteroïd</h1>
			<p>
				Survival game on Android platform based on the 1979 game <a href="https://en.wikipedia.org/wiki/Asteroids_(video_game)">Asteroids</a>.
			</p>
		</div>
	</div>
</div>

<div class="container">

	<div class="row">
		<div class="col-sm-12">
			<div class="section-title">Project overview</div>
			<p class="project-overview">
				The objective of this game is to destroy as many asteroids as possible to get the most point and be in the top 5 players in the highscore page.
				The spaceship automatically shoots at a fixed interval of time. The player can rotate the ship with the bottom left arrows and can move forward the ship with the bottom right arrow.
				Just like the original Asteroids game, going through a side of the game will bring you on the opposite side.
			</p>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-12">
			<div class="section-title">Images</div>
		</div>
		<div class="col-sm-6">
			<a href="images/asteroid1.png">
				<img class="project-image" src="images/asteroid1.png" >
			</a>
		</div>
		<div class="col-sm-6">
			<a href="images/asteroid2.png">
				<img class="project-image" src="images/asteroid2.png" >
			</a>
		</div>
	</div>
	
	<div class="row margin-left-row">
		<div class="col-md-6 info-tech">
			<div class="section-title">Technologies</div>
			<span class="label label-primary">Java</span>
			<span class="label label-primary">Android 4.2</span>
			<span class="label label-primary">Eclipse</span>
			<span class="label label-primary">AndEngine</span>
			<p></p>			
		</div>
		<div class="col-md-6 lien">
			<div class="section-title">Links</div>
			<ul>
				<li>Source code: <a href="https://github.com/MarcGrenier/Asteroid" target="_blank">https://github.com/MarcGrenier/Asteroid</a></li>
			</ul>
		</div>	
	</div>
</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/footer.php");