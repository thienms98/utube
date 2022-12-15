import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Shortcut.module.scss';
import { DownArrow } from '../../assets/icon';

const cx = classNames.bind(styles);

function Shortcut({ shortcuts }) {
  const [position, setPosition] = useState(true);
  //true: start, false: end
  const [active, setActive] = useState('All');
  return (
    <div className={cx('wrapper')}>
      <div className={cx('shortcuts', { start: position }, { end: !position })}>
        {['All', ...shortcuts].map((shortcut) => {
          return (
            <div
              className={cx('shortcut', { active: shortcut === active })}
              key={shortcut}
              onClick={() => {
                setActive(shortcut);
              }}
            >
              {shortcut}
            </div>
          );
        })}
      </div>
      <div
        className={cx('button', { start: !position }, { end: position })}
        onClick={() => {
          setPosition((pos) => !pos);
        }}
      >
        <div className={cx('icon')}>
          <DownArrow />
        </div>
      </div>
    </div>
  );
}

export default Shortcut;
