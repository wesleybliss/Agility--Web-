
define([
    'underscore', 'backbone',
    'models/user'
], function(_, Backbone, UserModel) {
    
    var UsersCollection = Backbone.Collection.extend({
        
        model: UserModel,
        url: 'http://agility.local:3000/users',
        
        /* Override the Backbone.parse method so we can
         * properly assign models, since the API returns
         * (result).data{} instead of just data{} */
        parse: function( response ) {
            return response.data;
        }
        
    });
    
    return UsersCollection;
    
});