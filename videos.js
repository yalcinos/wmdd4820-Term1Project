var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '400',
          width: '50%',

          videoId: '8YYQg7tFYa0',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      //Second iframe
      var player2;
      function onYouTubeIframeAPIReady() {
        player2 = new YT.Player('player2', {
          height: '400',
          width: '50%',

          videoId: 'Xe8NjFVX5_A',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }


      function onPlayerReady(event) {
        event.target.playVideo();
        
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      //This function helps to scroll down 250 to achieve centered position . (See line 10 at videos.html)
    function scrollDownPage(){
         //Youtube video is centered with below code.
          window.scrollTo(0,250);
          event.preventDefault(event);
    }
