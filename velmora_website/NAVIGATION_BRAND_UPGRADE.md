# VELMORA navigation & brand mark upgrade

## Design intent
- Replaced the long text wordmark in the top bar with the existing VELMORA monogram from the supplied brand identity artwork.
- Kept the logo link accessible with the `VELMORA home` label and visually hidden brand text.
- Introduced a restrained editorial navigation: fine oxblood active underline, antique-rose point marker, subtle letter-spacing change on hover, and clear `aria-current="page"` state.
- On the homepage, navigation state tracks the House and Journal sections while scrolling. On shop and product pages, Collection is the active destination.
- Refined the bag control, monogram hover, mobile menu and consistent hover behavior for product cards, category cards, buttons and text links.
- Respects reduced-motion preferences and keeps keyboard focus visible.

## Notes
- `assets/velmora-monogram.png` is cropped from the exact V/M monogram in the user's supplied VELMORA logo presentation, rather than inventing a new logo.
- Active states are implemented client-side in `script.js`; the collection link remains active on product details as part of the shopping journey.
- This remains a static front-end demo; live checkout, inventory and newsletter integrations must be connected before real transactions.
