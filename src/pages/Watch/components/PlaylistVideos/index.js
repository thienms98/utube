import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { secToHMS, formatNumberLowerThan10MustHave0Before } from '../../../../utilities';

import classNames from 'classnames/bind';
import styles from './PlaylistVideos.module.scss';
const cx = classNames.bind(styles);

function PlaylistVideos({ playlistItems, playlistId, playlistIndex, indexChangeHandle }) {
  const navigate = useNavigate();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{'Playlist'}</div>
      <div className={cx('items')}>
        {playlistItems.contents.map((video, index) => {
          const { hour, min, sec } = secToHMS(video.video.lengthSeconds);

          return (
            <div
              className={cx('item', { active: index === playlistIndex })}
              key={video.index}
              onClick={() => {
                navigate(`/watch/playlist/${playlistId}/${video.index}`);
                indexChangeHandle(index);
              }}
            >
              <div className={cx('thumbnail')}>
                <img src={video.video.thumbnails[video.video.thumbnails.length - 1].url} alt="" />
                <div className={cx('total-time')}>
                  {hour !== 0
                    ? `${hour}:${formatNumberLowerThan10MustHave0Before(min)}:${formatNumberLowerThan10MustHave0Before(
                        sec,
                      )}`
                    : `${min}:${formatNumberLowerThan10MustHave0Before(sec)}`}
                </div>
              </div>
              <div className={cx('text')}>
                <div className={cx('title')} title={video.video.title}>
                  {video.video.title}
                </div>
                <div className={cx('author')}>{video.video.author.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PlaylistVideos.propTypes = {
  playlistId: PropTypes.string,
  playlistItems: PropTypes.object,
  playlistIndex: PropTypes.number,
  indexChangeHandler: PropTypes.func,
};

export default PlaylistVideos;
