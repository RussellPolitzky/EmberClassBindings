//------------------------------------------------
// This sample application is base on
// "Flame on! A beginner's guide to Ember.js"/// <reference path="../../Styles/" />

// see: http://www.adobe.com/devnet/html5/articles/flame-on-a-beginners-guide-to-emberjs.html
//------------------------------------------------

/// <reference path="../appNamespace.js" />

//------------------------------
// This controller was added to 
// deal with online-offline.
//------------------------------
App.connectionStatusController = Em.ObjectController.create({

    init: function () {
    	/// <summary>
    	/// Toggles the online/offline flags.
    	/// </summary>
        var me = this;
        setInterval(function () {
            if (me.get('online') === true) {
                me.set('online', false);
                me.set('offline', true);
            } else {
                me.set('online', true);
                me.set('offline', false);
            }
        }, 1000); //1000ms - Toggle once per second.

        this._super();
    },

    content: undefined,
    online: false,
    offline: true
});