import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from '../../components/PlaylistItem';
import { PersonalPlaylists } from '../../utilities/personalPlaylists';

import classNames from 'classnames/bind';
import styles from './Library.module.scss';
const cx = classNames.bind(styles);

export default function Library() {
  const [createForm, setCreateForm] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState(PersonalPlaylists.get());
  const btnRef = useRef();

  return (
    <>
      <button ref={btnRef} onClick={() => setCreateForm(true)}>
        {createForm ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const playlists = PersonalPlaylists.createPlaylist(playlistName);
              setPlaylists(playlists);
              setPlaylistName('');
              setCreateForm(false);
            }}
          >
            <input
              type="text"
              value={playlistName}
              autoFocus={true}
              tabIndex={1}
              onChange={(e) => {
                setPlaylistName(e.target.value);
              }}
            />
            <input type="submit" value="create" />
          </form>
        ) : (
          'Create new playlist'
        )}
      </button>
      <div className={cx('playlists') + ' scroll'}>
        {playlists.map((playlist) => {
          if (playlist.title === 'Watch later') return <></>;
          return (
            <div className={cx('playlist')}>
              <Link to={`/playlist/${playlist.playlistId}`}>{playlist.title}</Link>
              <div className={cx('btn', 'edit')}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div
                className={cx('btn', 'del')}
                onClick={() => {
                  PersonalPlaylists.removePlaylist({ title: playlist.title });
                  setPlaylists(PersonalPlaylists.get());
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
