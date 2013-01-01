
define([
    'jquery', 'underscore', 'backbone',
    'views/users/list',
    'views/projects/list',
    'views/stories/list'
], function($, _, Backbone, UserListView, ProjectListView, StoryListView) {
    
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            'users': 'showUsers',
            'projects': 'showProjects',
            'projects/:id': 'showProject',
            
            '*actions': 'defaultAction'
        }
    });
    
    
    var initialize = function() {
        
        var app_router = new AppRouter;
        
        app_router.on( 'route:showUsers', function() {
            console.log('route:showUsers');
            var userListView = new UserListView();
        });
        
        app_router.on( 'route:showProjects', function() {
            console.log('route:showProjects');
            var projectListView = new ProjectListView();
        });
        
        app_router.on( 'route:showProject', function(id) {
            console.log('route:showProject');
            console.log( 'showing stories for project #' + id );
            var storyListView = new StoryListView();
        });
        
        app_router.on( 'route:defaultAction', function(actions) {
            console.log( 'NO ROUTE' );
            console.log( actions );
            var projectListView = new ProjectListView();
        });
        
        Backbone.history.start({
            //pushState: true,
            //root: 'http://agility.local:3000/'
        });
        
    };
    
    
    return {
        initialize: initialize
    };
    
    
});