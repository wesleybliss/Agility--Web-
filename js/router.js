
define([
    'jquery', 'underscore', 'backbone',
    'views/users/list'
], function($, _, Backbone, UserListView) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            '/users': 'showUsers',
            
            '*actions': 'defaultAction'
        }
    });
    
    var initialize = function() {
        
        var app_router = new AppRouter;
        
        app_router.on( 'showUsers', function() {
            var userListView = new UserListView();
            userListView.initialize();
        });
        
        app_router.on( 'route:defaultAction', function(actions) {
            //console.log( 'No route: ', actions );
            var userListView = new UserListView();
            userListView.initialize();
        });
        
        Backbone.history.start({
            pushState: true,
            root: 'http://agility.local:3000/'
        });
        
    };
    
    return {
        initialize: initialize
    };
    
});