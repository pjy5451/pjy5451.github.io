---
layout: page
title: Notes
no_site_suffix: true
lang: en
ko_url: /ko/blog.html
description: A chronological list of short notes, personal logs, technical memos, and working reflections from Junyoung Park.
---

Short notes, personal logs, technical memos, and working reflections while organizing my research, projects, field experience, and career materials.

<div class="note-filter-bar" data-note-filter-bar data-status-all="Showing all notes" data-status-filtered="Showing filtered notes" aria-label="Filter notes by topic">
    <button type="button" class="is-active" data-note-filter="all" aria-pressed="true">All</button>
    <button type="button" data-note-filter="research log" aria-pressed="false">Research Log</button>
    <button type="button" data-note-filter="field notes" aria-pressed="false">Field Notes</button>
    <button type="button" data-note-filter="technical notes" aria-pressed="false">Technical Notes</button>
    <button type="button" data-note-filter="coursework" aria-pressed="false">Coursework</button>
    <button type="button" data-note-filter="personal log" aria-pressed="false">Personal Log</button>
</div>
<p class="note-filter-status" data-note-filter-status></p>

<div class="note-index archive-list">
{% assign visible_posts = site.posts | where: "lang", page.lang %}
{% for post in visible_posts %}
    <article class="note-row" data-note-category="{{ post.note_category | default: 'uncategorized' | downcase }}">
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
