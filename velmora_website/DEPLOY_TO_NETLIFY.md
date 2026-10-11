# Deploy VELMORA to Netlify

1. Extract `VELMORA_Refinement_Pass.zip` on your computer.
2. Open the extracted `velmora_website` folder — the folder that directly contains `index.html`, `shop.html`, `product.html`, `styles.css`, and `assets/`.
3. Visit https://app.netlify.com/drop and drop that folder onto the page (or deploy it through your Netlify dashboard).
4. Open the generated URL and test the homepage, Collection link, product links, mobile menu, and Bag interactions.
5. Once the final domain is selected, add absolute canonical URLs to the pages, update `sitemap.xml.template`, and verify `robots.txt`.
6. Configure your custom domain and HTTPS in Netlify, then verify redirects and the final deployed paths.
7. Set up Google Search Console after the public domain is live.

## Before taking real orders
This package is a front-end demonstration. Connect a real commerce backend and payment provider, validate inventory and product details, and publish shipping, returns, privacy, and terms policies before accepting payment. Connect the newsletter to a consent-aware email platform before claiming that sign-ups are saved.
