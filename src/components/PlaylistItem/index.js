import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PlaylistItem.module.scss';
import { Playlist } from '../../assets/icon';

const cx = classNames.bind(styles);
function PlaylistItem({ id, title, thumbnailUrl, author, hor = false }) {
  const navigate = useNavigate();
  return (
    <Link to={`/watching/playlist/${id}`}>
      <div
        className={cx('wrapper', { horizontal: hor })}
        onClick={() => {
          navigate(`/watching/playlist/${id}`);
        }}
      >
        <div className={cx('thumb')}>
          <img src={thumbnailUrl} alt={title} />
          <div className={cx('icon')}>
            <Playlist />
          </div>
        </div>
        <div className={cx('text')}>
          <div className={cx('title')} title={title}>
            {title}
          </div>
          <div className={cx('detail')}>{author}</div>
        </div>
      </div>
    </Link>
  );
}

export default PlaylistItem;
