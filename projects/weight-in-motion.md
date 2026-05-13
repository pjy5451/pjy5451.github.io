---
layout: page
title: Weight-in-Motion Load Segment Detection
permalink: /projects/weight-in-motion/
body_class: project-detail-template
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/portfolio/portfolio-page-26.png' | relative_url }}" alt="Portfolio slide showing WIM DAQ development and field signal processing" />
</figure>

<nav class="project-detail-nav" aria-label="Project navigation">
    <a href="{{ '/projects/' | relative_url }}">All Projects</a>
    <a href="{{ '/field-work/#vehicle-load-field' | relative_url }}">Field Work</a>
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
</nav>

## Overview

This project develops automated analysis methods and measurement hardware for high-speed weigh-in-motion data, including load interval detection, truck-weight correction workflows, and WIM DAQ development.

<ul class="project-facts">
    <li><strong>Period</strong>2025.01 - Present.</li>
    <li><strong>Program</strong>AI data-centered technology for improving freight-truck transport safety.</li>
    <li><strong>Scope</strong>WIM DAQ board, 50 kHz sampling, ADC/filtering/downsampling, field driving data, and detection algorithms.</li>
</ul>

<div class="project-flow">
    <a href="#problem"><span>01</span>Problem</a>
    <a href="#system"><span>02</span>System / Method</a>
    <a href="#field-deployment"><span>03</span>Field Deployment</a>
    <a href="#my-role"><span>04</span>My Role</a>
    <a href="#outputs"><span>05</span>Outputs</a>
</div>

## Problem {#problem}

Bridge load assessment and overload enforcement require reliable extraction of vehicle load events from noisy, high-speed field measurements. Manual segmentation is difficult to scale and sensitive to operator judgment.

## System / Method {#system}

- Converted WIM-related sensing records into analysis-ready representations for object detection.
- Applied YOLO-based detection to identify load-generation intervals automatically.
- Worked on signal preprocessing, filtering, downsampling, and interval recognition for high-speed field data.
- Contributed to WIM DAQ design that replaces bulky measurement equipment with a smaller dedicated acquisition board.
- Reworked scale-factor and weight-estimation logic under differences between lab equipment and field measurement conditions.
- Connected load interval detection with dynamic weight correction and bridge load assessment workflows.

## Field Deployment {#field-deployment}

The work is grounded in real driving and high-speed measurement conditions rather than only simulated signals. Field data are used to check signal quality, load interval visibility, sampling requirements, DAQ stability, and the effect of vehicle speed and dynamic response on weight estimation.

## Data Workflow

Raw WIM signals are converted into event-oriented datasets for preprocessing, visualization, object-detection labeling, YOLO-based interval recognition, and post-detection interpretation. This workflow links the sensing hardware layer to automated analysis that can support bridge load assessment and freight safety applications.

## Field Evidence

<div class="project-evidence-grid">
    <section><h3>What I Built</h3><p>WIM DAQ workflow with high-speed analog acquisition, ADC/filtering/downsampling logic, event labeling, and YOLO-based load interval detection.</p></section>
    <section><h3>What I Deployed</h3><p>Field-driving data review workflow for truck load sensing and WIM measurement environments in an ongoing freight-safety project.</p></section>
    <section><h3>What I Measured</h3><p>High-speed load signals, vehicle events, sampling stability, scale-factor behavior, and signal changes caused by field measurement conditions.</p></section>
    <section><h3>Evidence Assets</h3><p>DAQ board photos, field-driving signal plots, load-event detection examples, and before/after filtering or downsampling comparisons.</p></section>
</div>

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/weight-in-motion.svg' | relative_url }}" alt="Weight-in-motion signal detection workflow" />
    <figcaption>Preserved concept sketch for detecting load intervals from high-speed field measurements.</figcaption>
</figure>

## My Role {#my-role}

My work focuses on turning raw field sensing records into a detection pipeline that can identify relevant load-event intervals and support automated analysis for structural load assessment. I also work on measurement-system design decisions such as analog signal acquisition, filtering, and field-ready DAQ structure.

## Outcome

The project is connected to journal and patent work on automatic load-event interval recognition, real-time correction methods, and WIM-based bridge monitoring.

## Outputs {#outputs}

<div class="pub-actions resource-links">
    <a href="{{ '/publications/' | relative_url }}">Related Publications & Patents</a>
    <a href="{{ '/publications/#journal-articles-10' | relative_url }}">Journal Articles</a>
    <a href="{{ '/publications/#conference-presentations-9' | relative_url }}">Conference Presentations</a>
    <a href="{{ '/publications/#patents-8' | relative_url }}">Patents</a>
    <a href="https://kscejournal.or.kr/jksce/XmlViewer/f450650">Related Paper</a>
    <a href="{{ '/field-work/#vehicle-load-field' | relative_url }}">Field Work</a>
</div>
