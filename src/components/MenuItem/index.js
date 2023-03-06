import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ icon, content, active, logoEvent, itemEvent }) {
  return (
    <div className={cx('wrapper', { active: active })} {...itemEvent}>
      <div className={cx('logo')} {...logoEvent}>
        {icon}
      </div>
      <div className={cx('content')}>{content}</div>
    </div>
  );
}

export default MenuItem;
