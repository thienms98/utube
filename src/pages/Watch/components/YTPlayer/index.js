/* eslint-disable no-undef */
import { memo, useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DataContext } from '../..';
import YouTube from 'react-youtube';

import classNames from 'classnames/bind';
import styles from './YTPlayer.module.scss';
const cx = classNames.bind(styles);

function YTPlayer({ type, videoId, title, options, watchOptions }) {
  const navigate = useNavigate();
  const params = useParams();
  const data = useContext(DataContext);

  const nextVideo = () => {
    if (type === 'video') {
      const videoIndex = data.relateContents.contents.indexOf((content) => content.type === 'video');
      document.title = data.relateContents.contents[videoIndex].video.title;
      navigate(`/watch/${type}/${data.relateContents.contents[videoIndex].video.videoId}`);
    }
    if (type === 'playlist') {
      const contents = [...data.playlist.contents];
      // shuffle playlist
      // const temp = [...data.playlist.contents];
      // const contents = [...temp];
      // if (watchOptions.shuffle)
      //   temp.forEach((video, index) => {
      //     contents[index] = temp.splice(Math.floor(Math.random() * temp.length), 1)[0];
      //   });
      let currentIndex = contents.findIndex((content) => content.video.videoId === params.videoId);
      if (currentIndex >= contents.length && watchOptions.loop) currentIndex = 0;
      if (watchOptions.shuffle) currentIndex = Math.floor(Math.random() * contents.length);
      document.title = contents[currentIndex + 1].video.title;
      navigate(`/watch/${type}/${params.playlistId}/${contents[currentIndex + 1].video.videoId}`);
    }
  };

  const getPlayersize = () => {
    let width = 0,
      height = 0;
    if (document.body.offsetWidth > 1024) {
      height = document.body.offsetHeight * 0.75;
      width = document.body.offsetWidth * 0.6;
    } else {
      width = document.body.offsetWidth;
      height = width * 0.5625;
    }
    return {
      height: `${height}px`,
      width: `${width}px`,
    };
  };
  const [playerSize, setPlayerSize] = useState(getPlayersize);

  useEffect(() => {
    const theFunc = () => {
      setPlayerSize(getPlayersize);
    };
    window.addEventListener('resize', theFunc);
    return () => {
      window.removeEventListener('resize', theFunc);
    };
  }, []);

  // useEffect(() => {
  //   if (!YT || !YT.Player) return;
  //   let player;
  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('player', {
  //       width: '100%',
  //       height: '100%',
  //       videoId: videoId,
  //       playerVars: {
  //         playsinline: 1,
  //       },
  //       events: {
  //         onReady: onPlayerReady,
  //         onStateChange: onPlayerStateChange,
  //         onended: nextVideo,
  //       },
  //     });
  //   }
  //   function onPlayerReady(event) {
  //     event.target.playVideo();
  //   }

  //   // 5. The API calls this function when the player's state changes.
  //   //    The function indicates that when playing a video (state=1),
  //   //    the player should play for six seconds and then stop.
  //   var done = false;
  //   function onPlayerStateChange(event) {
  //     if (event.data === YT.PlayerState.PLAYING && !done) {
  //       setTimeout(stopVideo, 6000);
  //       done = true;
  //     }
  //   }
  //   function stopVideo() {
  //     player.stopVideo();
  //   }
  //   onYouTubeIframeAPIReady();
  //   return () => {};
  // }, []);

  return (
    <>
      <YouTube
        key={videoId}
        videoId={videoId} // defaults -> ''
        title={title.title} // defaults -> ''
        loading={'lazy'} // defaults -> undefined
        className={cx('player')}
        iframeClassName={cx('youtube-iframe')}
        opts={{
          playerVars: { autoplay: 1, controls: 1, loop: options.loop },
        }}
        style={playerSize}
        onEnd={() => {
          nextVideo();
        }}
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
      />

      {/* <div id="player" style={{ width: playerSize.width, height: playerSize.height }}></div> */}
    </>
  );
}

YTPlayer.defaultProps = {
  title: { title: '' },
  videoProps: { loop: 0 },
};

export default memo(YTPlayer);
