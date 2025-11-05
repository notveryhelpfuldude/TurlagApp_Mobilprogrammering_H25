export type GuideProfile = {
  id: string;
  name: string;
  bio: string;
  languages: string[]; // ["Norsk","Engelsk"]
  themes: string[];    // ["Historie","Mat","Natur"]
  createdAt: number;
};

export type Tour = {
  id: string;
  guideId: string;
  imageUri?: string;   // placeholder/dummy
  title: string;
  description: string;
  languages: string[];
  themes: string[];
  priceNOK: number;
  seats: number;
  createdAt: number;
};
