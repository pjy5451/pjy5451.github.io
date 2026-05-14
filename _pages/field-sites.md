---
layout: default
permalink: /field-sites/
title: "Field Sites"
---

# Field Sites

This page summarizes real-world sites where I have deployed, operated, or reviewed sensing and monitoring systems. I keep this page separate from Research because it is more about field context, measured data, and deployment experience than project categories.

{% for group in site.data.field_sites.groups %}
  <h2>{{ group.title }}</h2>
  <div class="field-site-grid">
    {% for field_site in group.sites %}
      <article class="field-site-card">
        <div class="field-site-card__intro">
          <h3>{{ field_site.name }}</h3>
          <p>{{ field_site.summary }}</p>
        </div>
        <div class="field-site-card__details">
          <p class="field-site-card__label">Data handled</p>
          <ul class="field-site-card__data">
            {% for datum in field_site.data %}
              <li>{{ datum }}</li>
            {% endfor %}
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
{% endfor %}
