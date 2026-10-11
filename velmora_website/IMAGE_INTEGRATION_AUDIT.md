# VELMORA image integration audit

## What changed
- Connected the six product categories to the new nested `assets/assets/` product photography.
- Each color swatch now maps to its own named front/back image pair; selecting a color updates both gallery views and the color label.
- Homepage featured cards and shop cards now use the corresponding new product photography instead of unrelated editorial placeholder images.
- Preserved editorial/campaign imagery for the hero, brand story, and category art where it is not a specific product variant.

## Category/variant coverage
- Essential Shirt: Dusty Blue, Chocolate, Sand, Black.
- Tailored Trouser: Black, Sand Beige, Oxblood, Chocolate Brown.
- Everyday Layer: Olive Green, Oxblood Burgundy, Espresso Brown, Forest Green.
- Modern Jacket: Deep Moss, Obsidian Black, Deep Plum, Porcelain Cream.
- Everyday Tee: Chalk Bone, Ink Black, Oxblood Burgundy, Porcelain Cream.
- Everyday Denim: Indigo, Washed Black, Deep Indigo, Warm Ecru.

## Checks and notes
- All 48 referenced front/back image paths were checked against the archive.
- JavaScript syntax was checked with Node.js.
- The names `essential-shirt-mens-dusty-blue-black.jpeg`, `everyday-tee-womens-oxblood-burgundy-black.jpeg`, and several similarly named assets are treated as the available alternate/back views based on filenames; visually confirm these specific files before launch.
- This is a static front-end prototype. Final product color accuracy and real product specifications should be verified against the actual garments.
