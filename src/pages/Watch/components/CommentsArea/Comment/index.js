import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Liked, DownArrow } from '../../../../../assets/icon';
import { shortenNumber } from '../../../../../utilities/index';
import CommentsWrapper from '../Comments';
import { options as opt } from '../../../../../utilities/apiOpts';

import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);

function Comment({ channelAvatar, comment, updateData, data }) {
  const [repliesVisible, setRepliesVisible] = useState(false);
  const navigate = useNavigate();
  const { author, commentId, content, creatorHeart, cursorReplies, pinned, publishedTimeText, stats } = comment;

  const fetchReplies = () => {
    const options = {
      ...opt,
      url: 'https://youtube138.p.rapidapi.com/video/comments/',
      params: { id: commentId, cursor: cursorReplies, hl: 'en', gl: 'US' },
    };

    if (!comment.replies)
      axios
        .request(options)
        .then((response) => {
          // insert replies to comment selected
          const index = data.comments?.comments.findIndex((cmt) => cmt.commentId === commentId);
          const cmt = { ...data.comments.comments[index], replies: response.data };
          // replace comment in comment list
          const updatedComments = [...data.comments.comments];
          updatedComments.splice(index, 1, cmt);
          // update data
          updateData('comments', { ...data.comments, comments: updatedComments });
        })
        .catch((error) => {
          console.error(error);
        });
  };

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
        {pinned?.status && <div className={cx('pinned')}>{pinned?.text}</div>}
        <div className={cx('author', { owner: author.isChannelOwner })}>
          <span
            onClick={() => {
              navigate(`/channel/${author.channelId}`);
            }}
          >
            {author.title}
          </span>
          <span className={cx('date')}>{publishedTimeText}</span>
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
                if (!comment.replies) {
                  fetchReplies();
                }
              }}
            >
              <div className={cx('icon', { revert: repliesVisible })}>
                <DownArrow />
              </div>
              {`${stats.replies} replies`}
            </div>
            {repliesVisible ? (
              <div className={cx('body')}>
                {comment.replies ? (
                  <CommentsWrapper id={commentId} comments={comment.replies} data={data} type={'reply'} />
                ) : (
                  'loading'
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
