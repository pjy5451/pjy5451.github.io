---
layout: default
permalink: /projects/on-board-mass/
title: "OBM System Accuracy Improvement"
description: "Project page on improving OBM accuracy through vehicle-mounted sensing, dynamic weight correction, field driving validation, and WIM comparison."
project_key: on-board-mass
---

# OBM (On-Board Mass) System Accuracy Improvement

This project improves on-board mass estimation accuracy through vehicle-mounted sensing and dynamic weight correction during driving.

## Key Results

- **Dynamic weight correction:** payload estimated from multi-channel suspension sensors, with vehicle dynamic effects compensated using IMU signals.
- **Type approval testing:** completed environmental, EMC, and ingress-protection tests for TCA Category B type approval.
- **Granted patent** on real-time FIR-filter-based correction of the dynamic operating weight of freight vehicles (KR 10-2951213).
- Defined the communication protocol between the network module and the mobile application, and modified the Android application accordingly.

## Problem

Vehicle-mounted mass estimation is affected by dynamic driving states, road conditions, and vibration, so raw measurements must be corrected before they can support transportation safety decisions.

## My Role

- Reviewed vehicle-state sensing data for truck operating-weight estimation.
- Supported dynamic weight correction workflows for in-motion vehicle data.
- Connected OBM validation to WIM-related field driving conditions.

## System / Methods

- Vehicle-state sensing for operating-weight estimation.
- FIR-filter-based dynamic weight correction.
- Signal review and validation against WIM-related conditions.
- Data preprocessing for transportation safety workflows.

## Field Deployment

- Supported field validation using driving data from commercial-vehicle monitoring conditions.
- Compared vehicle-mounted sensing outputs with WIM-related operating scenarios.

## Data / Outputs

- Vehicle-state signals and dynamic weight correction records.
- Validation records against field driving conditions.
- Stabilized operating-weight estimates for transportation monitoring.

## Related Publications / Outputs

- Stabilization of Dynamic Weight Estimation Systems for Commercial Vehicles during Driving.
- Real-Time Dynamic Truck Operating Weight Correction Based on an FIR Filter.

{% include project_funding.html %}
