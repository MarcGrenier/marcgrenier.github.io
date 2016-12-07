<?php
	$titre = "Marc Grenier - PicModifier";
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/header.php");
?>
<div class="jumbotron">
	<div class="container">
		<div class="presentation">
			<h1>PicModifier</h1>
			<p>Image editor allowing single or multiple image modification</p>
		</div>
	</div>
</div>
<div class="container">
	
	<div class="row ">
		<div class="col-sm-6">
			<div class="section-title">Project overview</div>
			<p  class="project-overview">
				PicModifier gives 2 options to the user either opens a single image and modifies it or opens a folder containing images and apply the same modifications to all of them. 
				Modifications can either be applied from the menu of the primary window or from the side window that allows selection and modification of filters.
				When the user modifies a single image, this image will be displayed at the center of the primary window and update each time a modifications is made on it. 
				When a folder is selected, the main window is split in 4 sections showing the filters that will be applied, the location where the modified will be saved, a preview of the modifications applied to all images and the pattern used for naming all the modified images.
			</p>
		</div>
		<div class="col-sm-6">
			<div class="section-title">The filters</div>
			<p class="project-overview">
				Three categories of filters are available: linear filters, non linear filters and "super" filters. Each category has predefined filters and a customizable filter that can be parameterized.
				Tools such as crop and rotation are also available for the user to modify his images
			</p>
		
			<div class="row">
				<div class="col-xs-12">
					<div class="section-title">Technologies used</div>
					<span class="label label-primary">C++</span>		
					<span class="label label-primary">Qt 4.8.4</span>
					<span class="label label-primary">Visual Studio 2010</span>
					<p></p>
				</div>
				<div class="col-xs-12">
					<div class="section-title">Link</div>
					<ul>
						<li><span>Youtube : </span>  <a href="https://youtu.be/1GHgqdCoYY0" target="_blank"> https://youtu.be/1GHgqdCoYY0</a></li>
						<li><span>Source code:</span><a href="https://github.com/MarcGrenier/PicModifier" target="_blank"> https://github.com/MarcGrenier/PicModifier</a></li>
					<li>
				</div>
			</div>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xs-12">
			<div class="section-title">Images</div>
			<div id="carousel" class="carousel slide" data-ride="carousel">
			  	<!-- Indicators -->
				<ol class="carousel-indicators">
			    	<li data-target="#carousel" data-slide-to="0" class="active"></li>
			    	<li data-target="#carousel" data-slide-to="1"></li>
			    	<li data-target="#carousel" data-slide-to="2"></li>
			    	<li data-target="#carousel" data-slide-to="3"></li>
			  	</ol>

			  	<!-- Wrapper for slides -->
			  	<div class="carousel-inner">
				    <div class="item active">
				    	<img src="images/oneImage.jpg" alt="...">
			    	</div>
			    	<div class="item">
			    		<img src="images/massEdit.jpg" alt="...">
			    	</div>
			    	<div class="item">
			    		<img src="images/filtreLineaire.jpg" alt="...">
			    	</div>
			    	<div class="item">
			    		<img src="images/filtreNonLineaire.jpg" alt="...">
			    	</div>
			  	</div>
			</div>
		</div>
	</div>
</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] . "/partial/footer.php");
?>
<script>
	$('.carousel').carousel({interval:4000})
</script>		