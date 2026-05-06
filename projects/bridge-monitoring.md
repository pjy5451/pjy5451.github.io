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

## Problem

Conventional bridge load testing and periodic inspection require substantial labor and are difficult to scale across aging infrastructure. Reference-based displacement measurement is also limited in many field environments where fixed ground references are unavailable.

## Approach

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

## My Role

I worked across the monitoring concept, sensing workflow, cloud data handling, data fusion logic, field deployment, and research documentation. I also contributed to field feedback loops: identifying installation, power, communication, and firmware issues and reflecting them in later sensor and software updates.

## Field Validation

The system was deployed on real bridges including Paldang Overpass, Cheongdam Bridge, and Seongsan Bridge. During development it was applied to more than ten bridge inspection and diagnostic sites by 2022, and later expanded to more than twenty field applications. The field work helped move the system from a laboratory prototype toward a practical long-term monitoring workflow.

## Outputs

The work produced journal publications, conference presentations, patent records, and contributed to Korean Construction New Technology No. 959 registration related to bridge monitoring, IoT sensing, and cloud-based data preprocessing.

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="https://arxiv.org/abs/2209.12186">Preprint</a>
    <a href="https://www.mdpi.com/1424-8220/21/16/5647">Related Paper</a>
</div>
