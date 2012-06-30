//------------------------------------------------
// This sample application is base on
// "Flame on! A beginner's guide to Ember.js"
// see: http://www.adobe.com/devnet/html5/articles/flame-on-a-beginners-guide-to-emberjs.html
//------------------------------------------------

/// <reference path="../appNamespace.js" />

//----------------------------
// From the original sample.
//----------------------------
App.recentUsersController = Em.ArrayController.create({

    content: [],
    
    addUser: function(name) {
        if ( this.contains(name) ) this.removeObject(name);
        this.pushObject(name);
    },
    
    removeUser: function(view){
        this.removeObject(view.context);
    },
    
    searchAgain: function(view){
        App.tweetsController.set('username', view.context);
        App.tweetsController.loadTweets();
    },
    
    reverse: function(){
        return this.toArray().reverse();
    } .property('@each')
    
});

