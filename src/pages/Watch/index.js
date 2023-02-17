import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { options } from '../../utilities/apiOpts';
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

  if (type === 'redirect') {
    navigate(`${location.pathname}/1`);
  }

  const [videoProps, setVideoProps] = useState({ loop: false, autoplay: true });
  const [videoDetails, setVideoDetails] = useState(null);
  const [relateVideos, setRelateVideos] = useState(null);
  const [videoComments, setVideoComments] = useState(null);
  const [playlistItems, setPlaylistItems] = useState(null);
  const [playlistIndex, setPlaylistIndex] = useState(null);
  // const [tabActive, setTabActive] = useState(0);

  const [videoId, setVideoId] = useState(null);
  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
    if (type === 'video') setVideoId(params.videoId);
    if (type === 'playlist') {
      setPlaylistId(params.playlistId);
      setPlaylistIndex(params.index - 1);
    }
  }, [params]);

  const tabs = type === 'playlist' ? ['playlist', 'relate videos'] : ['relate videos'];

  //get playlist items for videoId from url
  useEffect(() => {
    if (playlistId)
      fetch(`https://youtube138.p.rapidapi.com/playlist/videos/?id=${playlistId}&hl=en&gl=US`, options)
        .then((res) => res.json())
        .then((result) => {
          setPlaylistItems(result);
          setVideoId(result.contents[playlistIndex].video.videoId);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  // set video id for each time change the index of playlist
  useEffect(() => {
    if (playlistItems && playlistItems.contents.length > 0 && playlistIndex)
      navigate(`/watch/playlist/${playlistId}/${playlistIndex + 1}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistIndex]);

  useEffect(() => {
    if (videoId) {
      // get video details by videoId from url
      fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`, options)
        .then((res) => res.json())
        .then((result) => {
          setVideoDetails(result);
          document.title = result.title;
        });
      // get relate videos for videoId from url
      fetch(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}&hl=en&gl=US`, options)
        .then((res) => res.json())
        .then((result) => setRelateVideos(result));
      // get video comments for videoId from url
      // settimeout for limit request per second
      setTimeout(() => {
        fetch(`https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US`, options)
          .then((res) => res.json())
          .then((result) => setVideoComments(result));
      }, 1500);
      window.scrollTo(0, 0);
    }
  }, [videoId]);

  // console.log(playlistItems);

  const indexChangeHandle = (idx) => {
    if (type === 'playlist') {
      if (idx === undefined) {
        idx = playlistIndex + 1;
      } else idx += 1; // index on url start from 1 but playlist index start from 0

      navigate(`/watch/playlist/${playlistId}/${idx}`);
    }

    if (type === 'video') {
      const nextId = relateVideos.contents[0].video.videoId;
      navigate(`/watch/video/${nextId}`);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        {videoDetails ? (
          <YTPlayer
            videoId={videoId}
            title={videoDetails}
            indexChangeHandle={indexChangeHandle}
            videoProps={videoProps}
          />
        ) : (
          <Loading />
        )}

        <div className={cx('video-details')}>
          {videoDetails ? (
            <VideoDetails
              videoDetails={videoDetails}
              videoProps={videoProps}
              handleVideoProps={(properties) => {
                setVideoProps((prev) => {
                  return { ...prev, ...properties };
                });
              }}
            />
          ) : (
            'loading'
          )}
        </div>

        <div className={cx('comments')}>
          {videoDetails && videoComments ? (
            <CommentsArea
              videoId={videoId}
              videoComments={videoComments}
              channelAvatar={videoDetails.author.avatar[0].url}
            />
          ) : (
            'loading'
          )}
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
          playlistItems ? (
            <div className={cx('playlist-items')}>
              <PlaylistVideos
                playlistId={params.playlistId}
                playlistItems={playlistItems}
                playlistIndex={playlistIndex}
                indexChangeHandle={indexChangeHandle}
              />
            </div>
          ) : (
            <Loading />
          )
        ) : null}

        <div className={cx('relate-videos')}>
          {relateVideos ? <RelateContent relateVideos={relateVideos} videoId={videoId} /> : 'loading'}
        </div>
      </div>
    </div>
  );
}

export default Watch;
