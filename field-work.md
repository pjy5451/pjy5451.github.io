---
layout: page
title: Field Work
no_site_suffix: true
body_class: field-work-template
lang: en
ko_url: /ko/field-work.html
description: Field experience framework for Junyoung Park's infrastructure monitoring work, including 50+ field experiments, sensor installation, DAQ workflows, bridge tests, vehicle monitoring, and cloud visualization.
keywords:
  - field experiments
  - infrastructure monitoring
  - sensor installation
  - bridge load testing
  - DAQ
  - field sensing
  - structural health monitoring
  - WIM
  - OBM
---

This page is prepared as a field-work archive for my infrastructure monitoring experience. I have participated in more than 50 field experiments and deployments across bridge monitoring, vehicle load sensing, precast transportation, port structures, sensor installation, DAQ validation, and cloud-based data review.

<div class="field-command-center">
    <div class="field-metrics">
        <section>
            <strong>50+</strong>
            <span>field experiments and deployments</span>
        </section>
        <section>
            <strong>4</strong>
            <span>main field domains: bridges, vehicles, precast, ports</span>
        </section>
        <section>
            <strong>Build to Data</strong>
            <span>hardware, installation, DAQ, cloud, analysis</span>
        </section>
    </div>

    <div class="field-filter-panel">
        <div>
            <span class="field-panel-kicker">Browse</span>
            <h2>Filter field work</h2>
        </div>
        <div class="pub-filter-bar field-filter-bar" data-field-filter-bar data-status-all="Showing all field work categories" data-status-filtered="Showing filtered field work categories" aria-label="Filter field work by topic">
            <button type="button" class="is-active" data-field-filter="all">All</button>
            <button type="button" data-field-filter="Bridge">Bridge</button>
            <button type="button" data-field-filter="Vehicle">Vehicle</button>
            <button type="button" data-field-filter="Precast">Precast</button>
            <button type="button" data-field-filter="Port">Port</button>
            <button type="button" data-field-filter="DAQ">DAQ</button>
            <button type="button" data-field-filter="Cloud">Cloud</button>
        </div>
        <p class="pub-filter-status" data-field-filter-status>Showing all field work categories.</p>
    </div>
</div>

