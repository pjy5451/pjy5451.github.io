---
layout: page
title: CV
no_site_suffix: true
hide_title: true
body_class: wide-page-template cv-page-template
lang: en
ko_url: /ko/about.html
description: Research profile, selected background, technical skills, awards, and CV link for Junyoung Park in structural health monitoring, IoT sensing, and infrastructure data analysis.
---

<section class="cv-heading">
    <a class="cv-download-button" href="{{ '/assets/files/Junyoung_Park_CV.pdf' | relative_url }}" data-analytics-event="cv_download">Download CV</a>
    <p class="cv-updated">Last updated: May 2026</p>
</section>

<h2>Education</h2>

<div class="timeline">
    <article class="timeline-item">
        <div class="timeline-date">2022 - 2024</div>
        <div class="timeline-content">
            <h3>MS in Structural Engineering</h3>
            <p>Chung-Ang University</p>
            <p>Thesis: <em>A scalable Bridge Health Monitoring System using an IoT sensor and Cloud computing</em></p>
            <p>Advisor: Jongwoong Park</p>
            <details class="coursework-toggle">
                <summary>Selected Coursework</summary>
                <div class="coursework-groups">
                    <section>
                        <h4><span class="coursework-icon" aria-hidden="true">CE</span>Civil Engineering</h4>
                        <div class="course-tags">
                            <span>Concrete Time-Dependent Behavior</span>
                            <span>Advanced Steel Structures</span>
                            <span>Structural Dynamics</span>
                            <span>Bridge Design Special Topics</span>
                        </div>
                    </section>
                    <section>
                        <h4><span class="coursework-icon" aria-hidden="true">SY</span>Systems</h4>
                        <div class="course-tags">
                            <span>Linear Control Systems</span>
                            <span>Sensor and Measurement Methods</span>
                        </div>
                    </section>
                    <section>
                        <h4><span class="coursework-icon" aria-hidden="true">AI</span>Computing</h4>
                        <div class="course-tags">
                            <span>Introduction to Machine Learning and Deep Learning</span>
                            <span>Computer Programming and AI Applications</span>
                        </div>
                    </section>
                </div>
            </details>
        </div>
    </article>

    <article class="timeline-item">
        <div class="timeline-date">2017 - 2022</div>
        <div class="timeline-content">
            <h3>BS in Civil Engineering and Mathematics (Double major)</h3>
            <p>Chung-Ang University</p>
            <details class="coursework-toggle">
                <summary>Selected Coursework</summary>
                <div class="coursework-groups">
                    <section>
                        <h4><span class="coursework-icon" aria-hidden="true">CE</span>Civil Engineering</h4>
                        <div class="course-tags">
                            <span>Materials Mechanics</span>
                            <span>Materials Mechanics Lab</span>
                            <span>Open Channel Hydraulics</span>
                            <span>Soil Mechanics I-II</span>
                            <span>Soil Mechanics Lab I-II</span>
                            <span>Rock Mechanics</span>
                            <span>Surveying and Surveying Practice</span>
                            <span>Construction Planning and Execution</span>
                            <span>Structural Mechanics</span>
                            <span>Reinforced Concrete Engineering</span>
                            <span>Geotechnical Design</span>
                            <span>Civil Infrastructure Capstone Design</span>
                        </div>
                    </section>
                    <section>
                        <h4><span class="coursework-icon" aria-hidden="true">M</span>Mathematics</h4>
                        <div class="course-tags">
                            <span>Calculus</span>
                            <span>Linear Algebra</span>
                            <span>Statistics</span>
                            <span>Numerical Analysis</span>
                            <span>Geometry</span>
                            <span>Differential Equations I-II</span>
                            <span>Differential Geometry I-II</span>
                            <span>Analysis I-II</span>
                            <span>Partial Differential Equations</span>
                            <span>Modern Algebra</span>
                            <span>Probability and Statistics</span>
                            <span>Python Basics and Machine Learning Lab</span>
                            <span>Basic Scientific Data Analysis</span>
                        </div>
                    </section>
                </div>
            </details>
        </div>
    </article>
</div>

<h2>Research Interests</h2>

<div class="research-interest-list">
    <section>
        <h3>Infrastructure Monitoring</h3>
        <p>Structural Health Monitoring, Bridge Monitoring, WIM / OBM</p>
    </section>
    <section>
        <h3>Sensing Systems</h3>
        <p>Smart IoT Sensors, Embedded Systems, Field Deployment</p>
    </section>
    <section>
        <h3>Data & Physical Systems</h3>
        <p>AI-Based Data Analysis, Structural Dynamics, Structural Reliability, Aerospace Engineering, Physical AI</p>
    </section>
</div>

<h2>Skills</h2>

