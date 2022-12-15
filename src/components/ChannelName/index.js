import classNames from 'classnames/bind';
import styles from './ChannelName.module.scss';
import { Verified } from '../../assets/icon';

const cx = classNames.bind(styles);

function ChannelName({ name, verified }) {
  return (
    <div className={cx('wrapper')}>
      <span>{name}</span>
      {verified ? <Verified /> : null}
    </div>
  );
}

export default ChannelName;
