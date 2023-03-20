import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import SearchItem from './SearchItem';
import FilterGroups from './FilterGroups';
import SearchItemOption from './SearchItemOption';

import { options } from '../../utilities/apiOpts';
import { example } from './example';

import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
const cx = classNames.bind(styles);

function SearchResult() {
  const [result, setResult] = useState(null);
  const [chosenItem, setChosenItem] = useState(null);
  const params = useParams();
  document.title = `${params.query} - Utube`;

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setResult(example);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  const fetchWithCursor = (cursor) => {
    console.log('fetch with cursor: ', cursor);
  };
  const optionHandler = (value) => {
    setChosenItem(value);
  };

  return (
    <div className={cx('wrapper')}>
      <FilterGroups />
      {example.didYouMean && (
        <div className={cx('search-params')}>
          <div className={cx('did-you-mean')}>Searching results for {example.didYouMean}</div>
          <div className={cx('original-search')}>Searching instead of {params.query}</div>
        </div>
      )}
      <div className={cx('results') + ' scroll'}>
        {result ? (
          result.contents.map((content, index) => {
            return (
              <div className={cx('results-item')} key={index} data-index={index}>
                <SearchItem content={content} key={index} />
                <div className={cx('options')}>
                  <SearchItemOption
                    content={content}
                    chosen={index === chosenItem}
                    optionHandler={optionHandler}
                    index={index}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default SearchResult;
