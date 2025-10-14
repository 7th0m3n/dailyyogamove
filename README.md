# DailyYogaMove

Mobile-first single-file SPA for yoga teachers and students. One deployable `index.html` with inline CSS and JS. No frameworks. Hash-based routing. Accessible UI.

## Quick Start

Open locally:

```bash
# Windows
start index.html
# macOS
open index.html
# Linux
xdg-open index.html
```

Demo flow:
- Go to `#/join` → enter `DEMO` → you land in `#/portal`.
- Go to `#/teacher` → enter any email → create/publish a Signature Sequence → see it under Strengthāsana in `#/portal`.

Deploy with GitHub Pages:
- Repo → Settings → Pages → Deploy from a branch → `main` (root).

## Features

- Landing page with CTAs: Enter Teacher Code, I’m a Teacher, Explore Demo
- Teacher Portal (fake auth by email):
  - Profile (name, logo URL, brand color, welcome)
  - Teacher Code (auto-generated, copyable)
  - Modules toggle: BreathPacer, Paripūrṇa Prāṇa, Strengthāsana, Mantras
  - Signature Sequences: draft/publish, duplicate, drag to reorder (keyboard fallback), share link + QR
  - Programs: compose schedules, assign to All or specific students, due dates
  - Assignments table and Invite Student link
  - Mantras: core + custom, publish/unpublish
  - Studio Mode: sub-teachers with their own codes (share studio theme)
- Student Portal (white-labeled by teacher):
  - Assigned programs with completion tracking (local persistence)
  - Strengthāsana: published sequences with step-by-step player (pose name, cues, timers)
  - Mantras: show meaning/usage; mark recited
  - BreathPacer + Paripūrṇa Prāṇa: simple working widgets with presets

## Architecture

- Single file: `index.html` contains markup, styles, and scripts
- Router: hash-based with routes `#/`, `#/join`, `#/teacher`, `#/portal`
- State: `localStorage` (debounced writes)
  - `teachers` map keyed by ID
  - `currentTeacherId`, `activeTeacherId`, `demoTeacherId`
- DEMO teacher is seeded with sample sequences, a 2-week program, and code `DEMO`

### Storage Shape (MVP)

```js
teachers: {
  [id]: {
    id, email, name, logoUrl, color, welcome, code, studioMode,
    subTeachers:[{id,name,email,code}],
    modules:{breathpacer:true, pranayama:true, strengthasana:true, mantras:true},
    sequences:[{ id, title, level, tags, duration, status, poses:[{name,cues,hold}], breathNotes, mediaUrl }],
    programs:[{ id, title, description, schedule:[{day,label,sequenceId}] }],
    assignments:[{ studentCode, programId, assignedAt, dueAt }],
    students:[{ code, createdAt }],
    mantras:[{ id, title, text, meaning, usage, recitations, published }],
    analytics:{ portalVisits:[], completions:[] }
  }
}
```

## Accessibility & UX

- Semantic landmarks, ARIA labels, focus rings
- Dark gradient theme, Inter/system fonts, soft cards
- Keyboard-accessible drag fallback (up/down buttons)
- Copy buttons with tooltip “Copied”
- Smooth scroll and 404 → `#/`

## Performance

- No external JS libraries (Google Fonts allowed)
- Debounced `localStorage` saves

## Security (MVP)

- Fake auth only (email entry) for teacher session
- Sub-teacher codes map to the parent studio portal

## TODOs for Production

- TODO: replace localStorage with Supabase (auth, RLS, tables: teachers, students, sequences, programs, assignments, mantras)
- TODO: replace fake auth with magic-link

## License

This project is licensed under the MIT License. See `LICENSE` for details.


