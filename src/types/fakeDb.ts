import { GuideProfile, Tour } from "./types";

<<<<<<< HEAD
let _guides: GuideProfile[] = [];
let _tours: Tour[] = [];

// Enkel id-generator (holder i alpha, bytt til uuid senere)
const rid = () => String(Date.now()) + "-" + Math.floor(Math.random() * 1e6);

export const fakeDb = {
=======
// --- intern "DB" i minnet ---
let _guides: GuideProfile[] = [];
let _tours: Tour[] = [];

// enkel id-generator 
const rid = () => String(Date.now()) + "-" + Math.floor(Math.random() * 1e6);

(function seed() {
  if (_guides.length === 0) {
    const g1: GuideProfile = {
      id: rid(),
      userId: "current-user-id",
      displayName: "Erik Eksempel",
      bio: "Lokalhistoriker og friluftsguide.",
      languages: ["Norsk", "Engelsk"],
      themes: ["Historie", "Natur", "Mat"],
      priceNOK: 500,
      availability: "Man–Lør",
      createdAt: Date.now(),
    };
    _guides.push(g1);

    _tours.push(
      {
        id: rid(),
        guideId: g1.userId,
        title: "Historisk vandring",
        description: "Guidet tur i gamlebyen.",
        languages: ["Norsk"],
        themes: ["Historie"],
        priceNOK: 350,
        seats: 10,
        nextStart: "14:10",
        createdAt: Date.now(),
      },
      {
        id: rid(),
        guideId: g1.userId,
        title: "Mat & marked",
        description: "Smak deg gjennom byen.",
        languages: ["Norsk", "Engelsk"],
        themes: ["Mat"],
        priceNOK: 420,
        seats: 8,
        nextStart: "10:00",
        createdAt: Date.now(),
      }
    );
  }
})();

// --- offentlig API ---
export const fakeDb = {
  // eksisterende
>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
  getGuides(): GuideProfile[] {
    return _guides;
  },
  getTours(): Tour[] {
    return _tours;
  },
  createGuideProfile(input: Omit<GuideProfile, "id" | "createdAt">): GuideProfile {
    const row: GuideProfile = { id: rid(), createdAt: Date.now(), ...input };
    _guides = [row, ..._guides];
    return row;
  },
  createTour(input: Omit<Tour, "id" | "createdAt">): Tour {
    const row: Tour = { id: rid(), createdAt: Date.now(), ...input };
    _tours = [row, ..._tours];
    return row;
  },
<<<<<<< HEAD
=======

  getMyTours(userId: string): Tour[] {
    return _tours.filter((t) => t.guideId === userId);
  },

  getMyGuideProfile(userId: string): GuideProfile | null {
    return _guides.find((g) => g.userId === userId) ?? null;
  },

  updateGuideProfile(profile: GuideProfile): GuideProfile {
    const idx = _guides.findIndex((g) => g.id === profile.id);
    if (idx === -1) {
      _guides = [profile, ..._guides];
      return profile;
    }
    _guides[idx] = { ..._guides[idx], ...profile };
    return _guides[idx];
  },
>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
};
