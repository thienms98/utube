import { useEffect, useState, createContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';

import HomePage from './pages/HomePage';
import Watch from './pages/Watch';
import Watching from './pages/Watching';
import Channel from './pages/Channel';
import SearchResult from './pages/SeachResult';
import NotFound from './pages/NotFound';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

const UserContext = createContext(null);
function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();
  const user = {
    name: 'my name',
    avatar: `https://picsum.photos/id/${Math.random() * 1000}/200`,
  };

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
      <UserContext.Provider value={user}>
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
            <Route path="/search/:query" element={<SearchResult />}></Route>
            <Route path="/watching/video/:videoId" element={<Watching type={'video'} />} />
            <Route path="/watching/playlist/:playlistId">
              <Route index element={<Watching type={'playlist'} />}></Route>
              <Route path=":videoId" element={<Watching type={'playlist'} />}></Route>
            </Route>
            <Route path="/watch/playlist/:playlistId" element={<Watch type={'redirect'} />} />
            <Route path="/watch/playlist/:playlistId/:index" element={<Watch type={'playlist'} />} />
            <Route path="/watch/video/:videoId" element={<Watch type={'video'} />} />
            <Route path="/channel/:channelId/*" element={<Channel />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export { UserContext };
export default App;
