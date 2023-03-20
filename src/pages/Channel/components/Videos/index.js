import classNames from 'classnames/bind';
import styles from './Videos.module.scss';
import VideoItem from '../../../../components/VideoItem';
import { shortenNumber } from '../../../../utilities';

const cx = classNames.bind(styles);

function Videos({ videos, author, avatar }) {
  const { contents, cursorNext } = videos;
  console.log(videos);
  return (
    <div className={cx('wrapper')}>
      {contents.map(({ type, video }) => {
        if (type === 'video')
          return (
            <VideoItem
              id={video.videoId}
              title={video.title}
              thumbnailUrl={video.thumbnails[3].url}
              author={author}
              avatar={avatar}
              views={shortenNumber(video.stats.views)}
              publishTime={video.publishedTimeText}
            />
          );
      })}
    </div>
  );
}

export default Videos;
