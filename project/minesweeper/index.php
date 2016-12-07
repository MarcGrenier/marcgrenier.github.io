<?php
	$titre = "Marc Grenier - Minesweeper";
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/header.php");
?>
<div class="jumbotron">
	<div class="container">
		<div class="presentation">
			<h1>Minesweeper</h1>
		</div>
	</div>
</div>

<div class="container">
	<div class="section-title">Project overview</div>
	<p class="project-overview">Yup that's a minesweeper in javascript. It's always good to have an easy access minesweeper since Windows doesn't always have it preinstalled.</p>

	<div class="minesweeper-container">
		<div class="minesweeper" id="minesweeper"></div>
		</div>
	</div>
</div>


<?php
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/footer.php");
?>
<link href="css/local.css" rel="stylesheet">
<script type="text/javascript" src="js/minesweeper.js"></script>