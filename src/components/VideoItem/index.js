import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import TextArea from '../TextArea';

const cx = classNames.bind(styles);

function VideoItem({ id, title, thumbnailUrl, author, avatar, views, publishTime, hor }) {
  const navigate = useNavigate();

  return (
    <div
      className={cx('wrapper', { horizontal: hor })}
      onClick={() => {
        document.title = title;
        navigate(`/watching/video/${id}`);
      }}
    >
      <div className={cx('thumb')}>
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className={cx('text-area')}>
        <TextArea author={author} avatarUrl={avatar} title={title} views={views} date={publishTime} side={hor} />
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
};

export default VideoItem;
