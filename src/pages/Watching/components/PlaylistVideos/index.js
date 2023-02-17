import { useEffect, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { secToHMS, formatNumberLowerThan10MustHave0Before } from '../../../../utilities';

import classNames from 'classnames/bind';
import styles from './PlaylistVideos.module.scss';
const cx = classNames.bind(styles);

function PlaylistVideos({ playlistVideos, updateData }) {
  const navigate = useNavigate();
  const { playlistId, videoId } = useParams();
  const videosContainerRef = useRef(null);

  const fakeApi = {
    contents: [
      {
        index: 1,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCJTs-KheOMNstaGrDL4K55Q',
            channelId: 'UCJTs-KheOMNstaGrDL4K55Q',
            title: 'Glass Animals',
          },
          isLiveNow: false,
          lengthSeconds: 236,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA5ComGgQkY6dyDF20DsJoDLhxJwg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDN9EkkEwnqqDtoiXHLUdWqrlNqSA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBN6itNFJDFxJogvEkwQOBfwN_0Ag',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArYpwZTo2MHiPX_Q-030TPU_YMVg',
              width: 336,
            },
          ],
          title: 'Glass Animals - Heat Waves (Official Video)',
          videoId: 'mRD0-GxqHVo',
        },
      },
      {
        index: 2,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCZFWPqqPkFlNwIxcpsLOwew',
            channelId: 'UCZFWPqqPkFlNwIxcpsLOwew',
            title: 'Harry Styles',
          },
          isLiveNow: false,
          lengthSeconds: 166,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCKshiUIh9CLPT60SEEeTJAndo8IQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYCcpGkMFNagyZBhbCCadWwXAYRQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAplB6PhFxu9QJ-FqdklZ3JCOp2aw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzZd4XC4BNx5xzy3-vOmneDbN11A',
              width: 336,
            },
          ],
          title: 'Harry Styles - As It Was (Official Video)',
          videoId: 'H5v3kku4y6Q',
        },
      },
      {
        index: 3,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0C-w0YjGpqDXGB8IHb662A',
            channelId: 'UC0C-w0YjGpqDXGB8IHb662A',
            title: 'Ed Sheeran',
          },
          isLiveNow: false,
          lengthSeconds: 238,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Il0S8BoucSA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0gUi4z7SnEncFLPoullBG0kbb2Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Il0S8BoucSA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdPfObUe9oQuZr4SgsR5FRqUhDiQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Il0S8BoucSA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGqZbdnHQ9DoF-c-ncxKpryG7rgw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Il0S8BoucSA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApYCkXSiwssAPIeIY87XcA90no5Q',
              width: 336,
            },
          ],
          title: 'Ed Sheeran - Shivers [Official Video]',
          videoId: 'Il0S8BoucSA',
        },
      },
      {
        index: 4,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/LithuaniaHQ',
            channelId: 'UCNd0qqcBpuXCWPM76lDUxqg',
            title: 'Lithuania HQ',
          },
          isLiveNow: false,
          lengthSeconds: 175,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/zCi4rvr9jp0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDS0DB5oga0Dx0uwrWdq73jup9smg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/zCi4rvr9jp0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAd7nx-ICP25Hl6S8f5BfGrbIECfw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/zCi4rvr9jp0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCSgXGFyT3p-0Mjec4UWZlK2LhBg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/zCi4rvr9jp0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiMub2o7IITUfoT87LAcSaDO0UWw',
              width: 336,
            },
          ],
          title: 'Dynoro, HVME & Gaudini - WHY WHY WHY (Official Video)',
          videoId: 'zCi4rvr9jp0',
        },
      },
      {
        index: 5,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/user/DisneyMusicVEVO',
            channelId: 'UCgwv23FVv3lqh567yagXfNg',
            title: 'DisneyMusicVEVO',
          },
          isLiveNow: false,
          lengthSeconds: 222,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/bvWRMAU6V-c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAiayQcUObw83pSe2SNOsHNu5IWmg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/bvWRMAU6V-c/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARiLmKyxa8bZ2UXqS721qEBwJLqQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/bvWRMAU6V-c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-xhvtVNJbgusTb7Cu004GB8wucg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/bvWRMAU6V-c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARzA6kKj5TURqYj9uPMSE2YoZuIg',
              width: 336,
            },
          ],
          title: 'We Don\'t Talk About Bruno (From "Encanto")',
          videoId: 'bvWRMAU6V-c',
        },
      },
      {
        index: 6,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCvILah8hAWYhYOmAG3ZjvBA',
            channelId: 'UCvILah8hAWYhYOmAG3ZjvBA',
            title: 'Benson Boone',
          },
          isLiveNow: false,
          lengthSeconds: 241,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/lAXsWFkKsK4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgQMTdmKZBIxlcGIopXIVdemIonw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/lAXsWFkKsK4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCG_2nhCYblFKn75SBLzYWYuIx03g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/lAXsWFkKsK4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBekUoRa2-5S8FTN_mFvKIRiEZZHQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/lAXsWFkKsK4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcrzGNE1VFvor4odh4yFN8-qrfkg',
              width: 336,
            },
          ],
          title: 'Benson Boone - In The Stars (Official Live Music Video)',
          videoId: 'lAXsWFkKsK4',
        },
      },
      {
        index: 7,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCwppdrjsBPAZg5_cUwQjfMQ',
            channelId: 'UCwppdrjsBPAZg5_cUwQjfMQ',
            title: 'Charlie Puth',
          },
          isLiveNow: false,
          lengthSeconds: 205,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/WFsAon_TWPQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDkkw0bYR2S2Eb3j3Ct80cL4zzwvw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/WFsAon_TWPQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDNIoSO7nhtzrGkXXJ3m5HekjRnbg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/WFsAon_TWPQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDPj5iPQVNik7A_GYtGM1TLtyMxQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/WFsAon_TWPQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YwmxkoL8VcoWhLZ5_JM4kY-ANg',
              width: 336,
            },
          ],
          title: 'Charlie Puth - Light Switch [Official Music Video]',
          videoId: 'WFsAon_TWPQ',
        },
      },
      {
        index: 8,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCAvCL8hyXjSUHKEGuUPr1BA',
            channelId: 'UCAvCL8hyXjSUHKEGuUPr1BA',
            title: 'Shawn Mendes',
          },
          isLiveNow: false,
          lengthSeconds: 182,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/tp4fUH2E8uc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWmhFcw6i0gfy3hhiBWLpu8d6JnA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/tp4fUH2E8uc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3VGKOi_SxoZaBE3ivUHkQqgcW8Q',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/tp4fUH2E8uc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqc1q6xyNIWDnd5Ft9GOnFnSw-Gw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/tp4fUH2E8uc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiH2oB5gpy_dXdESppFHGiUmWoUQ',
              width: 336,
            },
          ],
          title: "Shawn Mendes - When You're Gone",
          videoId: 'tp4fUH2E8uc',
        },
      },
      {
        index: 9,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCqJJ11Tn1ys5qytNl6ew7hA',
            channelId: 'UCqJJ11Tn1ys5qytNl6ew7hA',
            title: 'Jenna Raine',
          },
          isLiveNow: false,
          lengthSeconds: 222,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/TJuiiV-_Qj8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBC2WG-iIJRmLmc176TUZFyxtGdJQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/TJuiiV-_Qj8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJq1W3TnA4S0nxPoCIbfR8nGIkpw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/TJuiiV-_Qj8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9zClT6Gn-3JS6kZhu7AaCd9MaKA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/TJuiiV-_Qj8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4OMypZs4_f0i9uEolLjFxJnSPeg',
              width: 336,
            },
          ],
          title: 'Jenna Raine - NOT AGAIN (Official Music Video)',
          videoId: 'TJuiiV-_Qj8',
        },
      },
      {
        index: 10,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCsRM0YB_dabtEPGPTKo-gcw',
            channelId: 'UCsRM0YB_dabtEPGPTKo-gcw',
            title: 'Adele',
          },
          isLiveNow: false,
          lengthSeconds: 233,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDFNNSki-OEg4Bam_pA6VWi84lA5g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDa2mNfExg7YyVDiOcDFnOUOfpAag',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzy-jO7Q7JfK1wIVDF5c84P0ysFg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCIi9fm7Oth0UXsBwAJMGVebTyxg',
              width: 336,
            },
          ],
          title: 'Adele - Oh My God (Official Video)',
          videoId: 'niG3YMU6jFk',
        },
      },
      {
        index: 11,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIwFjwMjI0y7PDBVEO9-bkQ',
            channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ',
            title: 'Justin Bieber',
          },
          isLiveNow: false,
          lengthSeconds: 213,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_TMNmsG9ahoArRkphhRc1cyalvw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCYEWRAXllMmX_ivMAprnZky2BotQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc2yLekjUz3LUJkb9VHAlnKFeygQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTCE5AlYGDVdNpIr7SgW9KLJvwDw',
              width: 336,
            },
          ],
          title: 'Justin Bieber - Ghost',
          videoId: 'Fp8msa5uYsc',
        },
      },
      {
        index: 12,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCEdJmFafAFb0mfGS9skS2sA',
            channelId: 'UCEdJmFafAFb0mfGS9skS2sA',
            title: 'Laura Bryna',
          },
          isLiveNow: false,
          lengthSeconds: 210,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/oJmGqmR9f1w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA7NAJ-RPjOWbGq5BvOualnmlQ9Zg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/oJmGqmR9f1w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrOEMBUUmrBIKjVPCg5e67p1TnCA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/oJmGqmR9f1w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1Ju0xALQf-1pgJdwmWeipj6jFlg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/oJmGqmR9f1w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMj_aJc4_lM1UksnCwB4jGsU84wA',
              width: 336,
            },
          ],
          title: 'Laura Bryna - Body First',
          videoId: 'oJmGqmR9f1w',
        },
      },
      {
        index: 13,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCsRM0YB_dabtEPGPTKo-gcw',
            channelId: 'UCsRM0YB_dabtEPGPTKo-gcw',
            title: 'Adele',
          },
          isLiveNow: false,
          lengthSeconds: 226,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/X-yIEMduRXk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC5VxvRQB0JQASGNA1G3DTVcoPQgg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/X-yIEMduRXk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCORmQbmm_7zqmMP8pNVI0PS3vpOA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/X-yIEMduRXk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE45tF-xgagj1VcvW7o3rd9R-sVw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/X-yIEMduRXk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADoCcwYcBWEkK24vi6XtWOJIH1rw',
              width: 336,
            },
          ],
          title: 'Adele - Easy On Me (Official Lyric Video)',
          videoId: 'X-yIEMduRXk',
        },
      },
      {
        index: 14,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 144,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/nIWSC4R4oPw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9DrjFYGPOlU_TNkfw-HhlzyDpMg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/nIWSC4R4oPw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAKhn9FrzQDT3tj_l_H6IlCDGPXtw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/nIWSC4R4oPw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWeLFVbfE62XC1U6dvZk-Zuf-B6w',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/nIWSC4R4oPw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnPX2oLPRL7HvXk5M7zYbHkWVHBg',
              width: 336,
            },
          ],
          title: 'Lil Nas X - THATS WHAT I WANT (Clean - Lyrics)',
          videoId: 'nIWSC4R4oPw',
        },
      },
      {
        index: 15,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCHZdCYzkjo3l0bVegw1IJ9g',
            channelId: 'UCHZdCYzkjo3l0bVegw1IJ9g',
            title: 'Willy William',
          },
          isLiveNow: false,
          lengthSeconds: 170,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/jYPu61aPHO8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAuYJB2Uak2sU0a0LLhm3EsgIesMg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/jYPu61aPHO8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQ2cUud4EWLvoab0l9I619TzLoxA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/jYPu61aPHO8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgT7cS8xrWY5nG9N6_p0O-0jTCCw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/jYPu61aPHO8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACyAZvEu8_w0wMPdrXMngOxiEHcQ',
              width: 336,
            },
          ],
          title: 'Willy William - Trompeta (Official Lyric Video)',
          videoId: 'jYPu61aPHO8',
        },
      },
      {
        index: 16,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCnJCODYR-T0EAYqkWx-_5FQ',
            channelId: 'UCnJCODYR-T0EAYqkWx-_5FQ',
            title: 'Backstage',
          },
          isLiveNow: false,
          lengthSeconds: 170,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/6XsJkEAdcaI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBRNFJTTaBfjtnhgYcd9nQduTOd2Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/6XsJkEAdcaI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDutsnfXGmIvAGm1oHLBisOM8iAzg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/6XsJkEAdcaI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPrqz58YbdqDDpam5XYwbcFzfa7w',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/6XsJkEAdcaI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQFDhzfU7Jevp_QGHBUpbYXUOQow',
              width: 336,
            },
          ],
          title: 'abcdefu - (Clean Lyrics) - GAYLE',
          videoId: '6XsJkEAdcaI',
        },
      },
      {
        index: 17,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCcd0tBtip8YzdTCUw3OVv_Q',
            channelId: 'UCcd0tBtip8YzdTCUw3OVv_Q',
            title: 'Elton John',
          },
          isLiveNow: false,
          lengthSeconds: 255,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/qod03PVTLqk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvS-BqNxTvxLuj2MbUFNsT77EqQQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/qod03PVTLqk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPzWnwTyLyQqpWT9Rvxkpjs6P1CA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/qod03PVTLqk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqqmVykJsh25M1mjmGSosU1f0TrQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/qod03PVTLqk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALfDgXSpIZ-8-3Z3ffUxu3YSiJ2Q',
              width: 336,
            },
          ],
          title: 'Elton John, Dua Lipa - Cold Heart (PNAU Remix) (Official Video)',
          videoId: 'qod03PVTLqk',
        },
      },
      {
        index: 18,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCgR3ohlFbKx6yjg2xz0CFOQ',
            channelId: 'UCgR3ohlFbKx6yjg2xz0CFOQ',
            title: 'Sigala',
          },
          isLiveNow: false,
          lengthSeconds: 173,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/DiP5eorRbzo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKFAq_KrSLh5kL7QfF9j0qi7CG1A',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/DiP5eorRbzo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7zfJpro4OF0p2dnV_dgePaOX9ag',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/DiP5eorRbzo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9AtLP2fBmdEgtwgAw4VUFokJcuw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/DiP5eorRbzo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8_PnRJHUVrr85RqFj6_JLx3r1eA',
              width: 336,
            },
          ],
          title: 'Sigala, Talia Mar - Stay The Night (Official Video)',
          videoId: 'DiP5eorRbzo',
        },
      },
      {
        index: 19,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCi4EDAgjULwwNBHOg1aaCig',
            channelId: 'UCi4EDAgjULwwNBHOg1aaCig',
            title: 'OneRepublic',
          },
          isLiveNow: false,
          lengthSeconds: 202,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/QBPE2fZsVYU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDC3xHqBzstGJIHTUsp8cZeudPtlA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/QBPE2fZsVYU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBs1nDu_gsElUwutDpyX_1HjAwluQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/QBPE2fZsVYU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwb4UlsLmYSyc8AcKJ5KLACTilhg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/QBPE2fZsVYU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-87Z8-DwltpEVGLX-fp03bibUMg',
              width: 336,
            },
          ],
          title: 'OneRepublic - West Coast (Official Music Video)',
          videoId: 'QBPE2fZsVYU',
        },
      },
      {
        index: 20,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCbNNpH4gB4Nu-imqMDysWiw',
            channelId: 'UCbNNpH4gB4Nu-imqMDysWiw',
            title: 'Elley Duhé',
          },
          isLiveNow: false,
          lengthSeconds: 188,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/gSvc9aBu4O0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCoGV00izbV7cwLX6SQ6eOBJfm23g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/gSvc9aBu4O0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAhENJmldgcxQXwkTvtXhWfDLlmzw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/gSvc9aBu4O0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVKTm_cMTnKOjRG3LM5PlnoQw3gw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/gSvc9aBu4O0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe_PCdRiNPGWrEKIt1eJOdJvu-OA',
              width: 336,
            },
          ],
          title: 'Elley Duhé - MIDDLE OF THE NIGHT (Lyric Video)',
          videoId: 'gSvc9aBu4O0',
        },
      },
      {
        index: 21,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCdKS_mDSLUkS6vDK6u1mjOg',
            channelId: 'UCdKS_mDSLUkS6vDK6u1mjOg',
            title: 'Lost Frequencies',
          },
          isLiveNow: false,
          lengthSeconds: 174,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/PoP2Sa7wYNQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAAZX65Kp2wek7FJ9Bm_kJoDgwMA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/PoP2Sa7wYNQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9bG7dHg6s_lBGLQocO62_wkA_Aw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/PoP2Sa7wYNQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW5jBmoFV_PS0Qk8ux23C9kJbFKw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/PoP2Sa7wYNQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBq8kDB8NiMrSdu-pYqC4eBKtocJQ',
              width: 336,
            },
          ],
          title: 'Lost Frequencies ft Calum Scott - Where Are You Now (Official Video)',
          videoId: 'PoP2Sa7wYNQ',
        },
      },
      {
        index: 22,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/MarvellousMusic',
            channelId: 'UCJ2cGU-CskWXRmzql5RgjKg',
            title: 'Marvellous',
          },
          isLiveNow: false,
          lengthSeconds: 210,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/kYWrT3TgwUU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDhHWfLfwpRuwbIMXYFl-caMFZDg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/kYWrT3TgwUU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBBK7vSZVcCbY5b9ReTlY3sKCLIfg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/kYWrT3TgwUU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB267GvN1QggGQmXpO1ydo4PWPceQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/kYWrT3TgwUU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-4uOyFfX0oXUfiZuBl_vV3xE-Xw',
              width: 336,
            },
          ],
          title: 'Audioiko, Redemm, Arely Vega - PORQUE TE VAS (Official Video)',
          videoId: 'kYWrT3TgwUU',
        },
      },
      {
        index: 23,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCT9zcQNlyht7fRlcjmflRSA',
            channelId: 'UCT9zcQNlyht7fRlcjmflRSA',
            title: 'ImagineDragons',
          },
          isLiveNow: false,
          lengthSeconds: 214,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/D9G1VOjN_84/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7JkHm98cOy-pDanQ5eCMFYHyM3Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/D9G1VOjN_84/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7Dc_UptYD9saoJZpxqVTltYfwWw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/D9G1VOjN_84/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0dsjwvJMwJiXDHtln40r9QQGCdw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/D9G1VOjN_84/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVi36VfiyUqu4-8U-w1Lx2jkhyVg',
              width: 336,
            },
          ],
          title: 'Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends)',
          videoId: 'D9G1VOjN_84',
        },
      },
      {
        index: 24,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCDPM_n1atn2ijUwHd0NNRQw',
            channelId: 'UCDPM_n1atn2ijUwHd0NNRQw',
            title: 'Coldplay',
          },
          isLiveNow: false,
          lengthSeconds: 245,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/CWCMGIG1Y54/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAr1w5ETptrYLLq_fADGPb8woc-9w',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/CWCMGIG1Y54/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3wjoJTgX1Q0JpIYqHXnNmOJFa5A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/CWCMGIG1Y54/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2McRv_4-Jrdt1UftmT9IRd9Oddg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/CWCMGIG1Y54/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnqbY1w5Bzze_UhchGJXEzWmksLQ',
              width: 336,
            },
          ],
          title: 'Coldplay X Selena Gomez - Let Somebody Go (Official Video)',
          videoId: 'CWCMGIG1Y54',
        },
      },
      {
        index: 25,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0C-w0YjGpqDXGB8IHb662A',
            channelId: 'UC0C-w0YjGpqDXGB8IHb662A',
            title: 'Ed Sheeran',
          },
          isLiveNow: false,
          lengthSeconds: 241,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/orJSJGHjBLI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCPKfINO-f8RMcs1xdi1JhRd5AGUA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/orJSJGHjBLI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTehu2ONbBMkKlVhoUmA05IgOAeA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/orJSJGHjBLI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQN4WRJU2ch3rCMEemHpwuYxSSGg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/orJSJGHjBLI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvG61m09eKaXkBK80JqkjThyH5jA',
              width: 336,
            },
          ],
          title: 'Ed Sheeran - Bad Habits [Official Video]',
          videoId: 'orJSJGHjBLI',
        },
      },
      {
        index: 26,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0WP5P-ufpRfjbNrmOWwLBQ',
            channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
            title: 'The Weeknd',
          },
          isLiveNow: false,
          lengthSeconds: 206,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/LIIDh-qI9oI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBRu04S9Hf7vuS_Wx_TNbCLue4o-g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/LIIDh-qI9oI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWlrejsdX5vbLdSp1JA0ufG5RXIw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/LIIDh-qI9oI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDspdWEjkbeFfrkpP9U1X0AK8MsHA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/LIIDh-qI9oI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Aw0ti5a0pWoOXHVlAHrSzIAIMg',
              width: 336,
            },
          ],
          title: 'The Weeknd & Ariana Grande - Save Your Tears (Remix) (Official Video)',
          videoId: 'LIIDh-qI9oI',
        },
      },
      {
        index: 27,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 213,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/nXQdlr05ec8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAw07u5iiv_AwkycgktJyqVw_Rfw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/nXQdlr05ec8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDv8mnOSwbAPIoDWznESMKg0IL4lg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/nXQdlr05ec8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2_w27vrPY03Aipn_MzUCo0Q28oQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/nXQdlr05ec8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZTY3tVAKXb-lDqFq5lSfZs8AoVw',
              width: 336,
            },
          ],
          title: 'Lil Nas X - INDUSTRY BABY (Clean - Lyrics) feat. Jack Harlow',
          videoId: 'nXQdlr05ec8',
        },
      },
      {
        index: 28,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCio_FVgKVgqcHrRiXDpnqbw',
            channelId: 'UCio_FVgKVgqcHrRiXDpnqbw',
            title: 'Camila Cabello',
          },
          isLiveNow: false,
          lengthSeconds: 183,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/0Kx3sobEBFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDthwQk0ViFt8EhY26-T-mDLUrGVA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/0Kx3sobEBFE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDhtMBZCgeNa5Vc2Q21k2DjvjIKOw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/0Kx3sobEBFE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo2A6pjgRYDIduQOHY43lRGK7t4w',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/0Kx3sobEBFE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDANApQ_o8641KJX8S8NYmZZ_BXIQ',
              width: 336,
            },
          ],
          title: "Camila Cabello - Don't Go Yet (Official Video)",
          videoId: '0Kx3sobEBFE',
        },
      },
      {
        index: 29,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC8c6G1UatnXjfpuiXTVKUwg',
            channelId: 'UC8c6G1UatnXjfpuiXTVKUwg',
            title: 'Florence',
          },
          isLiveNow: false,
          lengthSeconds: 176,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/FRURN5F4EBE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfPNWj_Arqwu8dDcuz1ppx5XPjLA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/FRURN5F4EBE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBRVEU53W8_rIlaGVSOhbMuykYY7Q',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/FRURN5F4EBE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzJbS58wJKmyEJNEtc2Hj8F3rDTw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/FRURN5F4EBE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh4zaRBqUjCNk1vtnL4b5ELfus4g',
              width: 336,
            },
          ],
          title: 'Lauren Spencer-Smith - Fingers Crossed (Lyrics)',
          videoId: 'FRURN5F4EBE',
        },
      },
      {
        index: 30,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCrX2OMYTBcodUKQMBLfMrJQ',
            channelId: 'UCrX2OMYTBcodUKQMBLfMrJQ',
            title: 'Big Time Rush',
          },
          isLiveNow: false,
          lengthSeconds: 222,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/OLr33BKumVE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzBrqfwKXR2vCM8SQVp5NBH5JloQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/OLr33BKumVE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDmzBRkbkCifdVI9EdSPaQ0lfnLrA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/OLr33BKumVE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh-7DW63304VoM7sPVPc1tEDhTNw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/OLr33BKumVE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZKNc9NgTEqAcQBcBk022vjTFZDQ',
              width: 336,
            },
          ],
          title: 'Big Time Rush - Not Giving You Up (Official Music Video)',
          videoId: 'OLr33BKumVE',
        },
      },
      {
        index: 31,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 197,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/e6gTvKBD91U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoJpjZBHG1LSua5ApAsvMN3msshA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/e6gTvKBD91U/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzVVGqnf8iPXyYtjV3W26VyjgvQQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/e6gTvKBD91U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3raoCpVFpjDsOyYYqX0wkgk45jg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/e6gTvKBD91U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTjZV1DeJqfWRbzvb58XMy3FHbsA',
              width: 336,
            },
          ],
          title: 'Olivia Rodrigo - good 4 u (Clean - Lyrics)',
          videoId: 'e6gTvKBD91U',
        },
      },
      {
        index: 32,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0C-w0YjGpqDXGB8IHb662A',
            channelId: 'UC0C-w0YjGpqDXGB8IHb662A',
            title: 'Ed Sheeran',
          },
          isLiveNow: false,
          lengthSeconds: 187,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/2qzcHLyv3N0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAfeWW7cOIRZOkncGTJ-H40C1wRdw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/2qzcHLyv3N0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9uOx3DF6OJjkVcaBDWDk9lrwtLQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/2qzcHLyv3N0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAM4lB5cMUyMcEoEJ6iGFPnO7onCg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/2qzcHLyv3N0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB0L3rtJhFXqZOLAOGkfU5t6Oy8g',
              width: 336,
            },
          ],
          title: 'Ed Sheeran - The Joker And The Queen (feat. Taylor Swift) [Official Video]',
          videoId: '2qzcHLyv3N0',
        },
      },
      {
        index: 33,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0WP5P-ufpRfjbNrmOWwLBQ',
            channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
            title: 'The Weeknd',
          },
          isLiveNow: false,
          lengthSeconds: 212,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/LKsgDcckur0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQd6pnMABUg54svLCnPcNtlJxarA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/LKsgDcckur0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA6hmrsdPbIuXTH4u48sEA7zFO0Zg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/LKsgDcckur0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk7xKEHZQyD7glqF9lPIfsirYO6g',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/LKsgDcckur0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpD4-mYzZUDJBhLJxeFEzqOqeDJQ',
              width: 336,
            },
          ],
          title: 'The Weeknd - Less Than Zero (Audio)',
          videoId: 'LKsgDcckur0',
        },
      },
      {
        index: 34,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/user/DisneyMusicVEVO',
            channelId: 'UCgwv23FVv3lqh567yagXfNg',
            title: 'DisneyMusicVEVO',
          },
          isLiveNow: false,
          lengthSeconds: 211,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/tQwVKr8rCYw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAYykGvBckN_BFOFMneEoja8sTDTw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/tQwVKr8rCYw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwF7S9qugO7xQdYBdaVUiV4qRObA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/tQwVKr8rCYw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdspaugABOS5LYu26kk99SRh8SNg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/tQwVKr8rCYw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiXnxFouUkGhzdKRdoTYP3uEBp6g',
              width: 336,
            },
          ],
          title: 'Jessica Darrow - Surface Pressure (From "Encanto")',
          videoId: 'tQwVKr8rCYw',
        },
      },
      {
        index: 35,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCjDJVmt4p8cqRa51829CyFA',
            channelId: 'UCjDJVmt4p8cqRa51829CyFA',
            title: 'roses',
          },
          isLiveNow: false,
          lengthSeconds: 197,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/pC4RRPY32RY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDUk_37sfcuTE-IXym6c5OKoIawmg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/pC4RRPY32RY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAFp6hEj490nzcZcS9DOCuU_nwITw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/pC4RRPY32RY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOigU_AngUHrzg2rRBS1Rb0cY8hg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/pC4RRPY32RY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5soshmh7ij1eFx3EA8j-9_xP9hA',
              width: 336,
            },
          ],
          title: 'Wait a Minute! - Willow Smith lyrics',
          videoId: 'pC4RRPY32RY',
        },
      },
      {
        index: 36,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCuhNbYgKBoK6D1NgIWyPFqQ',
            channelId: 'UCuhNbYgKBoK6D1NgIWyPFqQ',
            title: 'Better Tracks',
          },
          isLiveNow: false,
          lengthSeconds: 142,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/aUycxurAc9g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKFuf7gv4mQuywrJZseVG74k0K4w',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/aUycxurAc9g/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDG-cosh0J5VYy0VwgVFAWM4eZg-w',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/aUycxurAc9g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQbSw1t1xsgpAasQV8LUt6wO9ebA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/aUycxurAc9g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAY0Wws228A4WqH1270YKd-e57GJQ',
              width: 336,
            },
          ],
          title: 'The Kid LAROI, Justin Bieber - Stay (Clean) (Lyrics) 🔥 (Stay Clean)',
          videoId: 'aUycxurAc9g',
        },
      },
      {
        index: 37,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC-J-KZfRV8c13fOCkhXdLiQ',
            channelId: 'UC-J-KZfRV8c13fOCkhXdLiQ',
            title: 'Dua Lipa',
          },
          isLiveNow: false,
          lengthSeconds: 221,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/WHuBW3qKm9g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBolZj6qWZJkrYrmoDmKZDSzeJ_Zg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/WHuBW3qKm9g/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD4ad7ltAYPdwxG_J-sEuD1OxSR9A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/WHuBW3qKm9g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAqhT5AvcnMnFM3TyP4_6fSQYYgg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/WHuBW3qKm9g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Q_YrnUuFyM7CUNpM5-FUm8SSGQ',
              width: 336,
            },
          ],
          title: 'Dua Lipa - Levitating (Official Lyrics Video)',
          videoId: 'WHuBW3qKm9g',
        },
      },
      {
        index: 38,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/LokuTheOne',
            channelId: 'UC4JUzmhmiGmPl7uzLpzODyw',
            title: 'Loku',
          },
          isLiveNow: false,
          lengthSeconds: 253,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/w4SwtMaAYak/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBYtN5_UVqLT0hE14dbJ8RBZK_8Sg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/w4SwtMaAYak/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC90gBm7b_38DM9DidTPhil0CQlgw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/w4SwtMaAYak/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUHYULitG75fo4q5YTcYLet3Tpaw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/w4SwtMaAYak/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6zsVTW1TITSnG_hKf4CHd8miS6A',
              width: 336,
            },
          ],
          title: 'Nelly Furtado - Say It Right (Lyrics)',
          videoId: 'w4SwtMaAYak',
        },
      },
      {
        index: 39,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC4HZsZ_1KzkLSBt1Djz8m_A',
            channelId: 'UC4HZsZ_1KzkLSBt1Djz8m_A',
            title: 'Trinidad Cardona',
          },
          isLiveNow: false,
          lengthSeconds: 194,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/ru3iyhV7e28/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBqBtUs7zOShr9z_ARNYQhJayw8Xg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/ru3iyhV7e28/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrGeOvm4YqEnX3eoecG8s1HwDk7Q',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/ru3iyhV7e28/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHbdKZXbmH_eG-YFCHGR3ZrF48JQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/ru3iyhV7e28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7fp8y0UV2eLemTGCB9mA0zelp8A',
              width: 336,
            },
          ],
          title: 'Trinidad Cardona - Love me back',
          videoId: 'ru3iyhV7e28',
        },
      },
      {
        index: 40,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCHSJxrYNXSnGIBVu5retVoQ',
            channelId: 'UCHSJxrYNXSnGIBVu5retVoQ',
            title: 'Biz Records',
          },
          isLiveNow: false,
          lengthSeconds: 199,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/czrL2gHqPgw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD5FG7VwKgXamQT4JmBGldNxqcPMg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/czrL2gHqPgw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBxmeJG-mK5RvHUUF8R8yqSfehUPg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/czrL2gHqPgw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6FWgpJGxxjGyX2p0wQ_Y8kHyyKw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/czrL2gHqPgw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP5SilQeY3hVNnRP6_W5DQnUiZlQ',
              width: 336,
            },
          ],
          title: '[CLEAN] Kodak Black - Super Gremlin',
          videoId: 'czrL2gHqPgw',
        },
      },
      {
        index: 41,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCoUM-UJ7rirJYP8CQ0EIaHA',
            channelId: 'UCoUM-UJ7rirJYP8CQ0EIaHA',
            title: 'Bruno Mars',
          },
          isLiveNow: false,
          lengthSeconds: 204,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/CEw-7cMnBDY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBbBkqG1Ag5IsG32xEeajE1lvFxhA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/CEw-7cMnBDY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCjAd1mp0tlIEgbdp9N2hMNxdky3A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/CEw-7cMnBDY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8VT1I2RNm0tZLcFd6J61aqixScQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/CEw-7cMnBDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnp5cers3tsIUgUdSxaGqNMZ7gYg',
              width: 336,
            },
          ],
          title: 'Bruno Mars, Anderson .Paak, Silk Sonic - Skate [Official Music Video]',
          videoId: 'CEw-7cMnBDY',
        },
      },
      {
        index: 42,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCQh6LB206jF3JxpCDD-fp5Q',
            channelId: 'UCQh6LB206jF3JxpCDD-fp5Q',
            title: 'Tate McRae',
          },
          isLiveNow: false,
          lengthSeconds: 223,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/uS_y_65CcpA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACHleXyUZMdyr3-u-0KpYmPpO_0Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/uS_y_65CcpA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAbEjmYKDkBGFKKj81Un0GhauedSg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/uS_y_65CcpA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi7EXwNh5N835iiAzm-yCozcRqbA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/uS_y_65CcpA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQ07NCCdERblGwCzE2gZAFtfe7cQ',
              width: 336,
            },
          ],
          title: "Tate McRae - she's all i wanna be (Official Video)",
          videoId: 'uS_y_65CcpA',
        },
      },
      {
        index: 43,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCkIgbcsXIHz0DW2lqRh4M0g',
            channelId: 'UCkIgbcsXIHz0DW2lqRh4M0g',
            title: 'Givēon',
          },
          isLiveNow: false,
          lengthSeconds: 236,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/CA1VHbdq5hY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxIcgCqYhMN-NtLCF7P9SvaZF5ag',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/CA1VHbdq5hY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACyWBEsUMUT9JjBijpqnJp8QBvtQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/CA1VHbdq5hY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5crs6wD7KiVbY8sASYWo1-PxXWg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/CA1VHbdq5hY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2yyBeunh51sZjwHVDyx7YtwX_Kg',
              width: 336,
            },
          ],
          title: 'Giveon - Lie Again (Official Music Video)',
          videoId: 'CA1VHbdq5hY',
        },
      },
      {
        index: 44,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCm54E8Hlf_z1GIpVUChBTQA',
            channelId: 'UCm54E8Hlf_z1GIpVUChBTQA',
            title: 'The Walters',
          },
          isLiveNow: false,
          lengthSeconds: 172,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/HZX7MB_m13M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7GWBV-oej269F9dppZyAl9bFdZA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/HZX7MB_m13M/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhRrw1VMOKywNa9IzSplYvUR1WXw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/HZX7MB_m13M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABPN15M7h-mf41cQ8Wea7xSVleOw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/HZX7MB_m13M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRLglNhqGSo7h2K9jJcBiKgUPf7w',
              width: 336,
            },
          ],
          title: 'The Walters - I Love You So [Official Video]',
          videoId: 'HZX7MB_m13M',
        },
      },
      {
        index: 45,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0WP5P-ufpRfjbNrmOWwLBQ',
            channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
            title: 'The Weeknd',
          },
          isLiveNow: false,
          lengthSeconds: 225,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcM15Juk5x8Ojz5BnQ4NdcDRm_aw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwA2jkYlQQrYLUxFVDmgH6NlA65Q',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA57sGTsY8-ONpmE_e2I0rCV-w22g',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUP-gyMj84YC_sR-jcgEF0th-DdQ',
              width: 336,
            },
          ],
          title: 'The Weeknd - Take My Breath (Official Music Video)',
          videoId: 'rhTl_OyehF8',
        },
      },
      {
        index: 46,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIvqWqjC4aLvp7zI8hzARrA',
            channelId: 'UCIvqWqjC4aLvp7zI8hzARrA',
            title: 'Little Mix',
          },
          isLiveNow: false,
          lengthSeconds: 201,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/9SqX5Hp44Do/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDDvcGm4OBDlErd4pzHGikmjX_hTg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/9SqX5Hp44Do/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBp_34gIctzFpCzR2n7pto0oL4OMA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/9SqX5Hp44Do/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhcQ3fR0TFrDYpth8q8Mva4MX39Q',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/9SqX5Hp44Do/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChwFtsKzcHDB7044lQQEW3nwi_Ig',
              width: 336,
            },
          ],
          title: 'Little Mix - No (Official Video)',
          videoId: '9SqX5Hp44Do',
        },
      },
      {
        index: 47,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCBIzPk0lne1w22jZR3LA36g',
            channelId: 'UCBIzPk0lne1w22jZR3LA36g',
            title: 'Jonas Blue',
          },
          isLiveNow: false,
          lengthSeconds: 190,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/r7u7Lp13v88/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDo91Xl5PRdqUfvtddvSr9nwj213g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/r7u7Lp13v88/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCP5aREcOyNmf6vp4Onz4PHMCjzcA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/r7u7Lp13v88/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjJ3BPLyjsC9jEqAyBmt3l3VQtzA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/r7u7Lp13v88/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoEtaL8LszLix0izauXWhy31LiOg',
              width: 336,
            },
          ],
          title: "Jonas Blue, Why Don't We - Don’t Wake Me Up (Official Video)",
          videoId: 'r7u7Lp13v88',
        },
      },
      {
        index: 48,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0WP5P-ufpRfjbNrmOWwLBQ',
            channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
            title: 'The Weeknd',
          },
          isLiveNow: false,
          lengthSeconds: 254,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/u9n7Cw-4_HQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZ7IjNNKhVNu-498kVjYvbZqsW5g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/u9n7Cw-4_HQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD8rycP0qxz5z02UyviXUA_guGkzQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/u9n7Cw-4_HQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIOydY22jV4mqM1S6-FR0mjwC15A',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/u9n7Cw-4_HQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHCyjCRlqO52QrKZzdJtSbuDbIYg',
              width: 336,
            },
          ],
          title: 'Swedish House Mafia and The Weeknd - Moth To A Flame (Official Video)',
          videoId: 'u9n7Cw-4_HQ',
        },
      },
      {
        index: 49,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCBL7ZxVX4GvW4CFiES_-0YA',
            channelId: 'UCBL7ZxVX4GvW4CFiES_-0YA',
            title: 'Anne-Marie',
          },
          isLiveNow: false,
          lengthSeconds: 186,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/2Z8L4Qed8F8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTayPn_aqdB-zYggj47eCz6WBPrw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/2Z8L4Qed8F8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD5NhjaI_N-hd5MagxNjR1VPsjrdA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/2Z8L4Qed8F8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoZXcO4komiADrQ3gOAYj7NLpfdA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/2Z8L4Qed8F8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCM3bXQqBhzNs5PizC60MNHh4FQ3A',
              width: 336,
            },
          ],
          title: 'Anne-Marie & Niall Horan - Our Song [Official Video]',
          videoId: '2Z8L4Qed8F8',
        },
      },
      {
        index: 50,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCEdvpU2pFRCVqU6yIPyTpMQ',
            channelId: 'UCEdvpU2pFRCVqU6yIPyTpMQ',
            title: 'Marshmello',
          },
          isLiveNow: false,
          lengthSeconds: 165,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/hmUyEDG7Jy0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdZYz3ioBtilGJ9I6Eu4Vbe--KzQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/hmUyEDG7Jy0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCc7gAvrOcizqyQAd2vyx-ZRBFrxA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/hmUyEDG7Jy0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIIVgghyYiPGTQnz-U37P85jnbcw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/hmUyEDG7Jy0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk2E4BiwtBUTFYac4-udBjBFkwvA',
              width: 336,
            },
          ],
          title: 'Marshmello x Jonas Brothers - Leave Before You Love Me (Official Music Video)',
          videoId: 'hmUyEDG7Jy0',
        },
      },
      {
        index: 51,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCcOIv_VJ7JXC35vg0fG5dUA',
            channelId: 'UCcOIv_VJ7JXC35vg0fG5dUA',
            title: 'Em Beihold',
          },
          isLiveNow: false,
          lengthSeconds: 168,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/9mVXPLlnSu4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLH-dOrtRR2ctgCoYI3TuRnnBtjg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/9mVXPLlnSu4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAwWwL9HE9rPvGPewpzwmS3nHmDMw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/9mVXPLlnSu4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa-pMftX_i8Kxv_FlrAxI4lgjiTQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/9mVXPLlnSu4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9yMjR-lSwdgUqtaQQQ3xXbxYHRQ',
              width: 336,
            },
          ],
          title: 'Em Beihold - Numb Little Bug (Official Lyric Video)',
          videoId: '9mVXPLlnSu4',
        },
      },
      {
        index: 52,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCJUE0ZnNiQ5HLdyaMz1JA3g',
            channelId: 'UCJUE0ZnNiQ5HLdyaMz1JA3g',
            title: 'Mae Muller',
          },
          isLiveNow: false,
          lengthSeconds: 175,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/GQAOrCOknCY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3YrP_w2l3kldLxyAWwlw48WQ5lQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/GQAOrCOknCY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6MWDNlME4p8vYSmSZjJjyo7nYvQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/GQAOrCOknCY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB1hzLPtRUwvdD0q33lcEpN88o2w',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/GQAOrCOknCY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMcmpkYq3G7CPGnpvV5YRQRUj5Wg',
              width: 336,
            },
          ],
          title: 'NEIKED, Mae Muller, Polo G - Better Days',
          videoId: 'GQAOrCOknCY',
        },
      },
      {
        index: 53,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC05i95k-w8CvrtZ-yGTob7A',
            channelId: 'UC05i95k-w8CvrtZ-yGTob7A',
            title: 'Alesso',
          },
          isLiveNow: false,
          lengthSeconds: 162,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/-ZFfIoBbOfg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA1pcppkwMfrH4kS_FakNEfq84-7g',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/-ZFfIoBbOfg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_paTnr1Y2LDtJ9uajSCEp15vvAg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/-ZFfIoBbOfg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCasc-ppCBNjTUAnVBEGqX19oPILQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/-ZFfIoBbOfg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF9gmfY9_wXCF0HtXh65b53Xqi4w',
              width: 336,
            },
          ],
          title: "Alesso & Katy Perry - When I'm Gone (Official Lyric Video)",
          videoId: '-ZFfIoBbOfg',
        },
      },
      {
        index: 54,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC7zjjW_bvcVsPcBiqUPJf1w',
            channelId: 'UC7zjjW_bvcVsPcBiqUPJf1w',
            title: 'Madison Beer',
          },
          isLiveNow: false,
          lengthSeconds: 229,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/TFHCew8DnC0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtSEkpqdNpBk7rSEo6p_WDxRh5cQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/TFHCew8DnC0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCGXEbR4g680J-xXGc06z-AM1Capg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/TFHCew8DnC0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvNA-o1L6p3VMfzM1a5iFxSeKraA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/TFHCew8DnC0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW-uA6XlPHSkV0xRjOR5P-NuWFbA',
              width: 336,
            },
          ],
          title: 'Madison Beer - Reckless (Official Music Video)',
          videoId: 'TFHCew8DnC0',
        },
      },
      {
        index: 55,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCA3PLfFMuT963D-qGVjAFaw',
            channelId: 'UCA3PLfFMuT963D-qGVjAFaw',
            title: 'BoyWithUke',
          },
          isLiveNow: false,
          lengthSeconds: 172,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Mvaosumc4hU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC5eWETbD5JeaPcV_UhpnO3zvs85Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Mvaosumc4hU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDz1Dus1zh8j3anKXuTxGfQAY3LXA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Mvaosumc4hU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0b6pxCgzIC5EiqAEPXDdrVlggzQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Mvaosumc4hU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvSAGTrsJDBW36I7nUcXuJ4AdcmQ',
              width: 336,
            },
          ],
          title: 'BoyWithUke - Toxic (Official Lyric Video)',
          videoId: 'Mvaosumc4hU',
        },
      },
      {
        index: 56,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCcvqXVTluXm5SvRrX0QHnnw',
            channelId: 'UCcvqXVTluXm5SvRrX0QHnnw',
            title: 'Iconic Lyrics',
          },
          isLiveNow: false,
          lengthSeconds: 182,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/pBGJnpig8wM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCa8_JgVM7j17vCk3DN8AU7mxxeUw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/pBGJnpig8wM/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCyK6HEpqJEjz4Q2wL-ZIbMFIN_g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/pBGJnpig8wM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9LW92l_1lY3FDcubs_A_-Qi1nbg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/pBGJnpig8wM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFCgx-YfiIfCoY4cqEGfo-mx0YvA',
              width: 336,
            },
          ],
          title: 'Justin Wellington - Iko Iko (Lyrics) (Tiktok Song) | My besty and your besty sit down by the fire',
          videoId: 'pBGJnpig8wM',
        },
      },
      {
        index: 57,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCPk3RMMXAfLhMJPFpQhye9g',
            channelId: 'UCPk3RMMXAfLhMJPFpQhye9g',
            title: 'Tiësto',
          },
          isLiveNow: false,
          lengthSeconds: 212,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/1_4ELAxKrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHRzj3nQeBDpmEiYab8SdA15xKqQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/1_4ELAxKrDc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDsQ91JS1TsN4LAyQ9W0okaDAxoxQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/1_4ELAxKrDc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf5IaGU__8YZ3sn-zoC5ov7KKuMg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/1_4ELAxKrDc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsOs3w2RKeA14C12bcDWSD3jXIcQ',
              width: 336,
            },
          ],
          title: 'Tiësto & Ava Max - The Motto (Official Music Video)',
          videoId: '1_4ELAxKrDc',
        },
      },
      {
        index: 58,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCi4EDAgjULwwNBHOg1aaCig',
            channelId: 'UCi4EDAgjULwwNBHOg1aaCig',
            title: 'OneRepublic',
          },
          isLiveNow: false,
          lengthSeconds: 173,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/TKkcsmvYTw4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3_mwez9c21eGru_VqSyq4b2MXyQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/TKkcsmvYTw4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDkDtlFtZY4DXCrDMwsS6mytYVdeQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/TKkcsmvYTw4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBor2goe3slxrbsaj8_Eg1fFv9akA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/TKkcsmvYTw4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnLA4iCvZtqddWM8dWCrlBHkOCug',
              width: 336,
            },
          ],
          title: 'OneRepublic - Run (Official Music Video)',
          videoId: 'TKkcsmvYTw4',
        },
      },
      {
        index: 59,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCYvmuw-JtVrTZQ-7Y4kd63Q',
            channelId: 'UCYvmuw-JtVrTZQ-7Y4kd63Q',
            title: 'Katy Perry',
          },
          isLiveNow: false,
          lengthSeconds: 202,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/ojpTpT5i-PI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzp3UkxagMLwv2yEEg_KMltBGEdQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/ojpTpT5i-PI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBXyxX2xY2egUaiFViUaGPZCP2UwQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/ojpTpT5i-PI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE2arZZtCeAm5-HdOM3qHH6E3GYg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/ojpTpT5i-PI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtAVrCtJOPLakeDScfM2PEBjgCEA',
              width: 336,
            },
          ],
          title: 'Katy Perry - Electric (Official Music Video)',
          videoId: 'ojpTpT5i-PI',
        },
      },
      {
        index: 60,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIwFjwMjI0y7PDBVEO9-bkQ',
            channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ',
            title: 'Justin Bieber',
          },
          isLiveNow: false,
          lengthSeconds: 264,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/HvCuQOUndgE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAkBZ6S4AVG0wFphHFlQrvJpHg3kQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/HvCuQOUndgE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKbDk8xLzG125i6A5bfnswg1TjEA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/HvCuQOUndgE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFXh_G3CLSnlknfXv0F2MM5BLXgQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/HvCuQOUndgE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATyRQ1ysVd4SB7zXW6i6L4DjnPXw',
              width: 336,
            },
          ],
          title: '"Essence" (Remix) - WizKid -  [feat. Justin Bieber & Tems] (Lyric Video)',
          videoId: 'HvCuQOUndgE',
        },
      },
      {
        index: 61,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCYLNGLIzMhRTi6ZOLjAPSmw',
            channelId: 'UCYLNGLIzMhRTi6ZOLjAPSmw',
            title: 'Shakira',
          },
          isLiveNow: false,
          lengthSeconds: 210,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/mr7ZfX1E55g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCYPZkmtmpggsDMLJhdQuNaHWJ1zA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/mr7ZfX1E55g/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCSy6EGk1TebvwiXUYuKbz3rB5xrQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/mr7ZfX1E55g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr1JtwUcQUdBiAg44zrim_2tIaZQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/mr7ZfX1E55g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7HKGFo_hHcC1-6q2SWpcHhoI6wQ',
              width: 336,
            },
          ],
          title: "Shakira - Don't Wait Up (Official Video)",
          videoId: 'mr7ZfX1E55g',
        },
      },
      {
        index: 62,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCHcb3FQivl6xCRcHC2zjdkQ',
            channelId: 'UCHcb3FQivl6xCRcHC2zjdkQ',
            title: 'Oliver Tree',
          },
          isLiveNow: false,
          lengthSeconds: 207,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/8F2s8ivKXNY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCUMHI0yHXY6DJWxJvd9FRSghbQbg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/8F2s8ivKXNY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCGoebZEIb3nYvj7kfHwtLCFePjgw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/8F2s8ivKXNY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw8KXLbOM-ocZyOvGEKzy5zO4Pgw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/8F2s8ivKXNY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg2oLk1uDuguxqGs98KbZ2OQbZJg',
              width: 336,
            },
          ],
          title: 'Oliver Tree - Life Goes On [Music Video]',
          videoId: '8F2s8ivKXNY',
        },
      },
      {
        index: 63,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCAvCL8hyXjSUHKEGuUPr1BA',
            channelId: 'UCAvCL8hyXjSUHKEGuUPr1BA',
            title: 'Shawn Mendes',
          },
          isLiveNow: false,
          lengthSeconds: 181,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/v9lZ2MEx8oU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZIMb9o25eL6jykUeDnEJej6hUKQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/v9lZ2MEx8oU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDEG6EbvVutWGLGVZsoKLYMhL87qA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/v9lZ2MEx8oU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEoK5XlUURl1-0LSCmldftskVqwA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/v9lZ2MEx8oU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE7RIGIqdRAa5jHK6x4LXaLvSuTA',
              width: 336,
            },
          ],
          title: 'Shawn Mendes, Tainy - Summer Of Love (Official Music Video)',
          videoId: 'v9lZ2MEx8oU',
        },
      },
      {
        index: 64,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC05i95k-w8CvrtZ-yGTob7A',
            channelId: 'UC05i95k-w8CvrtZ-yGTob7A',
            title: 'Alesso',
          },
          isLiveNow: false,
          lengthSeconds: 186,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Hj_AVuNHPTY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzxRlnkOuAKYxOx-Tax7Qo9csd1w',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Hj_AVuNHPTY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxmT_Gxy14i3TE_vWHRZrcshfXyw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Hj_AVuNHPTY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT3BKuqMXfq_s5_KJy8Nl-h4ANWg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Hj_AVuNHPTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOPEkv46CX4RtT7dUb_1kaC9F_Kg',
              width: 336,
            },
          ],
          title: 'Alesso & Marshmello - Chasing Stars ft. James Bay (Official Video)',
          videoId: 'Hj_AVuNHPTY',
        },
      },
      {
        index: 65,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCBVjMGOIkavEAhyqpxJ73Dw',
            channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
            title: 'Maroon 5',
          },
          isLiveNow: false,
          lengthSeconds: 188,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/U05fwua9-D4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA1Q0dS4CeJm12WpG2Lorc6mO-lRw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/U05fwua9-D4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCTLYbTBaEeU6u1EVBchQ9uT_-r1g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/U05fwua9-D4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCY28QfjEGD_N20fBNgIRnMZ-8CcQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/U05fwua9-D4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkCVHxBHT3_XnMg0cnlNtt7vl_4A',
              width: 336,
            },
          ],
          title: 'Maroon 5 - Lost (Official Music Video)',
          videoId: 'U05fwua9-D4',
        },
      },
      {
        index: 66,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC_x8HoD18XJkILQBreVENUQ',
            channelId: 'UC_x8HoD18XJkILQBreVENUQ',
            title: 'DJ Snake',
          },
          isLiveNow: false,
          lengthSeconds: 218,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/gQG_2O9Bu6c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAYxSB8A3wiH53H-8JrZv5BEDej2w',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/gQG_2O9Bu6c/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD15RN9fVopDcaiBbM0PgThs0L46g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/gQG_2O9Bu6c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG9Bf-5eOLh5ywN-zz7tqU4RpzxQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/gQG_2O9Bu6c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5iMMGH3Gc9fOPHXrYUbsIyjmZwg',
              width: 336,
            },
          ],
          title: 'DJ Snake & Selena Gomez - Selfish Love (Official Video)',
          videoId: 'gQG_2O9Bu6c',
        },
      },
      {
        index: 67,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCkIgbcsXIHz0DW2lqRh4M0g',
            channelId: 'UCkIgbcsXIHz0DW2lqRh4M0g',
            title: 'Givēon',
          },
          isLiveNow: false,
          lengthSeconds: 202,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/JRoam571b58/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBoDl0u4EuZbkOMjuSE9YYQJ7ciDw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/JRoam571b58/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCxyUDygO1KgmU7OtofP5kWN4NeZg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/JRoam571b58/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3ybawvKLUKdUzksG1SaHgMlHMlA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/JRoam571b58/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgnwqkovIWfdoWsIWJZSztaKVrvg',
              width: 336,
            },
          ],
          title: 'Giveon - For Tonight (Official Music Video)',
          videoId: 'JRoam571b58',
        },
      },
      {
        index: 68,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCkIgbcsXIHz0DW2lqRh4M0g',
            channelId: 'UCkIgbcsXIHz0DW2lqRh4M0g',
            title: 'Givēon',
          },
          isLiveNow: false,
          lengthSeconds: 248,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/uWRlisQu4fo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAyIOiFgQmVZy6f78EcgXERiWaNQQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/uWRlisQu4fo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAXBpkGD8Uva66mLgQyS8NmlBGd2A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/uWRlisQu4fo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDz0VddiAFuCiAuF8pvg3JC8BZLpg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/uWRlisQu4fo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ42WFybWOn_dz0zLzKQYIW4WanA',
              width: 336,
            },
          ],
          title: 'Giveon - Heartbreak Anniversary (Official Music Video)',
          videoId: 'uWRlisQu4fo',
        },
      },
      {
        index: 69,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCDPM_n1atn2ijUwHd0NNRQw',
            channelId: 'UCDPM_n1atn2ijUwHd0NNRQw',
            title: 'Coldplay',
          },
          isLiveNow: false,
          lengthSeconds: 257,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/3lfnR7OhZY8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDUy9Vz3zGtkcR6Vge-AppJeBe6uw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/3lfnR7OhZY8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAbrZgI1MU62kkjNv_xlUTAYYEUoQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/3lfnR7OhZY8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2crtgbmzh0Ypj3cxKstDq84fKVA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/3lfnR7OhZY8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA45jNYdeQYnC_Y8fVujfTMLJ_yOQ',
              width: 336,
            },
          ],
          title: 'Coldplay - Higher Power (Official Video)',
          videoId: '3lfnR7OhZY8',
        },
      },
      {
        index: 70,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 198,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/qShqF5FTLlg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCeQunlDiLBuuOVBDF84r-HMHosIQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/qShqF5FTLlg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAyosYSgkR52HE4wkLwMO7c1OdW_A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/qShqF5FTLlg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNbfyqso3HtaSYZtBI6elhG5XcTQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/qShqF5FTLlg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEZC3XSyg9iyZ2cLNCb8osAQYp5Q',
              width: 336,
            },
          ],
          title: 'Justin Bieber - Peaches (Clean - Lyrics) ft. Daniel Caeser & Giveon',
          videoId: 'qShqF5FTLlg',
        },
      },
      {
        index: 71,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCBVjMGOIkavEAhyqpxJ73Dw',
            channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
            title: 'Maroon 5',
          },
          isLiveNow: false,
          lengthSeconds: 229,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBmxf2ZdlK2d9ZUs_RGr1LAcX0pnQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBAOPoPCXk1yRolIsO20n63AWQ_0w',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1T9ZynDIsVi2W5vEuCYCDxLuuUQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAd5FU6FRniCT6WWoflC1cYe9oBfQ',
              width: 336,
            },
          ],
          title: 'Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion (Official Music Video)',
          videoId: 'BSzSn-PRdtI',
        },
      },
      {
        index: 72,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/HYBELABELS',
            channelId: 'UC3IZKseVpdzPSBaWxBxundA',
            title: 'HYBE LABELS',
          },
          isLiveNow: false,
          lengthSeconds: 183,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/WMweEpGlu_U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZtFcusaOqAKg5iVNuPnds1heBhA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/WMweEpGlu_U/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBsWCAsebI5LfmE9N0798ARgvN-Fg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/WMweEpGlu_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbDcwkxb12Tty_BtZ1-YBTwvSbmw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/WMweEpGlu_U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY6YizoGUeWyWtdOV93O2N9vDCuA',
              width: 336,
            },
          ],
          title: "BTS (방탄소년단) 'Butter' Official MV",
          videoId: 'WMweEpGlu_U',
        },
      },
      {
        index: 73,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCZkURf9tDolFOeuw_4RD7XQ',
            channelId: 'UCZkURf9tDolFOeuw_4RD7XQ',
            title: 'Demi Lovato',
          },
          isLiveNow: false,
          lengthSeconds: 241,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/rMmWt1VDbnc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4PxSPLjK5hcjrDdTxsy-MhoSYiw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/rMmWt1VDbnc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAU252zudtxFNuB_jhCfwfq0OxHyA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/rMmWt1VDbnc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRPnxKuiiw5HehEHxP0F37JiDKdg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/rMmWt1VDbnc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbHokftoiRLyNN4V2Zacn7x8IIjQ',
              width: 336,
            },
          ],
          title: 'Demi Lovato - Melon Cake',
          videoId: 'rMmWt1VDbnc',
        },
      },
      {
        index: 74,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCOwgc8DswjoBMuuUU2ScPvQ',
            channelId: 'UCOwgc8DswjoBMuuUU2ScPvQ',
            title: 'Ava Max',
          },
          isLiveNow: false,
          lengthSeconds: 182,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/CFMz9DOhaJ8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVeXKGApiL7mTayoUpVXemFGVlbg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/CFMz9DOhaJ8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfi277K8XiXP7bGh5pd5mW37bvzg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/CFMz9DOhaJ8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQCxlkTRJFLVHrve2ck2QfhzQXbw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/CFMz9DOhaJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3CCJehjENcPC50yE5EC2pwA6SIQ',
              width: 336,
            },
          ],
          title: 'Ava Max - EveryTime I Cry (Official Video)',
          videoId: 'CFMz9DOhaJ8',
        },
      },
      {
        index: 75,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIjYyZxkFucP_W-tmXg_9Ow',
            channelId: 'UCIjYyZxkFucP_W-tmXg_9Ow',
            title: 'Calvin Harris',
          },
          isLiveNow: false,
          lengthSeconds: 190,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/4hu5iCqQVcM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAbfdXF21UDt-dTDdViyKNnzsa04Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/4hu5iCqQVcM/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBgqFcTtNcYPAVJoantzpYYleE4Aw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/4hu5iCqQVcM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHZlS6fOQiBMcEEtaxkTMZ1fHnkA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/4hu5iCqQVcM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7VQSjz3kLvuoi9zzKaPEzpr-hug',
              width: 336,
            },
          ],
          title: 'Calvin Harris - By Your Side (Official Video) ft. Tom Grennan',
          videoId: '4hu5iCqQVcM',
        },
      },
      {
        index: 76,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCnIBmr0s31fLRhbNHqxidFg',
            channelId: 'UCnIBmr0s31fLRhbNHqxidFg',
            title: 'Clean Lyrics',
          },
          isLiveNow: false,
          lengthSeconds: 138,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Apr4vmtuf1U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDqBV9KkC7YwFSUMLH40UUIkcRHSA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Apr4vmtuf1U/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqqGvwxioM2OFxInKj_xU7KZbUIQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Apr4vmtuf1U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGIkoSE9aLeMZByb89tacfJlfQmg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Apr4vmtuf1U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtGKiQCLoDjjWE8YAccRqqhq1iuQ',
              width: 336,
            },
          ],
          title: 'Lil Nas X - MONTERO (Call Me By Your Name) (Clean Lyrics)',
          videoId: 'Apr4vmtuf1U',
        },
      },
      {
        index: 77,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCn7dB9UMTBDjKtEKBy_XISw',
            channelId: 'UCn7dB9UMTBDjKtEKBy_XISw',
            title: 'Miley Cyrus',
          },
          isLiveNow: false,
          lengthSeconds: 246,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Y0ORhLyJWuc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrB1_5HnAk0YLi3gqYqOkdLrr2wQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Y0ORhLyJWuc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQgm4o3EKXfiekJ3bpXJHIH4ZqmQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Y0ORhLyJWuc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2q6qd3fWivaf11RhPNatSM04XWw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Y0ORhLyJWuc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAibeEzJrVrQ8ktjb0Csq2__bEdNw',
              width: 336,
            },
          ],
          title: 'Miley Cyrus - Angels Like You (Official Video)',
          videoId: 'Y0ORhLyJWuc',
        },
      },
      {
        index: 78,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 215,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/KAHPqG9TMng/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARk-l-ePVgDTNRXN92HhLmb9_lKw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/KAHPqG9TMng/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCM6D0F8uw3IkzmwQ0Y6dwYI7Nxg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/KAHPqG9TMng/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtosx7tx8Zgtcu965x68gxyrbV4Q',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/KAHPqG9TMng/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-JmvuCELfALSJmMiMEiWM7ye9ww',
              width: 336,
            },
          ],
          title: 'Olivia Rodrigo - deja vu (Clean - Lyrics)',
          videoId: 'KAHPqG9TMng',
        },
      },
      {
        index: 79,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIwFjwMjI0y7PDBVEO9-bkQ',
            channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ',
            title: 'Justin Bieber',
          },
          isLiveNow: false,
          lengthSeconds: 171,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/HKMP2Woaf2E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLByKjd0vZxwcqMOc7-gKC5MnF8DrQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/HKMP2Woaf2E/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCvMq1_n1hj5UPtRQo72tovKc_MAQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/HKMP2Woaf2E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTZv8L_i20squ1N3avoPm_8hQYcQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/HKMP2Woaf2E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSYUUOKnHC9srXE0E7RHeRYzUdRw',
              width: 336,
            },
          ],
          title: 'Justin Bieber - Hold On (Lyric Video)',
          videoId: 'HKMP2Woaf2E',
        },
      },
      {
        index: 80,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCoUM-UJ7rirJYP8CQ0EIaHA',
            channelId: 'UCoUM-UJ7rirJYP8CQ0EIaHA',
            title: 'Bruno Mars',
          },
          isLiveNow: false,
          lengthSeconds: 249,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAr3qF8YJzfM3Ic0NrEpYq8BjceuA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDTxKCZ5v_MCAUfIDInd8lB726ISA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6UjJjr5Mx6jJ18FXvHq5qlBxgfA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfyU8Rh5wkgsz7oQPOAjtFmnFr6g',
              width: 336,
            },
          ],
          title: 'Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open [Official Video]',
          videoId: 'adLGHcj_fmA',
        },
      },
      {
        index: 81,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCT9zcQNlyht7fRlcjmflRSA',
            channelId: 'UCT9zcQNlyht7fRlcjmflRSA',
            title: 'ImagineDragons',
          },
          isLiveNow: false,
          lengthSeconds: 177,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/1DoI5WTjd3w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCygNkgXm_w9KNl-Yw_8GFrbqiYVg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/1DoI5WTjd3w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBggFmINAWDMad0OYvzePhepTh2gA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/1DoI5WTjd3w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAV4dIsMylQkHEEgSSVgZjxidka-Q',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/1DoI5WTjd3w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcvZjALOJ7NQ8FkXrU7OExHFKucA',
              width: 336,
            },
          ],
          title: 'Imagine Dragons - Follow You (Lyric Video)',
          videoId: '1DoI5WTjd3w',
        },
      },
      {
        index: 82,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCVtFOytbRpEvzLjvqGG5gxQ',
            channelId: 'UCVtFOytbRpEvzLjvqGG5gxQ',
            title: 'KSI',
          },
          isLiveNow: false,
          lengthSeconds: 196,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/gfHbg53ykPY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdtzq5b9ncN7EPOYI072Ain9HRHg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/gfHbg53ykPY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDcEopIBQ3Hmw1SQjdA_AmrohJYzA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/gfHbg53ykPY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQl4-FwEDziwh8G0DHG-Ox35dELg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/gfHbg53ykPY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPQagbm2BI2PWYakZipIOpOPy1ig',
              width: 336,
            },
          ],
          title: 'KSI – Holiday [Official Music Video]',
          videoId: 'gfHbg53ykPY',
        },
      },
      {
        index: 83,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0YlhwQabxkHb2nfRTzsTTA',
            channelId: 'UC0YlhwQabxkHb2nfRTzsTTA',
            title: 'Galantis',
          },
          isLiveNow: false,
          lengthSeconds: 209,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/HIv3ClkEhrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoAoenhVia-vk5nTOmAc4PzejGzw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/HIv3ClkEhrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCW7iz7j3URXb6gWVhL8VX-GQ6nkA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/HIv3ClkEhrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlhHf20Pmo7DCXRnkQTjueC2xg_Q',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/HIv3ClkEhrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALDmIx6PYD1qN107JI0lLttcFm1g',
              width: 336,
            },
          ],
          title: 'Galantis, David Guetta & Little Mix - Heartbreak Anthem (Official Music Video)',
          videoId: 'HIv3ClkEhrA',
        },
      },
      {
        index: 84,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCGDPhXrv1Pwi8GvPrRgK_JA',
            channelId: 'UCGDPhXrv1Pwi8GvPrRgK_JA',
            title: 'Blissful Mind',
          },
          isLiveNow: false,
          lengthSeconds: 249,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/9LGXATiZEKs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzXqXBToaneuO0CeFSVut0Ke6yng',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/9LGXATiZEKs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCBLlCPoXH29IenSSXjbBf4vUE74A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/9LGXATiZEKs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvjBmBLZvsm3NdyPVZLzYFtvRQdg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/9LGXATiZEKs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqGASeCU_sxkzziHKBTju9JKe3vQ',
              width: 336,
            },
          ],
          title: 'AURORA - Runaway (Lyrics)',
          videoId: '9LGXATiZEKs',
        },
      },
      {
        index: 85,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCZFWPqqPkFlNwIxcpsLOwew',
            channelId: 'UCZFWPqqPkFlNwIxcpsLOwew',
            title: 'Harry Styles',
          },
          isLiveNow: false,
          lengthSeconds: 189,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/E07s5ZYygMg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCBsBxhuRuvEUF8VruWbmG9fnJ20A',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/E07s5ZYygMg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCkvy5NqOuG8NRgKH6DSLnRkovU6Q',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/E07s5ZYygMg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBMCCtQwSJNoiesXah9HjpgqFQFg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/E07s5ZYygMg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUmlN6Fbrye8q3Ni92RMgqBHCMXA',
              width: 336,
            },
          ],
          title: 'Harry Styles - Watermelon Sugar (Official Video)',
          videoId: 'E07s5ZYygMg',
        },
      },
      {
        index: 86,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC-J-KZfRV8c13fOCkhXdLiQ',
            channelId: 'UC-J-KZfRV8c13fOCkhXdLiQ',
            title: 'Dua Lipa',
          },
          isLiveNow: false,
          lengthSeconds: 263,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/BC19kwABFwc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLANyn9qYG4rhTu0PiWwstRII8PWMg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/BC19kwABFwc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTucvpx3BTMmKnIAJ3KtXmSeS2Nw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/BC19kwABFwc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC1tc7iMHtfdFIm6Bn3u5t7UorTA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/BC19kwABFwc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT5hCdLYjgxjrXmbRoLWi6txgB1A',
              width: 336,
            },
          ],
          title: 'Dua Lipa - Love Again (Official Music Video)',
          videoId: 'BC19kwABFwc',
        },
      },
      {
        index: 87,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 272,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/ZYpwyJAAuEY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDtdo--2uhg2tmILwQahIEfLI_5Qw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/ZYpwyJAAuEY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1pYNrSGpvYhNHjP8ENUOh7FBgnA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/ZYpwyJAAuEY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjeqEWoo7Sx0XQt21E5q9pGWl-YQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/ZYpwyJAAuEY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSfjY2nfd_JCSM-ak7Ge7k9uyRHg',
              width: 336,
            },
          ],
          title: 'Olivia Rodrigo - drivers license (Clean - Lyrics)',
          videoId: 'ZYpwyJAAuEY',
        },
      },
      {
        index: 88,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCIwFjwMjI0y7PDBVEO9-bkQ',
            channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ',
            title: 'Justin Bieber',
          },
          isLiveNow: false,
          lengthSeconds: 329,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/pvPsJFRGleA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCnA0gVnvPY8WXcLMEXQWIq7SKAmw',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/pvPsJFRGleA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBgn9az0e8r4CSqXZ8gpZDUbUAapw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/pvPsJFRGleA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBN4LCSzuw00HitAIRU9RENN_7Tgg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/pvPsJFRGleA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOUP-Xc4OzJGlYM_CyAJ6nYR39Sw',
              width: 336,
            },
          ],
          title: 'Justin Bieber - Holy ft. Chance The Rapper',
          videoId: 'pvPsJFRGleA',
        },
      },
      {
        index: 89,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/c/TrendingTracksofficial',
            channelId: 'UC1S3EiYLDrrVc3Ev9rdUE6A',
            title: 'TrendingTracks',
          },
          isLiveNow: false,
          lengthSeconds: 229,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/xluYnDwdmcc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA5HNHqOYgaI5_4WOntANehghsk3w',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/xluYnDwdmcc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwpill4skQ1UudhEn9FOfBYDQx1g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/xluYnDwdmcc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmLUX9VQgqZfoIvQDkYr7CuMqUeA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/xluYnDwdmcc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuiHZp6gN-eKduFSUnIMsM909vBQ',
              width: 336,
            },
          ],
          title: 'Doja Cat - Kiss Me More (Clean - Lyrics) ft. SZA',
          videoId: 'xluYnDwdmcc',
        },
      },
      {
        index: 90,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC9CoOnJkIBMdeijd9qYoT_g',
            channelId: 'UC9CoOnJkIBMdeijd9qYoT_g',
            title: 'Ariana Grande',
          },
          isLiveNow: false,
          lengthSeconds: 178,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLejwn2LvjU8VS4vcEOwPSfDn_Pg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCNU4xpE3trByPGyBhLHukH9WrHA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCC-Ta6n1qFoIm6E9myWs8Epypcg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxz5YkFvu0_6kOji4tu1uVgd2-PQ',
              width: 336,
            },
          ],
          title: 'Ariana Grande - positions (official video)',
          videoId: 'tcYodQoapMg',
        },
      },
      {
        index: 91,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCr-yZBBIzqOkcHjmAF7YR7A',
            channelId: 'UCr-yZBBIzqOkcHjmAF7YR7A',
            title: 'Joel Corry',
          },
          isLiveNow: false,
          lengthSeconds: 190,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/mD2a9YzKV3w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDBSw94FR4e08lm59XowiASHSgTjQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/mD2a9YzKV3w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_dPmOI5KC667PFkro4CpG94Qy9g',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/mD2a9YzKV3w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjjN4BmjEZ6UhDLApQzgQnnjqLjA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/mD2a9YzKV3w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNStZl6ZhX11aAKHfkbF5dZNKh4A',
              width: 336,
            },
          ],
          title: 'Joel Corry x RAYE x David Guetta - BED [Official Video]',
          videoId: 'mD2a9YzKV3w',
        },
      },
      {
        index: 92,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCe3yZzUwpmy2eKKmF9svX0Q',
            channelId: 'UCe3yZzUwpmy2eKKmF9svX0Q',
            title: 'Jason Derulo',
          },
          isLiveNow: false,
          lengthSeconds: 215,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/fZMRc-UyPm0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAIWXKERtt-zrGEPmK_QoYN98AwkA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/fZMRc-UyPm0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC5jt_7j0um81Ir6iI3bpu0gxBVNw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/fZMRc-UyPm0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz-SCBbp57yJ0iY56ZJc4-hB-EKw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/fZMRc-UyPm0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvT6mKxsU7YRBIDEyJhs1QyN_Zgg',
              width: 336,
            },
          ],
          title: 'Jason Derulo x Nuka - Love Not War [Official Music Video]',
          videoId: 'fZMRc-UyPm0',
        },
      },
      {
        index: 93,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCN9HPn2fq-NL8M5_kp4RWZQ',
            channelId: 'UCN9HPn2fq-NL8M5_kp4RWZQ',
            title: 'Sia',
          },
          isLiveNow: false,
          lengthSeconds: 178,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/7Xfwu8NH1iI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBiJRmDcQW0Px8MV3CRtIDooLd6FA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/7Xfwu8NH1iI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBm6ldYdokuzQHvhZepEjpbSeVn0A',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/7Xfwu8NH1iI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Y4Sax9P81HhHEq3ekp6ZWHIWkg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/7Xfwu8NH1iI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBV2gD0quJS6KIhYZDh428yIz8C5g',
              width: 336,
            },
          ],
          title: 'Sia and David Guetta - Floating Through Space (Official)',
          videoId: '7Xfwu8NH1iI',
        },
      },
      {
        index: 94,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCAvCL8hyXjSUHKEGuUPr1BA',
            channelId: 'UCAvCL8hyXjSUHKEGuUPr1BA',
            title: 'Shawn Mendes',
          },
          isLiveNow: false,
          lengthSeconds: 184,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/MPbUaIZAaeA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAACELC9YjBqXlygCu8D80h4Qci2Q',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/MPbUaIZAaeA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBbtbBucjaU7Cm1NDAStx1q9ZPWnA',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/MPbUaIZAaeA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbysfuJaHqXYq1NuzO0F95gpRFIw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/MPbUaIZAaeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWCcJI9fQsEVJ9D7gag3-WKyV2Ug',
              width: 336,
            },
          ],
          title: 'Shawn Mendes, Justin Bieber - Monster (Official Music Video)',
          videoId: 'MPbUaIZAaeA',
        },
      },
      {
        index: 95,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC-J-KZfRV8c13fOCkhXdLiQ',
            channelId: 'UC-J-KZfRV8c13fOCkhXdLiQ',
            title: 'Dua Lipa',
          },
          isLiveNow: false,
          lengthSeconds: 182,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/oygrmJFKYZY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBv5yYNary7rctIE2V4au0Lqy4ujg',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/oygrmJFKYZY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw_ZJpPyBHCJXdPfPFGpGDWwY15w',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/oygrmJFKYZY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFWr_kj4lKg4eKicZZQSxc6-eLBQ',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/oygrmJFKYZY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvCQvgPpRNQe0PE3cchorQxEKkvg',
              width: 336,
            },
          ],
          title: "Dua Lipa - Don't Start Now (Official Music Video)",
          videoId: 'oygrmJFKYZY',
        },
      },
      {
        index: 96,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UC0WP5P-ufpRfjbNrmOWwLBQ',
            channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
            title: 'The Weeknd',
          },
          isLiveNow: false,
          lengthSeconds: 204,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBAVNrMb3c4LxsnWCtIDeHY0j6dNQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAHmd5Azzc49JebsCXBljsjLC29w',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApfQCjn6pAE7nTZQMcrPFfgTr1sA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqGnrUeWZx5D7BH1wN6YbLHCo7cw',
              width: 336,
            },
          ],
          title: 'The Weeknd - Blinding Lights (Official Audio)',
          videoId: 'fHI8X4OXluQ',
        },
      },
      {
        index: 97,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCveFkLdSOUsGwMJEgedO9dQ',
            channelId: 'UCveFkLdSOUsGwMJEgedO9dQ',
            title: 'Lewis Capaldi',
          },
          isLiveNow: false,
          lengthSeconds: 247,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/Jtauh8GcxBY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDBP0K9ptlK-L-70kRmhWgnxxk2zA',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/Jtauh8GcxBY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAFBdK9Wu5cxV61ADGoxqTLLZWng',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/Jtauh8GcxBY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxNdJhoblnXyv6MtuknVcfHlWLgA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/Jtauh8GcxBY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCC1tAhBTkzdd70yu1t1UHrjC7TyQ',
              width: 336,
            },
          ],
          title: 'Lewis Capaldi - Before You Go (Official Video)',
          videoId: 'Jtauh8GcxBY',
        },
      },
      {
        index: 98,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCZCjQyM-Q4r3w59tj7mmH0Q',
            channelId: 'UCZCjQyM-Q4r3w59tj7mmH0Q',
            title: 'Tanna Leone',
          },
          isLiveNow: false,
          lengthSeconds: 152,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/TDvWSxIQu3U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdTDdlk1kTh-kg4fVILvWAKjyIUQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/TDvWSxIQu3U/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhWkyCnQ-Xtt49Kstei9GwQzapjw',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/TDvWSxIQu3U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiUwAmVKYbwAKjt7lh0PzRE2xzlg',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/TDvWSxIQu3U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMCaDW1sMEZ6t8C2WDPkMNpc1Z_w',
              width: 336,
            },
          ],
          title: 'Tanna Leone - Death n’ Taxes (Official Video)',
          videoId: 'TDvWSxIQu3U',
        },
      },
      {
        index: 99,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCNL1ZadSjHpjm4q9j2sVtOA',
            channelId: 'UCNL1ZadSjHpjm4q9j2sVtOA',
            title: 'Lady Gaga',
          },
          isLiveNow: false,
          lengthSeconds: 189,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA0ngd4knygT2vw9Ljj_As7gMqGBQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAA7M61fPDQ7NHpDDgx7rOS4UcnCQ',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCcYAiN2JoMZknCU0FvB2-adxuDA',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdNrJgc3vynBDlHUPz31m3fuqigQ',
              width: 336,
            },
          ],
          title: 'Lady Gaga, Ariana Grande - Rain On Me (Official Music Video)',
          videoId: 'AoAm4om0wTs',
        },
      },
      {
        index: 100,
        type: 'video',
        video: {
          author: {
            canonicalBaseUrl: '/channel/UCKUa7K2srvoAASkphxrnRgg',
            channelId: 'UCKUa7K2srvoAASkphxrnRgg',
            title: 'Mimi Webb',
          },
          isLiveNow: false,
          lengthSeconds: 200,
          thumbnails: [
            {
              height: 94,
              url: 'https://i.ytimg.com/vi/8TLUKSXEneU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHcJA-MfH8q1-AK9z1x8qjtjElvQ',
              width: 168,
            },
            {
              height: 110,
              url: 'https://i.ytimg.com/vi/8TLUKSXEneU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaq6IAgr5fGd9lhTN-kBzJZSoNAg',
              width: 196,
            },
            {
              height: 138,
              url: 'https://i.ytimg.com/vi/8TLUKSXEneU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6vg5sVNRbwTW6v0N7ykLOJrb_vw',
              width: 246,
            },
            {
              height: 188,
              url: 'https://i.ytimg.com/vi/8TLUKSXEneU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASzcVmeYZGQWhqPxzlIWOtnebAaQ',
              width: 336,
            },
          ],
          title: 'Mimi Webb - Goodbye (Official Music Video)',
          videoId: '8TLUKSXEneU',
        },
      },
    ],
    cursorNext: null,
  };

  useEffect(() => {
    if (!playlistVideos) {
      fetch('https://jsonplaceholder.typicode.com/todos').then(() => {
        updateData('playlist', fakeApi);
      });
    }
  });

  // scroll to playing video
  useEffect(() => {
    if (playlistVideos) {
      let index = 0;
      const itemHeight = videosContainerRef.current.scrollHeight / playlistVideos.contents.length;
      index = playlistVideos.contents.findIndex((video) => video.video.videoId === videoId);
      videosContainerRef.current.scrollTop = index * itemHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{'Playlist'}</div>
      <div className={cx('items')} ref={videosContainerRef}>
        {playlistVideos &&
          playlistVideos.contents.map((video, index) => {
            const { hour, min, sec } = secToHMS(video.video.lengthSeconds);

            return (
              <Link
                to={`/watching/playlist/${playlistId}/${video.video.videoId}`}
                className={cx('item', { active: videoId === video.video.videoId })}
                onClick={() => {
                  document.title = video.video.title;
                }}
                key={video.index}
              >
                <div className={cx('thumbnail')}>
                  <img src={video.video.thumbnails[video.video.thumbnails.length - 1].url} alt="" />
                  <div className={cx('total-time')}>
                    {hour !== 0
                      ? `${hour}:${formatNumberLowerThan10MustHave0Before(
                          min,
                        )}:${formatNumberLowerThan10MustHave0Before(sec)}`
                      : `${min}:${formatNumberLowerThan10MustHave0Before(sec)}`}
                  </div>
                </div>
                <div className={cx('text')}>
                  <div className={cx('title')} title={video.video.title}>
                    {video.video.title}
                  </div>
                  <div className={cx('author')}>{video.video.author.title}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

PlaylistVideos.propTypes = {
  playlistVideos: PropTypes.object,
  indexChangeHandler: PropTypes.func,
  updateData: PropTypes.func,
};

export default PlaylistVideos;
