# Adare Restaurant

A responsive restaurant website for Adare Restaurant in County Limerick, Ireland. The site introduces the restaurant, shares its seasonal menu, and helps visitors find the location or enquire about a reservation.

## Pages

- **Home (`index.html`)** — restaurant introduction, story, location, and reservation links.
- **Our menu (`menu.html`)** — menu items grouped by course, with controls to filter the courses.

## Features

- Responsive layout with mobile navigation
- Menu filters for starters, mains, and desserts
- Reservation links that open an email to `hello@adare.ie`
- Location link to Google Maps
- HTML, CSS, and vanilla JavaScript; no build step or package installation required

## Run locally

You can open `index.html` directly in a browser. Or, from the project directory, start a simple local server:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project files

```text
.
├── index.html    # Home page
├── menu.html     # Restaurant menu
├── style.css     # Site styles and responsive layouts
├── site.js       # Navigation and menu interactions
└── Images/       # Logo and image assets
```

The site loads its typefaces from Google Fonts, so an internet connection is needed for those fonts to appear. The menu, styles, and page structure are local.

## Built with

- HTML
- CSS
- JavaScript
