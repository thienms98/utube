import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Liked, DownArrow } from '../../../../assets/icon';
import { shortenNumber } from '../../../../utilities/index';
import CommentsWrapper from '../CommentsWrapper';
import { options } from '../../../../utilities/apiOpts';

import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);

function Comment({ channelAvatar, comment, updateData, data }) {
  const [repliesVisible, setRepliesVisible] = useState(false);
  const navigate = useNavigate();
  const { author, commentId, content, creatorHeart, cursorReplies, pinned, publishedTimeText, stats } = comment;
  const fakeApi = {
    comments: [
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/E91TB3iEn0yG7l0lI-bKbWuJUE6s6iqRVxvbKRI41WJ2prJEgRdMYlAFDdlHB4eIIsP8JIZu9PM=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/E91TB3iEn0yG7l0lI-bKbWuJUE6s6iqRVxvbKRI41WJ2prJEgRdMYlAFDdlHB4eIIsP8JIZu9PM=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/E91TB3iEn0yG7l0lI-bKbWuJUE6s6iqRVxvbKRI41WJ2prJEgRdMYlAFDdlHB4eIIsP8JIZu9PM=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UC_0sY96L5TNvjXdxcrO1_jQ',
          isChannelOwner: false,
          title: 'MrCaptainHalal',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LPALmtUM7p',
        content: '2029:People come to see the real world escaping the virtual one',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 19773,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/HpWgIF4jIHudGSi3EZaQsVSJuc7keq7czyyvZIHrdCT40j3YwUupUz-TyFyFD6yoJoIh6nGI=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/HpWgIF4jIHudGSi3EZaQsVSJuc7keq7czyyvZIHrdCT40j3YwUupUz-TyFyFD6yoJoIh6nGI=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/HpWgIF4jIHudGSi3EZaQsVSJuc7keq7czyyvZIHrdCT40j3YwUupUz-TyFyFD6yoJoIh6nGI=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UC6EnbH29pZ2ApI6eII7_d_Q',
          isChannelOwner: false,
          title: 'Al——',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LPPTI9lmgD',
        content: 'Yes xd',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 4761,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/UePduUCcvxgTUNLTsVQCLJvVGW2nuEaDAY4TJH3FRogMT9OlMpCwN4zHvU7sceGd9_b4uNHYSw8=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/UePduUCcvxgTUNLTsVQCLJvVGW2nuEaDAY4TJH3FRogMT9OlMpCwN4zHvU7sceGd9_b4uNHYSw8=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/UePduUCcvxgTUNLTsVQCLJvVGW2nuEaDAY4TJH3FRogMT9OlMpCwN4zHvU7sceGd9_b4uNHYSw8=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UC7NjgIPG5__6m-_64nU99Qg',
          isChannelOwner: false,
          title: 'IceMaster4350',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LQ-awsxCLw',
        content: ' @MrCaptainHalal  Or the apocalyptic one',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 3365,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/uR7JACxh3YGAbygE96_h2jH1tjthakZFnO1IV7IC4engUvlf-b3RguhP5awOEbLIz_Lvg5f1dg=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/uR7JACxh3YGAbygE96_h2jH1tjthakZFnO1IV7IC4engUvlf-b3RguhP5awOEbLIz_Lvg5f1dg=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/uR7JACxh3YGAbygE96_h2jH1tjthakZFnO1IV7IC4engUvlf-b3RguhP5awOEbLIz_Lvg5f1dg=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UC65H9p-oiRgvmer_CLJzlzg',
          isChannelOwner: false,
          title: 'Gastonyz©®™ ✓',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LQhUrHpCDE',
        content: 'Yess hahahaha xD',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 695,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/YWjMl7nrQ_TmmsbRpsNyhgnXimL7D4cUHxkkIfpAb5f2dMwgkswJ3ptPizjgElwknPSmombQG5s=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/YWjMl7nrQ_TmmsbRpsNyhgnXimL7D4cUHxkkIfpAb5f2dMwgkswJ3ptPizjgElwknPSmombQG5s=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/YWjMl7nrQ_TmmsbRpsNyhgnXimL7D4cUHxkkIfpAb5f2dMwgkswJ3ptPizjgElwknPSmombQG5s=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UCPvti6Ua5LihyJR54XG4YtA',
          isChannelOwner: false,
          title: 'the Universe',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LQjZX6r0dl',
        content: 'same',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 492,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJV4NO19SBrfcJHFvTHB4wEMOk_2HMwssNxcXA=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJV4NO19SBrfcJHFvTHB4wEMOk_2HMwssNxcXA=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJV4NO19SBrfcJHFvTHB4wEMOk_2HMwssNxcXA=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UCpd89fOnzvBlWC5W0t17qCg',
          isChannelOwner: false,
          title: 'Helena Da Silva',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LQp9zV1RqO',
        content: 'Hahaha',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 376,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJXUfuGMLx8iOuK4Qqr8InGA0O_nIuy9GqErSAG6PA=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJXUfuGMLx8iOuK4Qqr8InGA0O_nIuy9GqErSAG6PA=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJXUfuGMLx8iOuK4Qqr8InGA0O_nIuy9GqErSAG6PA=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UCWwfwY9h0eUavINWfWu4_vg',
          isChannelOwner: false,
          title: 'Dakii',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LR-aMI338M',
        content: 'Yes😂',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 366,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/hMS8sLaolhhUCVLvy7gY9QdKUH9ITEV2-Jms21fcNSKbk_wJIwUDq-ZsDTjFAQD4ZFIpX8K0UA=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/hMS8sLaolhhUCVLvy7gY9QdKUH9ITEV2-Jms21fcNSKbk_wJIwUDq-ZsDTjFAQD4ZFIpX8K0UA=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/hMS8sLaolhhUCVLvy7gY9QdKUH9ITEV2-Jms21fcNSKbk_wJIwUDq-ZsDTjFAQD4ZFIpX8K0UA=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UC45fpKLscHf34MDm8T68d7w',
          isChannelOwner: false,
          title: 'abah.nyai20',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LR0qQ8LuQ8',
        content: 'Btw ini vidio artinya parah',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 235,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJWJJqWuicBHb4NDjQiVcva65-4PlR_hIr9xGUpGMw=s48-c-k-c0x00ffffff-no-rj',
              width: 48,
            },
            {
              height: 88,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJWJJqWuicBHb4NDjQiVcva65-4PlR_hIr9xGUpGMw=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
            },
            {
              height: 176,
              url: 'https://yt3.ggpht.com/ytc/AL5GRJWJJqWuicBHb4NDjQiVcva65-4PlR_hIr9xGUpGMw=s176-c-k-c0x00ffffff-no-rj',
              width: 176,
            },
          ],
          badges: [],
          channelId: 'UCoo_32xcpGtMDuCtLuEnRRg',
          isChannelOwner: false,
          title: 'Jericho Lagundino',
        },
        commentId: 'UgwW1S95-KHLW2bUI-14AaABAg.9LOCAvGg5kO9LR1cqtAdla',
        content: 'Yes haahahhah',
        creatorHeart: false,
        paid: {
          amount: null,
          status: false,
        },
        publishedTimeText: '1 year ago',
        stats: {
          votes: 143,
        },
      },
    ],
    cursorNext:
      'Eg0SC2tKUVA3a2l3NUZrGAYytgIKsAFHQUl5WGdvOElLckNpYjNieV8wQ01qRVFxTWVVaGZiUzd3SVlfX19fX19fX19fOV9JQUVvQlRBS09oWTVURTlEUVhaSFp6VnJUemxNVWpGamNYUkJaR3hoRWg0SUJSSWFWV2QzVnpGVE9UVXRTMGhNVnpKaVZVa3RNVFJCWVVGQ1FXYzZJQWdCRWh3MU9sVm5kMWN4VXprMUxVdElURmN5WWxWSkxURTBRV0ZCUWtGbhpOEhpVZ3dXMVM5NS1LSExXMmJVSS0xNEFhQUJBZyICCAAqGFVDTHA4UkJoUUh1OXdTc3E2MmpfTWQ2QTILa0pRUDdraXc1RmtAAUgyggEAKAlCL2NvbW1lbnQtcmVwbGllcy1pdGVtLVVnd1cxUzk1LUtITFcyYlVJLTE0QWFBQkFn',
    filters: null,
    totalCommentsCount: null,
  };

  const fetchReplies = () => {
    // fetch(
    //     `https://youtube138.p.rapidapi.com/video/comments/?cursor=${cursorReplies}&hl=en&gl=US`,
    //     options,
    //   )
    fetch('https://jsonplaceholder.typicode.com/todos').then(() => {
      // insert replies to comment selected
      const index = data.comments.comments.findIndex((cmt) => cmt.commentId === commentId);
      const cmt = { ...data.comments.comments[index], replies: fakeApi };
      // replace comment in comment list
      const updatedComments = [...data.comments.comments];
      updatedComments.splice(index, 1, cmt);
      // update data
      updateData('comments', { ...data.comments, comments: updatedComments });
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
                console.log(comment.replies);
                if (!comment.replies) {
                  console.log('fetching...');
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
