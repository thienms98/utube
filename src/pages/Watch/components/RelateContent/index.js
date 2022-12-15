import VideoItem from '../../../../components/VideoItem';
import PlaylistItem from '../../../../components/PlaylistItem';
import classNames from 'classnames/bind';
import styles from './RelateContent.module.scss';
import { shortenNumber } from '../../../../utilities';

const cx = classNames.bind(styles);

function RelateContent({ contents }) {
  // eslint-disable-next-line array-callback-return
  const relateContents = contents.map(({ type, ...content }, i) => {
    if (type === 'video') {
      const video = content.video;
      return {
        type: type,
        id: video.videoId,
        title: video.title,
        thumbnailUrl: video.thumbnails[0].url,
        author: video.author.title,
        avatar: video.author.avatar[0],
        views: shortenNumber(video.stats.views),
        date: video.publishedTimeText,
      };
    }
    if (type === 'playlist') {
      const playlist = content.playlist;

      return {
        type: type,
        id: playlist.playlistId,
        title: playlist.title,
        thumbnailUrl: playlist.thumbnails[0].url,
        author: playlist.author.title,
      };
    }
  });

  return (
    <div className={cx('wrapper')}>
      {relateContents.map(({ type, ...componentProps }) => {
        return (
          <div className={cx('video')} key={componentProps.videoId}>
            {type === 'playlist' ? (
              <PlaylistItem type={type} {...componentProps} />
            ) : (
              <VideoItem type={type} {...componentProps} horizontal={true} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RelateContent;
