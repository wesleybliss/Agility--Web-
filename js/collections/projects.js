
define([
    'underscore', 'backbone',
    'models/project'
], function(_, Backbone, ProjectModel) {
    
    var ProjectsCollection = Backbone.Collection.extend({
        
        model: ProjectModel,
        url: 'http://agility.local:3000/projects',
        
        /* Override the Backbone.parse method so we can
         * properly assign models, since the API returns
         * (result).data{} instead of just data{} */
        parse: function( response ) {
            return response.data;
        }
        
    });
    
    return ProjectsCollection;
    
});