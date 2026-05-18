---
layout: default
permalink: /study/
title: "Study"
---

# Study

A small collection of notes from topics I am currently studying.

## Topics

<div class="study-topic-grid">
  <article class="study-topic-card">
    <h3>Structural Dynamics</h3>
    <p>Vibration, modal response, and field-measured structural behavior.</p>
  </article>
  <article class="study-topic-card">
    <h3>Reliability</h3>
    <p>Uncertainty, probability, and reliability-based interpretation.</p>
  </article>
  <article class="study-topic-card">
    <h3>AI for Physical Systems</h3>
    <p>Data-driven models for sensing, monitoring, and engineering systems.</p>
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
  <p class="note-empty">Study notes will appear here as they are organized.</p>
{% endif %}
