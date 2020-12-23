import { Level } from '../models/level';

const youtube = 'https://www.youtube.com/';

export const levels: Level[] = [
  {
    id: 1,
    title: 'Level 1',
    dances: [
      {
        id: 1,
        name: 'Cha Cha Cha',
        videos: [
          {
            level_id: 1,
            link: youtube,
            title: 'Grundschritt',
            dance_id: 1,
          },
          {
            level_id: 1,
            link: youtube,
            title: 'Promenade',
            dance_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 1,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 1,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 1,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 1,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Level 2',
    dances: [
      {
        id: 1,
        name: 'Cha Cha Cha',
        videos: [
          {
            level_id: 2,
            link: youtube,
            title: 'Grundschritt',
            dance_id: 1,
          },
          {
            level_id: 2,
            link: youtube,
            title: 'Promenade',
            dance_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 2,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 2,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
    ]
  },
  {
    id: 3,
    title: 'Level 3',
    dances: [
      {
        id: 1,
        name: 'Cha Cha Cha',
        videos: [
          {
            level_id: 3,
            link: youtube,
            title: 'Grundschritt',
            dance_id: 1,
          },
          {
            level_id: 3,
            link: youtube,
            title: 'Promenade',
            dance_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 3,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 3,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
    ]
  },
  {
    id: 4,
    title: 'Level 4',
    dances: [
      {
        id: 1,
        name: 'Cha Cha Cha',
        videos: [
          {
            level_id: 4,
            link: youtube,
            title: 'Grundschritt',
            dance_id: 1,
          },
          {
            level_id: 4,
            link: youtube,
            title: 'Promenade',
            dance_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 4,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 4,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
    ]
  },
  {
    id: 5,
    title: 'Level 5',
    dances: [
      {
        id: 1,
        name: 'Cha Cha Cha',
        videos: [
          {
            level_id: 5,
            link: youtube,
            title: 'Grundschritt',
            dance_id: 1,
          },
          {
            level_id: 5,
            link: youtube,
            title: 'Promenade',
            dance_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Tango',
        videos: [
          {
            level_id: 5,
            link: youtube,
            title: 'Promenade',
            dance_id: 2,
          },
          {
            level_id: 5,
            link: youtube,
            title: 'Rechtskreisel',
            dance_id: 2,
          },
        ],
      },
    ]
  },
];