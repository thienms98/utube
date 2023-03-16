import { useEffect, useState, createContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';

import HomePage from './pages/HomePage';
import Watch from './pages/Watch';
import Channel from './pages/Channel';
import SearchResult from './pages/SeachResult';
import Playlist from './pages/Playlist';
import NotFound from './pages/NotFound';
import PlaylistList from './components/PlaylistList';
import Library from './pages/Library';

import { PersonalPlaylists } from './utilities/personalPlaylists';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);
export const UserContext = createContext(null);

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [user, setUser] = useState({
    name: '',
    avatar: `https://picsum.photos/id/65/200`,
  });
  // init  library
  useEffect(() => {
    PersonalPlaylists.init();
  }, []);

  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname.includes('watch')) {
  //     setSidebarVisible(false);
  //   } else setSidebarVisible(true);
  // }, [location]);

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
            <Route path="/watch/video/:videoId" element={<Watch type={'video'} />} />
            <Route path="/watch/playlist/:playlistId">
              <Route index element={<Watch type={'playlist'} />}></Route>
              <Route path=":videoId" element={<Watch type={'playlist'} />}></Route>
            </Route>
            <Route path="/channel/:channelId/*" element={<Channel />}></Route>
            <Route path="/playlist/:playlistId" element={<Playlist />}></Route>
            <Route path="/library" element={<Library />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  );
}
