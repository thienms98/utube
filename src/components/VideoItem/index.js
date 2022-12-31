import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import TextArea from '../TextArea';

const cx = classNames.bind(styles);

function VideoItem({ id, title, thumbnailUrl, author, avatar, views, date, hor }) {
  const navigate = useNavigate();
  return (
    <div
      className={cx('wrapper', { horizontal: hor })}
      onClick={() => {
        navigate(`/watch/video/${id}`);
      }}
    >
      <div className={cx('thumb')}>
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className={cx('text-area')}>
        <TextArea author={author} avatarUrl={avatar} title={title} views={views} date={date} noImage={hor} />
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
  views: PropTypes.string,
  date: PropTypes.string,
  horizontal: PropTypes.bool,
};
export default VideoItem;
