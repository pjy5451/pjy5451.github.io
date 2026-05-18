# Content Editing Guide

This guide is for editing the website content directly in this repository.

## Where To Edit Research Project Pages

Research project detail pages are Markdown files in:

```text
_pages/projects/
```

Main files:

```text
_pages/projects/bridge-monitoring.md
_pages/projects/weight-in-motion.md
_pages/projects/on-board-mass.md
_pages/projects/freight-train-monitoring.md
_pages/projects/bridge-load-capacity.md
_pages/projects/portable-sensing.md
_pages/projects/qr-lifecycle-monitoring.md
_pages/projects/quay-wall-monitoring.md
_pages/projects/smart-concrete-sensing.md
_pages/projects/seismic-sensing.md
_pages/projects/sewer-monitoring-sensor.md
```

Each page uses this structure:

```markdown
## Problem

## My Role

## System / Methods

## Field Deployment

## Data / Outputs

## Related Publications / Outputs
```

Write short paragraphs under `Problem`, then use bullets under the other sections. Keep each bullet specific: system name, field site, data type, method, output, or your role.

## Where To Put Images

Put original images for research project pages under:

```text
images/projects/<project-key>/
```

Recommended folders:

```text
images/projects/bridge-monitoring/
images/projects/weight-in-motion/
images/projects/on-board-mass/
images/projects/freight-train-monitoring/
images/projects/bridge-load-capacity/
images/projects/portable-sensing/
images/projects/qr-lifecycle-monitoring/
images/projects/quay-wall-monitoring/
images/projects/smart-concrete-sensing/
images/projects/seismic-sensing/
images/projects/sewer-monitoring-sensor/
```

Use lowercase file names with hyphens:

```text
seongsan-dashboard.jpg
janet-sensor-installation.jpg
wim-filtered-signal.png
```

Avoid spaces and Korean characters in image file names because URLs are easier to manage with plain English names.

## How To Add One Figure

In the project Markdown file, add this where you want the figure to appear:

```html
## Figures / Field Evidence

<figure class="project-figure">
  <img src="/images/projects/bridge-monitoring/seongsan-dashboard.jpg" alt="Dashboard showing long-term bridge monitoring data">
  <figcaption>Web dashboard used to review long-term response histories from the bridge monitoring system.</figcaption>
</figure>
```

The `alt` text should briefly describe the image for accessibility. The `figcaption` should tell the reader why the figure matters.

## How To Add Two Figures Side By Side

```html
## Figures / Field Evidence

<div class="project-figure-grid">
  <figure class="project-figure">
    <img src="/images/projects/bridge-monitoring/janet-installation.jpg" alt="JANET sensor installed on a bridge">
    <figcaption>JANET sensor installed for bridge response monitoring.</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="/images/projects/bridge-monitoring/displacement-estimation.png" alt="Estimated displacement history from strain and acceleration data">
    <figcaption>Displacement-related response estimated from field measurements.</figcaption>
  </figure>
</div>
```

The two-column layout automatically becomes one column on mobile.

## Suggested Figure Types

For each project, the strongest figures are usually:

- Field photo: sensor installed on a real structure or vehicle.
- System diagram: sensor, gateway, cloud, dashboard, or data pipeline.
- Data plot: raw signal, filtered signal, FFT, displacement estimate, event detection, or dashboard screenshot.
- Output screenshot: web dashboard, report output, or monitoring interface.

## Editing Field Sites

Field site data is stored in:

```text
_data/field_sites.yml
```

Field site detail pages are in:

```text
_pages/field-sites/
```

Use Field Sites for concrete deployment context: site name, location, data handled, and field lessons. Use Research pages for project-level research story and outputs.

## Where To Write Notes

Notes are regular blog-style Markdown posts in:

```text
_posts/
```

Create a new file with this naming rule:

```text
YYYY-MM-DD-short-english-slug.md
```

Example:

```text
_posts/2026-05-18-bridge-monitoring-reflection.md
```

Use this front matter for a general note:

```markdown
---
layout: default
title: "Bridge Monitoring Reflection"
date: 2026-05-18 00:00:00 +0900
categories: notes
lang: en
note_category: Personal Log
description: A short reflection on field bridge monitoring and data interpretation.
---
```

The `description` appears on the Notes card. Keep it to one sentence. The `note_category` appears as the small label beside the date.

The body can be written like this:

```markdown
# Bridge Monitoring Reflection

<p class="note-date">May 18, 2026</p>

Start with one short paragraph explaining why this note exists.

## What I Worked On

- Specific point one.
- Specific point two.

## What I Learned

Write the interpretation in plain language.
```

## Where To Write Study Posts

Study posts also live in:

```text
_posts/
```

The key difference is the category. To make a post appear on the Study page, set `categories: study`.

Example:

```text
_posts/2026-05-18-structural-dynamics-notes.md
```

Use this front matter:

```markdown
---
layout: default
title: "Structural Dynamics Notes"
date: 2026-05-18 00:00:00 +0900
categories: study
lang: en
note_category: Structural Dynamics
description: Notes on vibration, modal response, and interpretation of measured structural behavior.
---
```

Suggested `note_category` values:

- Structural Dynamics
- Reliability
- Sensing Systems
- Data Analysis
- AI for Physical Systems
- Reading Notes

Study posts can be more technical than general notes. A useful structure is:

```markdown
# Structural Dynamics Notes

<p class="note-date">May 18, 2026</p>

## Question

What am I trying to understand?

## Key Ideas

- Main concept.
- Equation, assumption, or modeling point.
- Connection to field data.

## My Interpretation

Explain how this changes the way I think about monitoring, sensing, or analysis.

## References

- Author, title, venue, year.
```

## Where To Put Images For Notes And Study

Put note images under:

```text
images/notes/<post-slug>/
```

Put study images under:

```text
images/study/<post-slug>/
```

Examples:

```text
images/notes/bridge-monitoring-reflection/site-photo.jpg
images/study/structural-dynamics-notes/modal-response.png
```

Use lowercase English file names with hyphens. Avoid spaces and Korean characters in file names.

## How To Add Figures In Notes Or Study Posts

For one figure:

```html
<figure class="content-figure">
  <img src="/images/study/structural-dynamics-notes/modal-response.png" alt="Modal response plot from a structural dynamics note">
  <figcaption>Example modal response used to connect vibration concepts with measured structural behavior.</figcaption>
</figure>
```

For two figures side by side:

```html
<div class="content-figure-grid">
  <figure class="content-figure">
    <img src="/images/study/structural-dynamics-notes/time-history.png" alt="Measured acceleration time history">
    <figcaption>Measured acceleration time history.</figcaption>
  </figure>
  <figure class="content-figure">
    <img src="/images/study/structural-dynamics-notes/frequency-spectrum.png" alt="Frequency spectrum from measured acceleration">
    <figcaption>Frequency-domain view of the same signal.</figcaption>
  </figure>
</div>
```

The two-column layout automatically becomes one column on mobile.

## Quick Rule For Notes vs Study

Use `Notes` for reflections, website updates, personal logs, research process, and field lessons.

Use `Study` for organized learning notes, technical summaries, equations, paper reading, concepts, and reusable explanations.

## Build Check

After editing, run:

```powershell
jekyll build
```

Then check changed pages in:

```text
_site/
```

The source files to commit are the Markdown/data/image files, not the generated `_site` folder.
