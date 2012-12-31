
define([
    'jquery', 'underscore', 'backbone',
    'models/user',
    'collections/users',
    'text!templates/users/list.html'
], function($, _, Backbone, UserModel, UsersCollection, usersListTemplate) {
    
    var UserListView = Backbone.View.extend({
        
        $el: $('div#current div.box'),
        
        initialize: function() {
            
            this.collection = new UsersCollection();
            
            // Automatically trigger render() on fetch() completion
            this.collection.on( 'change reset', this.render );
            
            this.collection.fetch();
            
            //this.collection.fetch({ success: function(model, response) {
            //    console.log( response );
            //    this.render();
            //}});
            
        },
        
        render: function() {
            //return;
            //console.log(this.collection.models);
            //console.log(this);return;
            
            //if ( !this.collection || (this.collection == undefined) ) return;
            
            for ( var i = 0; i < this.collection.length; i++ ) {
                console.log( this.collection[i] );
            }
            
            //console.log( 'items: ' );
            //_.each( this.collection, function(item) {
            //    console.log( 'model: ' + item );
            //}, this );
            
            //for ( var i in data.models ) {
            //    console.log( i, data.models[i] );
            //}
            
            return;
            
            var compiledTemplate = _.template( usersListTemplate, {users: this.collection} );
            this.$el.html( compiledTemplate );
            
        }
        
    });
    
    return UserListView;
    
});