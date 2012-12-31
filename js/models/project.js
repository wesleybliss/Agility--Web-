
define([
    'backbone'
], function(Backbone) {
    
    var ProjectModel = Backbone.Model.extend({
        
        url: function() {
            return '/projects';
        }
        
    });
    
    return ProjectModel;
    
});