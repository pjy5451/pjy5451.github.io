---
layout: page
title: Notes
no_site_suffix: true
lang: en
ko_url: /ko/blog.html
description: A chronological list of short notes, personal logs, technical memos, and working reflections from Junyoung Park.
---

Short notes, personal logs, technical memos, and working reflections while organizing my research, projects, field experience, and career materials.

<ul class="note-lanes" aria-label="Note topics">
    <li>Research Log</li>
    <li>Field Notes</li>
    <li>Technical Notes</li>
    <li>Coursework</li>
    <li>Personal Log</li>
</ul>

<div class="note-index archive-list">
{% assign visible_posts = site.posts | where: "lang", page.lang %}
{% for post in visible_posts %}
    <article class="note-row">
        <div class="note-row-meta">
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y.%m.%d" }}</time>
            {% if post.note_category %}<span class="note-label">{{ post.note_category }}</span>{% endif %}
        </div>
        <div class="note-row-body">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
        </div>
    </article>
{% else %}
    <article class="note-row is-empty">
        <div class="note-row-meta">
            <time>Coming Soon</time>
        </div>
        <div class="note-row-body">
            <h3>Notes coming soon</h3>
            <p>Short personal logs, technical memos, and working notes will be added here over time.</p>
        </div>
    </article>
{% endfor %}
</div>
