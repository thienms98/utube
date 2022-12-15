import { useState } from 'react';
import * as Icon from '../../assets/icon';
import MenuItem from '../../components/MenuItem';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar({ toggleSidebar }) {
  const [activeItem, setActiveItem] = useState('Home');

  const main = [
    { icon: <Icon.Home />, content: 'Home' },
    { icon: <Icon.Explore />, content: 'Explore' },
    { icon: <Icon.Shorts />, content: 'Shorts' },
    { icon: <Icon.Subscription />, content: 'Subscription' },
  ];

  const personal = [
    { icon: <Icon.Library />, content: 'Library' },
    { icon: <Icon.History />, content: 'History' },
    { icon: <Icon.YourVideo />, content: 'YourVideo' },
    { icon: <Icon.WatchLater />, content: 'WatchLater' },
    { icon: <Icon.Liked />, content: 'Liked videos' },
    { icon: <Icon.DownArrow />, content: 'Show more' },
  ];
  return (
    <nav>
      <div className={cx('logo')}>
        <MenuItem icon={<Icon.Hamburger onClick={toggleSidebar} />} content={<Icon.YoutubeLogo />} />
      </div>
      <div className={cx('main')}>
        {main.map(({ icon, content }, index) => {
          return (
            <MenuItem
              icon={icon}
              content={content}
              active={activeItem === content}
              key={index}
              itemEvent={() => {
                console.log('clicked');
                setActiveItem(content);
              }}
            />
          );
        })}
      </div>
      <div className={cx('line')}></div>
      <div className={cx('personal')}>
        {personal.map(({ icon, content }, index) => {
          return (
            <MenuItem
              icon={icon}
              content={content}
              active={activeItem === content}
              key={index}
              itemEvent={() => {
                console.log('clicked');
                setActiveItem(content);
              }}
            />
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
