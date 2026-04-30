---
layout: page
title: Smart IoT Earthquake Sensor
permalink: /projects/earthquake-sensor.html
---

<figure class="project-detail-media">
    <img class="project-detail-hero" src="{{ '/assets/images/projects/earthquake-sensor.svg' | relative_url }}" alt="Smart IoT earthquake sensor project preview" />
</figure>

## Overview

This project developed a low-cost IoT earthquake sensing and notification concept using embedded event detection and BLE-based communication.

## Problem

Earthquake notification systems need fast event detection, low-cost deployment, and reliable discrimination between meaningful seismic events and ordinary vibration sources.

## Approach

- Developed a smart sensor concept with low-power BLE communication.
- Implemented real-time trigger logic using STA/LTA-based event detection.
- Used time-domain and frequency-domain features to distinguish earthquake-like inputs from random or sinusoidal vibration.
- Designed a nearby notification workflow using Bluetooth communication.

<figure class="project-body-figure">
    <img src="{{ '/assets/images/projects/earthquake-sensor.svg' | relative_url }}" alt="Smart IoT earthquake sensor event detection workflow" />
    <figcaption>Embedded earthquake-sensing workflow combining event triggering, classification, and BLE notification.</figcaption>
</figure>

## My Role

I worked on the sensing concept, real-time detection logic, algorithm testing, and presentation of the system as an applied disaster-response idea.

## Field Validation

The system was tested using shaking-table inputs and successfully classified multiple input waveforms during competition validation. The project received the Minister of the Interior and Safety Award in a national earthquake response idea competition.

## Outputs

<div class="pub-actions resource-links">
    <a href="{{ '/publications.html' | relative_url }}">Related Publications & Patents</a>
    <a href="https://www.mdpi.com/1424-8220/20/10/2963">Related Paper</a>
</div>
