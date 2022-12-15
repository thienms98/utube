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
    image: '',
    title: 'RPT MCK - TẠI VÌ SAO | Official Music Video - RPT MCK - TẠI VÌ SAO | Official Music Video',
    views: '380N views',
    time: '10 days ago',
    channel: 'RPT-MCK',
    channelVerified: true,
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
                  navigate('/watch/EvnaJDvgEmM');
                }}
                title={'new playlist'}
                detail={'from mixigaming witrh love'}
              />
            ) : (
              <VideoItem
                key={Math.random()}
                {...video}
                onClick={() => {
                  navigate('/watch/EvnaJDvgEmM');
                }}
              />
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
