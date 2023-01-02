import { useState, useRef, useEffect } from 'react';
import Comment from '../Comment';
import Loading from '../../../../components/Loading';
import { nextVideoComments } from '../../data';

import classNames from 'classnames/bind';
import styles from './CommentsArea.module.scss';
const cx = classNames.bind(styles);

function CommentsArea({ videoComments, channelAvatar }) {
  const [comments, setComments] = useState(videoComments.comments);
  const [cursorNext, setCursorNext] = useState(videoComments.cursorNext);
  const [filters, setFilters] = useState(videoComments.filters);
  const totalCommentsCount = videoComments.totalCommentsCount;
  const commentRef = useRef();

  const [controls, setControls] = useState(false);

  useEffect(() => {
    const body = document.body;
    const height = Math.max(body.scrollHeight, body.offsetHeight);
    let timeout;
    const scrollEvent = () => {
      if (window.innerHeight + window.scrollY >= height) {
        console.log('end of comment');

        // setComments((prev) => prev.concat(nextVideoComments.comments));
        // setCursorNext(nextVideoComments.cursorNext);
        // if (nextVideoComments.filters) setFilters(nextVideoComments.filters);
      }
    };

    if (cursorNext) window.addEventListener('scroll', scrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    else window.removeEventListener('scroll', scrollEvent);

    return () => {};
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('count')}>{`${totalCommentsCount.toLocaleString()} Comments`}</div>
        <div className={cx('sort-btn')}>
          <button>
            <div className={cx('text')}>Sort by</div>
            <div className={cx('animate')}></div>
          </button>
          <div className={cx('options')}>
            {filters.map((opt) => {
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
      <div className={cx('comments-wrapper')} ref={commentRef}>
        {comments.map((comment) => {
          return <Comment channelAvatar={channelAvatar} {...comment} key={comment.commentId} />;
        })}
      </div>
    </div>
  );
}

export default CommentsArea;
