import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from '../../components/MenuItem';
import Searchbar from '../../components/Searchbar';
import * as Icon from '../../assets/icon';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header({ toggleSidebar }) {
  // hide input & show icon
  const [smallInput, setSmallInput] = useState(false);
  // show overlay while open search box
  const [overlay, setOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resizeHandle = () => {
      if (document.body.offsetWidth <= 768) {
        setSmallInput(true);
      } else {
        setSmallInput(false);
        setOverlay(false);
      }
    };
    window.addEventListener('resize', resizeHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
    };
  }, []);
  const minimizeControl = () => {};
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <MenuItem
          icon={<Icon.Hamburger onClick={toggleSidebar} />}
          content={<Icon.YoutubeLogo onClick={() => navigate('/')} />}
        />
      </div>
      <div className={cx('search-area', { toggle: overlay })}>
        <Searchbar
          smallInput={smallInput}
          toggleOverlay={() => {
            setOverlay((prev) => !prev);
          }}
          toggleSmallInput={() => {
            setSmallInput((prev) => !prev);
          }}
        />
        <div
          className={cx('close-btn', { hidden: !overlay })}
          onClick={() => {
            setOverlay(false);
            setSmallInput(true);
          }}
        >
          &times;
        </div>
      </div>

      <div className={cx('user')}>
        <div className={cx('create')}>
          <Icon.Create />
        </div>
        <div className={cx('more')}>
          <Icon.More />
        </div>
        <div className={cx('noti')}>
          <Icon.Create1 />
        </div>
        <div className={cx('avatar')}>
          <img src="https://picsum.photos/200" alt="avtar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
