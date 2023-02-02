import Comment from '../Comment';

import classNames from 'classnames/bind';
import styles from './CommentsWrapper.module.scss';
const cx = classNames.bind(styles);

function CommentsWrapper({ comments, channelAvatar, cursorNext }) {
  return (
    <>
      {comments.map((comment) => {
        return <Comment channelAvatar={channelAvatar} {...comment} key={comment.commentId} />;
      })}
      {cursorNext ? <div className={cx('expand')}>Show more replies</div> : null}
    </>
  );
}

export default CommentsWrapper;
