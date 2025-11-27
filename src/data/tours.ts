export type Tour = {
  $id: string;
  title: string;
  location: string;
  description: string;
  distanceKm: number;
  durationHours: number;
  difficulty: 'lett' | 'middels' | 'krevende';
  priceNok: number;
  maxParticipants: number;
  spotsLeft: number;
  date: string; // ISO string eller bare "12.01.2026"
  imageUrl?: string;
  nextStart?: string;
};

/*
export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Kveldstur langs elva',
    location: 'Fredrikstad',
    description: 'Rolig tur langs elvepromenaden, passer for alle.',
    distanceKm: 4,
    durationHours: 1.5,
    difficulty: 'lett',
    priceNok: 0,
    maxParticipants: 15,
    spotsLeft: 7,
    date: '2026-01-12T18:00:00',
    imageUrl: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: '2',
    title: 'Topptur med utsikt',
    location: 'Halden',
    description: 'Litt bratt, men veldig fin utsikt på toppen.',
    distanceKm: 8,
    durationHours: 3,
    difficulty: 'middels',
    priceNok: 150,
    maxParticipants: 10,
    spotsLeft: 3,
    date: '2026-01-18T10:00:00',
    imageUrl: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: '3',
    title: 'Vinteropplevelse i skogen',
    location: 'Sarpsborg',
    description: 'Tur i rolig tempo, fokus på natur og dyrespor.',
    distanceKm: 5,
    durationHours: 2,
    difficulty: 'lett',
    priceNok: 100,
    maxParticipants: 12,
    spotsLeft: 12,
    date: '2026-02-01T11:00:00',
    imageUrl: 'https://picsum.photos/600/400?random=3',
  },
];
*/
