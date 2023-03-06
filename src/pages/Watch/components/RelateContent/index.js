import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import VideoItem from '../../../../components/VideoItem';
import PlaylistItem from '../../../../components/PlaylistItem';
import { shortenNumber } from '../../../../utilities';
import { options as opt } from '../../../../utilities/apiOpts';
import { DataContext } from '../../../Watch';

import classNames from 'classnames/bind';
import styles from './RelateContent.module.scss';
const cx = classNames.bind(styles);

function RelateContent({ relateContents, updateData }) {
  const params = useParams();
  const data = useContext(DataContext);

  useEffect(() => {
    const options = {
      ...opt,
      url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
      params: { id: params.videoId, hl: 'en', gl: 'US' },
    };

    if (!relateContents)
      axios
        .request(options)
        .then((response) => {
          updateData('relateContents', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  const loadMoreContents = () => {
    const options = {
      ...opt,
      url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
      params: { cursor: cursorNext, hl: 'en', gl: 'US' },
    };

    axios
      .request(options)
      .then((response) => {
        updateData('relateContents', {
          contents: [...data.relateContents.contents, ...response.data.contents],
          cursorNext: response.data.cursorNext,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const contents = relateContents ? relateContents.contents : null;
  const cursorNext = relateContents ? relateContents.cursorNext : null;

  return (
    <div className={cx('wrapper') + ' scroll'}>
      {contents ? (
        <div className={cx('videos')}>
          {contents.map((content, index) => {
            return (
              <div className={cx('video')} key={index}>
                {content.type === 'video' ? (
                  <VideoItem
                    id={content.video.videoId}
                    title={content.video.title}
                    thumbnailUrl={content.video.thumbnails?.at(0).url}
                    author={content.video.author?.title}
                    avatar={content.video.author?.avatar?.at(0).url}
                    views={`${shortenNumber(content.video.stats?.views)} views`}
                    publishTime={content.video.publishedTimeText}
                    hor={true}
                  />
                ) : null}
                {content.type === 'playlist' ? (
                  <PlaylistItem
                    id={content.playlist.playlistId}
                    title={content.playlist.title}
                    thumbnailUrl={content.playlist.thumbnails?.at(0).url}
                    author={content.playlist.author?.title}
                    hor={true}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        'loading...'
      )}
      {cursorNext && (
        <div className={cx('expand-btn')} onClick={loadMoreContents}>
          Load more
        </div>
      )}
    </div>
  );
}

export default RelateContent;
