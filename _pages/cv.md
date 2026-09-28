---
layout: default
permalink: /cv/
title: "CV"
description: "CV of Junyoung Park, including education, research experience, and research interests in structural monitoring."
body_class: "page-cv"
---

<header class="cv-simple-header">
  <h1>CV</h1>
  <div class="cv-simple-header__actions">
    <div class="cv-simple-header__action">
      <a class="cv-simple-download" href="/assets/files/Junyoung_Park_CV.pdf" aria-label="Download Junyoung Park's CV as a PDF">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7.5 10.5 4.5 4.5 4.5-4.5"></path><path d="M5 20h14"></path></svg>
        <span>CV PDF</span>
      </a>
      <span class="cv-simple-updated">Updated Sep 2026</span>
    </div>
    <button class="cv-portfolio-toggle" type="button" aria-expanded="false" aria-controls="portfolio-preview" data-portfolio-toggle>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v13H3z"></path><path d="M8 6V4h8v2"></path><path d="M3 11h18"></path></svg>
      <span>View Portfolio</span>
    </button>
  </div>
</header>

<section class="portfolio-preview" id="portfolio-preview" data-portfolio-preview hidden>
  <header class="portfolio-preview__header">
    <div>
      <h2>Portfolio</h2>
      <p>Selected projects and field experience | Korean</p>
    </div>
    <div class="portfolio-preview__actions">
      <a href="/assets/files/Junyoung_Park_Portfolio.pdf" target="_blank" rel="noopener">Open PDF</a>
      <a href="/assets/files/Junyoung_Park_Portfolio.pdf" download>Download</a>
    </div>
  </header>
  <iframe title="Junyoung Park portfolio PDF preview" data-portfolio-frame data-src="/assets/files/Junyoung_Park_Portfolio.pdf#view=FitH" loading="lazy"></iframe>
</section>

<section class="cv-simple-panel" markdown="1">

## Education

<div class="entry entry--education">
  <div class="entry__date">2022 - 2024</div>
  <div class="entry__body">
    <p><strong>M.S. in Civil Engineering (Structural Engineering)</strong>, Chung-Ang University, Seoul, South Korea</p>
    <ul class="degree-notes">
      <li>Dissertation: <em>A scalable Bridge Health Monitoring System using an IoT sensor and Cloud computing</em> <a class="inline-action inline-action--thesis" href="/assets/files/Junyoung_Park_Master_Thesis.pdf">Read Thesis</a></li>
      <li>Advisor: <a href="https://scholar.google.com/citations?user=Ev80LNcAAAAJ">Jong-Woong Park</a></li>
    </ul>
    <details class="coursework">
      <summary>Selected Coursework</summary>
      <div class="coursework-groups">
        <div>
          <h3>Structural Engineering</h3>
          <ul class="chip-list chip-list--coursework">
            <li>Concrete Time-Dependent Behavior</li>
            <li>Advanced Steel Structures</li>
            <li>Structural Dynamics</li>
            <li>Bridge Design Special Topics</li>
          </ul>
        </div>
        <div class="coursework-group--orange">
          <h3>Systems and Data</h3>
          <ul class="chip-list chip-list--coursework">
            <li>Linear Control Systems</li>
            <li>Sensor and Measurement Methods</li>
            <li>Introduction to Machine Learning and Deep Learning</li>
            <li>Computer Programming and AI Applications</li>
          </ul>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="entry entry--education">
  <div class="entry__date">2017 - 2022</div>
  <div class="entry__body">
    <p><strong>B.S. in Civil Engineering and Mathematics (Double major)</strong>, Chung-Ang University, Seoul, South Korea</p>
    <ul class="degree-notes">
      <li>Dissertation: <em>Development of Low-power IoT Sensor and a Cloud-based Data Fusion Displacement Estimation Method for Ambient Bridge Monitoring</em></li>
    </ul>
    <details class="coursework">
      <summary>Selected Coursework</summary>
      <div class="coursework-groups">
        <div>
          <h3>Civil Engineering</h3>
          <ul class="chip-list chip-list--coursework">
            <li>Materials Mechanics</li>
            <li>Materials Mechanics Lab</li>
            <li>Open Channel Hydraulics</li>
            <li>Soil Mechanics I-II</li>
            <li>Soil Mechanics Lab I-II</li>
            <li>Rock Mechanics</li>
            <li>Surveying and Surveying Practice</li>
            <li>Construction Planning and Execution</li>
            <li>Structural Mechanics</li>
            <li>Reinforced Concrete Engineering</li>
            <li>Geotechnical Design</li>
            <li>Civil Infrastructure Capstone Design</li>
          </ul>
        </div>
        <div class="coursework-group--orange">
          <h3>Mathematics</h3>
          <ul class="chip-list chip-list--coursework">
            <li>Calculus</li>
            <li>Linear Algebra</li>
            <li>Statistics</li>
            <li>Numerical Analysis</li>
            <li>Geometry</li>
            <li>Differential Equations I-II</li>
            <li>Differential Geometry I-II</li>
            <li>Analysis I-II</li>
            <li>Topology I-II</li>
            <li>Partial Differential Equations</li>
            <li>Modern Algebra</li>
            <li>Probability and Statistics</li>
            <li>Python Basics and Machine Learning Lab</li>
            <li>Basic Scientific Data Analysis</li>
          </ul>
        </div>
      </div>
    </details>
  </div>
