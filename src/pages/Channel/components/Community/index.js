import { useNavigate } from 'react-router-dom';
import { community } from '../../data';
import { Liked } from '../../../../assets/icon';
import { shortenNumber } from '../../../../utilities';
import Poll from './Poll';

import classNames from 'classnames/bind';
import styles from './Community.module.scss';
const cx = classNames.bind(styles);

function Community({ Community }) {
  const navigate = useNavigate();
  const { contents, cursorNext } = community;

  return (
    <div className={cx('wrapper')}>
      {contents.map(({ post, type }) => {
        if (type === 'post')
          return (
            <div className={cx('post')}>
              <div className={cx('avatar')} onClick={() => navigate(`/channel/${post.author.channelId}`)}>
                <img src={post.author.avatar[1].url} alt="" />
              </div>
              <div className={cx('main')}>
                <div className={cx('head')}>
                  <div className={cx('name')} onClick={() => navigate(`/channel/${post.author.channelId}`)}>
                    {post.author.title}
                  </div>
                  <div className={cx('date')}>{post.publishedTimeText}</div>
                </div>
                <div className={cx('content')}>
                  <div className={cx('text')}>{post.text}</div>
                  <div className={cx('attachment')}>
                    {post.attachment.type === 'poll' ? (
                      <div className={cx('poll')}>
                        <div className={cx('vote-count')}>{post.attachment.poll.stats.votesText}</div>
                        <div className={cx('choices')}>
                          <Poll poll={post.attachment.poll} />
                        </div>
                      </div>
                    ) : post.attachment.type === 'images' ? (
                      <div className={cx('images')}>
                        {post.attachment.images.map((image, index) => {
                          return <img key={index} src={image.source[image.source.length - 1].url} alt="" />;
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={cx('interact')}>
                  <div className={cx('like')}>
                    <Liked />
                    <span>{shortenNumber(post.stats.likes)}</span>
                  </div>
                  <div className={cx('dislike')}>
                    <Liked />
                  </div>
                  <div className={cx('share')}>Share</div>
                  <div className={cx('comment')} onClick={() => navigate(`/post/${post.postId}`)}>
                    {post.stats.comments} comments
                  </div>
                </div>
              </div>
            </div>
          );
        return null;
      })}
    </div>
  );
}

export default Community;
