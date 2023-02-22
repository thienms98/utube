import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import VideoItem from '../../components/VideoItem';
import PlaylistItem from '../../components/PlaylistItem';
import { shortenNumber } from '../../utilities';
import { filterGroups } from './config';
import { example } from './example';

import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
const cx = classNames.bind(styles);

function SearchResult() {
  const [result, setResult] = useState(<Loading />);
  const [filterChoices, setFilterChoices] = useState(() => {
    return filterGroups.map((group) => {
      return { title: group.title, filter: null };
    });
  });

  console.table(filterChoices);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setResult(example.contents);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  const checkRenderItem = (content, index) => {
    switch (content.type) {
      case 'video':
        return (
          <VideoItem
            key={index}
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

  const fetWithCursor = (cursor) => {
    console.log('fetch with cursor: ', cursor);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter-groups')}>
        {filterChoices &&
          filterGroups.map(({ filters, title }) => {
            return (
              <div className={cx('filter-group')} key={title}>
                <div className={cx('title')}>{title}</div>
                <ul>
                  {filters.map((filter, index) => {
                    return (
                      <li
                        className={cx({ selected: filterChoices[index]?.filter === filter.label })}
                        key={filter.label}
                        onClick={() => {
                          setFilterChoices((prev) => {
                            const next = [...prev];
                            const foundIndex = next.findIndex((item) => item.title === title);
                            if (next[foundIndex].filter !== filter.label) next[foundIndex].filter = filter.label;
                            else next[foundIndex].filter = null;
                            return next;
                          });
                        }}
                      >
                        {filter.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
      <div className={cx('search-params')}>
        <div className={cx('did-you-mean')}></div>
        <div className={cx('original-search')}></div>
      </div>
      <div className={cx('result-items')}>
        {Array.isArray(result)
          ? result.map((content, index) => {
              return checkRenderItem(content, index);
            })
          : result}
      </div>
    </div>
  );
}

export default SearchResult;
