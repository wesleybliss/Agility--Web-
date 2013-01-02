<!--?php $sampleStories = file_get_contents( 'sample_data/stories.inc.php' ); ?-->
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
            <h2 id="page-heading">Things go here.</h2>
        </div>
        
        <div class="clear"></div>
        
        <div class="grid_12">
            <h3>Projects</h3>
            <div id="projects">
                
            </div>
        </div>
        
        <div class="clear"></div>
        
    </div>
    
    <!-- Grab Google CDN's jQuery. Fall back to local if necessary -->
    <!--<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>!window.jQuery && document.write(unescape('%3Cscript src="js/jquery-1.8.3.min.js"%3E%3C/script%3E'))</script>-->
    
    <!--<script type="text/javascript" src="js/libs/foundation.min.js"></script>-->
    <script type="text/javascript" src="js/libs/underscore-min.js"></script>
    <script type="text/javascript" src="js/libs/backbone-min.js"></script>
    <script data-main="js/main" type="text/javascript" src="js/libs/require.js"></script>
    <!--<script type="text/javascript" src="js/app.js"></script>-->
    <script type="text/javascript" src="http://agility.local:3000/faye/client.js"></script>
    <script type="text/javascript" src="http://agility.local:4000/socket.io/socket.io.js"></script>
    <script type="text/javascript">
        //DEBUG Testing realtime subscription with FAYE
        var faye = new Faye.Client(
            'http://agility.local:3000/faye', {
                timeout: 120,
                retry: 3
            }
        );
        window.onload = function() {
            var sub = faye.subscribe( '/foo', function(message) {
                console.log( message );
            });
            sub.callback( function() {
                console.log( 'FAYE | Subscribed to /foo' );
            });
            sub.errback( function(error) {
                console.log( 'FAYE | ERROR | ' + error );
            });
            window.setTimeout( function() {
                faye.publish( '/foo', {text: 'heyo'} );
            }, 2000 );
            
            
            // DEBUG socket.io test
            //define(['socketio'], function(io) {
                var socket = io.connect('http://agility.local:4000');
                socket.on( 'hello', function (data) {
                    console.log( 'socket says: ' + data.message );
                    socket.emit('sayhi', { my: 'data' });
                });
                //socket.emit('hello', {text: 'heyo'});
            //});
            
        };
    </script>
    
</body>
</html>