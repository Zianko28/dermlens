# DermLens — Daily Dermoscopy PWA

Daily dermoscopy learning app. One real ISIC image, six AI-generated clinical nuggets, every day.

---

## How to deploy (5 minutes, free forever)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `dermlens`
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload these files
Upload everything in this folder maintaining the structure:
```
dermlens/
├── index.html
├── manifest.json
├── sw.js
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-120.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-180.png
    ├── icon-192.png
    ├── icon-256.png
    ├── icon-512.png
    └── apple-touch-icon.png
```

To upload: In your new repo, click **Add file → Upload files**, then drag the entire folder.

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

Your app will be live at: `https://YOUR-USERNAME.github.io/dermlens`

(Takes ~2 minutes to deploy the first time)

---

## Install on iPhone

1. Open Safari on your iPhone
2. Go to `https://YOUR-USERNAME.github.io/dermlens`
3. Tap the **Share button** (box with arrow at bottom)
4. Scroll down → tap **"Add to Home Screen"**
5. Tap **Add**

DermLens now appears on your home screen like a native app — full screen, no browser bar.

---

## Daily reminder

The app shows a banner each day you haven't opened it yet.
For a proper alarm notification, set one in the iPhone Clock app:
- Clock → Alarm → Add → set your preferred time → label it "DermLens 🔬"

---

## Image credits

Images from the HAM10000 dataset via the ISIC Archive.
License: CC-BY-NC 4.0
Citation: Tschandl P, Rosendahl C, Kittler H. The HAM10000 dataset. Sci. Data 5, 180161 (2018).
