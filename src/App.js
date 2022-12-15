import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';

import HomePage from './pages/HomePage';
import Watch from './pages/Watch';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location !== '/') {
    }
    setSidebarVisible(false);
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
          <Route path="/watch/:type/:id" element={<Watch />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
