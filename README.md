# TurlagApp_Mobilprogrammering_H25
Appen gjør det lettere for turister å finne, bestille og delta på turer, opplevelser og generell turisme med en plattform som setter sammen arrangører(guides) og brukere/turister.


# TurlagApp – Mobilapplikasjon (Expo / React Native / Appwrite)

Dette prosjektet er en rollebasert turlags-app bygget med **Expo / React Native / TypeScript** og **Appwrite** som backend.  
Appen har tre hovedroller:

- **Turist** – kan bla i turer, legge til ønskeliste, booke og se sine bookinger.
- **Guide** – kan registrere seg som guide og opprette egne turer
- **Admin** – enkel admin-del med plassholdere for fremtidig funksjonalitet.

Navigasjonen er bygget med **expo-router** og delt opp i egne “stacks” per rolle.

---

## Teknologistack

**Frontend**

- Expo / React Native
- TypeScript
- expo-router (filbasert navigasjon)
- NativeWind/Tailwind (noe styling)
- React Context for global tilstand:
  - `AuthContext` – innlogging, roller
  - `WishlistContext` – turistens ønskeliste
  - `BookingContext` – turbestillinger

**Backend**

- [Appwrite](https://appwrite.io) – skybackend for:
  - autentisering (`Account`)
  - lagring av turer (tabell/collection for turer)
- `react-native-appwrite` brukes som klientbibliotek.

**Lokale data (for guide / testing)**

- Enkel in-memory “fake DB” i `src/types/fakeDb.ts` for:
  - guide-profiler
  - turer opprettet av guider  
  (ingen persistering, data forsvinner ved restart)

---

## Prosjektstruktur (oversikt)

```text
app/
  _layout.tsx                # Root layout med AuthGateway + globale providere
  (auth)/                    # Innlogging / registrering
    _layout.tsx
    sign-in.tsx
    sign-up.tsx
  (tourist)/                 # Turist-fløy (tabs)
    _layout.tsx
    index.tsx                # Hjem (“Anbefalt i nærheten”)
    wishlist.tsx             # Ønskeliste
    bookings.tsx             # Mine bookinger
    profile.tsx              # Turist-profil
    activity/[id].tsx        # (ev. detaljvisning for turer)
    checkout/index.tsx       # Betaling / Vipps-simulering
    ticket/[bookingId].tsx   # Billett etter kjøp
    review/[bookingId].tsx   # (placeholder)
  (guide)/                   # Guide-fløy
    _layout.tsx
    index.tsx                # Velkomst
    dashboard.tsx            # Guidepanel: oversikt over egne turer
    new-tour.tsx             # Opprett ny tur (fakeDb)
    become-guide.tsx         # Skjema for å bli guide (fakeDb)
    profile.tsx              # Guideprofil (placeholder)
  (admin)/                   # Admin-fløy (placeholders)
    _layout.tsx
    dashboard.tsx
    tours.tsx
    users.tsx
    profile.tsx

  components/                # Delte UI-komponenter
    TourCard.tsx             # Kort for å vise én tur (wishlist + book)
    PrimaryButton.tsx
    lists/
      TourList.tsx           # Henter og viser liste med turer
    forms/
      LoginForm.tsx
      SignUpForm.tsx

Appwrite/
  providers/
    index.ts                 # Appwrite-klient (client, account, locale, testConnection)
    auth.tsx                 # AuthProvider (roller, login, register, logout)
    tourprovider.ts          # Hente turer fra Appwrite-tabell

src/
  context/
    WishlistContext.tsx      # Global ønskeliste for turist
    BookingContext.tsx       # Global booking-oversikt
  data/
    tours.ts                 # Tour-type + ev. lokale dummy-turer
    users.ts                 # Hardkodede testbrukere (ikke for produksjon)
  types/
    fakeDb.ts                # In-memory “DB” for guider
    types.ts                 # Typer: GuideProfile, Tour (guideversjon)

assets/
  ...                        # Bilder, ikoner, osv.
