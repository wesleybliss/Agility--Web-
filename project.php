<?php $sampleStories = ''; #file_get_contents( 'sample_data/stories.inc.php' ); ?>
<!DOCTYPE html>
<html lang-en>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Agility</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic">
    <link rel="stylesheet" type="text/css" href="css/grid.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/layout.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/nav.css" media="screen" />
    <!--[if IE 6]><link rel="stylesheet" type="text/css" href="css/ie6.css" media="screen" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" type="text/css" href="css/ie.css" media="screen" /><![endif]-->
    <link rel="stylesheet" type="text/css" href="css/foundation_agility.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/agility.css" media="screen" />
    <script type="text/javascript" src="js/libs/modernizr.foundation.js"></script>
</head>
<body>
    
    <div id="page" class="container_12">
        
        <div class="grid_12">
            <h1 id="branding">
                <a href="">Agility</a>
            </h1>
        </div>
        <div class="clear"></div>
        <div class="grid_12">
            <h2 id="page-heading">Open source, agile task management, similar to Pivotal Tracker, written in Node.js and Bacbkbone.js.</h2>
        </div>
        
        <div class="clear"></div>
        
        <div id="current" class="grid_3">
            <div class="box">
                <h2><a href="/users">Current</a></h2>
                <?php #echo $sampleStories; ?>
            </div>
        </div>
        <div class="grid_3">
            <div class="box">
                <h2>Backlog</h2>
                <?php echo $sampleStories; ?>
            </div>
        </div>
        <div class="grid_3">
            <div class="box">
                <h2>Icebox</h2>
                <?php echo $sampleStories; ?>
            </div>
        </div>
        <div class="grid_3">
            <div class="box">
                <h2>My Stories</h2>
                <?php echo $sampleStories; ?>
            </div>
        </div>
        
        <div class="clear"></div>
        <div class="grid_12" id="site_info">
            <div class="box">
                <p>Agility, created by <a href="http://linkedin.com/in/wesleybliss/">Wesley Bliss</a>, a GAMMA GAMMA accomplice.</p>
            </div>
        </div>
        <div class="clear"></div>
        
    </div>
    
    <!-- Grab Google CDN's jQuery. Fall back to local if necessary -->
    <!--<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>!window.jQuery && document.write(unescape('%3Cscript src="js/jquery-1.8.3.min.js"%3E%3C/script%3E'))</script>-->
    
    <!--<script type="text/javascript" src="js/foundation.min.js"></script>-->
    <script type="text/javascript" src="js/libs/underscore-min.js"></script>
    <script type="text/javascript" src="js/libs/backbone-min.js"></script>
    <script data-main="js/main" type="text/javascript" src="js/libs/require.js"></script>
    <!--<script type="text/javascript" src="js/app.js"></script>-->
    
</body>
</html>