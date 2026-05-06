---
layout: page
title: Weight-in-Motion Load Segment Detection
permalink: /projects/weight-in-motion.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/portfolio/portfolio-page-26.png' | relative_url }}" alt="Portfolio slide showing WIM DAQ development and field signal processing" />
</figure>

## Overview

This project develops automated analysis methods and measurement hardware for high-speed weigh-in-motion data, including load interval detection, truck-weight correction workflows, and WIM DAQ development.

<ul class="project-facts">
    <li><strong>Period</strong>2025.01 - Present.</li>
    <li><strong>Program</strong>AI data-centered technology for improving freight-truck transport safety.</li>
    <li><strong>Scope</strong>WIM DAQ board, 50 kHz sampling, ADC/filtering/downsampling, field driving data, and detection algorithms.</li>
</ul>

## Problem

Bridge load assessment and overload enforcement require reliable extraction of vehicle load events from noisy, high-speed field measurements. Manual segmentation is difficult to scale and sensitive to operator judgment.

## Approach

- Converted WIM-related sensing records into analysis-ready representations for object detection.
- Applied YOLO-based detection to identify load-generation intervals automatically.
- Worked on signal preprocessing, filtering, downsampling, and interval recognition for high-speed field data.
- Contributed to WIM DAQ design that replaces bulky measurement equipment with a smaller dedicated acquisition board.
- Reworked scale-factor and weight-estimation logic under differences between lab equipment and field measurement conditions.
- Connected load interval detection with dynamic weight correction and bridge load assessment workflows.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/weight-in-motion.svg' | relative_url }}" alt="Weight-in-motion signal detection workflow" />
    <figcaption>Preserved concept sketch for detecting load intervals from high-speed field measurements.</figcaption>
</figure>

## My Role

My work focuses on turning raw field sensing records into a detection pipeline that can identify relevant load-event intervals and support automated analysis for structural load assessment. I also work on measurement-system design decisions such as analog signal acquisition, filtering, and field-ready DAQ structure.

## Results

The project is connected to journal and patent work on automatic load-event interval recognition, real-time correction methods, and WIM-based bridge monitoring.

## Outputs

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Y00UTgQAAAAJ&citation_for_view=Y00UTgQAAAAJ:8k81kl-MbHgC">Related Paper</a>
</div>
