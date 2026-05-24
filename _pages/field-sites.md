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
          <p>{{ field_site.summary }}</p>
        </div>
        <div class="field-site-card__details">
          <div class="field-site-card__meta">
            {% if field_site.location %}
              <span>{{ field_site.location }}</span>
            {% endif %}
            {% if field_site.period %}
              <span>{{ field_site.period }}</span>
            {% endif %}
            {% if field_site.sites and field_site.sites.size > 1 %}
              <span>{{ field_site.sites.size }} field sites</span>
            {% endif %}
          </div>
          {% if field_site.field_focus %}
            <p class="field-site-card__label">Field focus</p>
            <p class="field-site-card__location">{{ field_site.field_focus }}</p>
          {% endif %}
          {% if field_site.sites and field_site.sites.size > 1 %}
            <p class="field-site-card__label">Test sites</p>
            <ul class="field-site-card__data field-site-card__data--sites">
              {% for site_name in field_site.sites %}
                <li>{{ site_name }}</li>
              {% endfor %}
            </ul>
          {% endif %}
          <p class="field-site-card__label">Measurements / outputs</p>
          <ul class="field-site-card__data">
            {% for datum in field_site.data %}
              <li>{{ datum }}</li>
            {% endfor %}
          </ul>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
