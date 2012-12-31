
define([
    'underscore', 'backbone',
    'models/user'
], function(_, Backbone, UserModel) {
    
    var UsersCollection = Backbone.Collection.extend({
        
        model: UserModel,
        url: 'http://agility.local:3000/users',
        
        /* Override the Backbone.sync method so we
         * can use JSONP accross different domains. */
        //sync: function( method, model, options ) {
        //    console.log('running sync');
        //    options.timeout = 10000;
        //    options.dataType = 'jsonp';
        //    return Backbone.sync( method, model, options );
        //}
        
    });
    
    return UsersCollection;
    
});