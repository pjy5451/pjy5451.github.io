---
layout: default
permalink: /field-sites/
title: "Field Sites"
---

# Field Sites

Field sites where sensing systems were tested, deployed, or reviewed under real monitoring conditions.

{% for group in site.data.field_sites.groups %}
  <h2>{{ group.title }}</h2>
  <div class="field-site-grid">
    {% for field_site in group.sites %}
      <a class="field-site-card" href="{{ field_site.href | relative_url }}">
        <div class="field-site-card__media" aria-hidden="true">
          {% if field_site.image %}
            <img src="{{ field_site.image | relative_url }}" alt="">
          {% endif %}
        </div>
        <div class="field-site-card__intro">
          <h3>{{ field_site.name }}</h3>
          {% if field_site.location %}
            <p class="field-site-card__location-line">📍 {{ field_site.location }}</p>
          {% endif %}
          <p class="field-site-card__label">Field period</p>
          <p class="field-site-card__period">
            {% if field_site.date_range %}
              {{ field_site.date_range }}
            {% else %}
              {{ field_site.period }}
            {% endif %}
          </p>
          <p class="field-site-card__data-summary">
            {% if field_site.data_summary %}
              {{ field_site.data_summary }}
            {% else %}
              {{ field_site.summary }}
            {% endif %}
          </p>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
