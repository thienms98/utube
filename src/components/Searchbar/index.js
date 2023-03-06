import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Icon from '../../assets/icon';
import useDebounce from '../../hooks/useDebounce';
import { options } from '../../utilities/apiOpts';
import { history } from '../../utilities/searchHistory';

import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
const cx = classNames.bind(styles);

function SearchBar({ modal, turnModal }) {
  const { searchQuery } = useParams();
  const [value, setValue] = useState(searchQuery || '');
  const [autoComplete, setAutoComplete] = useState(() => {
    // display max 4 history items
    return history
      .getData()
      .splice(0, 4)
      .map((content) => {
        return { content, type: 'history' };
      });
  });
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const debounce = useDebounce(500, value);
  const navigate = useNavigate();

  // fetch auto complete api (suggest searching)
  useEffect(() => {
    if (debounce.trim().length === 0) setAutoComplete([]);
    else {
      fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${value}&hl=en&gl=US`, options)
        .then((response) => response.json())
        // set max items: 14
        .then((response) => {
          const autoCompletes = response.results.map((result) => {
            return { content: result, type: 'autocomplete' };
          });
          setAutoComplete((prev) => [...prev, ...autoCompletes].splice(0, 14));
        })
        .catch((err) => console.error(err));
      setAutoCompleteVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  return (
    <div className={cx('wrapper', { modal: modal })}>
      <div className={cx('input')}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search ..."
          // onBlur={() => setAutoCompleteVisible(false)}
          onFocus={() => setAutoCompleteVisible(true)}
        />
        {debounce && (
          <div className={cx('clear')} onClick={() => setValue('')}>
            <span className={cx('icon')}>&times;</span>
          </div>
        )}
      </div>
      <div className={cx('icon')}>
        {/* {modal && <span onClick={() => turnModal('off')}>&lt;</span>} */}
        <span
          onClick={() => {
            console.log(modal);
            if (modal) navigate(`/search/${value}`);
            else turnModal('on');
          }}
        >
          <Icon.Search />
          {/* <div className={cx('switch')} onClick></div> */}
        </span>
      </div>

      {autoCompleteVisible && autoComplete.length > 0 && (
        <div className={cx('search-result')}>
          {autoComplete.map((item, index) => {
            return (
              <div
                className={cx('search-result__item')}
                key={index}
                onClick={() => {
                  navigate(`/search/${item.content}`);
                  history.add(item.content);
                  history.save();
                  setAutoCompleteVisible(false);
                }}
              >
                {item.content}
                {item.type === 'history' && (
                  <span
                    className={cx('del-btn')}
                    onClick={() => {
                      history.remove(index);
                    }}
                  >
                    delete
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className={cx('voice-search')}>
        <Icon.VoiceSearch />
      </div>
    </div>
  );
}

export default SearchBar;
