---
layout: page
title: 논문 및 특허
no_site_suffix: true
lang: ko
en_url: /publications.html
description: 박준영의 논문, 프리프린트, 학회 발표, 특허, 구조물 모니터링 및 IoT 센싱 연구 산출물을 정리한 페이지입니다.
---

<div class="pub-summary">
    <p>구조물 건전성 모니터링, IoT 센싱, 교량 변위 추정, WIM/OBM, AI 기반 인프라 모니터링과 관련된 논문, 기술 기사, 프리프린트, 학회 발표, 특허를 정리했습니다.</p>
    <a href="https://scholar.google.com/citations?user=Y00UTgQAAAAJ&hl=en">Google Scholar</a>
    <a href="{{ '/ko/field-work.html' | relative_url }}">현장 작업</a>
    <span>146 citations</span>
</div>

<div class="pub-filter-bar" data-pub-filter-bar data-status-all="전체 항목 표시 중" data-status-filtered="필터 적용 항목 표시 중" aria-label="Filter publications by topic">
    <button type="button" class="is-active" data-pub-filter="all">All</button>
    <button type="button" data-pub-filter="Bridge">Bridge</button>
    <button type="button" data-pub-filter="WIM|OBM">WIM/OBM</button>
    <button type="button" data-pub-filter="IoT">IoT</button>
    <button type="button" data-pub-filter="AI">AI</button>
    <button type="button" data-pub-filter="Sensor">Sensors</button>
    <button type="button" data-pub-filter="Concrete|Crack">Concrete</button>
    <button type="button" data-pub-filter="Cloud">Cloud</button>
    <button type="button" data-pub-filter="Port">Ports</button>
</div>
<p class="pub-filter-status" data-pub-filter-status>전체 항목 표시 중.</p>

{% assign pub_lang = page.lang | default: 'en' %}
{% for section in site.data.publications.sections %}
## {{ section.title[pub_lang] }} ({{ section.entries | size }})

<div class="pub-list">
{% for item in section.entries %}
    <article class="pub-entry">
        <div class="pub-year">{{ item.year }}</div>
        <div class="pub-tags">{% for tag in item.tags %}<span>{{ tag }}</span>{% endfor %}</div>
        <div class="pub-body">
            {% assign item_title = item.title[pub_lang] | default: item.title.en %}
            {% assign item_href = item.href[pub_lang] | default: item.href.en %}
            {% if item_href %}
                {% if item_href contains '://' %}
                    {% assign rendered_href = item_href %}
                {% else %}
                    {% assign rendered_href = item_href | relative_url %}
                {% endif %}
                <h3><a href="{{ rendered_href }}">{{ item_title }}</a></h3>
            {% else %}
                <h3>{{ item_title }}</h3>
            {% endif %}
            <p class="pub-authors">{{ item.authors[pub_lang] | default: item.authors.en }}</p>
            <p class="pub-venue">{{ item.venue[pub_lang] | default: item.venue.en }}</p>
            {% assign actions = item.actions[pub_lang] | default: item.actions.en %}
            {% if actions %}
            <div class="pub-actions">
                {% for action in actions %}
                    {% if action.href %}
                        {% if action.href contains '://' %}
                            {% assign action_href = action.href %}
                        {% else %}
                            {% assign action_href = action.href | relative_url %}
                        {% endif %}
                        <a href="{{ action_href }}">{{ action.label }}</a>
                    {% else %}
                        <span>{{ action.label }}</span>
                    {% endif %}
                {% endfor %}
            </div>
            {% endif %}
        </div>
    </article>
{% endfor %}
</div>
{% endfor %}
