
define([
    'underscore', 'backbone',
    'models/user'
], function(_, Backbone, UserModel) {
    
    var UsersCollection = Backbone.Collection.extend({
        
        model: UserModel,
        url: 'http://agility.local:3000/users'/*,
        
        //DEBUG
        initialize: function() {
            for ( var i = 0; i < 5; i++ ) {
                this.add( new UserModel({email: 'User #' + i}) );
            }
        }*/
        
    });
    
    return UsersCollection;
    
});