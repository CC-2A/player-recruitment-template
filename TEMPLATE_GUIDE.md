# Player Recruitment Template Guide

This repository is a reusable static website template for football player recruitment CVs. It is designed for GitHub Pages and uses only HTML, CSS and JavaScript. The template is intentionally generic by default and can stay blank until `player-data.js` is edited.

## Files

- `index.html` — generic page structure. You normally do not need to edit this.
- `style.css` — visual design, responsive layout and mobile styling.
- `app.js` — rendering logic, multilingual labels and automatic section hiding.
- `player-data.js` — the only file you should usually edit for a new player.
- `assets/photos/` — recommended folder for hero backgrounds and player photos.
- `TEMPLATE_GUIDE.md` — this guide.

## Create a new player site

1. Copy this repository or use it as a template for the new player.
2. Open `player-data.js`.
3. Replace the generic placeholder values with the new player information.
4. Keep the same object structure so `app.js` can render the page correctly.
5. Leave optional fields as an empty string (`""`) or empty array (`[]`) if they should not appear.

Sections and buttons hide automatically when their related data is empty, so you can safely omit media, PDFs, photos or contact methods until they are ready. The default public page uses clean labels such as `Player Name`, `Main Position`, `Current Club`, `Recruitment Summary`, `Career Summary`, `Key Strengths` and `Contact Information` so the site looks intentional rather than broken while it is still blank.

## Edit player information

All player-specific fields live in `player-data.js`, including:

- Name and main position
- Roles
- Preferred foot
- Height and weight
- Date of birth
- Nationality
- Current club
- Previous college
- Availability
- Location
- Hero headline
- Recruitment summary
- Career summary
- Strengths
- Playing style
- Academic / eligibility information
- Video links
- CV PDF links
- Hero background image
- Photos
- Phone / WhatsApp
- Email
- Online profile URL

Many text fields are multilingual objects with `en`, `fr` and `es` values. Update all three languages for the best recruiter experience.

Example:

```js
heroHeadline: {
  en: "Explosive winger available for Fall 2026 recruitment.",
  fr: "Ailier explosif disponible pour le recrutement automne 2026.",
  es: "Extremo explosivo disponible para reclutamiento otoño 2026."
}
```


## Hero background photo

The hero section can use a player-specific background photo while keeping the text readable with a dark overlay. Configure it in `player-data.js`:

```js
heroBackground: "assets/photos/hero-background.jpg"
```

Recommended steps:

1. Place the image in `assets/photos/`.
2. Use `assets/photos/hero-background.jpg` for the default path, or choose another lowercase filename such as `assets/photos/player-hero.webp`.
3. Update the `heroBackground` value in `player-data.js` to match the image path.

If the field is empty or the image file is not present, the site automatically keeps the built-in CSS football pitch / stadium-style background. This makes it safe to publish the template before a final hero photo is available.

## Photos

Recommended folder:

```text
assets/photos/
```

Place player photos in `assets/photos/`, then update the `media.photos` array in `player-data.js`:

```js
photos: [
  {
    title: "Match action",
    url: "assets/photos/match-action.jpg",
    alt: "Player carrying the ball during a match"
  }
]
```

Use optimized `.jpg` or `.webp` files where possible. Keep image filenames lowercase and avoid spaces.

## PDF CV files

Recommended folder:

```text
assets/cv/
```

Add PDF files to that folder, then update `media.cvPdfs` in `player-data.js`:

```js
cvPdfs: [
  {
    title: "Recruitment CV PDF",
    url: "assets/cv/player-recruitment-cv.pdf"
  }
]
```

The CV button appears automatically when at least one valid PDF link is provided.

## Video links

Update `media.videos` in `player-data.js`:

```js
videos: [
  {
    title: "Full highlight reel",
    url: "https://www.youtube.com/watch?v=VIDEO_ID"
  },
  {
    title: "Match clips",
    url: "https://vimeo.com/VIDEO_ID"
  }
]
```

YouTube and Vimeo links are embedded automatically. Other valid web links are shown as external buttons.

## Contact details

Update the `player.contact` object in `player-data.js`:

```js
contact: {
  phone: "+1 555 123 4567",
  whatsapp: "+15551234567",
  email: "player@example.com",
  onlineProfileUrl: "https://example.com/player-profile"
}
```

Leave fields empty if you do not want them displayed. Contact buttons and rows are generated only when valid data exists.

## Language selector

The template supports English, French and Spanish. The selector is rendered in the header. The default language is controlled by:

```js
meta: {
  defaultLanguage: "en"
}
```

Valid values are `en`, `fr` and `es`.

## Deploy with GitHub Pages

1. Commit and push the repository to GitHub.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch you want to publish, usually `main`.
6. Select the root folder `/`.
7. Save the settings.
8. GitHub will provide a Pages URL after deployment completes.

Because this is a static site with `index.html`, `style.css`, `app.js` and `player-data.js`, no build step or backend is required.
