# PlumbPro — Phase 1

Premium plumbing service website. This delivery covers **Phase 1** of the build:
project scaffold, Firebase config, authentication, role-based route protection,
and the appointment status engine that every later feature depends on.

## What's built and real (not mocked)

- **Auth**: email/password register + login, Google sign-in, forgot-password
  email, logout — all via Firebase Auth.
- **Roles**: every new user gets a Firestore `users/{uid}` doc with
  `role: "customer"` by default. Role can never be set to `admin` from the
  client — see `firestore.rules`. To make yourself an admin for testing,
  manually edit your user doc's `role` field to `"admin"` in the Firebase
  console (or build the small Cloud Function upgrade path noted below).
- **Route protection**: `ProtectedRoute` (must be logged in), `AdminRoute`
  (must have `role: admin`, redirects to `/unauthorized` otherwise), and
  `PublicRoute` (kicks logged-in users away from `/login`, `/register`).
  These are UX guards — `firestore.rules` is the actual security boundary.
- **Appointment state machine**: `src/utils/appointmentRules.js` is the single
  source of truth for pending → confirmed → completed/cancelled transitions.
  `src/firebase/appointments.js` enforces it before every write, and
  `firestore.rules` enforces the same rule server-side.
- **Customer dashboard + profile**: read real appointment data from
  Firestore, with a genuine empty state (no fake data).

## What's a placeholder (by design, not an oversight)

Pages like Services, Our Work, Reviews, FAQ, the multi-step booking flow, and
the whole admin CRUD UI (services/appointments/inquiries/testimonials/users)
are routed and scaffolded with a plain "coming in the next phase" placeholder
(`ComingSoon` component) rather than filled with fake buttons that don't
actually do anything — per the "no fake functionality" rule in your brief.

## Setup

```bash
npm install
cp .env.example .env
# fill in .env with your Firebase project's web app config
npm run dev
```

### Firebase project setup checklist
1. Create a Firebase project → add a Web App → copy the config into `.env`.
2. **Authentication** → Sign-in method → enable **Email/Password** and **Google**.
3. **Firestore Database** → create in production mode.
4. Deploy `firestore.rules` (Firebase console → Firestore → Rules → paste, or
   `firebase deploy --only firestore:rules` if you have the CLI set up).
5. To test the admin flow: register a normal account, then in the Firestore
   console change that user's `role` field from `customer` to `admin`.

### On custom claims vs. Firestore role field
The brief mentions custom claims as the preferred approach for role checks.
Custom claims need a Cloud Function (Admin SDK) to set them on user
creation/promotion — that's backend infra outside a pure frontend scaffold.
This build uses a Firestore `role` field instead, locked down by
`firestore.rules` so it can't be self-promoted. If/when you want to add a
Cloud Function later, `AuthContext.isAdmin` and `firestore.rules`'s
`isAdmin()` are the only two places that would need to switch to reading
`request.auth.token.role`.

## Folder structure

```
src/
  firebase/     # config.js, users.js, appointments.js — all Firestore/Auth I/O
  context/      # AuthContext
  routes/       # ProtectedRoute, AdminRoute, PublicRoute
  layouts/      # PublicLayout, CustomerLayout, AdminLayout
  components/   # Navbar, Footer, StatusBadge, EmptyState, LoadingSpinner, ComingSoon
  utils/        # appointmentRules.js — the state machine
  pages/        # public pages
  customer/     # customer portal pages
  admin/        # admin portal pages
```

## Next phases (suggested order)

1. Services system (Firestore CRUD, public Services + ServiceDetails pages)
2. Multi-step booking flow wired to `createAppointment`
3. Admin appointment management UI (confirm/cancel/complete using the
   existing `changeAppointmentStatus` + `canConfirm`/`canAdminCancel`/`canComplete` helpers)
4. Inquiries + testimonials
5. Final responsive/animation polish pass
