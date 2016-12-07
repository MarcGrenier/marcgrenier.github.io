<!DOCTYPE html>
<html>
    <head>
        <title><?php if(isset($titre)){echo $titre;}else{echo "Marc Grenier";} ?> </title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Marc Grenier">

        <!-- CSS -->
		<link href="/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/font-awesome.min.css" rel="stylesheet">
		<link href="/css/common.css" rel="stylesheet">

        <!-- Javascript -->
		<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
    </head>
    <body>
        <nav class="navbar">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                        <img class="logo" alt="Brand" src="/images/logo_light.png"/>
                        <span class="logo-extra">arc Grenier</span>
                    </a>
                </div>
                <div class="hidden-xs">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <div class="social">
                            <a href="https://github.com/MarcGrenier"  target="_blank">
                                <i class="fa fa-github"></i>
                            </a>
                            <a href="https://bitbucket.org/MarcGrenier"  target="_blank">
                                <i class="fa fa-bitbucket"></i>
                            </a>
                            <a href="http://ca.linkedin.com/in/marcgrenier/" target="_blank">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>