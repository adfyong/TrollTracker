// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/realdonaldtrump
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var tweets = document.getElementsByClassName("tweet");
    for (var i = 0; i < tweets.length; ++i) {
        tweets[i].style.display = 'none';
    };
})();