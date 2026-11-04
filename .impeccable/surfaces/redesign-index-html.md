---
version: 1
slug: "redesign-index-html"
primary_target: "redesign/index.html"
related_targets: []
---

# Surface: portfolio redesign (redesign/index.html)

Mode: Experience. Local clone beside the live index.html; the live site is untouched.
Audience: recruiters and design leads hiring a Product Designer. Job: understand role and level in one viewport, open DigDash or the CV, write to Antoine.
Constraints: static HTML/CSS/JS, FR/EN, light/dark, the Figma-style fonts panel survives, eight real projects, three real testimonials, no invented claims.

## Direction contract

THESIS: The portfolio is a designer's type specimen. Every section is a specimen page, and the fonts panel is the specimen's working sampler. It refuses the category default of a short headline over a grid of equal thumbnail cards.

OWN-WORLD: White coated paper (#fff), black ink (#111), measurement blue (#2b4cff) used only for metrics, rules and selection, and warm grey stock (#e9e9e4) for index bands. Archivo variable (weight and width axes) carries every voice. Martian Mono appears only for measurements, numbers and page furniture. Dashed blue baselines, hairline black rules, and no cards, shadows or rounded boxes.

STORY: The visitor sees "Product Designer" set like a specimen, with live metrics around it. They change the face in the panel, which proves the craft. They scan the project index set in varying widths, open DigDash, and leave by writing to Antoine or opening the CV.

FIRST VIEWPORT: A top hairline bar carries "Spécimen — Antoine Diokh" on the left and the navigation, FR/EN and theme controls on the right. "Product / Designer" runs across the full width at about 15vw, between dashed blue baselines, with live annotations (face, size/leading, weight, tracking) at the right. The Figma fonts panel is docked at the right of the first line. A grey index band at the bottom has four cells (DigDash, La Rodia, Covid Alert, +5 projets); DigDash is the primary action.

FORM: Type specimen book, ranked 1st on the grounded list (chosen as IMPECCABLE'S PICK). seed:ef6ece6eb965fffd

Signature interaction: the specimen metrics are live. Changing the face, weight or width rewrites the annotations, and hovering a project line interpolates its width axis. The motion grammar is axis interpolation only, using a 320ms exponential ease-out.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
