---
layout: default
permalink: /study/
title: "Study"
---

# Study

This page collects study notes and learning traces related to structural engineering, sensing systems, data analysis, and physical AI.

## Current Topics

<div class="study-topic-grid">
  <article class="study-topic-card">
    <h3>Structural Dynamics and Reliability</h3>
    <p>Vibration, uncertainty, reliability-based interpretation, and structural response modeling.</p>
  </article>
  <article class="study-topic-card">
    <h3>Sensing and Embedded Systems</h3>
    <p>DAQ workflows, field sensor packaging, wireless sensing, and low-power monitoring systems.</p>
  </article>
  <article class="study-topic-card">
    <h3>AI for Physical Systems</h3>
    <p>Signal preprocessing, event detection, surrogate modeling, and data-driven interpretation of infrastructure behavior.</p>
  </article>
</div>

## Study Notes

{% assign study_posts = site.categories.study | where: "lang", "en" %}
{% if study_posts.size > 0 %}
  <div class="note-card-list">
    {% for post in study_posts %}
      <a class="note-card" href="{{ post.url | relative_url }}">
        <div class="note-card__meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
          {% if post.note_category %}<span>{{ post.note_category }}</span>{% endif %}
        </div>
        <h2>{{ post.title }}</h2>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </a>
    {% endfor %}
  </div>
{% else %}
  <p class="note-empty">Study notes will be added here as they are organized.</p>
{% endif %}
