---
layout: page
title: Weight-in-Motion Load Segment Detection
permalink: /projects/weight-in-motion.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/weight-in-motion.svg' | relative_url }}" alt="Weight-in-motion load segment detection project preview" />
</figure>

## Overview

This project develops automated analysis methods for high-speed weigh-in-motion data, including load interval detection and truck-weight correction workflows.

## Problem

Bridge load assessment and overload enforcement require reliable extraction of vehicle load events from noisy, high-speed field measurements. Manual segmentation is difficult to scale and sensitive to operator judgment.

## Approach

- Converted WIM-related sensing records into analysis-ready representations for object detection.
- Applied YOLO-based detection to identify load-generation intervals automatically.
- Worked on signal preprocessing, filtering, and interval recognition for high-speed field data.
- Connected load interval detection with dynamic weight correction and bridge load assessment workflows.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/weight-in-motion.svg' | relative_url }}" alt="Weight-in-motion signal detection workflow" />
    <figcaption>Automated WIM analysis workflow for detecting load intervals from high-speed field measurements.</figcaption>
</figure>

## My Role

My work focuses on turning raw field sensing records into a detection pipeline that can identify relevant load-event intervals and support automated analysis for structural load assessment.

## Results

The project is connected to journal and patent work on automatic load-event interval recognition, real-time correction methods, and WIM-based bridge monitoring.

## Outputs

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Y00UTgQAAAAJ&citation_for_view=Y00UTgQAAAAJ:8k81kl-MbHgC">Related Paper</a>
</div>
