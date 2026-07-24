<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/49e06f84-6c22-4010-a8a5-b200117b7b35

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Cloud sync setup (Quotes & Surcharges across devices)

By default, uploaded Quotes/Surcharges data is saved with `localStorage`,
which only persists on the browser/device it was uploaded from. To make it
follow the user across devices, the app can optionally sync that data to a
free Firebase Firestore database. If it's not configured, the app behaves
exactly as before (local-only) — nothing else breaks.

1. Go to https://console.firebase.google.com, create a project (free "Spark"
   plan is enough).
2. In the project, go to **Build → Firestore Database → Create database**.
   Any region is fine; start in test mode for now (see security note below).
3. Go to **Project settings → General → Your apps → Add app → Web (`</>`)**.
   Register the app (no need for Firebase Hosting), and copy the config
   values shown (`apiKey`, `authDomain`, `projectId`, `appId`).
4. Set these as environment variables **on Railway** (Project → Variables),
   then redeploy so the build picks them up:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_APP_ID`
5. In Firestore → Rules, since this app has no user login, restrict access
   to just the one collection it uses instead of leaving the whole database
   open:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /vt_procurement_settings/{docId} {
         allow read, write: if true;
       }
     }
   }
   ```
   This keeps data readable/writable by anyone with the app URL, which is
   fine for an internal team tool but is not a substitute for real
   authentication — don't put anything sensitive beyond quotes/surcharges
   pricing in this collection.

Once deployed, look for the "☁ Synced" badge next to **Advanced Procurement
Settings → Quotes / Surcharges** to confirm it's connected.
