import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DataContext } from '../..';
import YouTube from 'react-youtube';

import classNames from 'classnames/bind';
import styles from './YTPlayer.module.scss';
const cx = classNames.bind(styles);

function YTPlayer({ type, videoId, title, options }) {
  const navigate = useNavigate();
  const params = useParams();
  const data = useContext(DataContext);

  const nextVideo = () => {
    if (type === 'video') {
      const videoIndex = data.relateContents.contents.indexOf((content) => content.type === 'video');
      document.title = data.relateContents.contents[videoIndex].video.title;
      navigate(`/watching/${type}/${data.relateContents.contents[videoIndex].video.videoId}`);
    }
    if (type === 'playlist') {
      const contents = data.playlist.contents;
      let currentIndex = contents.findIndex((content) => content.video.videoId === params.videoId);
      if (currentIndex >= contents.length) return;
      document.title = contents[currentIndex + 1].video.title;
      navigate(`/watching/${type}/${params.playlistId}/${contents[currentIndex + 1].video.videoId}`);
    }
  };

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
        style={{
          height: `${document.body.offsetHeight * 0.8}px`,
          width: `${(document.body.offsetHeight * 0.8) / 0.5625}px`,
        }}
        onEnd={() => {
          nextVideo();
        }}
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
      />
    </>
  );
}

YTPlayer.defaultProps = {
  title: { title: '' },
  videoProps: { loop: 0 },
};

export default YTPlayer;
