---
layout: default
permalink: /projects/
title: "Projects"
---

# Projects

<p class="intro">Selected projects across transportation monitoring, structural monitoring, and smart sensing systems.</p>

{% for group in site.data.projects.groups %}
  <h2>{{ group.title }}</h2>
  <div class="project-grid">
    {% for project in group.projects %}
      <a class="project-card" href="{{ project.href | relative_url }}">
        <div class="project-card__media">
          <span>{{ project.tags | first }}</span>
        </div>
        <div class="project-card__body">
          <span class="project-card__type">{{ group.title }}</span>
          <h3>{{ project.title }}</h3>
          <p class="project-card__period">{{ project.period }}</p>
          <p>{{ project.summary }}</p>
          <ul class="project-card__tags" aria-label="Project keywords">
            {% for tag in project.tags %}
              <li>{{ tag }}</li>
            {% endfor %}
          </ul>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
