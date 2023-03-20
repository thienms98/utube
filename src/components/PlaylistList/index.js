import { useState, useEffect } from 'react';
import { PersonalPlaylists } from '../../utilities/personalPlaylists';

import classNames from 'classnames/bind';
import styles from './PlaylistList.module.scss';
const cx = classNames.bind(styles);

export default function PlaylistList({ videoDetail, unmount }) {
  console.log(videoDetail);
  const { videoId } = videoDetail;
  const [playlists, setPlaylists] = useState(() => {
    const playlists = PersonalPlaylists.get();
    return playlists.map((playlist) => {
      return {
        title: playlist.title,
        checked: playlist.contents.includes(videoId),
      };
    });
  });
  const [create, setCreate] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  useEffect(() => {}, []);

  const changeSaveStatus = (index) => {
    setPlaylists((prev) => {
      const newPlaylists = [...prev];
      newPlaylists.splice(index, 1, { ...newPlaylists[index], checked: !newPlaylists[index].checked });

      // localstorage update
      const action = newPlaylists[index].checked ? 'add' : 'delete';
      PersonalPlaylists.updatePlaylists(action, { title: newPlaylists[index].title }, videoDetail);

      return newPlaylists;
    });
  };

  return (
    <>
      <div className={cx('overlay')} onClick={unmount}></div>
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <span>Save to ...</span>
          <div className={cx('btn')} onClick={unmount}>
            &times;
          </div>
        </div>
        <div className={cx('list')}>
          {playlists.map((playlist, index) => {
            return (
              <div
                className={cx('list-item')}
                key={index}
                onClick={() => {
                  changeSaveStatus(index);
                }}
              >
                <div className={cx('checkbox', { checked: playlist.checked })}></div>
                <div className={cx('label')}>{playlist.title}</div>
              </div>
            );
          })}
        </div>
        <div className={cx('new')}>
          {create ? (
            <form
              onSubmit={() => {
                PersonalPlaylists.createPlaylist(newPlaylistName);
              }}
            >
              <label htmlFor="newPlaylist">Name</label>
              <input
                type="text"
                id="newPlaylist"
                onChange={(e) => {
                  setNewPlaylistName(e.target.value);
                }}
              />
              <input type="submit" value="Create" />
            </form>
          ) : (
            <span onClick={() => setCreate(true)}>+ Create new playlist</span>
          )}
        </div>
      </div>
    </>
  );
}
