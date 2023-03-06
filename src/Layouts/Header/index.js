import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from '../../components/MenuItem';
import Searchbar from '../../components/Searchbar';
import * as Icon from '../../assets/icon';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header({ toggleSidebar }) {
  // show search modal small screen
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const resizeHandle = () => {
  //     if (document.body.offsetWidth <= 768) {
  //       setSmallInput(true);
  //     } else {
  //       setSmallInput(false);
  //       setOverlay(false);
  //     }
  //   };
  //   window.addEventListener('resize', resizeHandle);

  //   return () => {
  //     window.removeEventListener('resize', resizeHandle);
  //   };
  // }, []);

  const turnModal = (value) => {
    switch (value) {
      case 'on':
        setModal(true);
        break;
      case 'off':
        setModal(false);
        break;
      default:
        setModal((prev) => !prev);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <MenuItem
          icon={<Icon.Hamburger onClick={toggleSidebar} />}
          content={<Icon.YoutubeLogo onClick={() => navigate('/')} />}
        />
      </div>
      <div className={cx('search-area', { fullscreen: modal })}>
        <Searchbar modal={modal} turnModal={turnModal} />
        <div
          className={cx('close-btn', { hidden: !modal })}
          onClick={() => {
            setModal(false);
          }}
        >
          &times;
        </div>
      </div>

      <div className={cx('user')}>
        <div className={cx('user-item')}>
          <Icon.Create />
        </div>
        <div className={cx('user-item')}>
          <Icon.More />
        </div>
        <div className={cx('user-item')}>
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
