# VELMORA — Editorial Fashion Storefront

> A premium, minimalist fashion storefront concept for VELMORA, built with plain HTML, CSS, and JavaScript.

**Current status:** Front-end prototype / showcase. The website can be deployed as a static site, but it is **not yet a production-ready e-commerce checkout**. Product prices are illustrative USD concept prices, and checkout and newsletter submissions do not create real orders or subscriptions.

---

## Contents

- [Project overview](#project-overview)
- [Current features](#current-features)
- [Pages and files](#pages-and-files)
- [Technology stack](#technology-stack)
- [Run locally](#run-locally)
- [Deploy on Vercel](#deploy-on-vercel)
- [Deploy on Netlify](#deploy-on-netlify)
- [How the storefront currently works](#how-the-storefront-currently-works)
- [Products, prices, and imagery](#products-prices-and-imagery)
- [Brand and design direction](#brand-and-design-direction)
- [Accessibility and SEO](#accessibility-and-seo)
- [Current limitations and launch blockers](#current-limitations-and-launch-blockers)
- [Security and customer-data guidance](#security-and-customer-data-guidance)
- [Roadmap](#roadmap)
- [Quality assurance](#quality-assurance)
- [Contributing and making changes](#contributing-and-making-changes)
- [Credits and ownership](#credits-and-ownership)

---

## Project overview

VELMORA is a fashion-brand storefront prototype designed around a refined, editorial, premium-minimalist visual identity. The project emphasizes considered typography, restrained colour, fashion photography, product discovery, and an editorial brand story.

The current implementation is a **static front end**. It is suitable for design review, sharing a preview, gathering feedback, and continuing development. It does not yet have a trusted server-side commerce system.

### Project goals

1. Present the VELMORA brand and its visual identity consistently.
2. Let visitors browse a sample collection and open product-detail views.
3. Provide client-side collection filters, sorting, search, and a cart preview.
4. Present editorial stories with supporting photography.
5. Provide contact information and a newsletter sign-up interface.
6. Keep the codebase simple to host as a static website while the future commerce backend is planned.

### Important status statement

A public deployment makes the **website** accessible; it does not turn the prototype into a functioning online shop. Do not accept real payments, promise stock availability, or claim that newsletter emails or orders have been recorded until the relevant services have been implemented and tested.

---

## Current features

The following features are implemented in the front-end code. Actual rendering and interaction should still be checked in a real browser after deployment.

- **Homepage:** brand introduction, campaign imagery, selected products, audience-edit links, brand story, and newsletter interface.
- **Shop / collection page:** sample product cards, audience/category filtering, sorting, and filter reset.
- **Product detail page:** product information selected using a URL query parameter, size selection, colour/variant presentation, gallery imagery, image zoom, and add-to-cart preview.
- **Client-side cart:** add items, change quantities, remove items, clear the cart, show a subtotal, and retain the cart in the same browser using `localStorage`.
- **Product search:** client-side search across the sample product data.
- **Audience edits:** links for Women's Edit, Men's Edit, and Unisex Essentials.
- **Editorial page:** three brand-story concepts—“The Art of Neutrals,” “Less, But Better,” and “One Wardrobe, More Possibilities”—with photography.
- **Contact page:** clickable email and telephone links.
- **Responsive styling:** CSS intended to support desktop and smaller screens; manual responsive checks remain necessary.
- **Custom brand details:** V/M monogram, VELMORA wordmark, hover refinements, and editorial photography.
- **404 page:** a custom not-found page.
- **Basic SEO-related files:** `robots.txt`, an editable sitemap template, and launch-checklist documentation.

### What the cart means

The cart is a **browser-side preview cart**. Its contents are stored locally in that browser and are not sent to a server. It is not shared across devices and is not an order record.

### What search means

Search filters the sample product data in JavaScript. It does not query a database or external product service.

---

## Pages and files

### Main website pages

| File | Purpose |
|---|---|
| `index.html` | Homepage and main brand introduction |
| `shop.html` | Collection listing, filters, and sorting |
| `product.html` | Product-detail template; the `item` query parameter selects the sample product |
| `editorial.html` | Editorial brand stories and supporting photography |
| `contact.html` | Contact details and contact-related links |
| `404.html` | Custom not-found page |
| `styles.css` | Shared site styling, layout, typography, responsive rules, and interactions' visual states |
| `script.js` | Client-side product data, search, collection behaviour, product options, cart, image viewer, and demo form messaging |
| `assets/` | Brand marks, campaign images, editorial images, textures, and product photography |
| `assets/assets/` | Product-variant images referenced by the product data and page scripts; this nested directory is intentional in the current version |

**Do not flatten or rename `assets/assets/` without updating every matching image path in the HTML and JavaScript.** Many product images are loaded from this directory.

### Deployment and discovery files

| File | Purpose / recommendation |
|---|---|
| `netlify.toml` | Netlify-specific configuration. Not required by Vercel; it can remain in the repository without being used by Vercel. |
| `robots.txt` | Basic crawler instructions. Review before production and confirm the live domain. |
| `sitemap.xml.template` | Template only; replace placeholders and publish a real `sitemap.xml` when the final domain and URLs are confirmed. |
| `llms.txt` | Plain-text site/brand information for compatible AI crawlers; optional and not required for the site to run. |
| `README.txt` | Older project notes. This `README.md` is intended to replace it as the main GitHub project documentation. |

### Existing project notes and reports

These Markdown files document design decisions, asset integration, refinements, and launch checks. They are not required for the website to render, but are useful for maintaining the project:

- `AUDIENCE_EDITS_UPDATE_REPORT.md`
- `CHANGELOG_PRODUCT_GALLERY_UPDATE.md`
- `CHANGELOG_SEARCH_CART.md`
- `CHANGELOG_SHOP_ASSETS.md`
- `CHANGELOG_VELMORA_HOVER_POLISH.md`
- `CHANGELOG_VELMORA_REFINEMENT.md`
- `CONTENT_AUDIT_AND_LAUNCH_NOTES.md`
- `DESIGN_REVIEW.md`
- `EDITORIAL_PAGE_UPDATE_REPORT.md`
- `IMAGE_ASSET_PLAN.md`
- `IMAGE_INTEGRATION_AUDIT.md`
- `NAVIGATION_BRAND_UPGRADE.md`
- `QA_REPORT.md`
- `SEO_LAUNCH_CHECKLIST.md`
- `DEPLOY_TO_NETLIFY.md`

The image file `Velmora Luxury Logo Presentation.png` is a brand presentation asset, not a runtime dependency of the website pages. It can be kept in the repository if you want the brand presentation version-controlled, or stored separately if you want to keep the repository focused on deployable website files.

---

## Technology stack

- **HTML5** for the pages and semantic content.
- **CSS3** for layout, styling, visual effects, and responsive presentation.
- **Vanilla JavaScript** for product data, search, filters, sorting, gallery behaviour, and cart interactions.
- **Browser `localStorage`** for the prototype cart only.
- **Google Fonts** loaded externally by the pages; a network connection is needed for the chosen web fonts to load.
- **Static hosting** such as Vercel or Netlify for the current front end.

The current website does not require a Node.js build step or package installation to serve its static files. There is no package manifest in the current project root.

### Supabase status

A Supabase project named `velmora-store` has been created, in the West EU (Ireland) region. **The current storefront code is not connected to that Supabase project.** There are no database migrations in this website package, and no real product, order, customer, or newsletter records are persisted there yet.

Do not add Supabase credentials simply because the project exists. Integrate Supabase deliberately when the database and access policies are ready.

---

## Run locally

### Option A — open the page directly

You can double-click `index.html` to view a basic preview. Some browser behaviours can differ when files are opened through `file://`, so a local web server is preferred.

### Option B — use Python's simple web server

1. Open a terminal in the directory containing `index.html`.
2. Run:

   ```bash
   python -m http.server 8000
   ```

3. Open <http://localhost:8000> in your browser.
4. Stop the server with `Ctrl+C`.

If Python is installed as `py` on Windows, this may also work:

```powershell
py -m http.server 8000
```

No build step is required for the current plain HTML/CSS/JavaScript version.

---

## Deploy on Vercel

The GitHub repository should contain the actual contents of the website folder, with `index.html` at the repository root (not one extra directory below it).

1. Push the website files to the GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Choose **Add New → Project** and import `Just-Tyy/velmora-store` (or the repository's current name).
4. In project configuration, choose **Other** as the framework preset if Vercel detects this as a plain static site.
5. Leave the build command empty because this project has no build step.
6. Set the output directory to `.` or leave the default if Vercel correctly serves the repository root. The directory must contain `index.html`.
7. Deploy.
8. Open the generated `*.vercel.app` URL and manually test every page and major interaction.

### Vercel troubleshooting

- **404 on the homepage:** check that `index.html` is at the deployed project root, not inside `velmora_website/velmora_website/` or another nested directory.
- **Missing images:** check the image paths and preserve the `assets/` and `assets/assets/` directory structure and filename casing.
- **CSS or JavaScript not loading:** verify that `styles.css` and `script.js` are next to the HTML files, and inspect the browser's developer console.
- **Wrong repository contents:** make sure the repository contains the extracted website files, not only the ZIP archive.
- **Updated changes not appearing:** commit and push the changes to the connected branch, then check the latest deployment in Vercel.

The `netlify.toml` file is for Netlify; Vercel does not use it as its project configuration.

---

## Deploy on Netlify

1. Open [Netlify](https://www.netlify.com/) and sign in.
2. Either import the GitHub repository or use Netlify's manual deploy workflow.
3. For a manual deploy, upload the **extracted website folder's contents** so that `index.html` is at the publish root; do not upload the ZIP file itself.
4. If importing from GitHub, set the publish directory to the folder containing `index.html`. No build command is needed for this static project.
5. Deploy and test the published URL.

See `DEPLOY_TO_NETLIFY.md` for the earlier project-specific deployment note.

---

## How the storefront currently works

### Product data

The sample catalogue and product variants are defined in `script.js`. The product-detail page reads the selected item from the URL, for example:

```text
product.html?item=essential-shirt
product.html?item=modern-jacket
product.html?item=tailored-trouser
```

These are prototype URLs. Product data and page metadata are not loaded from a database, and this query-parameter approach is not a substitute for server-rendered product pages or a production catalogue.

### Collection filters and sorting

The collection page uses client-side filtering and sorting. Audience links may pass an `audience` query parameter, while category links may pass a `category` query parameter. The current category filters include tops, bottoms, and layers.

### Cart persistence

The cart is stored in the visitor's browser through `localStorage`. Clearing browser storage or using another browser/device can remove or separate cart contents. There is no stock reservation, account-linked cart, or server-side validation.

### Newsletter

The newsletter form is a demo. It displays a transparent message explaining that sign-up is not active, then resets the form. It does **not** store an email address, send an email, or create a subscriber.

### Checkout and payments

Checkout is a demo. The current interface explicitly says checkout is not connected; it does not create an order or payment. No payment provider has been integrated.

Do not use this prototype to collect payment card data. Never build a custom form that stores card numbers or security codes.

### Contact information

The current pages include contact links:

- Email: `fatai.abiodunkomolafe@gmail.com`
- Telephone: `+234 903 172 4197`

Confirm these details are the intended public business contacts before launch. They are included in the site links; this documentation does not independently verify that the mailbox or telephone is monitored.

---

## Products, prices, and imagery

The current product catalogue is illustrative. The sample concepts include:

- Essential Shirt
- Tailored Trouser
- Everyday Layer
- Modern Jacket
- Everyday Tee
- Everyday Denim

The prototype includes sample USD prices. They are **not confirmed production prices**, and the storefront does not currently implement NGN checkout, tax calculation, delivery pricing, or currency conversion.

Before selling real goods, confirm and update:

- Product names and descriptions.
- Actual colours and sizes offered.
- SKU / stock-keeping unit for each variant.
- Price and currency.
- Stock quantities and availability.
- Materials, care instructions, and size charts.
- Product photography that accurately represents the product sold.
- Shipping, delivery, returns, and exchange terms.

### Images and asset cleanup

The product-variant images in `assets/assets/` are referenced by the current product data and should be retained.

A preliminary text-reference scan found these top-level assets that may be unused by the current HTML/CSS/JavaScript:
- `assets/category-accessories.webp`
- `assets/cocoa-jacket.jpg`
- `assets/tailored-trouser.jpg`

This is **not sufficient proof that they are safe to delete**. They may be used in content not detected by a simple scan, or retained for future design use. Review them in the browser and search all source files before removing them.

Keep these top-level assets that are referenced by the current pages or scripts, including the campaign/editorial images, category imagery, fabric/detail images, logo, and woven texture.

---

## Brand and design direction

The design direction is premium, editorial, minimal, and restrained. The work completed across the current iteration includes:

- Consistent V/M monogram and VELMORA wordmark in the shared navigation.
- Editorial product imagery and campaign photography.
- Product-gallery and image-zoom interactions.
- Product search, cart interactions, and collection sorting/filtering.
- Audience-edit links for men's, women's, and unisex selections.
- Editorial story page with three story concepts and supporting photographs.
- Contact page and navigation/footer cleanup.
- More cautious wording where shipping, returns, social links, and other business details were not verified.
- Launch notes identifying concept content and production requirements.

See the individual changelog and audit files for details about each iteration.

---

## Accessibility and SEO

The code includes some accessibility-oriented patterns, such as labelled controls, skip-to-content links, and keyboard-related interaction handling. These should not be interpreted as a complete accessibility audit.

Before launch:

- Test keyboard-only navigation and visible focus states.
- Test menus, cart, search, product selection, and image viewer with a keyboard.
- Check contrast, text scaling, and mobile zoom.
- Add descriptive alternative text to meaningful product images.
- Test with a screen reader if possible.
- Confirm page titles and descriptions.
- Replace placeholder/relative SEO metadata with the final canonical domain where needed.
- Generate and publish a real `sitemap.xml` from the final URLs.
- Confirm `robots.txt` is appropriate for the deployed site.
- Add an appropriate privacy notice before deploying analytics or collecting personal information.
- Verify social preview metadata and favicon behaviour.
- Check broken links and browser-console errors after deployment.

The existing `SEO_LAUNCH_CHECKLIST.md` has additional launch notes.

---

## Current limitations and launch blockers

The following items are not implemented as production services in this version:

1. Supabase database integration.
2. Owner/admin authentication and a private product-management dashboard.
3. Database-backed product catalogue, variants, inventory, and stock movements.
4. Real customer accounts or server-side cart.
5. Order creation and order-management workflow.
6. Payment-provider integration and verified payment webhooks.
7. Bank-transfer instructions, reconciliation, and confirmation workflow.
8. Transactional order-confirmation emails and owner order alerts.
9. Newsletter storage, consent records, provider integration, and unsubscribe handling.
10. Inventory reservation and fulfilment/shipping integration.
11. Production-ready privacy policy, terms, shipping policy, and returns policy.
12. Confirmed final product content, photography, stock, prices, and currency.
13. Full end-to-end browser, accessibility, and mobile QA.

Until these are addressed, describe the deployment as a **website preview / storefront showcase**, not a complete operational shop.

---

## Security and customer-data guidance

- Never commit `.env` files, database passwords, Supabase service-role keys, payment secrets, or email-provider API keys to GitHub.
- If a secret is accidentally committed, revoke/rotate it immediately; deleting it in a later commit does not make the leaked secret safe.
- Public browser code may use a Supabase publishable/anon key only when database permissions and Row Level Security policies are correctly configured. Never expose a service-role key in front-end code.
- Do not assume that enabling RLS alone creates safe access policies. Each table needs intentional policies and testing.
- Keep administrative operations and payment verification on trusted server-side code.
- Validate prices, variants, and stock on the server before creating an order.
- Treat payment provider webhooks as untrusted until signatures and event details have been verified.
- Do not store raw payment card numbers or card security codes.
- Collect personal information only after the relevant privacy and consent flow is implemented.
- Use HTTPS on the deployed domain and protect administrator accounts with strong authentication.

---

## Roadmap

### Phase 1 — Publish the showcase
- [ ] Ensure the GitHub repository contains the site files at its root.
- [ ] Deploy to Vercel or Netlify.
- [ ] Test all pages, images, navigation, search, filters, cart, and responsive layouts.
- [ ] Fix any broken assets or browser-console errors.
- [ ] Clearly label demo checkout and newsletter behaviour.

### Phase 2 — Confirm the real business details
- [ ] Approve the product catalogue, images, prices, currency, sizes, colours, and stock.
- [ ] Confirm contact information.
- [ ] Write accurate privacy, terms, delivery, shipping, and returns policies.
- [ ] Choose the production domain and update SEO metadata.

### Phase 3 — Add the backend
- [ ] Design the Supabase schema and database migrations.
- [ ] Configure authentication for the owner/admin.
- [ ] Apply and test Row Level Security policies and least-privilege permissions.
- [ ] Add product, variant, image, and inventory management.
- [ ] Connect the storefront to the database.
- [ ] Implement server-side order creation and stock validation.

### Phase 4 — Payments and email
- [ ] Select and verify an eligible payment provider for the business and country.
- [ ] Implement secure payment initialization and server-side/webhook verification.
- [ ] Implement bank-transfer instructions and manual or automated reconciliation if offered.
- [ ] Send order confirmation and owner notification emails after verified events.
- [ ] Implement newsletter subscription, consent, unsubscribe, and delivery monitoring.

### Phase 5 — Production QA
- [ ] Test successful, failed, cancelled, and duplicate payment events.
- [ ] Test out-of-stock and concurrent checkout scenarios.
- [ ] Test admin authorization and customer-data access restrictions.
- [ ] Test desktop, tablet, mobile, keyboard, and screen-reader journeys.
- [ ] Check logs, backups, monitoring, error handling, and recovery procedures.
- [ ] Run a controlled test order before announcing the store publicly.

---

## Quality assurance

The bundled `QA_REPORT.md` records the checks performed during the latest documented refinement pass:

- JavaScript syntax check with Node.js.
- HTML parsing checks for core pages.
- Local CSS URL and page-asset reference checks.
- ZIP archive integrity check.

The same report records that real-browser navigation was blocked in the original test environment. Therefore, full browser interaction QA, visual checks, and desktop/mobile verification were **not** reported as passed.

After deployment, repeat the manual tests in the `QA_REPORT.md` checklist. A successful hosting deployment alone does not prove that every interactive journey works.

---

## Contributing and making changes

This is currently a small static site, so most edits can be made directly:

1. Edit page content in the relevant `.html` file.
2. Edit layout, spacing, colour, typography, and responsive styles in `styles.css`.
3. Edit sample product data and interactions in `script.js`.
4. Keep asset paths consistent with the existing directory structure.
5. Test locally before committing.
6. Review the browser console and network panel for errors.
7. Commit and push changes to GitHub; the connected Vercel project should deploy updates automatically once configured.

Suggested Git commit style:

```text
feat: add a new editorial story
fix: correct product image path
style: refine mobile collection spacing
docs: update launch checklist
```

### Suggested repository hygiene

- Use `README.md` as the primary project overview.
- Keep the useful changelog, audit, and QA files while the project is actively being developed.
- Add a `.gitignore` if one is not already present.
- Do not commit generated build output, local editor settings, private credentials, or unrelated downloads.
- Keep the original design presentation separately if you want a smaller, cleaner website repository.

---

## Credits and ownership

VELMORA is the brand/project represented by this repository. Review the rights and licensing of every image, font, logo, and third-party asset before commercial use. Confirm that the project owner has permission to publish all product and campaign photography.

No open-source license is included by default. Add a `LICENSE` file only after deciding whether and under what terms you want others to reuse the code and assets.

---

## Final note

This repository represents the current VELMORA storefront design and front-end prototype. It is a foundation for the brand's online presence, not evidence that a production commerce backend, payment flow, inventory system, or email service has been completed.

**Build carefully, verify every customer-facing claim, and only switch to real commerce once the backend and operational policies have been tested.**
