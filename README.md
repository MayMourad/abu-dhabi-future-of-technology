# Abu Dhabi: The Future of Technology · أبوظبي: مستقبل التكنولوجيا

A bilingual (English / Arabic, LTR / RTL) student research website by **Shaden Ahmed Mourad, Grade 6E**.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build on http://localhost:4173
```

## Structure

| Folder | Purpose |
|---|---|
| `src/i18n` | `ui.ts` holds every interface string in both languages; `I18nProvider` sets `lang`/`dir`, persists the choice in `localStorage` |
| `src/data` | Researched content as bilingual objects: centers, technologies, timeline, quiz, interest finder, ecosystem, future, sources |
| `src/sections` | One file per page section |
| `src/components` | Header, dialog, demos, SVG art, reveal/tilt/magnetic helpers |
| `src/three` | React Three Fiber scenes (hero skyline + seven mini scenes), lazy-loaded; pauses off-screen, respects reduced motion, falls back to SVG without WebGL |
| `src/styles` | `tokens.css` (palette, type), `base.css`, `components.css`, `sections.css` |

## Notes on content

- Facts come from the official sites listed in the *Research & References* section. The MBZUAI and UAE Space Agency sites blocked automated reading when this was built, so their dates were confirmed with news / press sources, which are listed separately.
- The map is explicitly a **conceptual** map, not a geographic one.
- 3D is original React Three Fiber / Three.js work. No Spline scene is embedded because no published Spline scene URL was available (no fake embeds were added).
