import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { options } from '../../../../utilities/apiOpts';
import * as Icon from '../../../../assets/icon';
import { shortenNumber, shortenTimeStamp, subtractTime, datetimeFormat } from '../../../../utilities';

import classNames from 'classnames/bind';
import styles from './VideoDetails.module.scss';
const cx = classNames.bind(styles);

function VideoDetails({ videoDetails, updateData }) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const params = useParams();

  const detailsOptions = {
    ...options,
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: { id: params.videoId, hl: 'en', gl: 'US' },
  };

  useEffect(() => {
    if (!videoDetails)
      axios
        .request(detailsOptions)
        .then((response) => {
          updateData('videoDetails', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.videoId]);

  return !videoDetails ? (
    'loading...'
  ) : (
    <div className={cx('wrapper') + ' scroll'}>
      <div className={cx('super-title')}>
        {videoDetails.superTitle?.items.map((item, index) => {
          return (
            <Link key={index} to={`/hashtag/${item}`}>
              {item}
            </Link>
          );
        })}
      </div>
      <div className={cx('title')}>{videoDetails.title}</div>
      <div className={cx('channel-and-react')}>
        <div className={cx('channel-option')}>
          <div className={cx('image')}>
            <Link to={`/channel/${videoDetails.author?.channelId}`}>
              <img src={videoDetails.author?.avatar[0].url} alt={videoDetails.author?.title} />
            </Link>
          </div>
          <div className={cx('channel-info')}>
            <div className={cx('channel-name')}>
              <Link to={`/channel/${videoDetails.author?.channelId}`}>
                <div className={cx('name')}>{videoDetails.author?.title}</div>
              </Link>
              <Icon.Verified />
            </div>
            <div className={cx('subcribers-count')}>{videoDetails.author?.stats.subscribersText}</div>
          </div>
          <div className={cx('subcribe-btn')}>Subcribe</div>
        </div>
        <div className={cx('video-option')}>
          <div className={cx('react')}>
            <div className={cx('like')}>
              <div className={cx('icon')}>
                <Icon.Liked />
              </div>
              {shortenNumber(videoDetails.stats?.likes)}
            </div>
            <div className={cx('dislike')}>
              <div className={cx('icon')}>
                <Icon.Liked />
              </div>
            </div>
          </div>
          <div className={cx('share')}></div>
          <div className={cx('more-option')}></div>
        </div>
      </div>

      <div className={cx('description-wrapper', { clip: !descriptionVisible })}>
        <div
          className={cx('bg-layer')}
          onClick={() => {
            setDescriptionVisible((prev) => !prev);
          }}
        ></div>
        <div className={cx('views-date')}>
          {!descriptionVisible
            ? `${shortenNumber(videoDetails.stats?.views)} views ${shortenTimeStamp(
                subtractTime(videoDetails.publishedDate),
              )}`
            : `${videoDetails.stats.views.toLocaleString()} views ${datetimeFormat(videoDetails.publishedDate)}`}
        </div>

        <div className={cx('description')}>{videoDetails.description}</div>

        <div className={cx('hide-btn')} onClick={() => setDescriptionVisible((prev) => !prev)}>
          {descriptionVisible ? 'Show less' : 'Show more'}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
