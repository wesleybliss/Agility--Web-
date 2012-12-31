
define([
    'jquery', 'underscore', 'backbone',
    'models/project',
    'collections/projects',
    'text!templates/projects/list.html'
], function($, _, Backbone, ProjectModel, ProjectsCollection, projectsListTemplate) {
    
    var ProjectListView = Backbone.View.extend({
        
        el: $('div#current div.box'),
        
        initialize: function() {
            
            this.collection = new ProjectsCollection();
            this.collection.on( 'reset', this.render, this );
            
            // TODO This could be moved to the Model constructor
            this.collection.fetch();
            
        },
        
        render: function() {
            
            // TODO Maybe not super necessary to send Underscore helper?
            var data = {
                _: _,
                projects: this.collection.models
            };
            
            var compiledTemplate = _.template( projectsListTemplate, data );
            this.$el.html( compiledTemplate );
            
        }
        
    });
    
    return ProjectListView;
    
});