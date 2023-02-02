import VideoItem from '../../../../components/VideoItem';
import PlaylistItem from '../../../../components/PlaylistItem';
import classNames from 'classnames/bind';
import styles from './RelateContent.module.scss';
import { shortenNumber } from '../../../../utilities';

const cx = classNames.bind(styles);

function RelateContent({ contents, setNewVideoId }) {
  return (
    <div className={cx('wrapper')}>
      {!!contents
        ? contents.map((content, index) => {
            return (
              <div className={cx('video')} key={index}>
                {content.type === 'video' ? (
                  <VideoItem
                    id={content.video.videoId}
                    title={content.video.title}
                    thumbnailUrl={content.video.thumbnails?.at(0).url}
                    author={content.video.author?.title}
                    avatar={content.video.author?.avatar?.at(0).url}
                    views={`${shortenNumber(content.video.stats?.views)} views`}
                    publishTime={content.video.publishedTimeText}
                    hor={true}
                  />
                ) : null}
                {content.type === 'playlist' ? (
                  <PlaylistItem
                    id={content.playlist.playlistId}
                    title={content.playlist.title}
                    thumbnailUrl={content.playlist.thumbnails?.at(0).url}
                    author={content.playlist.author?.title}
                    hor={true}
                  />
                ) : null}
              </div>
            );
          })
        : 'loading...'}
    </div>
  );
}

export default RelateContent;
