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
      </a>
    {% endfor %}
  </div>
{% endfor %}
