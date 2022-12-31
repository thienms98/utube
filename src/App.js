import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Redirect } from 'react-router-dom';

import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';

import HomePage from './pages/HomePage';
import Watch from './pages/Watch';
import Channel from './pages/Channel';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location !== '/') {
      setSidebarVisible(false);
    }
  }, [location]);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className={cx('app')}>
      {sidebarVisible && (
        <div className={cx('sidebar')}>
          <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
        </div>
      )}
      <div className={cx('header')}>
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/watch/playlist/:playlistId" element={<Watch type={'redirect'} />} />
          <Route path="/watch/playlist/:playlistId/:index" element={<Watch type={'playlist'} />} />
          <Route path="/watch/video/:videoId" element={<Watch type={'video'} />} />
          <Route path="/channel/:channelId/*" element={<Channel />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
