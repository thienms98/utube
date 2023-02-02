import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icon from '../../assets/icon';
import useDebounce from '../../hooks/useDebounce';
import { options } from '../../utilities/apiOpts';

import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
const cx = classNames.bind(styles);

function SearchBar({ smallInput, toggleOverlay, toggleSmallInput }) {
  const [value, setValue] = useState('');
  const [autoComplete, setAutoComplete] = useState([]);
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const debounce = useDebounce(500, value);
  const navigate = useNavigate();

  // fetch auto complete api (suggest searching)
  useEffect(() => {
    if (debounce.trim().length === 0) setAutoComplete([]);
    else {
      fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${value}&hl=en&gl=US`, options)
        .then((response) => response.json())
        .then((response) => setAutoComplete(response.results))
        .catch((err) => console.error(err));
      setAutoCompleteVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  console.log('rerender');
  console.log(smallInput);

  return (
    <div className={cx('wrapper', { minimize: smallInput })}>
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
        <span
          onClick={() => {
            navigate(`/search/${value}`);
          }}
        >
          <Icon.Search />
        </span>
        <div
          className={cx('overlay')}
          onClick={() => {
            toggleOverlay();
            toggleSmallInput();
          }}
        ></div>
      </div>

      {autoCompleteVisible && autoComplete.length > 0 && (
        <div className={cx('search-result')}>
          {autoComplete.map((str, index) => {
            return (
              <div
                className={cx('search-result__item')}
                key={index}
                onClick={() => {
                  navigate(`/search/${str}`);
                  setAutoCompleteVisible(false);
                }}
              >
                {str}
              </div>
            );
          })}
        </div>
      )}

      {smallInput || (
        <div className={cx('voice-search')}>
          <Icon.VoiceSearch />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
