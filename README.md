# SureRoute — Landing Page

Static landing page for a **programmable logistics insurance** startup (API-native per-shipment cargo coverage, IoT-verified condition data, instant parametric payouts). No build step, no dependencies — plain HTML/CSS/JS.

## Rebranding (company name / domain)

Edit the three values at the top of **`config.js`**:

```js
const BRAND = {
  companyName: "SureRoute",
  domain: "sureroute.example.com",
  contactEmail: "hello@sureroute.example.com"
};
```

Every occurrence of the company name, domain, and email in the page is injected from this file at load time. Nothing else needs to change.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this folder's contents to it:
   ```sh
   git init
   git add .
   git commit -m "Landing page"
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
3. The site goes live at `https://<user>.github.io/<repo>/`.

For a custom domain, add it under **Settings → Pages → Custom domain** (GitHub creates a `CNAME` file) and point your DNS at GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure & copy |
| `style.css` | All styling (theme variables at top of file) |
| `config.js` | Brand config + injection script |

## Notes

- Theme: coral + deep slate, two-tone dotted-route hero band, dark stat tiles, Albert Sans with monospace step headings (`--ink`, `--accent` in `style.css`).
- Hero visual is a pure HTML/CSS **shipment sensor timeline**: reefer shipment events (departed → checkpoint → temperature excursion → highlighted parametric payout card) with a data-hash footer.
- The email form shows a confirmation message client-side; wire it to Formspree, Buttondown, or your own endpoint to actually collect emails.
- Logo is an inline SVG dashed-route (A→B) mark in `index.html` (nav + footer) — swap both `<svg class="logo-mark">` blocks to change it.
