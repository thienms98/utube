import { useState, useEffect } from 'react';
import { result as dataResult } from './data';
import Loading from '../../components/Loading';
import VideoItem from '../../components/VideoItem';
import PlaylistItem from '../../components/PlaylistItem';
import { shortenNumber } from '../../utilities';

import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
const cx = classNames.bind(styles);

function SearchResult() {
  const [result, setResult] = useState(<Loading />);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setResult(dataResult.contents);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  const checkRenderItem = (content) => {
    switch (content.type) {
      case 'video':
        return (
          <VideoItem
            id={content.video.videoId}
            title={content.video.title}
            thumbnailUrl={content.video.thumbnails?.at(-1).url}
            author={content.video.author?.avatar?.at(-1).url}
            views={`${shortenNumber(content.video.stats?.views)} views`}
            date={content.video.publishedTimeText}
          />
        );
      case 'playlist':
        return 'playlist';
      // <PlaylistItem
      //   id={item.videoId}
      //   title={item.title}
      //   thumbnailUrl={item.thumbnails.at(-1).url}
      //   author={item.author.avatar.at(-1).url}
      // />;
      case 'channel':
        return 'channel';
      default:
        break;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter')}></div>
      <div className={cx('search-params')}>
        <div className={cx('did-you-mean')}></div>
        <div className={cx('original-search')}></div>
      </div>
      <div className={cx('result-items')}>
        {Array.isArray(result)
          ? result.map((content) => {
              return checkRenderItem(content);
            })
          : result}
      </div>
    </div>
  );
}

export default SearchResult;
