---
layout: page
title: Notes
---

Short essays, project logs, research notes, and technical write-ups.

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date_to_string }}

{{ post.excerpt | strip_html }}

{% endfor %}
