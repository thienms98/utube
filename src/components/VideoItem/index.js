import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import TextArea from '../TextArea';

const cx = classNames.bind(styles);

function VideoItem({ id, title, thumbnailUrl, author, avatar, views, publishTime, hor }) {
  return (
    <Link to={`/watch/video/${id}`}>
      <div
        className={cx('wrapper', { horizontal: hor })}
        onClick={() => {
          document.title = title;
        }}
      >
        <div className={cx('thumb')}>
          <img src={thumbnailUrl} alt={title} />
        </div>
        <div className={cx('text-area')}>
          <TextArea author={author} avatarUrl={avatar} title={title} views={views} date={publishTime} side={hor} />
        </div>
      </div>
    </Link>
  );
}

export default VideoItem;
