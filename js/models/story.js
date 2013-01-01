
define([
    'backbone'
], function(Backbone) {
    
    var StoryModel = Backbone.Model.extend({
        
        url: function() {
            return '/stories';
        }
        
    });
    
    return StoryModel;
    
});