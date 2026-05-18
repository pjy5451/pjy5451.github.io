---
layout: default
permalink: /research/
title: "Research"
---

# Research

<p class="intro">Research projects organized around deployable sensing systems, field data, and engineering interpretation for infrastructure and transportation monitoring.</p>

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
