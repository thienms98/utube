import classNames from 'classnames/bind';
import styles from './SearchArea.module.scss';
import * as Icon from '../../assets/icon';
import SearchBar from '../Searchbar';

const cx = classNames.bind(styles);

function SearchArea() {
  return (
    <div className={cx('search-area')}>
      <SearchBar />
      <div className={cx('voice-search')}>
        <Icon.VoiceSearch />
      </div>
    </div>
  );
}

export default SearchArea;
