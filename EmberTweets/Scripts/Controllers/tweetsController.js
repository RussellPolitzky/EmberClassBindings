//------------------------------------------------
// This sample application is base on
// "Flame on! A beginner's guide to Ember.js"
// see: http://www.adobe.com/devnet/html5/articles/flame-on-a-beginners-guide-to-emberjs.html
//------------------------------------------------

/// <reference path="../appNamespace.js" />

//----------------------------
// From the original sample.
//----------------------------
App.tweetsController = Em.ArrayController.create({

    content: [],

    username: '',

    loadTweets: function () {
        var me = this;
        var username = me.get("username");
        if (username) {
            var url = 'http://api.twitter.com/1/statuses/user_timeline.json';
            url += '?screen_name=%@&callback=?'.fmt(me.get("username"));
            // push username to recent user array
            App.recentUsersController.addUser(username);
            $.getJSON(url, function (data) {
                me.set('content', []);
                $(data).each(function (index, value) {
                    var t = App.Tweet.create({
                        avatar: value.user.profile_image_url,
                        screen_name: value.user.screen_name,
                        text: value.text,
                        date: value.created_at
                    });
                    me.pushObject(t);
                });
            });
        }
    }
});



