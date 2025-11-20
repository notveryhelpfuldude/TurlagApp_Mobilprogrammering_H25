export type GuideProfile = {
  id: string;
  name: string;
  bio: string;
  rating: number;
  totalTours: number;
  upcomingTours: number;
};

export type GuideTour = {
  id: string;
  title: string;
  date: string;
  participants: number;
  maxParticipants: number;
};

export const GUIDE_PROFILE: GuideProfile = {
  id: "guide-001",
  name: "Luka",
  bio: "Fredrikstad native",
  rating: 4.8,
  totalTours: 42,
  upcomingTours: 3,
};

export const GUIDE_TOURS: GuideTour[] = [
  {
    id: "tour-101",
    title: "Kveldstur i sentrum",
    date: "2026-01-18T18:00:00",
    participants: 8,
    maxParticipants: 12,
  },
  {
    id: "tour-102",
    title: "Rundtur ved Dammene",
    date: "2026-02-02T10:00:00",
    participants: 5,
    maxParticipants: 15,
  },
  {
    id: "tour-103",
    title: "Hvaler",
    date: "2026-02-10T14:00:00",
    participants: 12,
    maxParticipants: 12,
  },
];
