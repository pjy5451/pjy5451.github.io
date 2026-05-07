---
layout: page
title: Smart IoT Earthquake Sensor
permalink: /projects/earthquake-sensor.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/portfolio/portfolio-page-28.png' | relative_url }}" alt="Portfolio slide showing the smart IoT earthquake sensor award and prototype" />
</figure>

## Overview

This project developed a low-cost IoT earthquake sensing and notification concept using embedded event detection and BLE-based communication.

<ul class="project-facts">
    <li><strong>Period</strong>2019.</li>
    <li><strong>Recognition</strong>Minister of the Interior and Safety Award, Smart Earthquake Response Idea Competition.</li>
    <li><strong>Scope</strong>STA/LTA triggering, time-domain and frequency-domain classification, BLE notification, and shaking-table validation.</li>
</ul>

## Problem

Earthquake notification systems need fast event detection, low-cost deployment, and reliable discrimination between meaningful seismic events and ordinary vibration sources.

## System

- Developed a smart sensor concept with low-power BLE communication.
- Implemented real-time trigger logic using STA/LTA-based event detection.
- Used time-domain and frequency-domain features to distinguish earthquake-like inputs from random or sinusoidal vibration.
- Designed a nearby notification workflow using Bluetooth communication.
- Validated the algorithm on ten input waveforms and correctly classified all test cases during the competition validation.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/earthquake-sensor.svg' | relative_url }}" alt="Smart IoT earthquake sensor event detection workflow" />
    <figcaption>Preserved concept sketch for event triggering, classification, and BLE notification.</figcaption>
</figure>

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/portfolio/portfolio-page-29.png' | relative_url }}" alt="STA LTA triggering and earthquake classification algorithm slide" />
    <figcaption>Algorithm slide covering STA/LTA triggering and time/frequency-domain classification logic.</figcaption>
</figure>

## My Role

I worked on the sensing concept, real-time detection logic, algorithm testing, and presentation of the system as an applied disaster-response idea.

## Field Validation

The system was tested using shaking-table inputs and successfully classified multiple input waveforms during competition validation. The project received the Minister of the Interior and Safety Award in a national earthquake response idea competition.

## Data Workflow

The sensing logic connects event triggering, waveform classification, nearby notification, and validation against controlled vibration inputs. This early project established the pattern of combining embedded sensing with interpretable event detection.

## Field Evidence

<div class="project-evidence-grid">
    <section><h3>What I Built</h3><p>To be filled with sensor, gateway, dashboard, DAQ, or analysis components.</p></section>
    <section><h3>What I Deployed</h3><p>To be filled with site type, installation setup, field role, and test conditions.</p></section>
    <section><h3>What I Measured</h3><p>To be filled with signal types, sampling settings, event types, and data volume.</p></section>
    <section><h3>Evidence to Add</h3><p>Photo, cropped field image, short video, dashboard capture, or signal visualization.</p></section>
</div>

## Outputs

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="{{ '/field-work.html' | relative_url }}">Field Work</a>
    <a href="https://www.mdpi.com/1424-8220/20/10/2963">Related Paper</a>
</div>
