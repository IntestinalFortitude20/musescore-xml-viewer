# MuseScore XML Viewer

A lightweight, mobile-friendly React web application for viewing and inspecting music notation files directly in the browser — no desktop software installation required.

Upload a `.mscz`, `.mscx`, or `.musicxml` file and explore its contents: score metadata, instrument/part list, measure structure, and (coming soon) rendered notation.

---

## Why I Built It

As a guitarist and arranger, I often need to share charts with students or collaborators on the fly. I wanted a tool that removed the barrier of entry for viewing scores. Not everyone has the robust sheet music software I do, and I figured creating a smaller "viewer vs. editor" tool was a great solution. My background in Psychology informs the UI, reducing cognitive load by focusing strictly on readability and accessibility across devices.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript |
| Build tool | Vite 6 |
| Music Rendering _(planned)_ | OpenSheetMusicDisplay (OSMD) / VexFlow |
| Styling | Responsive CSS (mobile-first, no framework) |

---

## Local Development

### Prerequisites

- **Node.js** v18 or later (v20+ recommended). Check with `node --version`.
- **npm** v9+ (comes with Node).

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on file changes.

### Build for production

```bash
npm run build
```

Output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Near-Term Roadmap

| Issue | Milestone |
|-------|-----------|
| [#1](https://github.com/IntestinalFortitude20/musescore-xml-viewer/issues/1) | ✅ Project scaffold (this PR) |
| [#2](https://github.com/IntestinalFortitude20/musescore-xml-viewer/issues/2) | File upload UI: drag-and-drop + file picker |
| [#3](https://github.com/IntestinalFortitude20/musescore-xml-viewer/issues/3) | `.mscz` ingestion — unzip in-browser, extract XML |
| [#4](https://github.com/IntestinalFortitude20/musescore-xml-viewer/issues/4) | Notation rendering research (OSMD / VexFlow) |

### Format support

- **`.mscz`** — MuseScore compressed format (zip containing `.mscx` XML). Primary target for issue #3.
- **`.mscx`** — MuseScore uncompressed XML.
- **`.musicxml` / `.xml`** — MusicXML (international standard, widely supported).
- **`.mxl`** — Compressed MusicXML.

---

## Project Structure

```
src/
  components/
    Header.tsx          # App title bar
    FileUploadPanel.tsx # Drag-and-drop / file picker (issue #3)
    ScoreInfo.tsx       # Extracted metadata display (issue #3)
    RenderingArea.tsx   # Notation canvas placeholder (issue #4)
  App.tsx
  main.tsx
index.html
vite.config.ts
```

---

Developed by Patrick Ruckman | Software Developer, Music Program Director, Guitarist
