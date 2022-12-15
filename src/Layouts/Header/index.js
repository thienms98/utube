import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import * as Icon from '../../assets/icon';

import MenuItem from '../../components/MenuItem';
import SearchArea from '../../components/SearchArea';

const cx = classNames.bind(styles);

function Header({ toggleSidebar }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <MenuItem icon={<Icon.Hamburger onClick={toggleSidebar} />} content={<Icon.YoutubeLogo />} />
      </div>
      <div className={cx('search-area')}>
        <SearchArea />
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
