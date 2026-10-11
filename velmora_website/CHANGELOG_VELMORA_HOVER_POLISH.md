# VELMORA — Hover & Newsletter Arrow Polish

- Added a consistent understated underline and color transition to editorial text links across the site.
- Arrow spans in text links shift gently up and right on hover/focus. Links that use a plain text arrow still receive the underline/color treatment.
- Removed the newsletter button's CSS-generated `::after` arrow, which duplicated the existing `.newsletter-arrow` span. The newsletter now renders one arrow only.
- Kept the newsletter arrow movement on hover/focus and added reduced-motion support.

## Verification
- Checked for the old duplicate newsletter `::after` arrow rule.
- JavaScript syntax, HTML parsing and ZIP integrity checks are run as part of packaging.
- Live browser interaction still needs a deployed browser check.
