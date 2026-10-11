# VELMORA — Content Audit & Launch Notes

## Corrections made in this pass
- Standardized the header/navigation across Home, Shop, and Product pages while preserving the V/M monogram and wordmark.
- Pointed Journal to the editorial statement rather than the newsletter form.
- Changed category cards to match the prototype's actual Tops, Bottoms, and Layers filters; the first three cards now deep-link to their matching filters.
- Removed unverified promises such as free worldwide shipping and a guaranteed 14-day return window. Delivery, payment and return information now explicitly remains to be confirmed.
- Updated footer wording so unavailable contact/social links and legal policies are not presented as live.
- Improved concept-product and sizing copy so illustrative product facts are not mistaken for verified inventory information.

## Important content still requiring owner confirmation
- The site has no confirmed real product catalogue, SKU, stock, materials, care instructions, size chart, model measurements or production prices. The USD prices are sample concept prices.
- Product imagery is editorial/concept imagery; it is not guaranteed to depict the named product exactly. The Everyday Denim image is specifically illustrative and should be replaced.
- Shipping territories, delivery times, shipping charges, returns eligibility, payment methods, business address/contact, privacy policy, terms and social profiles must be supplied by the brand owner.
- Newsletter capture and checkout are demos only. No email is sent and no order/payment is created.
- Search icon currently acts as a route to the shop, not a functional search field; it is labelled as collection browsing to avoid promising search.
- Product detail metadata is changed client-side from a query parameter. This is acceptable for a prototype but not a replacement for dedicated production product URLs and server-side metadata.

## QA status
- JavaScript syntax checked with Node.js.
- HTML parsed and local asset references checked.
- Internal hrefs and fragment destinations checked in a static audit; dynamic query-based product URLs are expected.
- ZIP integrity checked after packaging.
- Real-browser, mobile rendering, screen-reader, and end-to-end checkout/newsletter tests are not claimed; browser testing is still required after deployment.

## Launch blockers
1. Approve real product information and matching photography.
2. Confirm currency and prices.
3. Publish actual contact, privacy, terms, shipping and returns details.
4. Connect commerce, payments, inventory, fulfilment and newsletter provider.
5. Set production domain, canonical URLs and final sitemap.
6. Test all major journeys in desktop and mobile browsers.


## Contact and CTA update (2026-10-10)
- Added a dedicated `contact.html` page with clickable email and telephone links supplied by the owner.
- Updated header Contact navigation and footer contact details to point to the dedicated page / supplied contact methods.
- Changed the Discover the collection arrow to the diagonal up-right arrow motif and added the same arrow motif to the newsletter button.
- No business address, hours, live support promise, or contact form backend has been invented; the page clearly notes those details are not yet published.
