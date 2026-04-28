---
layout: page
title: Miscellaneous
---

Miscellaneous notes, project logs, technical write-ups, and short records that do not fit neatly into formal publications or project pages.

<div class="note-list archive-list">
{% for post in site.posts %}
    <article class="note-item">
        <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_string }}</time>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    </article>
{% endfor %}
</div>
