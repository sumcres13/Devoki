# Devoki Manus hosting context

Import this repository as the finished Deuki International and Satkar Morishita website. Serve the existing files from the repository root. Preserve the current design, Japanese and English copy, routes, links, source quality, and interactions.

## Hosting

- Entry page: `index.html`.
- Other routes: `about.html`, `stores.html`, and `reservation.html`.
- Static publishing directory: repository root.
- Build command: none. There is no framework, database, backend, or package installation requirement.
- Keep the relative filenames and `assets/` paths intact. Serve `.html`, `.css`, `.js`, `.svg`, PNG, and JPEG with the correct content types.
- If a server process is needed, use `node tools/serve.cjs`. It accepts `PORT` and `HOST` environment variables; set `HOST=0.0.0.0` for a host that needs to reach the process through its network interface.
- Google Fonts, the BudouX CDN script, Google Maps, and outgoing listing links need internet access.

## Source and editing map

| File | Responsibility |
| --- | --- |
| Four root HTML files | Page content, landmarks, image references, booking links, and map embed |
| `styles.css` | Shared design and responsive rules; later refinement rules override earlier declarations |
| `script.js` | Shared header/footer, translation dictionaries, language persistence, navigation, reveals, and slideshow |
| `assets/` | Original photographs, brand logos, culinary backgrounds, and SVG artwork |
| `apply_budoux.py` | Optional maintenance utility for Japanese phrase boundaries |
| `requirements-build.txt` | Dependency for that optional utility |
| `SOURCE_MANIFEST.json` | Original source byte sizes and SHA-256 checksums |

The HTML loads `styles.css?v=15` and `script.js?v=10`. Keep these versions initially and increment the corresponding query when intentionally changing a shared file. The header and footer are injected by `script.js`, so that script must load on every page.

## Business content

- Company: Deuki International合同会社 / Deuki International LLC.
- Restaurant: インド料理＆バー サッカール森下店 / Satkar Morishita.
- Address: 東京都江東区森下１丁目１０−７.
- Opening hours: every day, 11:00–15:00 and 17:00–22:45; no regular holidays.
- Phone: 03-3633-5232.
- Email: thakurk401@gmail.com.
- Japanese director title: `代表取締役`; greeting label: `代表からの挨拶`.
- Retain the existing reservation, delivery, Facebook, telephone, email, and map destinations.

## Approved appearance and behavior

- Cream and soft beige surfaces, burgundy/red accents, serif headings, and restaurant photography.
- Home hero: food photograph, existing Japanese/English copy and calls to action. Transparent home navigation uses gold accents and gold hover glow; opaque and inner-page navigation uses red.
- Language control: compact red segmented `JP / EN` pill. It switches page copy and remembers the selection in local storage under `satkarLanguage`.
- Home store feature: enlarged card, white header, exterior photo, and three feature rows. Retain its current proportions.
- Home about text: enlarged heading and copy sized to balance the adjacent interior photograph.
- Home reservation band: lighter overlay than the reservation page. SNS band uses burgundy borders at top and bottom.
- About page: portrait shows the existing source image with `object-fit: contain`; keep the portrait frame and adjacent message dimensions. No decorative line before the greeting label. Values use culinary background artwork with consistent card colors.
- Reservation page: food background with a black gradient at `.234` to `.468` opacity, white headings, and subtle text shadows. Preserve the established booking and delivery brand colors.
- Booking/delivery cards: responsive lift and momentary skewed light sweep on interaction, crisp labels and logos, press feedback, focus treatment, and existing reduced-motion/touch rules. The shine is above card children but ignores pointer events.
- Stores page: mobile exterior photograph fills the card width correctly. Keep its responsive frame and crop rules.
- Gallery: soft beige with small, faint curry-bowl, herb, chilli, and mortar illustrations only in the margins. Fewer decorations appear at narrow widths. Keep artwork clear of the title and photo panel. Do not restore the previous full photographic/spice background.
- Gallery slideshow: advances every five seconds when idle; supports arrows, dots, and play/pause. Hover, keyboard focus, interaction, and a hidden tab pause automatic changes. Reduced-motion preferences are respected.
- Location section: white background, smaller proportional heading, and a wider/taller map. Keep the responsive map size and existing embed.

## Lossless transfer

All original source and asset bytes are retained. The two original documentation files are also preserved under `context/original/`; the root documentation has been updated for this handoff. `.gitattributes` disables automatic text conversion. No image was recompressed, converted, or resized for GitHub.

After cloning, run `node tools/verify-source.cjs`. This compares the imported source to `SOURCE_MANIFEST.json`. Keep the existing assets and data URLs, UTF-8 Japanese text, zero-width Japanese phrase boundaries, SVG structure, image dimensions, and case-sensitive paths intact. A rewrite, redesign, conversion to a framework, or asset optimization should be a separate requested change.

## Import review

Open all four pages at desktop and mobile widths. Check both languages, the mobile menu, gallery arrows and play/pause, booking and delivery hover effects, the store photo, the map, and the outgoing links. The site is a static information website; reservations and deliveries are completed on the linked external services.
