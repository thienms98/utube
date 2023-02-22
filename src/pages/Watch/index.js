import { useState, useEffect, createContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import YTPlayer from './components/YTPlayer';
import VideoDetails from './components/VideoDetails';
import PlaylistVideos from './components/PlaylistVideos';
import RelateContent from './components/RelateContent';
import CommentsArea from './components/CommentsArea';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);
const DataContext = createContext(null);

function Watch({ type }) {
  const params = useParams();
  const { playlistId, videoId } = params;
  const navigate = useNavigate();
  const tabList = {
    playlist: {
      title: 'Playlist',
      element: (value) => {
        return <PlaylistVideos playlistVideos={value} updateData={updateData} />;
      },
    },
    videoDetails: {
      title: "Video's details",
      element: (value) => {
        return <VideoDetails videoDetails={value} updateData={updateData} />;
      },
    },
    relateContents: {
      title: 'Relate contents',
      element: (value) => {
        return <RelateContent relateContents={value} updateData={updateData} />;
      },
    },
    comments: {
      title: 'Comments',
      element: (value) => {
        return <CommentsArea videoId={videoId} comments={value} data={data} updateData={updateData} type={'comment'} />;
      },
    },
  };
  if (type !== 'playlist') delete tabList.playlist;

  const [tabIndex, setTabIndex] = useState(Object.keys(tabList)[0]);
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState(() => {
    let result = {};
    for (let key in tabList) {
      result = { ...result, [key]: null };
    }
    return result;
  });

  const updateData = (key, value) => {
    // insertion: ('comments', []) => {comments: []}
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    if (data.playlist && !videoId) navigate(`/watch/playlist/${playlistId}/${data.playlist.contents[0].video.videoId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.playlist]);

  return (
    <DataContext.Provider value={data}>
      <div className={cx('wrapper')}>
        <div className={cx('player')}>
          <YTPlayer type={type} videoId={videoId} options={{ loop: 0 }}></YTPlayer>
        </div>
        <div className={cx('sidebar', { full: sidebar })}>
          <div
            className={cx('toggler')}
            onClick={() => {
              setSidebar((sb) => !sb);
            }}
          >
            {sidebar ? <>&gt;</> : <>&lt;</>}
          </div>
          <div className={cx('tabs')}>
            {Object.keys(tabList).map((tab) => {
              return (
                <div
                  className={cx('tab-item', { active: tabIndex === tab })}
                  key={tab}
                  onClick={() => {
                    setTabIndex(tab);
                  }}
                >
                  {tabList[tab].title}
                </div>
              );
            })}
          </div>
          <div className={cx('body')}>{tabList[tabIndex]?.element(data[tabIndex])}</div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export { DataContext };
export default Watch;
