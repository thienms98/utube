import React from 'react';

import PlaylistList from '../../../components/PlaylistList';
import { PersonalPlaylists } from '../../../utilities/personalPlaylists';
import { shortenNumber } from '../../../utilities';

import classNames from 'classnames/bind';
import styles from './SearchItemOption.module.scss';
const cx = classNames.bind(styles);

export default function SearchItemOption({ content, index, chosen, optionHandler }) {
  const [saveList, setSaveList] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = (e) => {
      const classList = Object.keys(styles).map((key) => styles[key]);
      if (!classList.includes(e.target.classList.value)) optionHandler(null);
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('icon')}
        onClick={() => {
          const value = chosen ? null : index;
          optionHandler(value);
        }}
      ></div>
      <div className={cx('dropdown', chosen ? 'shown' : 'hidden')}>
        <div
          className={cx('dropdown-item')}
          onClick={() => {
            PersonalPlaylists.updatePlaylist('add', 'WL', {
              videoId: content.video.videoId,
              title: content.video.title,
              author: content.video.author.title,
              thumbnails: content.video.thumbnails.at(-1).url,
              views: shortenNumber(content.video.stats.views),
              publishedTimeText: content.video.publishedTimeText,
            });
            const value = chosen ? null : index;
            optionHandler(value);
          }}
        >
          Watch later
        </div>
        <div
          className={cx('dropdown-item')}
          onClick={() => {
            setSaveList(true);
          }}
        >
          Save
        </div>
      </div>

      {saveList && (
        <PlaylistList
          videoDetail={content.video}
          unmount={() => {
            setSaveList(false);
          }}
        />
      )}
    </div>
  );
}
