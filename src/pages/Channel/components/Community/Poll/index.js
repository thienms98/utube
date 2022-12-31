import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Poll.module.scss';
const cx = classNames.bind(styles);

function Poll({ poll }) {
  const [choiceIndex, setChoiceIndex] = useState(null);
  return (
    <div className={cx('wrapper')}>
      {poll.choices.map((choice, index) => {
        return (
          <div
            className={cx('choice', { active: choiceIndex === index })}
            key={index}
            onClick={() => {
              setChoiceIndex(index);
            }}
          >
            <div className={cx('image')}>
              <img src={choice.image[choice.image.length - 1].url} alt={choice.text} />
            </div>
            <div className={cx('text')}>{choice.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Poll;
