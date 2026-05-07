---
layout: page
title: Notes
no_site_suffix: true
lang: ko
en_url: /blog.html
description: 박준영의 수업 정리, 기술 노트, 현장 기록, 연구 활동, 프로젝트 회고를 모으는 페이지입니다.
---

이 페이지는 논문이나 프로젝트 페이지에 넣기 애매한 짧은 글을 모으는 공간입니다. 앞으로 수업 정리, 기술 노트, 현장 기록, 프로젝트 회고를 가볍게 쌓아두는 연구 노트처럼 활용하려고 합니다.

## Note Categories

<div class="note-category-grid">
    <section class="note-category">
        <span>Coursework</span>
        <h3>계속 붙잡고 싶은 개념</h3>
        <p>구조동역학, 유한요소해석, 확률, 최적화, 머신러닝, 신호처리, 통계처럼 학부와 대학원에서 공부한 내용을 인프라 모니터링 관점에서 다시 정리합니다.</p>
    </section>
    <section class="note-category">
        <span>Technical Notes</span>
        <h3>방법, 코드, 데이터</h3>
        <p>센서 데이터 전처리, 필터링, FFT, FIR 보정, YOLO 기반 이벤트 탐지, 시간 동기화, 클라우드 데이터베이스, MATLAB/Python 워크플로처럼 실제 시스템을 만들며 배운 내용을 정리합니다.</p>
    </section>
    <section class="note-category">
        <span>Field Notes</span>
        <h3>현장에서 배운 것들</h3>
        <p>교량 재하시험, 프리캐스트 운반 계측, 센서 패키징, 전원과 통신 문제, 설치 디테일, 데이터 손실처럼 현장 모니터링 시스템을 실제로 작동하게 만드는 작은 결정들을 기록합니다.</p>
    </section>
</div>

## Activities

<div class="activity-list">
    <article>
        <h3>University of Hawaii Research Visit</h3>
        <p>2022년 Prof. Dosoo Moon 연구실을 방문해 JANET 센서의 현장 활용 사례, 진행 중인 연구, 센서 디버깅 경험을 공유했습니다.</p>
    </article>
    <article>
        <h3>Proposal and Project Development</h3>
        <p>인프라 모니터링, 센싱 시스템, 교량 진단, 화물 모니터링, AI 기반 토목 인프라와 관련된 연구 제안서와 프로젝트 문서 작성에 참여했습니다.</p>
    </article>
    <article>
        <h3>Writing Backlog</h3>
        <p>앞으로 현장 관찰, 데이터 처리 경험, 하드웨어 디버깅 기록, 적용형 모니터링 프로젝트 회고를 하나씩 정리할 예정입니다.</p>
    </article>
</div>

## Notes

<div class="note-index archive-list">
{% assign ko_posts = site.posts | where: "lang", "ko" %}
{% for post in ko_posts %}
    <article class="note-row">
        <div class="note-row-meta">
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y.%m.%d" }}</time>
            <span>{{ post.note_category | default: post.categories.first | default: "Note" }}</span>
        </div>
        <div class="note-row-body">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
        </div>
    </article>
{% else %}
    <article class="note-row is-empty">
        <div class="note-row-meta">
            <span>Coming Soon</span>
        </div>
        <div class="note-row-body">
            <h3>Notes coming soon</h3>
            <p>수업 정리, 기술 노트, 프로젝트 기록, 현장 기록을 차례로 추가할 예정입니다.</p>
        </div>
    </article>
{% endfor %}
</div>
