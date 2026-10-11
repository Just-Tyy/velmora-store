# QA Report — VELMORA Refinement Pass

## Checks completed
- JavaScript syntax check passed with Node.js (`node --check script.js`).
- `index.html`, `shop.html`, `product.html`, and `404.html` parsed without parser exceptions using Python's HTML parser.
- Local CSS `url(...)` references checked; no missing CSS URL assets found.
- Local page assets checked; the only apparent `/index.html` reference is an intentional root-relative link in `404.html`.
- ZIP archive integrity checked after packaging.
- Confirmed the expected source files and local image assets are present in the final archive.

## Checks attempted but blocked
- Real-browser interaction QA was attempted with headless Chromium, but the environment blocked navigation (`ERR_BLOCKED_BY_ADMINISTRATOR`) for both local HTTP and file URLs. Therefore, browser interaction results, layout screenshots, and desktop/mobile visual verification could not be truthfully reported as passed.

## Manual checks required after deployment
- Test Bag open/close, Escape key, quantity changes, removal, clear-cart, and focus return.
- Test add-to-cart with and without a selected size.
- Test category filters, featured/name/price sorting, and reset.
- Test mobile menu open/close and navigation at narrow widths.
- Test newsletter validation and confirm the UI clearly says the email has not been sent.
- Review image crops and keyboard focus at desktop, tablet, and mobile widths.
- Confirm real product data, domain/canonical URLs, sitemap, HTTPS, redirects, policies, payments, inventory, fulfilment, and newsletter integration before accepting real orders.

## Important limitation
This remains a static front-end concept. Checkout and newsletter submission do not connect to production services. No production transaction, order, email subscription, or payment is created.
