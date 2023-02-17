import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';
import ChannelName from '../ChannelName';

const cx = classNames.bind(styles);

function TextArea({ author, avatarUrl, title, views, date, channelVerified, side }) {
  return (
    <div className={cx('wrapper', { side: side })}>
      {!side && (
        <div className={cx('image')}>
          <img src={avatarUrl} alt={author} />
        </div>
      )}
      <div className={cx('text')}>
        <div className={cx('title')} title={title}>
          {title}
        </div>
        <div className={cx('channel')}>
          <ChannelName name={author} verified={channelVerified} title={author} />
        </div>
        <div className={cx('views')}>
          {views}
          <span className={cx('dot')}></span>
          {date}
        </div>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  author: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  channelVerified: PropTypes.bool,
  side: PropTypes.bool,
};

export default TextArea;
