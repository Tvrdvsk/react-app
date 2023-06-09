export const mockData = [
  {
    id: 1,
    title: 'Pistols',
    children: [
      {
        id: 11,
        title: 'Hammer Fired',
        children: [
          { id: 1111, title: 'Beretta Pistol' },
          { id: 11111, title: 'Browning Pistol' },
          { id: 111111, title: 'Sig Saur Pistol' },
        ],
      },
      {
        id: 111,
        title: 'Striker Fired',
        children: [
          { id: 1111111, title: 'Smith & Wesson' },
          { id: 11111111, title: 'Taurus' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Revolvers',
    children: [
      { id: 22, title: 'Colt' },
      { id: 222, title: 'Ruger' },
      { id: 2222, title: 'Smith & Wesson' },
      { id: 22222, title: 'Taurus' },
    ],
  },
  { id: 3, title: 'Rifles', children: [{ id: 33, title: 'Sig Saur' }] },
  {
    id: 4,
    title: 'Shot Guns',
    children: [
      { id: 44, title: 'Browning' },
      { id: 444, title: 'Mossberg' },
    ],
  },
];
