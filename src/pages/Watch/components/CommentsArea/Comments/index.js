import axios from 'axios';
import { useContext, useEffect, Fragment } from 'react';
import Comment from '../Comment';
import { options as opt } from '../../../../../utilities/apiOpts';
import { DataContext } from '../../..';

import classNames from 'classnames/bind';
import styles from './Comments.module.scss';
const cx = classNames.bind(styles);

function Comments({ id, comments, updateData, type }) {
  const channelAvatar = '';
  const data = useContext(DataContext);
  useEffect(() => {
    const options = {
      ...opt,
      url: 'https://youtube138.p.rapidapi.com/video/comments/',
      params: { id: id, hl: 'en', gl: 'US' },
    };
    if (type === 'comment')
      axios
        .request(options)
        .then((response) => {
          updateData('comments', response.data);
        })
        .catch((error) => {
          console.error(error);
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchComment = (id, cursor) => {
    const options = {
      ...opt,
      url: 'https://youtube138.p.rapidapi.com/video/comments/',
      params: { cursor: comments.cursorNext, hl: 'en', gl: 'US' },
    };

    if (comments.cursorNext)
      axios
        .request(options)
        .then(function (response) {
          const newComments = [...data.comments.comments, ...response.data.comments];
          const newCursor = response.data.cursorNext;
          const pushData = { ...data.comments, comments: newComments, cursorNext: newCursor };
          updateData('comments', pushData);
        })
        .catch(function (error) {
          console.error(error);
        });
  };

  return (
    <>
      {comments?.comments
        ? comments.comments.map((comment) => {
            return (
              <Fragment key={comment.commentId}>
                <Comment channelAvatar={channelAvatar} data={data} comment={comment} updateData={updateData} />
              </Fragment>
            );
          })
        : 'loading...'}
      {comments?.cursorNext ? (
        <div className={cx('expand')} onClick={fetchComment}>
          Show more replies
        </div>
      ) : null}
    </>
  );
}

export default Comments;
