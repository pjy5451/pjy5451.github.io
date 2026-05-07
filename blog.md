---
layout: page
title: Notes
no_site_suffix: true
lang: en
ko_url: /ko/blog.html
description: Notes, field logs, research activities, technical writing, proposal experience, and professional updates from Junyoung Park.
---

This page collects short writing that does not fit neatly into formal publications or project pages. I plan to use it as a lightweight research notebook for coursework reviews, technical notes, field logs, and project reflections.

## Note Categories

<div class="note-category-grid">
    <section class="note-category">
        <span>Coursework</span>
        <h3>Concepts I Want to Keep</h3>
        <p>Short reviews of graduate and undergraduate topics such as structural dynamics, finite element analysis, probability, optimization, machine learning, signal processing, and statistics, written from the perspective of how they are used in infrastructure monitoring.</p>
    </section>
    <section class="note-category">
        <span>Technical Notes</span>
        <h3>Methods, Code, and Data</h3>
        <p>Practical notes on sensor preprocessing, filtering, FFT, FIR correction, YOLO-based event detection, time synchronization, cloud databases, MATLAB/Python workflows, and lessons learned while building monitoring pipelines.</p>
    </section>
    <section class="note-category">
        <span>Field Notes</span>
        <h3>Deployment Lessons</h3>
        <p>Observations from bridge tests, precast transportation monitoring, sensor packaging, power and communication issues, installation details, data loss, and the small decisions that make field monitoring systems actually work.</p>
    </section>
</div>

## Activities

<div class="activity-list">
    <article>
        <h3>University of Hawaii Research Visit</h3>
        <p>Visited Prof. Dosoo Moon's laboratory in 2022 to discuss field use cases for JANET sensors, present ongoing research, and exchange sensor-debugging experience with local students.</p>
    </article>
    <article>
        <h3>Proposal and Project Development</h3>
        <p>Contributed to research proposals and applied project documents across infrastructure monitoring, sensing systems, bridge diagnostics, freight monitoring, and AI-assisted civil infrastructure.</p>
    </article>
    <article>
        <h3>Writing Backlog</h3>
        <p>Future notes will collect field observations, data-processing lessons, hardware debugging records, and short reflections from applied monitoring projects.</p>
    </article>
</div>

## Notes

<div class="note-list archive-list">
{% for post in site.posts %}
    <article class="note-item">
        <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_string }}</time>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    </article>
{% else %}
    <article class="note-item">
        <h3>Notes coming soon</h3>
        <p>Coursework reviews, technical notes, project logs, and field records will be added here over time.</p>
    </article>
{% endfor %}
</div>
