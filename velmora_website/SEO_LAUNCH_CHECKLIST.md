# VELMORA SEO & GEO launch checklist

## Implemented in this prototype
- Unique page titles and meta descriptions for the homepage, shop, and featured product.
- Open Graph and Twitter sharing metadata.
- Index/follow directives and theme color.
- Initial JSON-LD: Organization and WebSite on the homepage, CollectionPage on the shop page, Product on the featured product page.
- Accessible skip link, navigation label, mobile navigation toggle, visible keyboard focus, and button state attributes.
- Lazy loading and async decoding for content images.
- Basic `robots.txt` and an `llms.txt` site overview.
- Sitemap template for the three current pages.

## Required before production launch
1. Confirm the final domain and HTTPS hosting.
2. Add absolute self-referencing canonical URLs to each indexable page.
3. Replace `YOUR-PRODUCTION-DOMAIN` in `sitemap.xml.template`, save the result as `sitemap.xml`, and submit it in Google Search Console.
4. Add the sitemap URL to `robots.txt`, e.g. `Sitemap: https://your-real-domain/sitemap.xml`.
5. Update the Open Graph images to approved, licensed VELMORA campaign images hosted on the production domain when available.
6. Confirm product names, real prices, currency, SKUs, sizes, color variants, stock, material composition, care, shipping, and returns. Do not publish placeholder `[PRICE]` values.
7. Add Product `Offer` markup only when the actual price, currency, availability, and purchase details are real and visible on the page. Add review markup only for genuine, visible reviews.
8. Replace demo newsletter and add-to-cart behavior with real integrations before accepting customers.
9. Configure Search Console, analytics, consent requirements where applicable, and conversion events.
10. Run PageSpeed Insights, the Rich Results Test, and Search Console URL Inspection after deployment. Check all pages on mobile and desktop.
11. Verify the site returns proper HTTP status codes and that no staging/noindex rules prevent indexing.
12. Review all external images for licensing and replace with owned or properly licensed brand assets.

## International expansion
- Choose initial target countries based on actual fulfillment capability and demand.
- Keep the English site as the default until localized content is ready.
- Add `hreflang` only when distinct localized/region-targeted page versions exist and reciprocal annotations are correct.
- Publish country-specific currency, shipping, duties, and return information only when confirmed.

## Notes
- Canonical URLs and a final XML sitemap are intentionally not hard-coded because the production domain has not been provided.
- The current product data and prices are prototype placeholders. Search visibility, indexing, rich results, and AI citations cannot be guaranteed.
- `llms.txt` is provided as a concise site summary; it is not a formal ranking factor or a substitute for crawlable, accurate website content.


## Image reliability and launch
- Fashion and product images are now stored locally under `assets/`, rather than relying on external Unsplash URLs.
- The bundled images are AI-generated concept visuals, not verified photographs of inventory. Replace them with actual product photography before launch.
- Keep descriptive alt text accurate to the actual image and product.
- After choosing the production domain, update Open Graph/Twitter image URLs and structured-data image URLs to absolute, public HTTPS URLs.


## UX and production interaction notes
- The preview shopping cart, size selection, product color/image selection, category filter, sorting, mobile navigation, and newsletter demo feedback are front-end interactions only.
- The bag is stored locally in the current browser and is not a server-side order or shared cart.
- Newsletter submission does not transmit or store email addresses.
- Checkout, payment, inventory, shipping rates, account features, and order confirmation must be integrated with a real commerce service before launch.
- Product information and concept imagery must be checked against actual inventory before publishing.
