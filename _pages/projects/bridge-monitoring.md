---
layout: default
permalink: /projects/bridge-monitoring/
title: "Cloud-Based Long-Term Bridge Monitoring System"
description: "Project page on cloud-based long-term bridge monitoring using IoT sensors, acceleration and strain measurements, databases, and dashboards."
project_key: bridge-monitoring
---

# Cloud-Based Long-Term Bridge Monitoring System

This project develops a long-term bridge monitoring system using IoT sensors, cloud storage, and dashboards.

## Key Results

- **0.34 mA standby current** for JANET, a low-power IoT node with a 24-bit three-axis accelerometer, eight strain channels, and direct LTE Cat-1 upload.
- **Four in-service bridges** monitored for **over one year** of continuous data under live traffic at **1 kHz** across eight channels, all served from a single cloud back end.
- **Under 1% error** in sensor-fusion displacement estimates against a laser displacement sensor reference.
- Year-long natural-frequency tracking showed that seasonal temperature variation dominated the observed frequency shifts.

## Problem

Conventional bridge inspection and load testing depend on periodic field campaigns, which makes it difficult to track structural behavior continuously between inspection cycles.

## My Role

- Worked on developing JANET, our laboratory's wireless sensor node for acceleration and multi-channel strain measurements.
- Instrumented four in-service bridges and operated cloud data pipelines, database storage, and monitoring dashboards.
- Tracked natural-frequency histories and evaluated displacement estimates from acceleration-strain data fusion.

## System / Methods

- JANET-based acceleration and strain sensing.
- LTE/cloud upload, database storage, and web-based visualization.
- FFT-based vibration-characteristic review.
- Strain-acceleration data fusion for displacement estimation.

## Field Deployment

- Instrumented Seongsan Bridge, Paldang Overpass, Seosomun Overpass, and Jamsu Bridge.
- Deployed a cloud-connected Seosomun Overpass field system for three-axis acceleration, multi-channel strain, and temperature measurement.
- Operated long-term monitoring, performed maintenance checks, and improved sensor reliability under real field conditions.

## Data / Outputs

- Acceleration, strain, temperature, and operation-log data.
- Natural frequency histories, displacement-related estimates, and response trends.
- Field lessons on power management, communication reliability, installation efficiency, and dashboard operation.

## Dashboard Demonstration

<figure class="project-video">
  <div class="project-video__frame">
    <iframe src="https://www.youtube.com/embed/sJ2qWYvAp-c" title="Seongsan Bridge real-time monitoring dashboard demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption>Real-time dashboard visualization developed for Seongsan Bridge monitoring results.</figcaption>
</figure>

## Related Publications / Outputs

- Development of Low-Power IoT Sensor and Cloud-Based Data Fusion Displacement Estimation Method for Ambient Bridge Monitoring.
- IoT Sensor and Cloud-Computing-Based Continuous Bridge Displacement Monitoring System Capable of Acceleration and Strain Sensing.
- Development of IoT Sensor and Cloud-Based Server for Bridge Long-Term Monitoring.

{% include project_funding.html %}
