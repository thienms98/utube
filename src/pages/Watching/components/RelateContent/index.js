import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VideoItem from '../../../../components/VideoItem';
import PlaylistItem from '../../../../components/PlaylistItem';
import classNames from 'classnames/bind';
import styles from './RelateContent.module.scss';
import { shortenNumber } from '../../../../utilities';
import { options } from '../../../../utilities/apiOpts';

const cx = classNames.bind(styles);

function RelateContent({ data, updateData }) {
  const { videoId } = useParams();

  // const loadMoreContents = () => {
  //   fetch(
  //     `https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}&cursor=${cursorNext}&hl=en&gl=US`,
  //     options,
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setContents((prev) => [...prev, ...response.contents]);
  //       setCursorNext(response.cursorNext);
  //     })
  //     .catch((err) => console.error(err));
  // };

  const fakeApi = {
    contents: [
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/8Lwf4LCR2VmxD2JKiozRu7Lo2jGdnhRs42NawHmMN_xJ8TdW-30e3J9DhumEksivp1Esog4A=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Luis Fonsi',
          },
          isLiveNow: false,
          lengthSeconds: 211,
          publishedTimeText: '4 years ago',
          stats: {
            views: 2206279046,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/TyHvyGVs42U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDw1NehKTFdPzzixvoCjlnwTW4AWA',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/TyHvyGVs42U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ_5WUbaytenOtsvtQqF94PrinXw',
              width: 336,
            },
          ],
          title: 'Luis Fonsi, Demi Lovato - Échame La Culpa (Video Oficial)',
          videoId: 'TyHvyGVs42U',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/ox9fU9B71ztd9IyAONJ4IpRE5oRyuHwImESN9KjvH7x7BA0cat-7lU8w9tcf8EdBoWoplqhU=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Enrique Iglesias',
          },
          isLiveNow: false,
          lengthSeconds: 287,
          publishedTimeText: '8 years ago',
          stats: {
            views: 3218190680,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/NUsoVlDFqZg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_it4kap2IgxTHmuK4k6HcH2cYrQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/NUsoVlDFqZg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoUMQqcN7M6bX6FQQpbZOMcHUc8A',
              width: 336,
            },
          ],
          title: 'Enrique Iglesias - Bailando ft. Descemer Bueno, Gente De Zona (Español)',
          videoId: 'NUsoVlDFqZg',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/Clx2uVb8v0PubhXEWQSB8Z8UC4TXBxoVumfkanOGXRslc-v-N0iE6hUTnGQm_N1aeh1aQv2P0c4=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [],
            title: 'Dj Eder el Señor de la Noche',
          },
          isLiveNow: false,
          lengthSeconds: 1584,
          publishedTimeText: null,
          stats: {
            views: 0,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/19UiUJmyvz8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDX1Msz7mFvd3S-gPdExM6brkWpoA',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/19UiUJmyvz8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjJzxdGTFB1IkHwvvOTh-_bGOJvw',
              width: 336,
            },
          ],
          title: 'Cumbias del Recuerdo vol.2',
          videoId: '19UiUJmyvz8',
        },
      },
      {
        playlist: {
          author: {
            title: 'YouTube',
          },
          playlistId: 'RDkJQP7kiw5Fk',
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBEbPjZNLOTWKK9IgpBYcBjav7eVw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDAXdCFM5A3SQgN8IYaB-egQuuDQw',
              width: 336,
            },
          ],
          title: 'Mix - Luis Fonsi - Despacito ft. Daddy Yankee',
        },
        type: 'playlist',
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/fTXj82s0-YJSxrpnJHDgZezMmqPeioRkAvLbOdCAGvqD_byC_OCd_fizik25P1NogEkWKH2Rww=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Shakira',
          },
          isLiveNow: false,
          lengthSeconds: 211,
          publishedTimeText: '12 years ago',
          stats: {
            views: 3161411836,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBe9vXIar2HGROOpls2Pom-262zbg',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0LmpONgzuqkPEQNQYtiDnBNSCYA',
              width: 336,
            },
          ],
          title: 'Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song)',
          videoId: 'pRpeEdMmmQ0',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/V3S8ExCIj4P3QpvRmE3leyiR73Z09tqSJL3Zn5uHYXm3pFzZW_XRybv5J74E-3CQj8nUkce-5pc=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [],
            title: 'Francisco Jaramillo',
          },
          isLiveNow: false,
          lengthSeconds: 5174,
          publishedTimeText: '8 months ago',
          stats: {
            views: 12120409,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Wo3BS-6_vrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCX9rv7J-MbHFla87e_FjELaYw3CQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Wo3BS-6_vrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqdCrrfVCy9M99vPtmsMwIFGKpkw',
              width: 336,
            },
          ],
          title: 'Fiesta Latina Mix 2020  Maluma Shakira Daddy Yankee Wisin Nicky Jam   Pop Latino Reggaeton',
          videoId: 'Wo3BS-6_vrA',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/ytc/AKedOLQH4eo7atyDIArDAHcuW-H6gOl37G0l9pnqEn_2=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Mark Ronson',
          },
          isLiveNow: false,
          lengthSeconds: 271,
          publishedTimeText: '7 years ago',
          stats: {
            views: 4593932131,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAnIdK32U-YJVjx2z1UckUdsF7gwQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPd0HXdCPOkPl9cXjL6KKV-3O24w',
              width: 336,
            },
          ],
          title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
          videoId: 'OPf0YbXqDm0',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/VrF39DA6Dvw1VAzuTn2OTa9sWUfdPzjmJxj35LjimZn5YCAL_PEioZlqs7jAMd5Xc-MMB4DWH6Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Pedro Capó',
          },
          isLiveNow: false,
          lengthSeconds: 238,
          publishedTimeText: '3 years ago',
          stats: {
            views: 2538033992,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/1_zgKRBrT0Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQmtWVxZVzGP9oCQZeyNFT9EHLvw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/1_zgKRBrT0Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMz7cN1NQe970qdmWStsPdEeAHWg',
              width: 336,
            },
          ],
          title: 'Pedro Capó, Farruko - Calma (Remix - Official Video)',
          videoId: '1_zgKRBrT0Y',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/VXVR9IKCRGRAtjdXcul8EcB2MoT1ZC7d8YMlkzVfB8Iuulf3WK5HA_h6BihPBe-OnpS4Fufrag=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'officialpsy',
          },
          isLiveNow: false,
          lengthSeconds: 253,
          publishedTimeText: '9 years ago',
          stats: {
            views: 4446713653,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLByyiJvge8s49FIDVIJYTriX-FEkw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwlIZLORAJKNb7smWcuzGrzFDNPw',
              width: 336,
            },
          ],
          title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
          videoId: '9bZkp7q19f0',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/ytc/AKedOLT7wt_OpiXjxHUkffPet4dNWuMUdnIKbg57zyVcUw=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [],
            title: 'Tommy Boy',
          },
          isLiveNow: false,
          lengthSeconds: 257,
          publishedTimeText: '4 years ago',
          stats: {
            views: 986065928,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/fPO76Jlnz6c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALvNQO8s2GarlIslMUscjitpLZbQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/fPO76Jlnz6c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKlTpNdVm99DIrV_Kih90poJPGLA',
              width: 336,
            },
          ],
          title: "Coolio - Gangsta's Paradise (feat. L.V.) [Official Music Video]",
          videoId: 'fPO76Jlnz6c',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/QLG9Mxh6dHghuj3hs0CQSJ-EGlGZwUHhqLoUfJoTSY8ayL0mEdGai6iu4byLqO6lxB_DC5dD=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [],
            title: 'Paradise Waves ',
          },
          isLiveNow: false,
          lengthSeconds: 852,
          publishedTimeText: '2 months ago',
          stats: {
            views: 4025690,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/k1A5J4_FaRs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWrIqwzxO6V8JEiIpsh2zTqyzZrw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/k1A5J4_FaRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyXa6oVG_ROpNiHiExGGJiiuKwOg',
              width: 336,
            },
          ],
          title: 'Senorita - Shawn Mendes, Camila Cabello, Charlie Puth (Lyrics)',
          videoId: 'k1A5J4_FaRs',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/kfw_1eOpjdYASmlAnSPa7XmXrYpaKjuW4k7_oB-hD5ljRSlT7yThew72ZxgW1UrAJ1e8vX1G=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'DJ Snake',
          },
          isLiveNow: false,
          lengthSeconds: 232,
          publishedTimeText: '3 years ago',
          stats: {
            views: 2311314377,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/ixkoVwKQaJg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBaVaxHzOQASjPuVExhaUr94DboLQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/ixkoVwKQaJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObpYM_JYfscrEOgTKMs1kKxenvw',
              width: 336,
            },
          ],
          title: 'DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video)',
          videoId: 'ixkoVwKQaJg',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/h5r9KwQMHUqjwuMCkODAL5b7TTh_PllWvaC20VS70IGp9fiWkEUUDftKBtzeB_h0MYZJHWz1hGg=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Don Omar',
          },
          isLiveNow: false,
          lengthSeconds: 236,
          publishedTimeText: '11 years ago',
          stats: {
            views: 1292960295,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/7zp1TbLFPp8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBW_0jq9QNQkaexkG0HnXcK7XQQZg',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/7zp1TbLFPp8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOL1mrJNX_AuVb6-FBZyydSsbQgg',
              width: 336,
            },
          ],
          title: 'Don Omar - Danza Kuduro ft. Lucenzo',
          videoId: '7zp1TbLFPp8',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/CL8tVHSaAetXksR5I_RCn1tgfvrfRfyeoVasD4c3Vav4-ikrZA0LzDZdIgg4tcDf90-yPQpndA=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Maroon 5',
          },
          isLiveNow: false,
          lengthSeconds: 302,
          publishedTimeText: '7 years ago',
          stats: {
            views: 3705182898,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0vPbo54QtsLAOqA9okaXlbkseDw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm96BQ2qsjx_LG0Q4kUZeP4NbmWg',
              width: 336,
            },
          ],
          title: 'Maroon 5 - Sugar (Official Music Video)',
          videoId: '09R8_2nJtjg',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/ytc/AKedOLTUxU_jw1ggJ7iKaUSE1NnNA8TxJZv9NGIMwxyd=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Verified',
                type: 'VERIFIED_CHANNEL',
              },
            ],
            title: 'LMFAOVEVO',
          },
          isLiveNow: false,
          lengthSeconds: 376,
          publishedTimeText: '11 years ago',
          stats: {
            views: 2176138651,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/KQ6zr6kCPj8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAc1VRuNBzFMvjBmm2nxOrdLFbvhw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/KQ6zr6kCPj8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4l5PuoUOuxnpNtpXq48JCuEL2DA',
              width: 336,
            },
          ],
          title: 'LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem (Official Video)',
          videoId: 'KQ6zr6kCPj8',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/Q1vITC-piFMO2HOPXa-CcYPq1ewyqNb_F3evX3j8SJgOswxGA8tIzUVV2vsEU87lujgU9HFf=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Verified',
                type: 'VERIFIED_CHANNEL',
              },
            ],
            title: 'MoluscoTV',
          },
          isLiveNow: false,
          lengthSeconds: 6253,
          publishedTimeText: '1 month ago',
          stats: {
            views: 3517487,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/8qj-hHvGZpU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB6aFizN31PsNchLZKUEzQp-4C4hQ',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/8qj-hHvGZpU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADyHVvX0Sy4Ij4-LwJGGWOulAUdA',
              width: 336,
            },
          ],
          title: 'Daddy Yankee decide contarlo TODO en su ultima entrevista antes de su retiro',
          videoId: '8qj-hHvGZpU',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/ytc/AKedOLTCfQX8wa4b1Xs1Y1Nh9eAXvUaMOeM6v1nkQWer=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'DJ Khaled',
          },
          isLiveNow: false,
          lengthSeconds: 322,
          publishedTimeText: '5 years ago',
          stats: {
            views: 1648319221,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/weeI1G46q0o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYKHHWWUIMYRFeLfnA-UW7jPc0tA',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/weeI1G46q0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCb50WbHVNSFbiPb5jJcdm8dGp-w',
              width: 336,
            },
          ],
          title: "DJ Khaled - I'm The One ft. Justin Bieber, Quavo, Chance the Rapper, Lil Wayne",
          videoId: 'weeI1G46q0o',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/aEOnaOBElenu8z4H4QekW-YbjowJ886Z5IuVTrwHG3Na2GU4WpguuyeqgmQnFShMfnn6Ynl38A=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Carlos Vives',
          },
          isLiveNow: false,
          lengthSeconds: 238,
          publishedTimeText: '5 years ago',
          stats: {
            views: 1500876344,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/-UV0QGLmYys/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA-xOSIbbJaBdx8mhiUQSNbA5eM4g',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/-UV0QGLmYys/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDgVMWMYKk9GZ6CJaMsqy9QQ195Q',
              width: 336,
            },
          ],
          title: 'Carlos Vives, Shakira - La Bicicleta',
          videoId: '-UV0QGLmYys',
        },
      },
      {
        type: 'video',
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: 'https://yt3.ggpht.com/MehoWv8wE9h6ptkL1vmRKhjDNKq2HvDcDRucCF9IPyl8-8LqR83OD1G2Oa1T64mAKGDa3zSS=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
              },
            ],
            badges: [
              {
                text: 'Official Artist Channel',
                type: 'OFFICIAL_ARTIST_CHANNEL',
              },
            ],
            title: 'Wiz Khalifa',
          },
          isLiveNow: false,
          lengthSeconds: 238,
          publishedTimeText: '7 years ago',
          stats: {
            views: 5535344145,
          },
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCHvc2_BYtRkz-UYNcx_HFbI1Fvtw',
              width: 168,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhwpRCeR0BhQArxzwQO_lgrLV3jQ',
              width: 336,
            },
          ],
          title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack',
          videoId: 'RgKAFK5djSk',
        },
      },
    ],
    cursorNext:
      'CBQSDRILa0pRUDdraXc1RmsYACrCBjJzNkw2d3pxQkFybkJBb0Q4ajRBQ2czQ1Bnb0k1Y2F6cTRiNS01QlBDZ1B5UGdBS0RjSS1DZ2lZMDVhRzVZcktwVFVLQV9JLUFBb093ajRMQ0xfLXlzMkp5c2pxMXdFS0FfSS1BQW93MGo0dENpdFNSRU5NUVVzMWRYbGZiSFpxVG1aQ2FXRndUMHRSZDBkaFZERXhRVFZaTTJ4bmFGVkVVRzFPWm5CWkNnUHlQZ0FLRXRJLUR3b05Va1JyU2xGUU4ydHBkelZHYXdvRDhqNEFDZzdDUGdzSWpiS2FtWjNDbDQybEFRb0Q4ajRBQ2czQ1Bnb0lzUDMtOWI2cDhNWmFDZ1B5UGdBS0RjSS1DZ2p0bktpdm00ejktemdLQV9JLUFBb093ajRMQ01hZXJZT1JoYmotMXdFS0FfSS1BQW9Pd2o0TENQM3IxOVg3bEpuYjlRRUtBX0ktQUFvTndqNEtDS2Vmbjh1Sl9lNzVmQW9EOGo0QUNnN0NQZ3NJbTlLVl92aWtqcWlUQVFvRDhqNEFDZzdDUGdzSW1OSEJsUENLeW95TEFRb0Q4ajRBQ2c3Q1Bnc0luXzJVbHR1cG5aM3ZBUW9EOGo0QUNnN0NQZ3NJdU95bXp2YWZuLXJUQVFvRDhqNEFDZzNDUGdvSXZfeUl5UHIxckljcENnUHlQZ0FLRHNJLUN3aVZ6Wm5leDlDXzFQSUJDZ1B5UGdBS0RzSS1Dd2pLMXVyeHhwcmk4OEVCQ2dQeVBnQUtEc0ktQ3dpcnhwbVhob2pkb3ZrQkNnUHlQZ0FLRGNJLUNnaXBtdmJ5eW9LZ2dVWVNGQUFDQkFZSUNnd09FQklVRmhnYUhCNGdJaVFtR2dRSUFCQUJHZ1FJQWhBREdnUUlCQkFGR2dRSUJoQUhHZ1FJQ0JBSkdnUUlDaEFMR2dRSURCQU5HZ1FJRGhBUEdnUUlFQkFSR2dRSUVoQVRHZ1FJRkJBVkdnUUlGaEFYR2dRSUdCQVpHZ1FJR2hBYkdnUUlIQkFkR2dRSUhoQWZHZ1FJSUJBaEdnUUlJaEFqR2dRSUpCQWxHZ1FJSmhBbktoUUFBZ1FHQ0FvTURoQVNGQllZR2h3ZUlDSWtKZ2oPd2F0Y2gtbmV4dC1mZWVk',
  };
  useEffect(() => {
    if (data === null) {
      fetch('https://jsonplaceholder.typicode.com/todos').then(() => {
        updateData('relateContents', fakeApi);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contents = data ? data.contents : null;
  const cursorNext = data ? data.cursorNext : null;

  return (
    <div className={cx('wrapper')}>
      {contents
        ? contents.map((content, index) => {
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
          })
        : 'loading...'}
      {cursorNext && (
        <div
          className={cx('expand-btn')}
          // onClick={loadMoreContents}
        >
          Load more
        </div>
      )}
    </div>
  );
}

export default RelateContent;
