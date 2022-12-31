/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import {
  videoDetails as vidDetails,
  relateVideos as relateVids,
  videoComments as vidCmts,
  playlistItems as pllItems,
} from './data';
import RelateContent from './components/RelateContent';
import VideoDetails from './components/VideoDetails';
import CommentsArea from './components/CommentsArea';
import PlaylistVideos from './components/PlaylistVideos';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
const cx = classNames.bind(styles);

function Watch({ type }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e74585e41msh58868883a876fc1p1bb393jsne284ab99e61e',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };

  useEffect(() => {
    if (type === 'redirect') {
      console.log('redirecting...');
      navigate(`${location.pathname}/1`);
    }
  }, [type]);

  const [videoDetails, setVideoDetails] = useState(vidDetails);
  const [relateVideos, setRelateVideos] = useState(relateVids);
  const [videoComments, setVideoComments] = useState(vidCmts);
  const [playlistItems, setPlaylistItems] = useState(pllItems);
  const [playlistIndex, setPlaylistIndex] = useState(params.index - 1);

  const [videoId, setVideoId] = useState('');

  // make iframe ratio to 16:9
  const videoContainer = useRef(null);
  const iFrame = useRef(null);
  useEffect(() => {
    iFrame.current.width = videoContainer.current.offsetWidth;
    iFrame.current.height = 0.5625 * iFrame.current.width;
  }, [params]);

  // useEffect(() => {
  //   // get video details by videoId from url
  //   fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`, options)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setVideoDetails(result);
  //       document.title = result.title;
  //     })
  //     .catch((err) => console.log('get nothing from the id'));

  //   // get relate videos for videoId from url
  //   fetch(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}=en&gl=US`, options)
  //     .then((res) => res.json())
  //     .then((result) => setRelateVideos(result));

  //   //get video comments for videoId from url
  //   // fetch('fetch with id')
  //   //   .then((res) => res.json())
  //   //   .then((result) => setVideoComments(result));
  // }, [videoId]);

  //get playlist items for videoId from url
  // useEffect(() => {
  //   fetch(`https://youtube138.p.rapidapi.com/playlist/videos/?id=${params.playlistId}&hl=en&gl=US`, options)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log('get playlist');
  //       console.log(result);
  //       setPlaylistItems(result);
  //     });
  // }, [params.playlistId]);

  // set video id for first render
  useEffect(() => {
    if (type === 'video') setVideoId(params.videoId);
    if (type === 'playlist') setVideoId(playlistItems.contents[playlistIndex].video.videoId);
  }, []);

  // set video id for each time change the index of playlist
  useEffect(() => {
    if (!!playlistItems.contents[playlistIndex]) setVideoId(playlistItems.contents[playlistIndex].video.videoId);
  }, [playlistIndex]);

  const indexChangeHandle = (idx) => {
    console.log('changing playlist index: ', idx);
    setPlaylistIndex(idx);
  };

  console.log('realates', relateVideos);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')} ref={videoContainer}>
        <iframe
          width="1920"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay={1}
          ref={iFrame}
        ></iframe>

        <div className={cx('video-details')}>
          <VideoDetails videoDetails={videoDetails} />
        </div>

        <div className={cx('comments')}>
          <CommentsArea videoComments={videoComments} channelAvatar={videoDetails.author?.avatar[0].url} />
        </div>
      </div>

      <div className={cx('side-content')}>
        {type === 'playlist' ? (
          <div className={cx('playlist-items')}>
            <PlaylistVideos
              playlistId={params.playlistId}
              playlistItems={playlistItems}
              playlistIndex={playlistIndex}
              indexChangeHandle={indexChangeHandle}
            />
          </div>
        ) : null}

        <div className={cx('relate-videos')}>
          <RelateContent contents={relateVideos.contents} />
        </div>
      </div>
    </div>
  );
}

export default Watch;
