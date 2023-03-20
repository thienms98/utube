import { useState, useEffect, useRef } from 'react';
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

  const [amount, setAmount] = useState(0);

  const videosRef = useRef();
  const lastAmount = useRef(amount);

  const revealOnScroll = () => {
    const videos = [...videosRef.current.childNodes];
    const bottomView = videosRef.current.scrollTop + videosRef.current.offsetHeight;
    const amount = videos.reduce((prev, current) => {
      const currentYPosition = current.getBoundingClientRect().top;
      if (currentYPosition <= bottomView) {
        return prev + 1;
      } else {
        return prev;
      }
    }, -1);
    setAmount((prev) => (prev < amount ? amount : prev));
  };

  useEffect(() => {
    revealOnScroll();
  }, []);

  useEffect(() => {
    console.log(lastAmount.current, amount);
    lastAmount.current = amount;
  }, [amount]);

  return (
    <>
      <div className={cx('shortcuts')}>
        <Shortcut shortcuts={shortcuts} />
      </div>
      <div ref={videosRef} className={cx('videos') + ' scroll'} onScroll={revealOnScroll}>
        {homepageItems.map((item, i) => {
          const { type, thumbnail, title, author, views, publishTime } = item;
          const id = type === 'video' ? item.videoId : item.playlistId;
          return (
            <div
              className={cx('video', { reveal: i <= amount })}
              style={{ '--delay': Math.abs(i - lastAmount.current) }}
            >
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
