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
