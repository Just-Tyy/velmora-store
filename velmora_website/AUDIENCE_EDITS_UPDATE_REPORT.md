# VELMORA Audience Edits Update

## Completed in this build

- Removed the Accessories card from the homepage's “Shop by mood” collection cards.
- Updated Women's Edit to link to `shop.html?audience=women`.
- Updated Men's Edit to link to `shop.html?audience=men`.
- Updated Unisex Essentials to link to `shop.html?audience=unisex`.
- Added audience-aware collection headings and descriptions.
- Women's Edit filters the product list to variants whose image filenames identify women's/women designs; product detail pages show only those variants.
- Men's Edit filters the product list to variants whose image filenames identify men's/men designs; product detail pages show only those variants.
- Unisex Essentials presents a curated alternating mix of women's and men's designs, labels the audience of each design, and allows all variants on the detail page. The page copy clarifies that this is a mix of both edits, not a claim that every garment is gender-neutral.
- Audience-specific collection cards use the matching variant image and link through to the matching audience-aware product detail page.
- Product swatch selection updates the visible price and paired front/back gallery. The cart item uses the selected variant image and price.
- Preserved the existing cart terminology, zoom viewer, category filters, and sorting.

## Validation performed

- JavaScript syntax check (`node --check`) passed.
- ZIP integrity check passed.
- Checked local asset references in the main HTML, JavaScript, and CSS files; no missing references were found in that scan.

## Remaining caveats

- Audience classification is inferred from image filenames (`men`/`mens` and `women`/`womens`). Review filenames and product fit metadata before launch to confirm each garment's intended audience.
- The Unisex Essentials page is a curated mix of gendered designs, not a verified catalog of universally unisex fits.
- Full browser/device visual testing has not been performed in this build.
- Product prices remain illustrative concept pricing and should be confirmed against real costs and margins.
