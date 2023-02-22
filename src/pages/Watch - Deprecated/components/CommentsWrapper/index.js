import { useState } from 'react';
import Comment from '../Comment';
import { options } from '../../../../utilities/apiOpts';

import classNames from 'classnames/bind';
import styles from './CommentsWrapper.module.scss';
const cx = classNames.bind(styles);

function CommentsWrapper({ id, comments, channelAvatar, cursorNext }) {
  const [commentList, setCommentList] = useState(comments);
  const [crsNext, setCrsNext] = useState(cursorNext);

  const fetchComment = () => {
    fetch(`https://youtube138.p.rapidapi.com/video/comments/?id=${id}&cursor=${crsNext}&hl=en&gl=US`, options)
      .then((response) => response.json())
      .then((response) => {
        setCommentList((prev) => [...prev, ...response.comments]);
        setCrsNext(response.setCrsNext);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {commentList.map((comment) => {
        return <Comment channelAvatar={channelAvatar} {...comment} key={comment.commentId} />;
      })}
      {crsNext ? (
        <div className={cx('expand')} onClick={fetchComment}>
          Show more replies
        </div>
      ) : null}
    </>
  );
}

export default CommentsWrapper;
