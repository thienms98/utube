import axios from 'axios';
import { useEffect, useRef, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DataContext } from '../..';
import { options as opt } from '../../../../utilities/apiOpts';
import { secToHMS, makeTwoDigits } from '../../../../utilities';
import { AddToPlaylist, Loop, Shuffle } from '../../../../assets/icon';
import { PersonalPlaylists } from '../../../../utilities/personalPlaylists';

import classNames from 'classnames/bind';
import styles from './PlaylistVideos.module.scss';
const cx = classNames.bind(styles);

function PlaylistVideos({ playlistVideos, updateData, watchOptions, changeOptions }) {
  const { playlistId, videoId } = useParams();
  const videosContainerRef = useRef(null);
  const data = useContext(DataContext);

  useEffect(() => {
    if (!playlistVideos) {
      const options = {
        ...opt,
        url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
        params: { id: playlistId, hl: 'en', gl: 'US' },
      };

      axios
        .request(options)
        .then((response) => {
          options.url = 'https://youtube138.p.rapidapi.com/playlist/details/';
          const playlist = response.data;

          axios
            .request(options)
            .then((response) => {
              updateData('playlist', { ...playlist, ...response.data });
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  // scroll to playing video
  useEffect(() => {
    if (playlistVideos) {
      let index = 0;
      const itemHeight = videosContainerRef.current.scrollHeight / playlistVideos.contents.length;
      index = playlistVideos.contents.findIndex((video) => video.video.videoId === videoId);
      videosContainerRef.current.scrollTop = index * itemHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const savePlaylist = () => {
    const { playlistId, title } = playlistVideos;
    PersonalPlaylists.createPlaylist(playlistId, title, 'youtube');
    alert('done');
  };

  return (
    playlistVideos && (
      <div className={cx('wrapper')}>
        <div className={cx('title')}>
          <Link to={`/playlist/${playlistVideos.playlistId}`}>{playlistVideos.title}</Link>
        </div>
        <div className={cx('author')}>
          {playlistVideos.author.title}
          <span className={cx('order')}>
            {data.playlist.contents.findIndex((video) => video.video.videoId === videoId) + 1}/
            {data.playlist.contents.length}
          </span>
        </div>
        <div className={cx('options')}>
          <div className={cx('btn', { active: watchOptions.loop })} onClick={() => changeOptions('loop')} title="loop">
            <Loop />
          </div>
          <div
            className={cx('btn', { active: watchOptions.shuffle })}
            onClick={() => changeOptions('shuffle')}
            title="shuffle"
          >
            <Shuffle />
          </div>
          <div title="Save playlist" onClick={savePlaylist}>
            <AddToPlaylist />
          </div>
        </div>
        <div className={cx('items') + ' scroll'} ref={videosContainerRef}>
          {playlistVideos.contents.map((video, index) => {
            const { hour, min, sec } = secToHMS(video.video.lengthSeconds);
            return (
              <Link
                to={`/watch/playlist/${playlistId}/${video.video.videoId}`}
                className={cx('item', { active: videoId === video.video.videoId })}
                onClick={() => {
                  document.title = video.video.title;
                }}
                key={video.index}
              >
                <div className={cx('thumbnail')}>
                  <img src={video.video.thumbnails[video.video.thumbnails.length - 1].url} alt="" />
                  <div className={cx('total-time')}>
                    {hour !== 0
                      ? `${hour}:${makeTwoDigits(min)}:${makeTwoDigits(sec)}`
                      : `${min}:${makeTwoDigits(sec)}`}
                  </div>
                </div>
                <div className={cx('text')}>
                  <div className={cx('title')} title={video.video.title}>
                    {video.video.title}
                  </div>
                  <div className={cx('author')}>{video.video.author.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
}

PlaylistVideos.propTypes = {
  playlistVideos: PropTypes.object,
  indexChangeHandler: PropTypes.func,
  updateData: PropTypes.func,
};

export default PlaylistVideos;
