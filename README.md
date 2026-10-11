# Codplay

A responsive, single-page website built with HTML, CSS, and JavaScript. No frameworks, external fonts, or dependencies are required.

## Run locally

Open `index.html` directly in a browser, or serve the repository:

```sh
cd /workspace/codplay
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Stop the server with Ctrl+C.

## Files

- `index.html`: Header, navigation, three content sections (Explore, Our approach, Connect), and footer. Includes accessible headings and theme button labels.
- `styles.css`: Light and dark colors, responsive layouts, keyboard focus styles, and a CSS-only illustration. Layout adapts to phones, tablets, and desktops and respects reduced-motion preferences.
- `script.js`: Theme toggle. Starts with the system preference, saves an explicit choice in local storage, and works when storage is unavailable.

## Check the page

```sh
node --check script.js
```

In a browser, check navigation links, keyboard focus, the theme toggle and its persistence after reload. Resize to a narrow viewport to check the stacked layout and absence of horizontal scrolling. No build step is needed.
