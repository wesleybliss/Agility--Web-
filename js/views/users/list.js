
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
            //this.collection.add({ email: 'test@backbone.js' });
            this.collection.fetch({
                dataType: 'jsonp',
                success: _.bind( function(collection, response) {
                    console.log('data: ', collection.data);
                }, this )
            });
            
        },
        
        render: function() {
            
            //var data = {
            //    _: _,
            //    users: this.collection.models
            //};
            //console.log(data.users);
            
            //var compiledTemplate = _.template( usersListTemplate, data );
            //this.$el.html( compiledTemplate );
            
        }
        
    });
    
    return UserListView;
    
});