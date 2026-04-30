---
layout: page
title: Miscellaneous
description: Miscellaneous professional activities, technical notes, field logs, proposal experience, and research visits by Junyoung Park.
---

This page collects professional activities that do not fit neatly into formal publications or project pages: international visits, technical notes, proposal experience, field logs, and short writing.

## Activities

- **University of Hawaii research visit**: visited Prof. Dosoo Moon's laboratory in 2022 to discuss field use cases for JANET sensors, present ongoing research, and exchange sensor-debugging experience with local students.
- **Proposal and project development**: contributed to research proposals and applied project documents across infrastructure monitoring, sensing systems, bridge diagnostics, freight monitoring, and AI-assisted civil infrastructure.
- **Technical writing space**: future notes will collect field observations, data-processing lessons, hardware debugging records, and short reflections from applied monitoring projects.

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
        <p>Short technical notes, project logs, and field records will be added here over time.</p>
    </article>
{% endfor %}
</div>
