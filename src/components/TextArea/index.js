import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';
import ChannelName from '../ChannelName';

const cx = classNames.bind(styles);

function TextArea({ author, avatarUrl, title, views, date, channelVerified, noImage }) {
  return (
    <div className={cx('wrapper', { 'no-image': noImage })}>
      {!noImage && (
        <div className={cx('image')}>
          <img src={avatarUrl} alt={author} />
        </div>
      )}
      <div className={cx('text')}>
        <div className={cx('title')} title={title}>
          {title}
        </div>
        <ChannelName name={author} verified={channelVerified} title={author} />
        <div className={cx('views')}>
          {views}
          <span className={cx('dot')}></span>
          {date}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
