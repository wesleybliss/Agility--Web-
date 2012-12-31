
define([
    'jquery', 'underscore', 'backbone',
    'views/users/list',
    'views/projects/list'
], function($, _, Backbone, UserListView, ProjectListView) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            '/users': 'showUsers',
            '/projects': 'showProjects',
            
            '*actions': 'defaultAction'
        }
    });
    
    var initialize = function() {
        
        var app_router = new AppRouter;
        
        app_router.on( 'showUsers', function() {
            var userListView = new UserListView();
            userListView.initialize();
        });
        
        app_router.on( 'showProjects', function() {
            var projectListView = new ProjectListView();
            projectListView.initialize();
        });
        
        app_router.on( 'route:defaultAction', function(actions) {
            //console.log( 'No route: ', actions );
            var projectListView = new ProjectListView();
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