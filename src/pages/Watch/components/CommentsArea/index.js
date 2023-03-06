import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import Loading from '../../../../components/Loading';

import classNames from 'classnames/bind';
import styles from './CommentsArea.module.scss';
const cx = classNames.bind(styles);

function CommentsArea({ comments, updateData, type }) {
  const { videoId } = useParams();
  const [controls, setControls] = useState(false);

  return (
    <div className={cx('wrapper') + ' scroll'}>
      <div className={cx('header')}>
        <div className={cx('count')}>{`${comments?.totalCommentsCount?.toLocaleString() || 0} Comments`}</div>
        <div className={cx('sort-btn')}>
          <button>
            <div className={cx('text')}>Sort by</div>
            <div className={cx('animate')}></div>
          </button>
          <div className={cx('options')}>
            {comments?.filters?.map((opt) => {
              return (
                <div className={cx('option', { selected: opt.selected })} key={opt.title}>
                  {opt.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cx('comment-input')}>
        <div className={cx('image')}>
          <img src="https://picsum.photos/40" alt="" />
        </div>
        <div className={cx('input')}>
          <input type="text" placeholder="Add a comment ..." onClick={() => setControls(true)} />
          <div className={cx('underline')}></div>
          {controls ? (
            <div className={cx('controls')}>
              <div className={cx('emoji')}>Emoji</div>
              <div className={cx('buttons')}>
                <div className={cx('button')} onClick={() => setControls(false)}>
                  Cancel
                </div>
                <div className={cx('button')}>Comment</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={cx('comments-wrapper')}>
        <Comments
          updateData={updateData}
          type={'comment'}
          comments={comments}
          // channelAvatar={videoDetails.author.avatar.at(-1).url}
          id={videoId}
        />
      </div>
    </div>
  );
}

export default CommentsArea;
