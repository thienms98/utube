import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import TextArea from '../TextArea';

const cx = classNames.bind(styles);

function VideoItem({ id, title, thumbnailUrl, author, avatar, views, date, horizontal }) {
  const navigate = useNavigate();
  return (
    <div
      className={cx('wrapper', { horizontal: horizontal })}
      onClick={() => {
        navigate(`/watch/video/${id}`);
      }}
    >
      <div className={cx('thumb')}>
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className={cx('text-area')}>
        <TextArea author={title} avatar={author} title={avatar} views={views} date={date} noImage={horizontal} />
      </div>
    </div>
  );
}

export default VideoItem;
