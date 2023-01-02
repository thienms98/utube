import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);

function Loading({ icon = true, text, size = '50px', dotColor = '#fff' }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('icon')} style={{ '--size': size, '--dotColor': dotColor }}></div>
      {text && <div className={cx('text')}>Loading...</div>}
    </div>
  );
}

export default Loading;
