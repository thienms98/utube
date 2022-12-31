/* eslint-disable no-loop-func */
import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import Videos from './components/Videos';
import Playlists from './components/Playlists';
import Community from './components/Community';
import Channels from './components/Channels';
import { details, videos, community } from './data';

import classNames from 'classnames/bind';
import styles from './Channel.module.scss';

const cx = classNames.bind(styles);

function Channel({}) {
  const [tab, setTab] = useState('videos');
  const tabs = [
    // {title: 'Home', element: <Home /> },
    { title: 'Videos', element: <Videos videos={videos} author={details.title} avatar={details.avatar[2]} /> },
    { title: 'Playlists', element: <Playlists /> },
    { title: 'Community', element: <Community community={community} /> },
    { title: 'Channels', element: <Channels /> },
  ];
  const banner = details.banner.desktop[5];

  let { channelId } = useParams();
  const wrapperRef = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const offsetWidth = wrapperRef.current.offsetWidth;
  //   let bannerUrl = '';
  //   for (const banner in details.banner) {
  //     if (bannerUrl !== '') break;
  //     for (const item of details.banner[banner]) {
  //       if (item.width > offsetWidth) {
  //         bannerUrl = item.url;
  //         setBanner(item);
  //         break;
  //       }
  //     }
  //   }
  // }, []);

  console.log(details);

  return (
    <div className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('banner')}>
        <div className={cx('image')}>{banner ? <img src={banner.url} alt="" /> : null}</div>
        <div className={cx('links')}>
          {details.links.map((link, index) => {
            return (
              <a
                className={cx('link')}
                key={link.title}
                href={link.targetUrl}
                target={'_blank'}
                rel="noreferrer"
                title={link.title}
              >
                <img src={link.icon} alt={link.title} />
                {index === 0 && link.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('avatar')}>
          <img src={details.avatar[2].url} alt="" />
        </div>
        <div className={cx('text')}>
          <div className={cx('title')}>{details.title}</div>
          <div className={cx('username')}>{details.username}</div>
          <div className={cx('subcribers')}>{details.stats.subscribersText}</div>
        </div>
      </div>
      <div className={cx('tabs')}>
        {tabs.map((tabItem, index) => {
          return (
            <div
              className={cx('tab', { active: tab === tabItem.title.toLowerCase() })}
              key={index}
              onClick={() => {
                navigate(`/channel/${channelId}/${tabItem.title.toLowerCase()}`);
                setTab(tabItem.title.toLowerCase());
              }}
            >
              {tabItem.title}
            </div>
          );
        })}
        <div
          className={cx('tab-cursor')}
          style={{ '--index': tabs.findIndex((item) => item.title.toLowerCase() === tab) }}
        ></div>
      </div>

      <div className={cx('content')}>
        <Routes>
          <Route index element={tabs[0].element}></Route>
          {tabs.map((tabItem) => {
            return <Route key={tabItem.title} path={`/${tabItem.title.toLowerCase()}`} element={tabItem.element} />;
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Channel;
