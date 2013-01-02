
define([
    'jquery', 'underscore', 'backbone',
    'models/user',
    'collections/stories',
    'text!templates/default/tracker.html',
    'text!templates/projects/show.html',
    'text!templates/stories/list.html'
], function($, _, Backbone, StoryModel, StoriesCollection, trackerTemplateLayout, projectShowTemplate, storiesListTemplate) {
    
    var StoryListView = Backbone.View.extend({
        
        el: $('div#projects'),
        
        initialize: function() {
            
            this.collection = new StoriesCollection();
            this.collection.on( 'reset sync', this.render, this );
            
            // TODO This could be moved to the Model constructor
            this.collection.fetch();
            
            // DEBUG
            (function debug_test_sync(delay, collection) {
                if ( !window.dts ) {
                    window.dts = window.setTimeout( function() {
                        console.log('running sync test');
                        collection.sync(
                            'read', collection
                        );
                    }, delay );
                }
            })(4000, this.collection);
            
        },
        
        render: function() {
            console.log('StoryListView:render()');
            console.log(this.collection.models[0].get('title'));
            // TODO Maybe not super necessary to send Underscore helper?
            var data = {
                _: _,
                stories: this.collection.models
            };
            
            //var compiledTemplate = _.template( storiesListTemplate, data );
            //this.$el.html( compiledTemplate );
            
            var compiledTemplate = _.template( trackerTemplateLayout, {} );
            this.$el.html( compiledTemplate );
            
            //compiledTemplate = _.template( projectShowTemplate, {} );
            //this.$el.find('ul').html( compiledTemplate );
            
            this.$el.find('ul').html( projectShowTemplate );
            
        }
        
    });
    
    return StoryListView;
    
});