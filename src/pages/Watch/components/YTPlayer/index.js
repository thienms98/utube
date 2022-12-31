import { useRef } from 'react';

function YTPlayer() {
  var scriptUrl = 'https://www.youtube.com/s/player/21149d65/www-widgetapi.vflset/www-widgetapi.js';
  try {
    var ttPolicy = window.trustedTypes.createPolicy('youtube-widget-api', {
      createScriptURL: function (x) {
        return x;
      },
    });
    scriptUrl = ttPolicy.createScriptURL(scriptUrl);
  } catch (e) {}
  var YT;
  if (!window['YT']) YT = { loading: 0, loaded: 0 };
  var YTConfig;
  if (!window['YTConfig']) YTConfig = { host: 'https://www.youtube.com' };
  if (!YT.loading) {
    YT.loading = 1;
    (function () {
      var l = [];
      YT.ready = function (f) {
        if (YT.loaded) f();
        else l.push(f);
      };
      window.onYTReady = function () {
        YT.loaded = 1;
        for (var i = 0; i < l.length; i++)
          try {
            l[i]();
          } catch (e$0) {}
      };
      YT.setConfig = function (c) {
        for (var k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k];
      };
      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.id = 'www-widgetapi-script';
      a.src = scriptUrl;
      a.async = true;
      var c = document.currentScript;
      if (c) {
        var n = c.nonce || c.getAttribute('nonce');
        if (n) a.setAttribute('nonce', n);
      }
      var b = document.getElementsByTagName('script')[0];
      b.parentNode.insertBefore(a, b);
    })();
  }

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
  return <></>;
}

export default YTPlayer;
