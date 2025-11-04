export type GuideProfile = {
  id: string;
<<<<<<< HEAD
  name: string;
  bio: string;
  languages: string[]; // ["Norsk","Engelsk"]
  themes: string[];    // ["Historie","Mat","Natur"]
=======
  /** Hvem denne profilen tilhører (bruker-ID) */
  userId: string;

  name: string;
  displayName?: string;

  bio?: string;
  languages: string[];
  themes: string[];          


  priceNOK?: number;         
  availability?: string;     
  avatarUri?: string;      

>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
  createdAt: number;
};

export type Tour = {
  id: string;
  guideId: string;
<<<<<<< HEAD
  imageUri?: string;   // placeholder/dummy
=======

  imageUri?: string;         
>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
  title: string;
  description: string;
  languages: string[];
  themes: string[];
  priceNOK: number;
  seats: number;
<<<<<<< HEAD
=======

  nextStart?: string;

>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
  createdAt: number;
};
