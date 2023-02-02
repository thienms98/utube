import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

import Shortcut from '../../components/Shortcut';
import VideoItem from '../../components/VideoItem';
import PlaylistItem from '../../components/PlaylistItem';

const cx = classNames.bind(styles);

function HomePage() {
  const navigate = useNavigate();

  const video = {
    id: 'BpCvYeK5hcE',
    title: 'Lorem ipsum dolor sit, amet consectetur',
    thumbnailUrl: 'https://picsum.photos/640/360',
    author: 'Someone who create this',
    avatar: 'https://picsum.photos/200',
    views: '18M views',
    publishTime: '6 months ago',
    hor: false,
  };
  const playlist = {
    id: 'RDEMKoafBD1vFmJyRfdabpiOmA',
    title:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugit debitis deleniti ullam rem ipsum delectus incidunt provident eius hic?',
    thumbnailUrl: 'https://picsum.photos/641/360',
    author: 'Utube playlist creator',
    hor: false,
  };
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
        {Array(20)
          .fill(1)
          .map((e, i) => {
            return i % 3 === 0 ? (
              <PlaylistItem
                key={Math.random() * 100}
                onClick={() => {
                  navigate('/watch/playlist/EvnaJDvgEmM/0');
                }}
                {...playlist}
              />
            ) : (
              <VideoItem
                key={Math.random()}
                {...video}
                onClick={() => {
                  navigate('/watch/video/EvnaJDvgEmM');
                }}
              />
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