<div class="skills-grid">
    <section>
        <h3>Programming</h3>
        <div class="skill-tags">
            <span>Python</span>
            <span>MATLAB</span>
            <span>C</span>
            <span>JavaScript/Node.js</span>
            <span>PyTorch</span>
            <span>TensorFlow</span>
        </div>
    </section>
    <section>
        <h3>Domains</h3>
        <div class="skill-tags">
            <span>Structural Health Monitoring</span>
            <span>Bridge Monitoring</span>
            <span>WIM/OBM</span>
            <span>Smart Infrastructure</span>
        </div>
    </section>
    <section>
        <h3>Sensing & Systems</h3>
        <div class="skill-tags">
            <span>IoT Sensors</span>
            <span>Wireless Sensing</span>
            <span>Cloud-Based Monitoring</span>
            <span>Field Testing</span>
        </div>
    </section>
    <section>
        <h3>Data & AI</h3>
        <div class="skill-tags">
            <span>Sensor Data Analysis</span>
            <span>Data Fusion</span>
            <span>AI-Based Event Detection</span>
            <span>Object Detection</span>
        </div>
    </section>
</div>

<h2>Work Experience</h2>

<div class="timeline">
    <article class="timeline-item">
        <div class="timeline-date">2024 - Present</div>
        <div class="timeline-content">
            <h3>Researcher, UDNS</h3>
            <p>I am involved in the research and development of high-speed WIM, OBM, sensor systems, embedded technologies, data analysis, and field deployment technologies in the field of AI-based freight transportation safety technologies.</p>
        </div>
    </article>
</div>

<h2>Publications</h2>

<div class="cv-publication-list">
    {% for section in site.data.publications.sections %}
        {% unless section.title.en == "Conference Presentations" %}
        <section class="cv-publication-section">
            <h3>{{ section.title.en }}</h3>
            {% for entry in section.entries %}
                <article class="cv-publication-item">
                    <span class="cv-publication-year">{{ entry.year }}</span>
                    <div>
                        <strong class="cv-publication-title">{% if entry.href.en %}<a href="{{ entry.href.en }}">{{ entry.title.en }}</a>{% else %}{{ entry.title.en }}{% endif %}</strong>
                        <p class="cv-publication-authors">{{ entry.authors.en | strip_newlines }}</p>
                        <p>{{ entry.venue.en | strip_newlines }}</p>
                    </div>
                </article>
            {% endfor %}
        </section>
        {% endunless %}
    {% endfor %}
</div>

<a class="cv-section-link" href="{{ '/publications.html' | relative_url }}">View publication filters and links</a>

<h2>Conference Presentations</h2>

<div class="cv-publication-list">
    {% for section in site.data.publications.sections %}
        {% if section.title.en == "Conference Presentations" %}
            <section class="cv-publication-section">
                {% for entry in section.entries %}
                    <article class="cv-publication-item">
                        <span class="cv-publication-year">{{ entry.year }}</span>
                        <div>
                            <strong class="cv-publication-title">{% if entry.href.en %}<a href="{{ entry.href.en }}">{{ entry.title.en }}</a>{% else %}{{ entry.title.en }}{% endif %}</strong>
                            <p>{{ entry.venue.en | strip_newlines }}</p>
                        </div>
                    </article>
                {% endfor %}
            </section>
        {% endif %}
    {% endfor %}
</div>

<h2>Honors and Awards</h2>

<ul class="award-list compact-cv-list">
    <li>
        <span class="award-year">2024</span>
        <span class="award-title">Best Paper Presentation Award</span>
        <span class="award-organization">Korea Institute for Structural Maintenance and Inspection</span>
    </li>
    <li>
        <span class="award-year">2022</span>
        <span class="award-title">Gold Prize, Korea Future Talent Festival</span>
        <span class="award-organization">National Research Foundation of Korea</span>
    </li>
    <li>
        <span class="award-year">2021</span>
        <span class="award-title">Excellence Award, LH Land Development Technology Competition</span>
        <span class="award-organization">Korea Land and Housing Corporation</span>
    </li>
    <li>
        <span class="award-year">2021</span>
        <span class="award-title">Smart Construction Challenge Award</span>
        <span class="award-organization">Korea National Railway</span>
    </li>
    <li>
        <span class="award-year">2019</span>
        <span class="award-title">Minister Award, Smart Earthquake Response Idea Competition</span>
        <span class="award-organization">Ministry of the Interior and Safety</span>
    </li>
</ul>

<h2>Scholarships</h2>

<ul class="award-list compact-cv-list">
    <li>
        <span class="award-year">2020</span>
        <span class="award-title">Seah Haiam Scholarship</span>
        <span class="award-organization">Seah Haiam Academic Scholarship Foundation</span>
    </li>
    <li>
        <span class="award-year">2019</span>
        <span class="award-title">Hyeeum Scholarship</span>
        <span class="award-organization">Chung-Ang University Department of Civil Engineering Alumni Association</span>
    </li>
    <li>
        <span class="award-year">2019</span>
        <span class="award-title">Hwanju Scholarship</span>
        <span class="award-organization">Chung-Ang University</span>
    </li>
    <li>
        <span class="award-year">2018</span>
        <span class="award-title">Academic Excellence Scholarship</span>
        <span class="award-organization">Gwangju Seo-gu Scholarship Foundation</span>
    </li>
</ul>

<h2>Teaching & Other Activities</h2>

<p class="cv-pending-note">Details will be added after confirmation.</p>
