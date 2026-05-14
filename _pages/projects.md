---
layout: default
permalink: /research/
title: "Research"
---

# Research

{% for group in site.data.projects.groups %}
  <h2>{{ group.title }}</h2>
  <div class="project-grid">
    {% for project in group.projects %}
      <a class="project-card" href="{{ project.href | relative_url }}">
        <div class="project-card__media" aria-hidden="true"></div>
        <div class="project-card__body">
          <h3>{{ project.title }}</h3>
          <p class="project-card__period">{{ project.period }}</p>
          <p>{{ project.summary }}</p>
          <div class="project-card__tags">
            {% for tag in project.tags limit:2 %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}

<h2>Funded Research</h2>

{% assign funded_entries = site.data.funding.entries %}
{% if funded_entries.size > 0 %}
  <div class="funding-list">
    {% for item in funded_entries %}
      <article class="funding-item">
        <div>
          <h3>{{ item.title }}</h3>
          {% if item.agency %}<p>{{ item.agency }}</p>{% endif %}
        </div>
        <div class="funding-item__meta">
          {% if item.period %}<span>{{ item.period }}</span>{% endif %}
          {% if item.role %}<span>{{ item.role }}</span>{% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p class="note-empty">Funding information will be added after project-level funding details are organized.</p>
{% endif %}
