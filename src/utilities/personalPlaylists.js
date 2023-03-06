import { v4 as uuidv4 } from 'uuid';
export class PersonalPlaylists {
  static save(playlists) {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }

  static get(id) {
    const ls = localStorage.getItem('playlists') || '[]';
    let playlists = JSON.parse(ls);
    let msg = 'First create playlists';
    this.save(playlists);

    // return playlist with name
    if (id) {
      const playlist = playlists.find((list) => list.playlistId === id);
      if (!playlist) {
        msg = `Failed. No playlist id ${id}`;
        return null;
      }
      let { title, contents, type, playlistId } = playlist;
      contents = contents
        ? playlist.contents.map((videoId) => {
            return JSON.parse(localStorage.getItem(videoId));
          })
        : null;
      msg = 'ok';
      return { msg, playlist: { playlistId, title, contents, type } };
    }

    // return all playlists
    else msg = 'get playlists ok';
    return { msg, playlists };
  }

  static createPlaylist = (playlistId = uuidv4(), title, type = 'self', contents = []) => {
    // init playlists
    const { playlists } = this.get();
    let msg = '';

    // name exists => throw error
    if (playlists.findIndex((pl) => pl.title === title) !== -1) {
      msg = 'playlist name existed';
      return { msg, playlists };
    }
    if (type) playlists.push({ playlistId, title, type: 'youtube' });
    else playlists.push({ playlistId, title, contents });

    this.save(playlists);
    msg = 'ok';
    return { msg, playlists };
  };

  static updatePlaylist(action, playlistName, value) {
    let msg = '';
    const { playlists } = this.get();
    const playlistIndex = playlists.findIndex((item) => item.title === playlistName);

    if (playlistIndex === -1) msg = 'playlist not found';
    switch (action) {
      case 'add':
        if (playlists[playlistIndex].contents.includes(value.videoId)) {
          msg = 'duplicate video';
          break;
        }
        playlists[playlistIndex].contents.push(value.videoId);
        localStorage.setItem(value.videoId, JSON.stringify(value));
        msg = `ok`;
        break;
      case 'delete':
        playlists.splice(playlistIndex, 1);
        msg = `ok`;
        break;
      default:
    }
    this.save(playlists);
    return { msg, playlists };
  }
}

/*
template
playlists: [ 
  {
    title: 'nhac nheo',
    contents: ['id1', 'id2', 'id3']
  },
  {
    title: 'nhac viet',
    contents: ['id3', 'id2', 'id13']
  }
]

id1: {
  'id': 'vidid',
  'title': '7 rings',
  'thumbnail': 'https://asdiwdaa.sadah',
  'author': 'abc',
  'views': 'some views',
  'publishedTime': 'some days'
}
*/
