---
layout: page
title: 노트
no_site_suffix: true
lang: ko
en_url: /blog.html
description: 박준영의 짧은 기록, 개인 로그, 기술 메모, 작업 회고를 시간순으로 모으는 페이지입니다.
---

연구, 프로젝트, 현장 경험, 커리어 자료를 정리하면서 남기는 짧은 기록입니다. 개인적인 로그, 기술 메모, 웹페이지 운영 기록, 생각 정리를 부담 없이 쌓아둡니다.

<div class="note-filter-bar" data-note-filter-bar data-status-all="전체 글 표시" data-status-filtered="필터 적용" aria-label="노트 주제별 필터">
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
            <p>개인 로그, 기술 메모, 작업 기록을 차례로 추가할 예정입니다.</p>
        </div>
    </article>
{% endfor %}
</div>
