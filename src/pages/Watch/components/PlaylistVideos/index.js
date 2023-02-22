import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { options as opt } from '../../../../utilities/apiOpts';
import { secToHMS, formatNumberLowerThan10MustHave0Before } from '../../../../utilities';

import classNames from 'classnames/bind';
import styles from './PlaylistVideos.module.scss';
const cx = classNames.bind(styles);

function PlaylistVideos({ playlistVideos, updateData }) {
  const { playlistId, videoId } = useParams();
  const videosContainerRef = useRef(null);

  useEffect(() => {
    if (!playlistVideos) {
      const options = {
        ...opt,
        url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
        params: { id: playlistId, hl: 'en', gl: 'US' },
      };

      axios
        .request(options)
        .then((response) => {
          updateData('playlist', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  // scroll to playing video
  useEffect(() => {
    if (playlistVideos) {
      let index = 0;
      const itemHeight = videosContainerRef.current.scrollHeight / playlistVideos.contents.length;
      index = playlistVideos.contents.findIndex((video) => video.video.videoId === videoId);
      videosContainerRef.current.scrollTop = index * itemHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{'Playlist'}</div>
      <div className={cx('items')} ref={videosContainerRef}>
        {playlistVideos &&
          playlistVideos.contents.map((video, index) => {
            const { hour, min, sec } = secToHMS(video.video.lengthSeconds);

            return (
              <Link
                to={`/watch/playlist/${playlistId}/${video.video.videoId}`}
                className={cx('item', { active: videoId === video.video.videoId })}
                onClick={() => {
                  document.title = video.video.title;
                }}
                key={video.index}
              >
                <div className={cx('thumbnail')}>
                  <img src={video.video.thumbnails[video.video.thumbnails.length - 1].url} alt="" />
                  <div className={cx('total-time')}>
                    {hour !== 0
                      ? `${hour}:${formatNumberLowerThan10MustHave0Before(
                          min,
                        )}:${formatNumberLowerThan10MustHave0Before(sec)}`
                      : `${min}:${formatNumberLowerThan10MustHave0Before(sec)}`}
                  </div>
                </div>
                <div className={cx('text')}>
                  <div className={cx('title')} title={video.video.title}>
                    {video.video.title}
                  </div>
                  <div className={cx('author')}>{video.video.author.title}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

PlaylistVideos.propTypes = {
  playlistVideos: PropTypes.object,
  indexChangeHandler: PropTypes.func,
  updateData: PropTypes.func,
};

export default PlaylistVideos;
