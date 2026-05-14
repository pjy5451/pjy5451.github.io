---
layout: default
permalink: /projects/
title: "Projects"
---

# Projects

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
          <span class="project-card__tag">{{ project.tags | first }}</span>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
