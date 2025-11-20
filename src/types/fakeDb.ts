import { GuideProfile, Tour } from "./types";

let _guides: GuideProfile[] = [];
let _tours: Tour[] = [];

const rid = () => String(Date.now()) + "-" + Math.floor(Math.random() * 1e6);

export const fakeDb = {
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
};
