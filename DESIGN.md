---
name: Antoine Diokh — Spécimen
description: A product designer's portfolio set as a type specimen book; white paper, black ink, measurement blue, one variable face.
colors:
  paper: "#ffffff"
  ink: "#111111"
  ink-secondary: "#4a4a47"
  stock: "#e9e9e4"
  rule: "#111111"
  hairline: "#cfcfc8"
  measurement-blue: "#2b4cff"
  on-blue: "#ffffff"
  before-terracotta: "#a8432c"
  dark-paper: "#121211"
  dark-ink: "#f2f1ec"
  dark-ink-secondary: "#adaca4"
  dark-stock: "#1f1f1d"
  dark-hairline: "#3a3a37"
  dark-measurement-blue: "#8fa1ff"
  dark-before-terracotta: "#f0a48e"
  panel-bg: "#1e1e1e"
  panel-field: "#2c2c2c"
  panel-selected: "#383838"
  panel-text: "#e6e6e6"
  panel-muted: "#9a9a9a"
  panel-accent: "#7d93ff"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(56px, 16cqi, 232px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 100"
  project-line:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(40px, 7.6vw, 112px)"
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(44px, 6.4vw, 92px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 36px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 90"
  lede:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(24px, 2.5vw, 34px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 92"
  figure:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(34px, 3.4vw, 48px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 75"
  body-large:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.58
  body:
    fontFamily: "Archivo, ui-sans-serif, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
  panel: "8px"
  panel-field: "5px"
  panel-item: "4px"
spacing:
  page-margin: "clamp(20px, 3.4vw, 48px)"
  gutter: "clamp(20px, 3vw, 48px)"
  section: "clamp(64px, 10vh, 120px)"
  block: "32px"
  cell: "18px"
  tight: "6px"
components:
  control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "40px"
  control-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  index-cell:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px clamp(20px, 3.4vw, 48px) 20px"
    height: "112px"
  index-cell-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  index-cell-lead:
    backgroundColor: "{colors.measurement-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
    padding: "18px clamp(20px, 3.4vw, 48px) 20px"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 9px"
  ruled-link:
    textColor: "{colors.ink}"
    padding: "0 0 2px 0"
  ruled-link-hover:
    textColor: "{colors.measurement-blue}"
  fonts-panel:
    backgroundColor: "{colors.panel-bg}"
    textColor: "{colors.panel-text}"
    rounded: "{rounded.panel}"
    width: "288px"
  fonts-panel-item-selected:
    backgroundColor: "{colors.panel-selected}"
    textColor: "{colors.panel-text}"
    rounded: "{rounded.panel-item}"
    padding: "6px 10px"
---

# Design System: Antoine Diokh — Spécimen

## Overview

**Creative North Star: "The Working Type Specimen"**

The portfolio is set like a foundry's specimen book. Every section is a specimen page: a huge setting of one word or name, the measurements of that setting printed beside it in mono, and hairline rules dividing the page into ruled lines rather than boxes. The visitor is not told about craft; they see a face set at size with its size, leading, weight and width annotated, and they can change it.

Density is editorial and generous at the top of each page, then tight and ruled below: lists of projects, jobs, testimonials and facts sit between full-width black hairlines, never in cards. One variable family (Archivo, weight 100 to 900, width 62 to 125) carries every voice; contrast comes from moving its axes, not from adding faces. Martian Mono is the specimen's furniture: metrics, dates, counts, running heads. Measurement blue is the printer's correction pen, kept for metrics, baselines, selection and the single most important action.

The only rounded, shadowed object in the world is the Figma-style fonts panel, deliberately kept as a piece of software laid on the specimen page. The world rejects the category default of a short headline over a grid of equal thumbnail cards.

**Key Characteristics:**
- White coated paper, black ink, warm grey stock bands, one blue.
- One variable sans (Archivo) at many widths and weights; Martian Mono only for measurements and page furniture.
- Display settings fill the measure, run between dashed blue baselines, and are annotated live.
- Structure by full-width hairline rules; no cards, no shadows, square corners everywhere outside the fonts panel.
- Motion is axis interpolation: width and weight ease over 320ms.

## Colors

A printed-paper palette: near-pure white and black, a warm grey stock for bands and image mats, and one saturated blue used like a measuring instrument.

### Primary
- **Measurement Blue** (`measurement-blue`): metric annotations under the display title, dashed baselines above and below display settings, the specimen readouts beside testimonials and process steps, text selection, the focus ring, the caret, link hover, and the fill of the single lead index cell (DigDash). In dark theme it lifts to `dark-measurement-blue` so it stays legible on the dark paper.

### Tertiary
- **Before Terracotta** (`before-terracotta`): case-study only. Marks the "before" side of a before/after comparison (comparison tags, the "Avant" tree heading) against blue for "after". Never used outside a comparison.

### Neutral
- **Coated Paper** (`paper`): the page. Also the background of the sticky top bar so it reads as part of the sheet.
- **Ink** (`ink`): all primary text, display settings, and the hover inversion fill of controls, index cells and the back band.
- **Grey Ink** (`ink-secondary`): secondary text, captions, mono running heads, organisation names, footer copy.
- **Warm Stock** (`stock`): the index band, footer band, case-study facts band, AI band, and the mat behind every screenshot.
- **Rule Black** (`rule`): full-width 1px structural rules and control borders. Same value as ink; in dark theme it becomes the light ink.
- **Hairline Grey** (`hairline`): secondary dividers inside a ruled block (column separators, tree nodes, chips) on the case study, where black rules would be too heavy.

### Dark theme
Required by the light/dark toggle and sanctioned as an adaptation: the paper turns to a warm near-black (`dark-paper`), ink to warm off-white (`dark-ink`), stock to `dark-stock`, hairline to `dark-hairline`, terracotta to `dark-before-terracotta`. Rules invert with the ink. Every role keeps the same job; only the values swap.

### Fonts panel palette (sanctioned exception)
The fonts panel keeps Figma's own dark UI colors in both themes: `panel-bg`, `panel-field` (search field and internal dividers), `panel-selected` (hovered and selected rows), `panel-text`, `panel-muted`, and `panel-accent` (check marks, slider accent, focus glow). These colors exist only inside the panel.

### Named Rules
**The Measuring Pen Rule.** Blue marks measurements, baselines, selection, focus and the one lead action. It is never a background band, never body text, and never a second decorative accent.

**The Two Inks Rule.** Running text and headings are ink or grey ink; colour on text is reserved for measurements, link hover and before/after markers. Hierarchy comes from size, weight and width, not from tinting text.

## Typography

**Display Font:** Archivo variable, weight 100 to 900, width 62 to 125 (with ui-sans-serif, sans-serif)
**Body Font:** Archivo (same family)
**Label/Mono Font:** Martian Mono, width 87.5, weights 400 and 500 (with ui-monospace, monospace)

**Character:** A grotesque that can be condensed to a column or stretched to a banner, paired with a narrow, technical mono that reads as the specimen's ruler. One family does all the talking; the mono only measures.

### Hierarchy
- **Display** (700, width 100, fluid up to about 232px and fitted to the measure by script, line-height 0.9, tracking -0.035em): the specimen title ("Product / Designer") and the case-study name (800, width 125, line-height 0.86). Always on a single line per word, filling the column.
- **Project line** (weight and width set per project, 40 to 112px, line-height 0.92, tracking -0.035em): each project name in the index is set at its own axis values, which are printed beside it in mono.
- **Headline** (800, width 88, 44 to 92px, line-height 0.95): section heads, sitting on a black rule with a mono running head right-aligned on the same baseline. The case study pairs an 800 phrase with a 300 continuation inside one head.
- **Title** (700, width 90, 26 to 36px, line-height 1.05): job titles, process steps, sub-chapters.
- **Lede** (600, width 92, 24 to 34px, line-height 1.12, max 20ch): the one-line positioning statement.
- **Figure** (300, width 75, 34 to 48px, tabular): numerals in the facts list. Light and condensed so numbers read as specimen figures.
- **Body large** (400, 18 to 21px, line-height 1.58, max 58ch): running text.
- **Body** (400, 17px, line-height 1.55): default text; secondary text steps down to 14 to 15px in grey ink.
- **Label** (Martian Mono 400, 12px, width 87.5, tabular figures, no tracking, never uppercase): measurements, dates, counts, running heads, comparison tags.

### Named Rules
**The One Family Rule.** Archivo carries every voice. Make contrast by moving weight and width, not by introducing another face. The fonts panel may set the title in other faces because that is its job; nothing else does.

**The Annotated Setting Rule.** A display setting is accompanied by its measurements in blue mono (face, size/leading, weight, width, tracking), and those numbers must be true of the setting as rendered.

**The Mono Measures Rule.** Martian Mono appears only for numbers, measurements, dates and page furniture. Never for headings, sentences or buttons with words.

## Layout

Full-bleed pages with a fluid side margin (`page-margin`). Sections open with generous top space (`section`) and a headline on a full-width black rule; content below is organised as ruled rows spanning the measure. Two- and three-column grids use `gutter`; asymmetric splits (1 : 1.3, 1.25 : 1, 1 : 1.4) are the norm, with a fixed 150px left column for dates and specimen readouts in the CV and testimonial lists.

The first viewport is a title page: sticky 56px top bar with a bottom rule, the display title filling the left column with the 288px fonts panel docked at its right, a lede row, then a four-cell stock index band ruled top and between cells. The case study opens with a cover page (name, claim, lead, matted screenshot) followed by a four-cell stock facts band.

Responsive: on the home page the panel drops below the title at 1024px and the index becomes two by two; at 760px everything stacks into one column, the panel goes full width under the title, and the 150px date column collapses. The case study uses 900px and 640px for the same collapse. Testimonials are set in descending body sizes (three sizes for three people) with their size/leading printed beside each.

## Elevation & Depth

Flat. The world is printed paper: depth is conveyed by stock bands (warm grey behind index, facts, footer and screenshots), black hairline rules, and ink inversion on hover. No surface on the page casts a shadow.

### Shadow Vocabulary
- **Fonts panel lift** (`box-shadow: 0 18px 40px -12px rgba(0,0,0,.35)`; dark theme adds a 1px #2e2e2c ring and deepens to .6): the only shadow in the system, belonging to the sanctioned fonts panel.

### Named Rules
**The Printed Page Rule.** Outside the fonts panel there are no shadows and no raised surfaces. If something needs separation, give it a rule or a stock band.

## Shapes

Square everywhere: controls, tags, index cells, image mats, tree nodes and the case-study board all use a 0 radius. Borders are 1px solid black (structural) or 1px hairline grey (subdivision). Display settings carry 1px dashed blue baselines that run off the right edge of the column; the email address in the contact page sits on the same dashed blue baseline. List bullets are short 8px horizontal ink strokes. The fonts panel is the only rounded object (`panel` 8px, with `panel-field` 5px and `panel-item` 4px inside it).

## Components

### Buttons and controls
Square, ruled, inverting.
- **Shape:** square, 1px rule border, 40px tall, min 40px wide.
- **Default:** paper background, ink content; language toggle shows the target language in mono; theme toggle shows a 18px stroked moon or sun.
- **Hover:** full ink inversion (ink fill, paper content). Focus is the global 2px blue outline offset 3px.

### Ruled links
Primary text actions (open the CV, read the case study, visit the site, back to projects) are set in 18 to 32px Archivo 600 to 700 with a 1px currentColor underline rule and a trailing stroked arrow icon. Hover turns them blue. Navigation links are 15px with no underline until hover.

### Tags and chips
1px rule (home) or hairline (case study) border, square, 3px by 9px padding, 13px Archivo. Static labels, not interactive.

### Index band
Four equal cells on warm stock, ruled between, each holding a project name (600, 20 to 30px) with a stroked arrow and a mono category line. Hover inverts to ink and widens the name to width 112. The lead cell (the primary action, DigDash) is filled measurement blue with white text. Only one lead cell per band.

### Project index line
Each project is a full-width ruled row: the name set at its own width and weight, a meta column with category and its `wdth · wght` values in blue mono, and a plus icon that rotates 45 degrees when open. Hover or focus interpolates the width axis (narrow names widen, wide names narrow) and adds 100 weight, and the printed values update. The open detail shows a stock-matted image, description, tags and ruled links.

### Facts list
Ruled rows pairing a grey label with a light, condensed tabular figure (Figure style). On the case study, facts become a four-cell stock band with mono labels.

### Fonts panel (signature, sanctioned exception)
The Figma-style fonts sampler, kept by the user's requirement. Dark Figma chrome in both themes, 8px radius, soft lift shadow, 288px wide. Header with title and a mono count, a rounded search field with a blue focus glow, a scrolling list of faces each previewed in its own face with a check mark on the selected one, and weight and width sliders with mono readouts (disabled for static faces). Selecting a face re-sets and re-fits the display title and rewrites its annotations.

### Navigation
Sticky top bar on paper with a bottom rule: identity at left ("Spécimen —" in grey, name in 700), links and square controls at right. Below 760px (640px on the case study) the secondary links hide.

### Case-study comparison
Two matted screenshots side by side with a mono tag (terracotta "before", blue "after") and a grey caption; a ruled "proof" paragraph closes each chapter. Tree diagrams use a black spine with hairline-boxed nodes.

## Do's and Don'ts

### Do:
- **Do** set display type to fill the column and annotate it with true measurements in blue Martian Mono.
- **Do** make hierarchy with Archivo's weight and width axes; condensed heads (width 88 to 90), light condensed figures (300, width 75).
- **Do** divide content with full-width 1px black rules, and use hairline grey only for subdivisions inside a ruled block.
- **Do** mat every screenshot on warm stock with no border or radius.
- **Do** animate only axes (width, weight) and ink inversion, over 320ms with `cubic-bezier(.16,1,.3,1)`; respect reduced motion.
- **Do** keep every role working in both themes; the dark theme is a value swap, not a new layout.

### Don't:
- **Don't** use cards, rounded boxes or shadows anywhere except the fonts panel.
- **Don't** use measurement blue as a band, a body-text colour or a decorative accent; one blue-filled lead action per band at most.
- **Don't** introduce a second text family; other faces appear only as samples inside the fonts panel.
- **Don't** use Martian Mono for sentences, headings or uppercase labels above headings.
- **Don't** lay projects out as a grid of equal thumbnail cards.
- **Don't** use terracotta outside a before/after comparison.
