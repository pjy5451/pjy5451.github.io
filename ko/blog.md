---
layout: page
title: Notes
no_site_suffix: true
lang: ko
en_url: /blog.html
description: 박준영의 짧은 기록, 개인 로그, 기술 메모, 작업 회고를 시간순으로 모으는 페이지입니다.
---

연구, 프로젝트, 현장 경험, 커리어 자료를 정리하면서 남기는 짧은 기록입니다. 개인적인 로그, 기술 메모, 웹페이지 운영 기록, 생각 정리를 부담 없이 쌓아둡니다.

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
            <p>개인 로그, 기술 메모, 작업 기록을 차례로 추가할 예정입니다.</p>
        </div>
    </article>
{% endfor %}
</div>
