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
        return (
          <PlaylistVideos
            playlistVideos={value}
            updateData={updateData}
            watchOptions={watchOptions}
            changeOptions={changeOptions}
          />
        );
      },
    },
    videoDetails: {
      title: 'Details',
      element: (value) => {
        return <VideoDetails videoDetails={value} updateData={updateData} />;
      },
    },
    relateContents: {
      title: 'Relates',
      element: (value) => {
        return <RelateContent relateContents={value} updateData={updateData} />;
      },
    },
    comments: {
      title: 'Comments',
      element: (value) => {
        return <CommentsArea comments={value} updateData={updateData} type={'comment'} />;
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
  const [watchOptions, setWatchOptions] = useState({
    loop: false,
    shuffle: false,
  });

  const updateData = (key, value) => {
    // insertion: ('comments', []) => {comments: []}
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const changeOptions = (opt) => {
    switch (opt) {
      case 'loop':
        setWatchOptions((prev) => {
          const newOpts = { ...prev };
          newOpts.loop = !newOpts.loop;
          return newOpts;
        });
        break;
      case 'shuffle':
        setWatchOptions((prev) => {
          const newOpts = { ...prev };
          newOpts.shuffle = !newOpts.shuffle;
          return newOpts;
        });
        break;
      default:
    }
  };

  useEffect(() => {
    if (data.playlist && !videoId) navigate(`/watch/playlist/${playlistId}/${data.playlist.contents[0].video.videoId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.playlist]);

  return (
    <DataContext.Provider value={data}>
      <div className={cx('wrapper')}>
        <div className={cx('player')}>
          <YTPlayer type={type} videoId={videoId} options={{ loop: 0 }} watchOptions={watchOptions}></YTPlayer>
        </div>
        <div className={cx('sidebar', { full: sidebar })}>
          <div
            className={cx('toggler', { flip: sidebar })}
            onClick={() => {
              setSidebar((sb) => !sb);
            }}
          >
            <div className={cx('icon')}>
              <div className={cx('arrow')} style={{ '--index': 0 }}></div>
              <div className={cx('arrow')} style={{ '--index': 1 }}></div>
            </div>
          </div>
          <div className={cx('tabs')}>
            {Object.keys(tabList).map((tab) => {
              return (
                <div
                  className={cx('tab-item', { active: tabIndex === tab })}
                  key={tab}
                  title={tabList[tab].title}
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
