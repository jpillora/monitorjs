
ANALYTICS = 'analytics'
GA = 'GA'
MODES = [ANALYTICS, GA]

analy = ->
  window['GoogleAnalyticsObject'] = 'ga'
  window['ga'] = window['ga'] || -> (window['ga'].q = window['ga'].q || []).push(arguments)
  window['ga'].l = 1 * new Date()
  elem = document.createElement('script')
  scr = document.getElementsByTagName('script')[0]
  elem.async = 1;
  elem.src = '//www.google-analytics.com/analytics.js';
  scr.parentNode.insertBefore(elem, scr)

# ga('create', 'UA-38709761-7', 'example.com');
# ga('send', 'pageview');

setTid (tid) ->

#auto init
for script in document.getElementsByTagName("script")
  if /monitor(\.min)\.js/.test(script.src)
    if tid = script.getAttribute('gaq')
      setMode(ANALYTICS)
    else if tid = script.getAttribute('ga')
      setMode(GA)
    else
      return
    setTid tid    

