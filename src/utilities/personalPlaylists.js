import { v4 as uuidv4 } from 'uuid';
export class PersonalPlaylists {
  static init() {
    let local = localStorage.getItem('playlists');
    if (!local) {
      local = [{ playlistId: 'WL', title: 'Watch later', contents: [] }];
      this.save(local);
    }
  }

  static save(playlists) {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }

  static get() {
    const local = localStorage.getItem('playlists');
    let playlists = JSON.parse(local);
    return [...playlists];
  }

  static find({ id, title }) {
    if (!id && !title) return null;

    // return playlist with id
    const playlists = this.get();
    let playlist;
    if (id) playlist = playlists.find((list) => list.playlistId === id);
    else playlist = playlists.find((list) => list.title === title);
    if (!playlist) return null;

    let contents = playlist.contents;
    contents = contents
      ? playlist.contents.map((videoId) => {
          return JSON.parse(localStorage.getItem(videoId));
        })
      : null;
    return { ...playlist, contents };
  }
  static findIndex({ id, title }) {
    if (!id && !title) return null;

    // return playlist with id
    const playlists = this.get();
    let index;
    if (id) index = playlists.findIndex((list) => list.playlistId === id);
    else index = playlists.findIndex((list) => list.title === title);
    return index;
  }

  static createPlaylist = (title, playlistId = uuidv4(), type = 'self', contents = []) => {
    // init playlists
    const playlists = this.get();

    // youtube playlist
    if (type === 'youtube') playlists.push({ playlistId, title, type: 'youtube', contents });

    // user self-create playlist
    // name exists => new name
    let newTitle = title;
    if (this.find({ title })) {
      let indexTitle = 1;
      while (this.find({ title: newTitle })) {
        indexTitle++;
        newTitle = `${title} ${indexTitle}`;
      }
    }
    playlists.push({ title: newTitle, playlistId, type, contents });
    this.save(playlists);
    return playlists;
  };

  static removePlaylist({ id, title }) {
    const playlists = this.get();

    const playlistIndex = this.findIndex({ id, title });
    if (playlistIndex !== -1) playlists.splice(playlistIndex, 1);
    this.save(playlists);
  }

  // chua fix
  static updatePlaylists(action, { id, title }, video) {
    const playlists = this.get();

    const playlistIndex = this.findIndex({ id, title });
    const content = playlists[playlistIndex].contents;

    if (playlistIndex === -1) return;
    if (!video) return;

    switch (action) {
      case 'add':
        if (!content.includes(video.videoId)) playlists[playlistIndex].contents.push(video.videoId);

        if (localStorage.getItem(video.videoId)) localStorage.setItem(video.videoId, JSON.stringify(video));

        break;
      case 'delete':
        const delPos = content.indexOf(video.videoId);
        if (delPos > -1) playlists[playlistIndex].contents.splice(delPos, 1);
        this.save(playlists);

        break;
      default:
        return;
    }
    this.save(playlists);
    return playlists;
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
