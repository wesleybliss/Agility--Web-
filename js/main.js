
require.config({
    paths: {
        jquery: 'libs/jquery-1.8.3.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min'
    },
    shim: {
        /* require.js documentation says not needed, but
           underscore wouldn't load without it, so leaving it in shim */
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});