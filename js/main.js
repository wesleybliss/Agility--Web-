
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
        }
    }
});

require(['app'], function(App) {
    App.initialize();
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