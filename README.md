# FamilyEntitled — Deployment Guide

## Site Structure

```
/
├── index.html                    ← Landing page
├── tool.html                     ← Tool page (loads the React app)
├── privacy.html                  ← Privacy policy
├── terms.html                    ← Terms of use
└── family-entitlements-tool.jsx  ← The React tool component
```

---

## Quick Start (Development)

The `tool.html` file loads React via CDN and uses Babel in the browser. This works for testing but is NOT suitable for production (slow, insecure).

To test locally:
1. Install a simple local server: `npm install -g serve`
2. Run from the project folder: `serve .`
3. Open `http://localhost:3000`

---

## Production Deployment (Recommended)

### Option 1: Vite (Best)

1. Create a Vite project:
   ```bash
   npm create vite@latest familyentitled -- --template react
   cd familyentitled
   npm install
   ```

2. Replace `src/App.jsx` with the contents of `family-entitlements-tool.jsx`

3. Copy `index.html`, `privacy.html`, `terms.html` into the `/public` folder

4. Build: `npm run build`

5. Deploy the `/dist` folder to any static host

### Option 2: Netlify (Easiest)

1. Follow the Vite setup above
2. Push to GitHub
3. Connect repo to Netlify
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy — Netlify handles HTTPS automatically

### Option 3: GitHub Pages

1. Follow Vite setup
2. Install gh-pages: `npm install gh-pages --save-dev`
3. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

---

## Domain Setup

Recommended domain registrars (UK):
- **Namecheap** — typically £8–12/yr for .co.uk
- **123 Reg** — UK-based, good support
- **Google Domains** (now Squarespace Domains)

Recommended domain names (check availability):
- `familyentitled.co.uk`
- `familyentitlements.co.uk`
- `ukfamilyentitled.co.uk`
- `myfamilyentitled.co.uk`

---

## Hosting Costs

| Option | Cost | Notes |
|--------|------|-------|
| Netlify (free tier) | £0/mo | 100GB bandwidth, HTTPS included, perfect for launch |
| Vercel (free tier) | £0/mo | Similar to Netlify |
| GitHub Pages | £0/mo | Free with public repo |
| Cloudflare Pages | £0/mo | Best CDN performance globally |

**Recommended: Start on Netlify free tier. You won't need to upgrade until you're getting tens of thousands of visitors per month.**

---

## Adding Google AdSense

1. Apply at https://adsense.google.com with your domain
2. Once approved, you'll get a publisher ID: `ca-pub-XXXXXXXXXXXXXXXX`
3. Uncomment the ad slots in `tool.html`
4. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID
5. Replace the `data-ad-slot` values with your actual ad slot IDs from AdSense

Ad slots are pre-positioned in `tool.html`:
- **Above the tool** — leaderboard format, shown to all visitors
- **Below results** — shown when users finish and see their results

---

## SEO Setup

After deploying:

1. **Google Search Console**: Add your domain at search.google.com/search-console
2. **Submit sitemap**: Create `sitemap.xml` listing your pages
3. **Google Analytics** (optional): Add GA4 tag to all pages
4. **Bing Webmaster Tools**: Also submit at bing.com/webmasters

### Key pages to rank for:
- "UK family entitlements checker"
- "free childcare hours calculator"
- "Child Benefit eligibility calculator"
- "Tax-Free Childcare calculator UK"
- "what benefits can I claim as a parent UK"
- "30 hours free childcare calculator"
- "free school meals eligibility checker"
- "HAF programme eligibility"

---

## Content to add (for AdSense approval + SEO)

Before applying for AdSense, add 4–6 supporting articles to the site:

1. "The complete guide to 30 hours free childcare in 2025"
2. "Tax-Free Childcare vs Universal Credit childcare: which is better?"
3. "The pension contribution trick that restores your childcare entitlements"
4. "Free School Meals: who qualifies and what else it unlocks"
5. "Child Benefit 2025: the HICBC taper explained simply"
6. "Holiday Activities and Food (HAF): what it is and how to get it"

These articles support the tool, answer questions people search for, and satisfy AdSense's content requirements. Each should be 800–1,500 words, accurate, and link to the tool.

---

## Monthly Costs Summary

| Item | Cost |
|------|------|
| Domain (.co.uk) | ~£10/yr (~£0.83/mo) |
| Hosting (Netlify free) | £0 |
| Email (Cloudflare Email Routing) | £0 |
| Analytics (Plausible) | £7/mo optional |
| **Total minimum** | **~£0.83/mo** |

---

## Legal Checklist

- [x] Privacy Policy — `privacy.html`
- [x] Terms of Use — `terms.html`
- [ ] Update contact email addresses in both pages
- [ ] Register as a data controller with the ICO (£40/yr, required if you collect any personal data — with our architecture this is borderline, but safer to register)
- [ ] Add cookie consent banner if using Google Analytics or AdSense cookies
