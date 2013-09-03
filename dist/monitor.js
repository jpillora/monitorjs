// Monitor.js - v0.1.0 - https://github.com/jpillora/monitorjs
// Jaime Pillora <dev@jpillora.com> - MIT Copyright 2013
(function(window,document,undefined) {
var ANALYTICS, GA, MODES, analy, script, tid, _i, _len, _ref;

ANALYTICS = 'analytics';

GA = 'GA';

MODES = [ANALYTICS, GA];

analy = function() {
  var elem, scr;
  window['GoogleAnalyticsObject'] = 'ga';
  window['ga'] = window['ga'] || function() {
    return (window['ga'].q = window['ga'].q || []).push(arguments);
  };
  window['ga'].l = 1 * new Date();
  elem = document.createElement('script');
  scr = document.getElementsByTagName('script')[0];
  elem.async = 1;
  elem.src = '//www.google-analytics.com/analytics.js';
  return scr.parentNode.insertBefore(elem, scr);
};

setTid(function(tid) {});

_ref = document.getElementsByTagName("script");
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  script = _ref[_i];
  if (/monitor(\.min)\.js/.test(script.src)) {
    if (tid = script.getAttribute('gaq')) {
      setMode(ANALYTICS);
    } else if (tid = script.getAttribute('ga')) {
      setMode(GA);
    } else {
      return;
    }
    setTid(tid);
  }
}
}(window,document));