import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { PersonalPlaylists } from '../../utilities/personalPlaylists';
import { options } from '../../utilities/apiOpts';

import classNames from 'classnames/bind';
import styles from './Playlist.module.scss';
const cx = classNames.bind(styles);

export default function Playlist() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(() => {
    const { msg, playlist } = PersonalPlaylists.get(playlistId);
    if (msg === 'ok' || playlist) return playlist;
    else return null;
  });

  useEffect(() => {
    const playlist = PersonalPlaylists.get(playlistId).playlist;
    if (playlist.type === 'youtube' && !playlist.contents) {
      const opts = {
        ...options,
        url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
        params: { id: playlistId, hl: 'en', gl: 'US' },
      };

      axios
        .request(opts)
        .then((response) => {
          setPlaylist({ ...playlist, ...response.data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (playlist.type === 'self' || !playlist.type) {
      setPlaylist(playlist);
    }
  }, [playlistId]);
  console.log(playlist);

  return (
    playlist && (
      <div className={cx('wrapper')}>
        <h1 style={{ textAlign: 'center' }}>{playlist.title}</h1>
        <div className={cx('playlists')}>
          {playlist.contents?.map(({ video }) => {
            return (
              <div className={cx('playlists-item')}>
                <VideoItem
                  id={video.videoId}
                  title={video.title}
                  thumbnailUrl={video.thumbnails.at(-1).url}
                  author={video.author.title}
                  views={video.views}
                  publishTime={video.publishedTimeText}
                  hor={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