</div>

</section>

<script>
  (function() {
    var toggle = document.querySelector('[data-portfolio-toggle]');
    var preview = document.querySelector('[data-portfolio-preview]');
    var frame = document.querySelector('[data-portfolio-frame]');
    if (!toggle || !preview || !frame) return;

    toggle.addEventListener('click', function() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      toggle.querySelector('span').textContent = expanded ? 'View Portfolio' : 'Hide Portfolio';
      preview.hidden = expanded;
      if (!expanded && !frame.src) frame.src = frame.getAttribute('data-src');
    });
  })();
</script>

<section class="cv-simple-panel" markdown="1">

## Research Experience

<div class="entry entry--experience">
  <div class="entry__date">2024 - Present</div>
  <div class="entry__body">
    <p><strong>Researcher, UDNS</strong></p>
    <ul class="compact-list">
      <li>Develop high-speed WIM and OBM systems for AI-based freight transportation safety.</li>
      <li>Build embedded sensing, DAQ, signal processing, and cloud-connected monitoring workflows.</li>
      <li>Validate field-deployable measurement systems through vehicle and infrastructure monitoring data.</li>
    </ul>
  </div>
</div>

<div class="entry entry--experience">
  <div class="entry__date">2022 - 2024</div>
  <div class="entry__body">
    <p><strong>Graduate Researcher, Chung-Ang University</strong></p>
    <ul class="compact-list">
      <li>Developed IoT sensor and cloud-based systems for long-term bridge monitoring.</li>
      <li>Installed and operated monitoring systems on bridges and field structures in Korea.</li>
      <li>Built portable sensing systems for precast member transportation and load-testing applications.</li>
    </ul>
  </div>
</div>

<div class="entry entry--experience">
  <div class="entry__date">2022</div>
  <div class="entry__body">
    <p><strong>Visiting Researcher, University of Hawaii at Manoa</strong> (Two-week research visit hosted by <a href="https://www.cee.hawaii.edu/faculty-staff-main-2/2-faculty/moon-2/">Professor Dosoo Moon</a>)</p>
    <ul class="compact-list">
      <li>Implemented GPS-based time synchronization for multi-point road-surface vibration measurement.</li>
      <li>Configured the sensing setup for the host laboratory and presented the platform in a lab seminar.</li>
    </ul>
  </div>
</div>

<div class="entry entry--experience">
  <div class="entry__date">2019 - 2022</div>
  <div class="entry__body">
    <p><strong>Undergraduate Researcher, Chung-Ang University</strong></p>
    <ul class="compact-list">
      <li>Designed displacement estimation workflows using strain, acceleration, and data fusion.</li>
      <li>Developed QR-linked maintenance monitoring workflows with low-power sensing and cloud reporting.</li>
      <li>Supported smart sensing projects for port structures, smart concrete, and seismic monitoring.</li>
    </ul>
  </div>
</div>

</section>

<section class="cv-simple-panel" markdown="1">

## Keywords

<div class="research-keyword-groups">
  <div class="research-keyword-group">
    <span class="research-keyword-group__label">Experience</span>
    <div class="publication-card__tags" aria-label="Research experience keywords">
      <span class="publication-card__tag publication-card__tag--blue">Structural Health Monitoring</span>
      <span class="publication-card__tag publication-card__tag--teal">Wireless Sensing</span>
      <span class="publication-card__tag publication-card__tag--orange">Weigh-in-Motion</span>
      <span class="publication-card__tag publication-card__tag--green">Bridge Load Testing</span>
      <span class="publication-card__tag publication-card__tag--violet">Machine Learning</span>
    </div>
  </div>
  <div class="research-keyword-group">
    <span class="research-keyword-group__label">Interests</span>
    <div class="keyword-chips keyword-chips--section keyword-chips--outline" aria-label="Research interest keywords">
      <span>Structural Dynamics</span>
      <span>Inverse Problems</span>
      <span>Probabilistic Modeling</span>
      <span>Structural Reliability</span>
      <span>Physics-Informed ML</span>
      <span>Topology Optimization</span>
    </div>
  </div>
</div>

</section>
