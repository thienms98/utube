import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArtistVerified, Verified } from '../../../assets/icon';
import { shortenNumber, secToHMS, makeTwoDigits } from '../../../utilities';

import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);

export default function SearchItem({ content }) {
  const [thumbnails, setThumbnails] = useState('thumbnails');
  const type = content.type;
  const { hour, min, sec } = secToHMS(content.video.lengthSeconds);
  let length = hour ? `${hour}:${makeTwoDigits(min)}}` : `${min}` + `:${makeTwoDigits(sec)}`;
  return (
    content && (
      <div className={cx('results-item')}>
        <Link to={`/watch/video/${content.video.videoId}`}>
          <div
            className={cx('thumbnail')}
            onMouseOver={() => setThumbnails('movingThumbnails')}
            onMouseOut={() => {
              setThumbnails('thumbnails');
            }}
          >
            <img src={content.video[thumbnails]?.at(-1).url} alt={content.video.title} width={300} height={140} />
            <div className={cx('length')}>{length}</div>
          </div>
          <div className={cx('text-area')}>
            <div className={cx('title')}>{content.video.title}</div>
            <div className={cx('metadata')}>
              <span>{shortenNumber(content.video.stats.views)} views</span>
              <span>{content.video.publishedTimeText}</span>
            </div>
            <div className={cx('channel')} title={content.video.author.title}>
              <Link to={`/channel/${content.video.author.channelId}`}>
                <div className={cx('avatar')}>
                  <img src={content.video.author.avatar?.at(0).url} alt={content.video.author.title} />
                </div>
                <div className={cx('title')}>
                  {content.video.author.title}
                  {content.video.author.badges.at(0)?.type === 'OFFICIAL_ARTIST_CHANNEL' && <ArtistVerified />}
                  {content.video.author.badges.at(0)?.type === 'VERIFIED_CHANNEL' && <Verified />}
                </div>
              </Link>
            </div>
            <div className={cx('description')}>{content.video.descriptionSnippet}</div>
            <div className={cx('badges')}>
              {content.video.badges.map((badge) => {
                return <div className={cx('badge')}>{badge}</div>;
              })}
            </div>
          </div>
        </Link>
      </div>
    )
  );
}
