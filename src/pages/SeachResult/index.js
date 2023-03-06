import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import SearchItem from './SearchItem';
import FilterGroups from './FilterGroups';

import { example } from './example';

import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
const cx = classNames.bind(styles);

function SearchResult() {
  const [result, setResult] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const params = useParams();

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setResult(example);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  const fetchWithCursor = (cursor) => {
    console.log('fetch with cursor: ', cursor);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('toggler')}>
        <div
          className={cx('btn')}
          onClick={() => {
            setFilterVisible((prev) => !prev);
          }}
        >
          Filter
        </div>
      </div>
      <FilterGroups visible={filterVisible} />
      {example.didYouMean && (
        <div className={cx('search-params')}>
          <div className={cx('did-you-mean')}>Searching results for {example.didYouMean}</div>
          <div className={cx('original-search')}>Searching instead of {params.query}</div>
        </div>
      )}
      <div className={cx('results')}>
        {result ? (
          result.contents.map((content, index) => {
            return <SearchItem content={content} key={index} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default SearchResult;
