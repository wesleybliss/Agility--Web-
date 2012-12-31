
define([
    'backbone'
], function(Backbone) {
    
    var UserModel = Backbone.Model.extend({
        
        url: function() {
            return '/users';
        }
        
    });
    
    return UserModel;
    
});