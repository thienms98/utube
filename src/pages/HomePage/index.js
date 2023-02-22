import { Link } from 'react-router-dom';

import Shortcut from '../../components/Shortcut';
import VideoItem from '../../components/VideoItem';
import PlaylistItem from '../../components/PlaylistItem';
import { homepageItems } from './data';

import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
const cx = classNames.bind(styles);

function HomePage() {
  const shortcuts = [
    'Cook Studio',
    'Live',
    'Games',
    'Basketball',
    'UX',
    'Case Study',
    'Music',
    'Bnagla Lofi',
    'Tour',
    'Saintmartin',
    'Tech',
    'iPhone 13',
    'User Interface Design',
    'Computer Science Computer Science',
    'Watched',
    'Recommended',
  ];

  return (
    <>
      <div className={cx('shortcuts')}>
        <Shortcut shortcuts={shortcuts} />
      </div>
      <div className={cx('videos')}>
        {homepageItems.map((item, i) => {
          const { type, thumbnail, title, author, views, publishTime } = item;
          const id = type === 'video' ? item.videoId : item.playlistId;
          return (
            <Link to={`/watch/${type}/${id}`} key={id}>
              {(type === 'playlist' && (
                <PlaylistItem id={item.playlistId} title={title} thumbnailUrl={thumbnail} author={author} />
              )) ||
                (type === 'video' && (
                  <VideoItem
                    id={item.videoId}
                    title={title}
                    thumbnailUrl={thumbnail}
                    author={author}
                    views={views}
                    publishTime={publishTime}
                    avatar=""
                  />
                ))}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
