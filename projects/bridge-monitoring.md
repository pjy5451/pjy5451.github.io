---
layout: page
title: Bridge Monitoring and Displacement Estimation
permalink: /projects/bridge-monitoring.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/portfolio/portfolio-page-06.png' | relative_url }}" alt="Portfolio slide showing the smart bridge IoT sensor and cloud monitoring system" />
</figure>

## Overview

This project developed a scalable bridge monitoring framework that connects stand-alone IoT sensing, cloud computing, and multimetric data fusion for long-term structural health monitoring. It formed the core direction of my master's thesis: *A scalable Bridge Health Monitoring System using an IoT sensor and Cloud computing*.

<ul class="project-facts">
    <li><strong>Period</strong>2021.04 - 2022.12, with follow-up field deployment and technology registration work.</li>
    <li><strong>Program</strong>Smart Bridge Level 3 IoT sensing and cloud system development, Ministry of Land, Infrastructure and Transport.</li>
    <li><strong>Scope</strong>Bridge sensing hardware, cloud database, automated FFT/displacement analysis, and field validation.</li>
</ul>

<div class="project-flow">
    <a href="#problem"><span>01</span>Problem</a>
    <a href="#system"><span>02</span>System / Method</a>
    <a href="#field-deployment"><span>03</span>Field Deployment</a>
    <a href="#my-role"><span>04</span>My Role</a>
    <a href="#outputs"><span>05</span>Outputs</a>
</div>

## Problem {#problem}

Conventional bridge load testing and periodic inspection require substantial labor and are difficult to scale across aging infrastructure. Reference-based displacement measurement is also limited in many field environments where fixed ground references are unavailable.

## System / Method {#system}

- Designed an IoT sensing workflow for synchronized strain and acceleration measurement.
- Built a cloud-based data pipeline for wireless upload, database storage, dashboard visualization, and automated analysis.
- Applied multimetric data fusion to estimate bridge displacement without a fixed external reference.
- Used field data to evaluate vibration characteristics, displacement histories, communication reliability, power management, and installation efficiency.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/bridge-monitoring.svg' | relative_url }}" alt="Bridge monitoring workflow with sensing, cloud storage, and data fusion" />
    <figcaption>Preserved concept sketch for the bridge sensing, cloud data handling, and displacement-estimation workflow.</figcaption>
</figure>

<div class="project-figure-grid">
    <figure class="project-body-figure">
        <img src="{{ '/assets/images/projects/portfolio/portfolio-page-07.png' | relative_url }}" alt="Field installation and measured bridge response data at Paldang Overpass" />
        <figcaption>Field deployment on Paldang Overpass with sensor installation and measured response histories.</figcaption>
    </figure>
    <figure class="project-body-figure">
        <img src="{{ '/assets/images/projects/portfolio/portfolio-page-24.png' | relative_url }}" alt="Web dashboard for online bridge monitoring" />
        <figcaption>Online monitoring dashboard showing sensor status, vibration, displacement, strain, temperature, and AI-assisted comments.</figcaption>
    </figure>
</div>

## My Role {#my-role}

I worked across the monitoring concept, sensing workflow, cloud data handling, data fusion logic, field deployment, and research documentation. I also contributed to field feedback loops: identifying installation, power, communication, and firmware issues and reflecting them in later sensor and software updates.

## Field Deployment {#field-deployment}

The system was deployed on real bridges including Paldang Overpass, Cheongdam Bridge, and Seongsan Bridge. During development it was applied to more than ten bridge inspection and diagnostic sites by 2022, and later expanded to more than twenty field applications. The field work helped move the system from a laboratory prototype toward a practical long-term monitoring workflow.

## Data Workflow

The monitoring workflow connects synchronized strain and acceleration sensing, cloud upload, database storage, automated FFT analysis, displacement estimation, dashboard visualization, and engineering interpretation. This full chain is the main reason the project works as a field system rather than only a sensing experiment.

## Field Evidence

<div class="project-evidence-grid">
    <section><h3>What I Built</h3><p>To be filled with sensor, gateway, dashboard, DAQ, or analysis components.</p></section>
    <section><h3>What I Deployed</h3><p>To be filled with site type, installation setup, field role, and test conditions.</p></section>
    <section><h3>What I Measured</h3><p>To be filled with signal types, sampling settings, event types, and data volume.</p></section>
    <section><h3>Evidence to Add</h3><p>Photo, cropped field image, short video, dashboard capture, or signal visualization.</p></section>
</div>

## Outputs {#outputs}

The work produced journal publications, conference presentations, patent records, and contributed to Korean Construction New Technology No. 959 registration related to bridge monitoring, IoT sensing, and cloud-based data preprocessing.

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="{{ '/field-work.html#bridge-monitoring-field' | relative_url }}">Field Work</a>
    <a href="https://arxiv.org/abs/2209.12186">Preprint</a>
    <a href="https://www.mdpi.com/1424-8220/21/16/5647">Related Paper</a>
</div>
