//------------------------------------------------
// This sample application is base on
// "Flame on! A beginner's guide to Ember.js"
// see: http://www.adobe.com/devnet/html5/articles/flame-on-a-beginners-guide-to-emberjs.html
//------------------------------------------------

/// <reference path="../appNamespace.js" />

//---------------------------------------------
// This is the view that we're interested in
// since its this one that will show the change
// with regards "connection status".
//---------------------------------------------
App.SearchTextField = Em.TextField.extend({

    classNameBindings: ['connectionStatus'], // see: http://docs.emberjs.com/#doc=Ember.View&src=false

    connectionStatus: 'offline', // Note that classNameBindings (above) refers to this property.
                                 // so to change the styles, we can simply make changes to this property.

    init: function () {
    	/// <summary>
    	/// Initialise this view (something like a constructor).
    	/// </summary>

        // Setup a toggle for the class of this view.
        // The function is placed here to ensure that 
        // it remains private.
        //
        // We don't want this logic to live in a view
        // though, and this is just to demonstrate the
        // concept ie. we can change the CSS of a view 
        // dynamically using Ember bindings.
        var me = this;
        setInterval(function () {
            debugger;
            if (me.get('connectionStatus') === 'online') {
                me.set('connectionStatus', 'offline');
            } else {
                me.set('connectionStatus', 'online');
            }
        }, 1000); //1000ms - Toggle once per second.

        this._super(); // Call the superclass init() to allow it to do whatever it needs to.
    },

    insertNewline: function () {
    	/// <summary>
    	/// From the original sample.
    	/// </summary>
        App.tweetsController.loadTweets();
    }
});

