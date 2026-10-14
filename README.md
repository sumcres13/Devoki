# Devoki website

Complete Japanese / English static website for Deuki International LLC and its Indian restaurant and bar, Satkar Morishita. The repository name is `Devoki`; retain the business name shown on the website.

For a Manus import, read [MANUS_CONTEXT.md](MANUS_CONTEXT.md) first. The original HTML, CSS, JavaScript, photographs, illustrations, and logos are included at their original quality.

## Open locally

Run `python -m http.server 8088` from this folder and visit `http://localhost:8088/`. Alternatively, with Node.js installed, run `node tools/serve.cjs`. No installation or build step is required.

## Pages

- `index.html`: Restaurant introduction, featured food and Facebook link.
- `about.html`: Representative director's message, values, and company information.
- `stores.html`: Store description, hours, address, phone, photos, and map.
- `reservation.html`: Tabelog, Gurunavi, phone, and delivery links.

## Store details

- Name: インド料理＆バー サッカール森下店
- Address: 東京都江東区森下１丁目１０−７
- Hours: 11:00–15:00 and 17:00–22:45 daily; no regular holidays
- Phone: 03-3633-5232
- Company: Deuki International合同会社
- Email: thakurk401@gmail.com

The language switch remembers the visitor's choice in local storage. Google Maps, Google Fonts, and the BudouX script load from the internet. Reservation and delivery links open the supplied third-party listings; the site does not process reservations itself.

## Files

Upload the four HTML pages, `styles.css`, `script.js`, and the `assets/` folder together. Open `index.html` as the entry page. No build or package installation is required.

## Preserve the files exactly

`.gitattributes` disables line-ending conversion for all files. Images are retained without recompression or resizing. `SOURCE_MANIFEST.json` records SHA-256 hashes and byte sizes of the 40 original source files, including the original documentation snapshots in `context/original/`. Run `node tools/verify-source.cjs` after cloning to check those bytes. The manifest describes the initial imported source; intentional future edits will change its hashes.

`apply_budoux.py` and `requirements-build.txt` are optional copy-maintenance tools. They are not needed to deploy or serve the existing website.
