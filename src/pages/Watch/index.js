import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

import RelateContent from './components/RelateContent';
import * as Icon from '../../assets/icon';
import { videoDetails, relateVideos } from './data';
import { shortenNumber, shortenTimeStamp, subtractTime, datetimeFormat } from '../../utilities';

const cx = classNames.bind(styles);

function Watch() {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const { type, id } = useParams();
  const videoContainer = useRef(null);
  const iFrame = useRef(null);

  useEffect(() => {
    iFrame.current.width = videoContainer.current.offsetWidth;
    iFrame.current.height = 0.5625 * iFrame.current.width;
  }, [id]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')} ref={videoContainer}>
        <iframe
          width="1920"
          // src={`https://www.youtube.com/embed/9sazTItO294`}
          src={
            type === 'video'
              ? `https://www.youtube.com/embed/${id}`
              : `https://www.youtube.com/embed/?listType=playlist&list=${id}`
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay={1}
          ref={iFrame}
        ></iframe>

        <div className={cx('video-details')}>
          <div className={cx('super-title')}>
            {videoDetails.superTitle.items.map((item) => {
              return <Link to={`/hashtag/${item}`}>{item}</Link>;
            })}
          </div>
          <div className={cx('title')}>{videoDetails.title}</div>
          <div className={cx('channel-and-react')}>
            <div className={cx('channel-option')}>
              <div className={cx('image')}>
                <Link to={`/channel/${videoDetails.author.channelId}`}>
                  <img src={videoDetails.author.avatar[0].url} alt={videoDetails.author.title} />
                </Link>
              </div>
              <div className={cx('channel-info')}>
                <div className={cx('channel-name')}>
                  <Link to={`/channel/${videoDetails.author.channelId}`}>
                    <div className={cx('name')}>{videoDetails.author.title}</div>
                  </Link>
                  <Icon.Verified />
                </div>
                <div className={cx('subcribers-count')}>{videoDetails.author.stats.subscribersText}</div>
              </div>
              <div className={cx('subcribe-btn')}>Subcribe</div>
            </div>
            <div className={cx('video-option')}>
              <div className={cx('react')}>
                <div className={cx('like')}>
                  <div className={cx('icon')}>
                    <Icon.Liked />
                  </div>
                  {shortenNumber(videoDetails.stats.likes)}
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
            <div className={cx('description')}>
              <div className={cx('views-and-time')}></div>
            </div>
          </div>

          <div
            className={cx('description-wrapper', descriptionVisible)}
            onClick={() => {
              setDescriptionVisible(true);
            }}
          >
            <div className={cx('views-date')}>
              {!descriptionVisible
                ? `${shortenNumber(videoDetails.stats.views)} views ${shortenTimeStamp(
                    subtractTime(videoDetails.publishedDate),
                  )}`
                : `${videoDetails.stats.views.toLocaleString()} views ${datetimeFormat(videoDetails.publishedDate)}`}
            </div>

            <div className={cx('description')}>{videoDetails.description}</div>

            <div className={cx('music-tab')}>
              <div className={cx('title')}>Music</div>
              <div className={cx('wrapper')}>
                {videoDetails.musics[0].map(({ title, value }, index) => {
                  return (
                    <div className={cx('item')} key={index}>
                      <div className={cx('title')}>{title}</div>
                      <div className={cx('value')}>{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className={cx('hide-btn')} onClick={() => setDescriptionVisible(false)}>
              Show less
            </button>
          </div>
        </div>

        <div className={cx('comments')}>
          <div className={cx('header')}>
            <div className={cx('count')}>{`${videoDetails.stats.comments.toLocaleString()} Comments`}</div>
            <div className={cx('sort-btn')}>Sort by</div>
          </div>
          <div className={cx('comment-input')}>
            <div className={cx('image')}>
              <img src="https://picsum.photos/40" alt="" />
              <input type="text" placeholder="Add a comment ..." />
            </div>
            {/* Comment component */}
          </div>
        </div>
      </div>

      <div className={cx('relate-videos')}>
        <RelateContent contents={relateVideos.contents} />
      </div>
    </div>
  );
}

export default Watch;
