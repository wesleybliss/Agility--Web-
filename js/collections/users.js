
define([
    'underscore', 'backbone',
    'models/user'
], function(_, Backbone, UserModel) {
    
    var UsersCollection = Backbone.Collection.extend({
        model: UserModel,
        url: 'http://agility.local:3000/users'
    });
    
    return UsersCollection;
    
});