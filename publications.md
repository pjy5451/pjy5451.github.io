---
layout: page
title: Publications
no_site_suffix: true
lang: en
permalink: /publications/
ko_url: /ko/publications/
description: Journal articles, preprints, conference presentations, patents, and research outputs by Junyoung Park in structural health monitoring, IoT sensing, smart infrastructure, and data-driven infrastructure.
---

<div class="pub-summary">
    <p>You can also find my articles on my <a href="https://scholar.google.com/citations?user=Y00UTgQAAAAJ&hl=en">Google Scholar profile</a>.</p>
</div>

<div class="pub-filter-bar" data-pub-filter-bar data-status-all="Showing all outputs" data-status-filtered="Showing filtered outputs" aria-label="Filter publications by topic">
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
<p class="pub-filter-status" data-pub-filter-status>Showing all outputs.</p>

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
