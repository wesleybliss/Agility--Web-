
define([
    'underscore', 'backbone',
    'models/story'
], function(_, Backbone, StoryModel) {
    
    var StoriesCollection = Backbone.Collection.extend({
        
        model: StoryModel,
        url: 'http://agility.local:3000/stories',
        
        /* Override the Backbone.parse method so we can
         * properly assign models, since the API returns
         * (result).data{} instead of just data{} */
        parse: function( response ) {
            return response.data;
        }
        
    });
    
    return StoriesCollection;
    
});