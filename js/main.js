
require.config({
    paths: {
        jquery: 'libs/jquery-1.8.3.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        socketio: 'libs/socket.io'
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
        },
        socketio: {
            exports: 'io'
        },
        'libs/foundation/jquery.foundation.topbar': {
            deps: ['jquery'],
        },
        'libs/jquery.cookie': {
            deps: ['jquery']
        },
        'libs/jquery.event.move': {
            deps: ['jquery']
        },
        'libs/jquery.event.swipe': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.accordion': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.alerts': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.buttons': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.clearing': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.forms': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.joyride': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.magellan': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.mediaQueryToggle': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.navigation': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.orbit': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.reveal': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.tabs': {
            deps: ['jquery']
        },
        'libs/foundation/jquery.foundation.tooltips': {
            deps: ['jquery']
        },
        'libs/jquery.offcanvas': {
            deps: ['jquery']
        },
        'libs/jquery.placeholder': {
            deps: ['jquery']
        },
        'libs/foundation/foundation.min': {
            deps: [
                'libs/jquery.cookie',
                'libs/jquery.event.move',
                'libs/jquery.event.swipe',
                'libs/foundation/jquery.foundation.accordion',
                'libs/foundation/jquery.foundation.alerts',
                'libs/foundation/jquery.foundation.buttons',
                'libs/foundation/jquery.foundation.clearing',
                'libs/foundation/jquery.foundation.forms',
                'libs/foundation/jquery.foundation.joyride',
                'libs/foundation/jquery.foundation.magellan',
                'libs/foundation/jquery.foundation.mediaQueryToggle',
                'libs/foundation/jquery.foundation.navigation',
                'libs/foundation/jquery.foundation.orbit',
                'libs/foundation/jquery.foundation.reveal',
                'libs/foundation/jquery.foundation.tabs',
                'libs/foundation/jquery.foundation.tooltips',
                'libs/foundation/jquery.foundation.topbar',
                'libs/jquery.offcanvas',
                'libs/jquery.placeholder',
                'libs/foundation/modernizr.foundation',
            ]
        }
    }
});

require(['app', 'client'], function(App, Client) {
    App.initialize();
    Client.initialize();
});


Backbone.sync = function( method, model, options ) {
    
    var socket = window.NAMESPACE.socket; // grab active socket from global namespace; io.connect() was used to create socket
    
    /*
     * Create signature object that will emitted to server with every request. 
     * This is used on the server to push an event back to the client listener.
     */
    var signature = function () {
        var sig = {};    
        
        sig.endPoint = model.url + (model.id ? ('/' + model.id) : '');
        if (model.ctx) sig.ctx = model.ctx;

        return sig;
    };
    
    /*
     * Create an event listener for server push. The server notifies
     * the client upon success of CRUD operation.
     */
    var event = function (operation, sig) {
        var e = operation + ':'; 
        e += sig.endPoint;
        if (sig.ctx) e += (':' + sig.ctx);

        return e;
    };
    
    // Save a new model to the server.
    var create = function () {  
        var sign = signature(model); 
        var e = event('create', sign);
        socket.emit('create', {'signature' : sign, item : model.attributes }); 
        socket.once(e, function (data) {
            model.id = data.id;  
            console.log(model);                     
        });                           
    };              

    // Get a collection or model from the server.
    var read = function () {
        var sign = signature(model);
        var e = event('read', sign);
        socket.emit('read', {'signature' : sign});  
        socket.once(e, function (data) {
            options.success(data); // updates collection, model; fetch                      
        });   
    }; 
    
    // Save an existing model to the server.
    var update = function () {
        var sign = signature(model); 
        var e = event('update', sign);
        socket.emit('update', {'signature' : sign, item : model.attributes }); // model.attribues is the model data
        socket.once(e, function (data) { 
            console.log(data);                     
        });                           
    };  
    
    // Delete a model on the server.
    var destroy = function () {
        var sign = signature(model); 
        var e = event('delete', sign);
        socket.emit('delete', {'signature' : sign, item : model.attributes }); // model.attribues is the model data
        socket.once(e, function (data) { 
            console.log(data);                     
        });                           
    };             
      
    // entry point for method
    switch (method) {
        case 'create':
            create();
            break;        
        case 'read':  
            read(); 
            break;  
        case 'update':
            update();
            break;
        case 'delete':
            destroy();
            break; 
    }
    
};