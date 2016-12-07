<?php 
	require_once('partial/header.php');
?>

        <div class="container">			
			<!-- Projects -->
			<div class="section-title index-section"><i class="fa fa-code-fork"></i>Personnal projects</div>
				
			<div class="row">
				<?php
					$projects = array(
						0 => array("title"=>"Code Name",
							         "description"=>"Android table game",
							         "link"=>"/project/codename/",
							         "content"=>'<div class="image blue"><i class="fa fa-user-secret"></i></div>'),
						1 => array("title"=>"Rantalk",
							         "description"=>"Talk to random people",
							         "link"=>"/project/rantalk",
							         "content"=>'<div class="image green"><i class="fa fa-comments"></i></div>'),
						2 => array("title"=>"Picmodifier",
							         "description"=>"Photo editor",
							         "link"=>"/project/picmodifier/",
							         "content"=>'<div class="image amber"><i class="fa fa-camera-retro"></i></div>'),
						3 => array("title"=>"Minesweeper",
							         "description"=>"Javascript game",
							         "link"=>"/project/minesweeper",
							         "content"=>'<div class="image orange"><i class="fa fa-gamepad"></i></div>'),
						4 => array("title"=>"Asteroïd",
							         "description"=>"Android Survival Game",
							         "link"=>"/project/asteroid/",
							         "content"=>'<div class="image black"><img src="/images/asteroid1.png"/></div>'),
						5 => array("title"=>"AreaB51",
							         "description"=>"Multiplayer third-person shooter",
							         "link"=>"/project/areab51/",
							         "content"=>'<div class="image red"><img src="images/areab51.gif" /></div>')
						);
										
					for($i=0;$i<count($projects);$i++){
						?>
						<div class="col-xs-12 col-sm-6 col-md-4">
							<div class="project-box">
								<a href="<?php echo $projects[$i]["link"]; ?>">
									<?php echo $projects[$i]["content"]; ?>
									<div class="project-box-detail">
										<span><?php echo $projects[$i]["title"]; ?></span>		
										<p class="text-muted"><?php echo $projects[$i]["description"]; ?></p>			
									</div>
								</a>
							</div>		
						</div>
						<?php						
					}

				?>
			</div>

			<!-- Skils -->
			<div class="row">
    			<div class="col-sm-12">
					<div class="section-title"><i class="fa fa-code"></i> Skills</div>
					<canvas id="skillChart" width="400" height="150"></canvas>
				</div>
			</div>
		</div>
		
		<script type="text/javascript" src="/js/Chart.bundle.min.js"></script>
		<script type="text/javascript" src="/js/skills.js"></script>

		<?php 
			require_once('partial/footer.php');
		?>
