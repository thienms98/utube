import { PersonalPlaylists } from '../../utilities/personalPlaylists';
import classNames from 'classnames/bind';
import styles from './Library.module.scss';
const cx = classNames.bind(styles);

export default function Library() {
  const playlists = PersonalPlaylists.get();
  console.log(playlists);

  return (
    <>
      {playlists.map((playlist) => {
        return <div>{playlist.title}</div>;
      })}
    </>
  );
}
