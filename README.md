# musescore-xml-viewer

A lightweight, React-based web application that parses and renders sheetmusic MusicXML files directly in the browser using OpenSheetMusicDisplay (OSMD). Designed to bridge the gap between static notation and interactive web-based music education tools.

## Description

This project solves the "heavy software" problem for musicians. Instead of requiring a full desktop installation of MuseScore or Finale to view a chart or signing up for various websites to view watermarked copies of sheetmusic, this web-based viewer parses MusicXML data and renders high-quality notation directly in the browser. It allows for quick reference of arrangements and compositions without leaving the web environment.

## Why I Built It

As a guitarist and arranger, I often need to share charts with students or collaborators on the fly. I wanted to create a tool that removed the barrier of entry for viewing scores.  Not everyone has the robust sheetmusic software that I do, and I figured creating a smaller version with minimal fuss was a great solution. My background in Psychology informs the UI, reducing the "cognitive load" by focusing strictly on readability and accessibility across devices. I compare this to a "pdf-viewer" vs. "pdf-editor" situation.

##Tech Stack
**Frontend:** React & Vite
**Music Rendering:** OpenSheetMusicDisplay (OSMD) (VexFlow?)
**Data Format:** MusicXML
**Styling:** Responsive CSS for sheet music scaling

## Project Status: Active Development
- [ ] **Up Next:** Create skeleton (front-end, back-end, middleware, minimum functionality)
- [ ] **Up Next:** Successful parsing of multi-measure MusicXML files.
- [ ] **Up Next:** Responsive rendering engine implementation.
- [ ] **Up Next:** MIDI playback integration for audio reference.
- [ ] **Up Next:** Transposition toggle for different instrument keys (Eb, Bb, etc.).

---

Developed by Patrick Ruckman | Software Developer, Music Program Director, Guitarist
