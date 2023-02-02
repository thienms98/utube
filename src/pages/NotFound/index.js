import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>404 NOT FOUND</div>
      <div className={cx('text')}>
        Page not found <br /> or under developement
      </div>
    </div>
  );
}

export default NotFound;
