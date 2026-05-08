---
layout: page
title: QR-Based Bridge Lifecycle Monitoring
permalink: /projects/qr-lifecycle-monitoring.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/portfolio/portfolio-page-15.png' | relative_url }}" alt="Portfolio slide showing QR-based lifecycle monitoring sensor hardware" />
</figure>

## Overview

This project explores QR-linked lifecycle monitoring for infrastructure components using low-power sensing, e-paper visualization, and cloud-based data collection.

<ul class="project-facts">
    <li><strong>Period</strong>2020.04 - 2023.12.</li>
    <li><strong>Program</strong>Digital road-structure design, fabrication, and construction support technology.</li>
    <li><strong>Scope</strong>Ultra-low-power strain sensing, QR visualization, chatbot upload, cloud database, and AI-assisted reports.</li>
</ul>

<div class="project-flow">
    <a href="#problem"><span>01</span>Problem</a>
    <a href="#system"><span>02</span>System / Method</a>
    <a href="#field-deployment"><span>03</span>Field Deployment</a>
    <a href="#my-role"><span>04</span>My Role</a>
    <a href="#outputs"><span>05</span>Outputs</a>
</div>

## Problem {#problem}

Long-term infrastructure monitoring often requires communication modules, battery maintenance, or manual data handling. For embedded or distributed sensors, a lightweight method is needed to expose accumulated measurement histories without complex network infrastructure.

## System / Method {#system}

- Designed a low-power strain monitoring concept that can wake periodically and record long-term measurements.
- Visualized accumulated sensing data as QR codes on an e-paper display.
- Used a smartphone or chatbot-based workflow to decode QR data and upload it to a cloud database.
- Explored AI-assisted report generation from collected sensing histories.
- Designed around long service life by reducing idle current and avoiding always-on communication hardware.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/qr-lifecycle.svg' | relative_url }}" alt="QR-based lifecycle monitoring workflow" />
    <figcaption>Preserved concept sketch for QR-based data acquisition, cloud-side reporting, and long-term monitoring.</figcaption>
</figure>

<div class="project-figure-grid">
    <figure class="project-body-figure">
        <img src="{{ '/assets/images/projects/portfolio/portfolio-page-16.png' | relative_url }}" alt="QR scanning, chatbot upload, cloud storage, and AI report generation workflow" />
        <figcaption>QR scan to chatbot upload, cloud database storage, and AI-assisted report generation workflow.</figcaption>
    </figure>
    <figure class="project-body-figure">
        <img src="{{ '/assets/images/projects/portfolio/portfolio-page-17.png' | relative_url }}" alt="Field installation of embedded strain gauges and QR sensing on Choha Bridge" />
        <figcaption>Field installation with embedded strain gauges, temperature measurement, and periodic QR-based data acquisition.</figcaption>
    </figure>
</div>

## My Role {#my-role}

I contributed to the sensing concept, data collection workflow, QR-based visualization idea, chatbot/cloud-side handling of scanned data, and report-generation workflow.

## Field Deployment {#field-deployment}

The concept was applied to bridge-related field monitoring with embedded strain gauges and QR-based periodic data acquisition. The workflow was also extended toward citizen-assisted and robot-assisted data collection scenarios.

## Data Workflow

The system connects embedded strain measurement, local QR visualization, smartphone or chatbot-based upload, cloud storage, and AI-assisted report generation. It is a field-oriented alternative for cases where always-on communication is difficult to maintain.

## Field Evidence

<div class="project-evidence-grid">
    <section><h3>What I Built</h3><p>To be filled with sensor, gateway, dashboard, DAQ, or analysis components.</p></section>
    <section><h3>What I Deployed</h3><p>To be filled with site type, installation setup, field role, and test conditions.</p></section>
    <section><h3>What I Measured</h3><p>To be filled with signal types, sampling settings, event types, and data volume.</p></section>
    <section><h3>Evidence to Add</h3><p>Photo, cropped field image, short video, dashboard capture, or signal visualization.</p></section>
</div>

## Outputs {#outputs}

This work is connected to patents and project outcomes on QR-based sensing, long-term monitoring, and citizen-assisted data acquisition.

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Patents</a>
    <a href="{{ '/field-work.html#bridge-monitoring-field' | relative_url }}">Field Work</a>
</div>
