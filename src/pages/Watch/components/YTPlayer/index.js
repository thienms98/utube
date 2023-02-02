import { useState } from 'react';
import YouTube from 'react-youtube';
import classNames from 'classnames/bind';
import styles from './YTPlayer.module.scss';
const cx = classNames.bind(styles);

function YTPlayer({ videoId, title, indexChangeHandle }) {
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
          playerVars: { autoplay: 1, controls: 1 },
        }}
        onEnd={() => {
          indexChangeHandle();
        }}
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
      />
    </>
  );
}
export default YTPlayer;
