import { useState } from 'react';

import VideoItem from '../../../../components/VideoItem';
import PlaylistItem from '../../../../components/PlaylistItem';
import classNames from 'classnames/bind';
import styles from './RelateContent.module.scss';
import { shortenNumber } from '../../../../utilities';
import { options } from '../../../../utilities/apiOpts';

const cx = classNames.bind(styles);

function RelateContent({ relateVideos, videoId }) {
  const [contents, setContents] = useState(relateVideos.contents);
  const [cursorNext, setCursorNext] = useState(relateVideos.cursorNext);

  const loadMoreContents = () => {
    fetch(
      `https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}&cursor=${cursorNext}&hl=en&gl=US`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        setContents((prev) => [...prev, ...response.contents]);
        setCursorNext(response.cursorNext);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={cx('wrapper')}>
      {contents
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
      {cursorNext && (
        <div className={cx('expand-btn')} onClick={loadMoreContents}>
          Load more
        </div>
      )}
    </div>
  );
}

export default RelateContent;
