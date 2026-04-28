---
layout: page
title: Notes
---

Research notes, project logs, and technical write-ups. I use this section for ideas that are useful to keep public but are not formal publications.

<div class="note-list archive-list">
{% for post in site.posts %}
    <article class="note-item">
        <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_string }}</time>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    </article>
{% endfor %}
</div>
