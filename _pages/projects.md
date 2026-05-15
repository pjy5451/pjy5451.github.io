---
layout: default
permalink: /research/
title: "Research"
---

# Research

<p class="intro">Building intelligent sensing systems for transportation and infrastructure.</p>

{% for group in site.data.projects.groups %}
  <h2>{{ group.title }}</h2>
  <div class="project-grid">
    {% for project in group.projects %}
      <a class="project-card" href="{{ project.href | relative_url }}">
        <h3>{{ project.title }}</h3>
        <div class="project-card__media" aria-hidden="true"></div>
        <p>{{ project.summary }}</p>
      </a>
    {% endfor %}
  </div>
{% endfor %}
