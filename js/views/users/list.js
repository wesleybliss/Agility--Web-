
define([
    'jquery', 'underscore', 'backbone',
    'models/user',
    'collections/users',
    'text!templates/users/list.html'
], function($, _, Backbone, UserModel, UsersCollection, usersListTemplate) {
    
    var UserListView = Backbone.View.extend({
        
        el: $('div#current div.box'),
        
        initialize: function() {
            
            this.collection = new UsersCollection();
            this.collection.on( 'reset', this.render, this );
            
            // TODO This could be moved to the Model constructor
            this.collection.fetch();
            
        },
        
        render: function() {
            
            // TODO Maybe not super necessary to send Underscore helper?
            var data = {
                _: _,
                users: this.collection.models
            };
            
            var compiledTemplate = _.template( usersListTemplate, data );
            this.$el.html( compiledTemplate );
            
        }
        
    });
    
    return UserListView;
    
});