---
layout: default
permalink: /projects/weight-in-motion/
title: "High-Speed WIM System Development"
description: "Project page on high-speed WIM system development, including DAQ workflows, load-event detection, vehicle load sensing, and field signal processing."
project_key: weight-in-motion
---

# High-Speed WIM System Development

This project develops a high-speed weigh-in-motion system for load sensing, DAQ, and automatic load-event detection.

## Key Results

- **YOLO-based axle load segment detection** on real-road HS-WIM data: precision 0.999, recall 1.000, and mAP@0.5 0.995 in validation, with about **95% segment detection accuracy** on an independent test set.
- **Signal-processing pipeline** that extracts axle load, gross weight, speed, and vehicle dimensions from raw load-cell signals, combining automatic load-segment detection with FIR-filtered dynamic weight estimation.
- **One year of continuous HS-WIM measurements** analyzed to characterize vehicle class and gross weight by time of day and season.
- Co-designed the multi-channel signal acquisition PCB for the load cells.

## Problem

High-speed WIM systems must acquire short-duration load signals reliably under real driving conditions, where noise, speed variation, and field installation conditions make automatic load-event interpretation difficult.

## My Role

- Developed DAQ and signal-processing workflows for high-speed vehicle load sensing.
- Reviewed field driving data and redesigned preprocessing steps for WIM signal interpretation.
- Built automatic load-event detection workflows for vehicle-load data.

## System / Methods

- High-speed multi-channel WIM signal acquisition.
- Filtering, downsampling, and signal preprocessing for field data.
- YOLO-based automatic load segment detection.
- Load-cell signal review for axle/load-event interpretation.

## Field Deployment

- Supported WIM field tests at Saemangeum and Bongdong.
- Validated sensing workflows using vehicle driving data collected under field conditions.

## Data / Outputs

- High-speed load signals, filtered/downsampled records, and event labels.
- Load-event interval detection outputs.
- Field validation data for transportation monitoring and enforcement-oriented workflows.

## Related Publications / Outputs

- YOLO-Based Automatic Load Segment Detection for High-Speed Weigh-in-Motion Systems.
- Development of a Cloud-Based Integrated Platform for Autonomous Enforcement.

{% include project_funding.html %}
