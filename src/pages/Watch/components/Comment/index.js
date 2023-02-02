import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Liked, DownArrow } from '../../../../assets/icon';
import { shortenNumber } from '../../../../utilities/index';
import { videoComments } from '../../data';
import CommentsWrapper from '../CommentsWrapper';

import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);

function Comment({
  channelAvatar,
  author,
  commentId,
  content,
  creatorHeart,
  cursorReplies,
  pinned,
  publishTimeText,
  stats,
}) {
  const [repliesVisible, setRepliesVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={cx('comment')} key={commentId}>
      <div
        className={cx('avatar')}
        onClick={() => {
          navigate(`/channel/${author.channelId}`);
        }}
      >
        <img src={author.avatar[0].url} alt="" />
      </div>
      <div className={cx('main')}>
        {pinned.status && <div className={cx('pinned')}>{pinned.text}</div>}
        <div className={cx('author', { owner: author.isChannelOwner })}>
          <span
            onClick={() => {
              navigate(`/channel/${author.channelId}`);
            }}
          >
            {author.title}
          </span>
          <span className={cx('date')}>{publishTimeText}</span>
        </div>
        <div className={cx('content')}>{content}</div>
        <div className={cx('interact')}>
          <div className={cx('like')}>
            <Liked /> <span className={cx('text')}>{shortenNumber(stats.votes)}</span>
          </div>
          <div className={cx('dislike')}>
            <Liked />
          </div>
          {creatorHeart && (
            <div className={cx('ownerHeart')}>
              <img src={channelAvatar} alt="" />
            </div>
          )}
          <div className={cx('rep')}>Reply</div>
        </div>

        {stats.replies > 0 && (
          <div className={cx('replies')}>
            <div
              className={cx('header')}
              onClick={() => {
                setRepliesVisible((prev) => !prev);
              }}
            >
              <div className={cx('icon', { revert: repliesVisible })}>
                <DownArrow />
              </div>
              {`${stats.replies} replies`}
            </div>
            {repliesVisible ? (
              <div className={cx('body')}>
                <CommentsWrapper
                  comments={videoComments.comments}
                  channelAvatar={channelAvatar}
                  cursorNext={videoComments.cursorNext}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
