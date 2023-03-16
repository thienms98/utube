import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Icon from '../../assets/icon';
import MenuItem from '../../components/MenuItem';
import { PersonalPlaylists } from '../../utilities/personalPlaylists';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function Sidebar({ toggleSidebar }) {
  const [activeItem, setActiveItem] = useState('Home');
  const [playlists, setPlaylists] = useState(() => {
    const playlists = PersonalPlaylists.get();
    return {
      list: playlists,
      hidden: true,
    };
  });

  const changePlaylistsVisible = () => {
    setPlaylists((prev) => {
      return { ...prev, hidden: !prev.hidden };
    });
  };

  const [main, personal] = [
    [
      { icon: <Icon.Home />, content: 'Home', path: '/' },
      { icon: <Icon.Explore />, content: 'Explore', path: '' },
      { icon: <Icon.Shorts />, content: 'Shorts', path: '' },
      { icon: <Icon.Subscription />, content: 'Subscription', path: '/subcription' },
    ],
    [
      { icon: <Icon.Library />, content: 'Library', path: '/library' },
      { icon: <Icon.History />, content: 'History', path: '/history' },
      { icon: <Icon.YourVideo />, content: 'YourVideo', path: '' },
      { icon: <Icon.WatchLater />, content: 'WatchLater', path: '/playlist/WL' },
      { icon: <Icon.Liked />, content: 'Liked videos', path: '/liked' },
    ],
  ];
  return (
    <nav>
      <div className={cx('logo')}>
        <MenuItem icon={<Icon.Hamburger onClick={toggleSidebar} />} content={<Icon.YoutubeLogo />} />
      </div>
      <div className={cx('main')}>
        {main.map(({ icon, content, path }, index) => {
          return (
            <div
              className={cx('item')}
              onClick={() => {
                setActiveItem(content);
              }}
              key={index}
            >
              <Link to={path}>
                <MenuItem icon={icon} content={content} active={activeItem === content} key={index} />
              </Link>
            </div>
          );
        })}
        {playlists.hidden ||
          playlists.list.map((item, index) => {
            return (
              <div className={cx('item', 'playlist')} key={index} onClick={changePlaylistsVisible}>
                <Link to={`/playlist/${item.playlistId}`}>
                  <MenuItem
                    icon={item.type === 'youtube' ? <Icon.Playlist /> : <Icon.Playlist2 />}
                    content={item.title}
                  />
                </Link>
              </div>
            );
          })}
        <div className={cx('item')} onClick={changePlaylistsVisible}>
          <MenuItem
            icon={<Icon.DownArrow style={{ transform: `rotate(${playlists.hidden ? 0 : 180})deg` }} />}
            content={'Show more'}
          />
        </div>
      </div>
      <div className={cx('line')}></div>
      <div className={cx('personal')}>
        {personal.map(({ icon, content, path }, index) => {
          return (
            <div
              className={cx('item')}
              onClick={() => {
                setActiveItem(content);
              }}
              key={index}
            >
              <Link to={path}>
                <MenuItem icon={icon} content={content} active={activeItem === content} key={index} />
              </Link>
            </div>
          );
        })}
      </div>
      <div className={cx('line')}></div>
      <div className={cx('subcription')}>
        <div className={cx('title')}>Subcription</div>
      </div>
    </nav>
  );
}

export default Sidebar;
