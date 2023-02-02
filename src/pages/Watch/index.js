import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import {
  videoDetails as vidDetails,
  relateVideos as relateVids,
  videoComments as vidCmts,
  playlistItems as pllItems,
} from './data';
import useFetch from '../../hooks/useFetch';
import RelateContent from './components/RelateContent';
import VideoDetails from './components/VideoDetails';
import CommentsArea from './components/CommentsArea';
import PlaylistVideos from './components/PlaylistVideos';
import YTPlayer from './components/YTPlayer';
import Loading from '../../components/Loading';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
const cx = classNames.bind(styles);

function Watch({ type }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'redirect') {
      console.log('redirecting...');
      navigate(`${location.pathname}/1`);
    }
  }, [type]);

  const [test, setTest] = useState();
  const [videoDetails, setVideoDetails] = useState(vidDetails);
  const [relateVideos, setRelateVideos] = useState(relateVids);
  const [videoComments, setVideoComments] = useState(vidCmts);
  const [playlistItems, setPlaylistItems] = useState(pllItems);
  const [playlistIndex, setPlaylistIndex] = useState(params.index - 1);
  const [tabActive, setTabActive] = useState(0);

  const tabs = type === 'playlist' ? ['playlist', 'relate videos'] : ['relate videos'];

  const [videoId, setVideoId] = useState('');

  console.log(test);
  useEffect(() => {
    console.log('fetching');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFetch('https://jsonplaceholder.typicode.com/todos/1', setTest);
    // get video details by videoId from url
    // fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setVideoDetails(result);
    //     document.title = result.title;
    //   })
    //   .catch((err) => console.log('get nothing from the id'));
    // get relate videos for videoId from url
    // fetch(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}=en&gl=US`, options)
    //   .then((res) => res.json())
    //   .then((result) => setRelateVideos(result));
    //get video comments for videoId from url
    // fetch('fetch with id')
    //   .then((res) => res.json())
    //   .then((result) => setVideoComments(result));
    document.title = videoDetails.title;
  }, [videoId]);

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
    if (!!playlistItems.contents[playlistIndex]) {
      navigate(`/watch/playlist/${params.playlistId}/${playlistIndex + 1}`);
      setVideoId(playlistItems.contents[playlistIndex].video.videoId);
    }
  }, [playlistIndex]);

  const indexChangeHandle = (idx) => {
    if (idx === undefined) {
      setPlaylistIndex((prev) => prev + 1);
    } else {
      setPlaylistIndex(idx);
    }
  };

  // const nextVideo = () => {
  //   if (type === 'video') {
  //     setVideoId(() => {
  //       if (!!relateVideos.contents[0].type === 'video') return relateVideos.contents[0].video.videoId;
  //       if (!!relateVideos.contents[0].type === 'playlist') return relateVideos.contents[0].playlist.playlistId;
  //     });
  //   }
  // };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <YTPlayer videoId={videoId} title={videoDetails.title} indexChangeHandle={indexChangeHandle} />

        <div className={cx('video-details')}>
          <VideoDetails videoDetails={videoDetails} />
        </div>

        <div className={cx('comments')}>
          <CommentsArea videoComments={videoComments} channelAvatar={videoDetails.author?.avatar[0].url} />
        </div>
      </div>

      <div className={cx('side-content')}>
        {/* <div className={cx('tabs')}>
          {tabs.map((tab, index) => {
            return (
              <div
                className={cx('tab', { active: tab === tabs[tabActive] })}
                key={tab}
                onClick={() => setTabActive(index)}
              >
                {tab} {tab === tabs[tabActive] ? 'active' : null}
              </div>
            );
          })}
        </div> */}
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
