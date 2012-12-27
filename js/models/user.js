
define([
    'backbone'
], function(Backbone) {
    
    var UserModel = Backbone.Model.extend({
        
        url: function() {
            return '/users';
        },
        
        defaults: {
            email: 'nobody@backbone.js'
        }
        
    });
    
    return UserModel;
    
});