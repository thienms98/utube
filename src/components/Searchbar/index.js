import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import * as Icon from '../../assets/icon';
import useDebounce from '../../hooks/useDebounce';

const cx = classNames.bind(styles);

function SearchBar() {
  const [value, setValue] = useState('');
  const [autoComplete, setAutoComplete] = useState([]);
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const debounce = useDebounce(500, value);

  useEffect(() => {
    if (debounce.trim().length === 0) setAutoComplete([]);
    else {
      console.log('fetching');
      fetch('someshit right here')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
      setAutoComplete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      setAutoCompleteVisible(true);
    }
  }, [debounce]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('input')}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search ..."
          onBlur={() => setAutoCompleteVisible(false)}
          onFocus={() => setAutoCompleteVisible(true)}
        />
        {debounce && (
          <div className={cx('clear')} onClick={() => setValue('')}>
            <span className={cx('icon')}>&times;</span>
          </div>
        )}
      </div>
      <div className={cx('icon')}>
        <Icon.Search />
      </div>
      {autoCompleteVisible && autoComplete.length > 0 && (
        <div className={cx('search-result')}>
          {autoComplete.map((str) => {
            return (
              <div className={cx('search-result__item')} key={str}>
                {str}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