<div class="field-gallery" data-field-gallery>
    <article id="bridge-monitoring-field" data-field-tags="Bridge|Hardware|Cloud|Sensor">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-06.png' | relative_url }}" alt="Smart bridge IoT sensor and cloud monitoring system" />
        <span>Hardware / Cloud</span>
        <h2>Smart bridge IoT monitoring system</h2>
        <p>Stand-alone sensing units, cloud upload, automated analysis, and dashboard visualization for bridge health monitoring.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2024</dd></div>
            <div><dt>Site</dt><dd>Paldang Overpass, Cheongdam Bridge, Seongsan Bridge, and other bridge sites in Korea</dd></div>
            <div><dt>Role</dt><dd>Sensor workflow, field deployment, cloud data review, and system improvement</dd></div>
            <div><dt>Data</dt><dd>Strain, acceleration, displacement, temperature</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">Related project</a>
    </article>
    <article id="bridge-installation-field" data-field-tags="Bridge|Sensor|Installation|Field">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-07.png' | relative_url }}" alt="Bridge field installation and measured response data" />
        <span>Bridge Test</span>
        <h2>Field installation and response data</h2>
        <p>Sensor installation, measured response histories, field validation, and debugging under real bridge conditions.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2024</dd></div>
            <div><dt>Site</dt><dd>Bridge load testing, ambient monitoring, and inspection/diagnosis sites</dd></div>
            <div><dt>Role</dt><dd>Installation, validation, troubleshooting</dd></div>
            <div><dt>Data</dt><dd>Response histories and sensor status</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">Related project</a>
    </article>
    <article id="cloud-dashboard-field" data-field-tags="Bridge|Cloud|Dashboard|Data">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-24.png' | relative_url }}" alt="Cloud monitoring dashboard for bridge response data" />
        <span>Visualization</span>
        <h2>Cloud monitoring dashboard</h2>
        <p>Online monitoring interface for sensor status, vibration, displacement, strain, temperature, and interpreted comments.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2022 - 2024</dd></div>
            <div><dt>System</dt><dd>Cloud database and monitoring dashboard</dd></div>
            <div><dt>Role</dt><dd>Data pipeline and interpretation workflow</dd></div>
            <div><dt>Data</dt><dd>Sensor status, vibration, displacement, strain</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">Related project</a>
    </article>
    <article id="vehicle-load-field" data-field-tags="Vehicle|WIM|OBM|DAQ|Data">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-26.png' | relative_url }}" alt="Vehicle load sensing and WIM DAQ signal workflow" />
        <span>DAQ / WIM</span>
        <h2>Vehicle load sensing and WIM DAQ</h2>
        <p>High-speed signal acquisition, field driving data, load interval detection, and vehicle-weight analysis workflows.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2024 - Present</dd></div>
            <div><dt>Site</dt><dd>Road and WIM measurement environment</dd></div>
            <div><dt>Role</dt><dd>DAQ validation, signal review, detection workflow</dd></div>
            <div><dt>Data</dt><dd>High-speed load signals and vehicle events</dd></div>
        </dl>
        <a href="{{ '/projects/weight-in-motion.html' | relative_url }}">Related project</a>
    </article>
    <article id="precast-transport-field" data-field-tags="Precast|Sensor|Transportation|Field">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-11.png' | relative_url }}" alt="Portable sensing for precast transportation monitoring" />
        <span>Precast</span>
        <h2>Portable sensing during transportation</h2>
        <p>Portable monitoring of strain, acceleration, tilt, and transport-stage response for precast concrete members.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2020 - 2023</dd></div>
            <div><dt>Site</dt><dd>Precast yard, transportation route, panel/girder monitoring cases, and trailer setup</dd></div>
            <div><dt>Role</dt><dd>Portable sensor setup and data interpretation</dd></div>
            <div><dt>Data</dt><dd>Strain, acceleration, tilt, transport events</dd></div>
        </dl>
        <a href="{{ '/projects/portable-sensing.html' | relative_url }}">Related project</a>
    </article>
    <article id="port-monitoring-field" data-field-tags="Port|Sensor|Cloud|AI">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-19.png' | relative_url }}" alt="Packaged sensors for quay wall event monitoring" />
        <span>Port Structure</span>
        <h2>Quay wall event monitoring</h2>
        <p>Ruggedized sensor packaging, harsh-environment monitoring, cloud communication, and AI-assisted event analysis.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2023</dd></div>
            <div><dt>Site</dt><dd>Port and quay wall monitoring environment</dd></div>
            <div><dt>Role</dt><dd>Packaging, sensing workflow, event analysis</dd></div>
            <div><dt>Data</dt><dd>Multisensory event records</dd></div>
        </dl>
        <a href="{{ '/projects/quay-wall-monitoring.html' | relative_url }}">Related project</a>
    </article>
</div>

## Field Record Format

<div class="field-log-template">
    <section>
        <h3>How Each Field Case Can Be Documented</h3>
        <ul>
            <li><strong>Date</strong> Year, month, or project period for the field campaign.</li>
            <li><strong>Site</strong> Bridge, road, precast yard, port, lab-to-field validation site, or anonymized site name.</li>
            <li><strong>Role</strong> Sensor installation, DAQ setup, driving test, cloud review, troubleshooting, or data analysis.</li>
            <li><strong>Hardware</strong> Sensor, gateway, DAQ, power, communication, and packaging details.</li>
            <li><strong>Data</strong> Signal type, sampling rate, event type, dashboard, visualization, or analysis output.</li>
            <li><strong>Evidence</strong> Photo, cropped image, short video, dashboard screenshot, or signal visualization.</li>
        </ul>
    </section>
</div>

## What This Shows

<div class="field-method-grid">
    <section>
        <h3>Build</h3>
        <p>Sensor devices, DAQ boards, gateways, packaging, and data acquisition workflows.</p>
    </section>
    <section>
        <h3>Deploy</h3>
        <p>Bridge, vehicle, precast, and port monitoring under real operating environments.</p>
    </section>
    <section>
        <h3>Analyze</h3>
        <p>Signal preprocessing, data fusion, event detection, cloud dashboards, and engineering interpretation.</p>
    </section>
    <section>
        <h3>Publish</h3>
        <p>Journal papers, preprints, patents, technical reports, and project documentation tied back to field systems.</p>
    </section>
</div>
