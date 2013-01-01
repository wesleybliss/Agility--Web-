
define([
    'jquery', 'underscore', 'backbone',
    'models/user',
    'collections/stories',
    'text!templates/stories/list.html'
], function($, _, Backbone, StoryModel, StoriesCollection, storiesListTemplate) {
    
    var StoryListView = Backbone.View.extend({
        
        el: $('div#projects'),
        
        initialize: function() {
            
            this.collection = new StoriesCollection();
            this.collection.on( 'reset', this.render, this );
            
            // TODO This could be moved to the Model constructor
            this.collection.fetch();
            
        },
        
        render: function() {
            
            // TODO Maybe not super necessary to send Underscore helper?
            var data = {
                _: _,
                stories: this.collection.models
            };
            
            var compiledTemplate = _.template( storiesListTemplate, data );
            this.$el.html( compiledTemplate );
            
        }
        
    });
    
    return StoryListView;
    
});