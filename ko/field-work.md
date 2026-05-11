---
layout: page
title: 현장 작업
no_site_suffix: true
body_class: field-work-template
lang: ko
en_url: /field-work.html
description: 박준영의 50회 이상 현장 실험 경험, 센서 설치, DAQ, 교량 실험, 차량 모니터링, 클라우드 시각화 등 현장형 인프라 모니터링 작업을 보여주는 페이지입니다.
keywords:
  - 현장 실험
  - 인프라 모니터링
  - 센서 설치
  - 교량 재하시험
  - DAQ
  - 현장 센싱
  - 구조물 건전성 모니터링
  - WIM
  - OBM
---

이 페이지는 제가 수행한 현장형 인프라 모니터링 경험을 정리하기 위한 공간입니다. 저는 교량 모니터링, 차량 하중 센싱, 프리캐스트 운송, 항만 구조물, 센서 설치, DAQ 검증, 클라우드 기반 데이터 검토 등 50회 이상의 현장 실험 및 적용 경험을 가지고 있습니다.

<div class="field-command-center">
    <div class="field-filter-panel">
        <div>
            <span class="field-panel-kicker">탐색</span>
            <h2>현장 작업 필터</h2>
        </div>
        <div class="pub-filter-bar field-filter-bar" data-field-filter-bar data-status-all="전체 현장 작업 카테고리 표시 중" data-status-filtered="필터 적용 현장 작업 카테고리 표시 중" aria-label="Filter field work by topic">
            <button type="button" class="is-active" data-field-filter="all">All</button>
            <button type="button" data-field-filter="Bridge">Bridge</button>
            <button type="button" data-field-filter="Vehicle">Vehicle</button>
            <button type="button" data-field-filter="Precast">Precast</button>
            <button type="button" data-field-filter="Port">Port</button>
            <button type="button" data-field-filter="DAQ">DAQ</button>
            <button type="button" data-field-filter="Cloud">Cloud</button>
        </div>
        <p class="pub-filter-status" data-field-filter-status>전체 현장 작업 카테고리 표시 중.</p>
    </div>

    <div class="field-metrics">
        <section>
            <strong>50+</strong>
            <span>현장 실험 및 적용 경험</span>
        </section>
        <section>
            <strong>4</strong>
            <span>주요 현장 도메인: 교량, 차량, 프리캐스트, 항만</span>
        </section>
        <section>
            <strong>Build to Data</strong>
            <span>하드웨어, 설치, DAQ, 클라우드, 분석</span>
        </section>
    </div>
</div>

<div class="field-project-map">
    <section>
        <span>Bridge</span>
        <h2>교량 재하시험과 장기 모니터링</h2>
        <p>센서 설치, 클라우드 모니터링, 응답 이력, 변위 추정, QR 기반 생애주기 기록으로 이어지는 현장 경험입니다.</p>
        <div class="pub-actions">
            <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">교량 모니터링</a>
            <a href="{{ '/projects/qr-lifecycle-monitoring.html' | relative_url }}">QR 생애주기</a>
        </div>
    </section>
    <section>
        <span>Vehicle</span>
        <h2>WIM 및 On-board monitoring</h2>
        <p>고속 DAQ, 하중 구간 탐지, 화물차 동적 중량 보정, 실도로 주행 데이터 검토를 연결합니다.</p>
        <div class="pub-actions">
            <a href="{{ '/projects/weight-in-motion.html' | relative_url }}">WIM 탐지</a>
            <a href="{{ '/projects/onboard-monitoring.html' | relative_url }}">OBM 보정</a>
        </div>
    </section>
    <section>
        <span>Deployments</span>
        <h2>프리캐스트, 항만, 현장형 센싱</h2>
        <p>이동형 센싱, 방수 패키징, 운송 단계 모니터링, 열악한 환경에서의 이벤트 분석을 다룹니다.</p>
        <div class="pub-actions">
            <a href="{{ '/projects/portable-sensing.html' | relative_url }}">프리캐스트 센싱</a>
            <a href="{{ '/projects/quay-wall-monitoring.html' | relative_url }}">안벽 모니터링</a>
        </div>
    </section>
</div>

<div class="field-gallery" data-field-gallery>
    <article id="bridge-monitoring-field" data-field-tags="Bridge|Hardware|Cloud|Sensor">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-06.png' | relative_url }}" alt="스마트 교량 IoT 센서와 클라우드 모니터링 시스템" />
        <span>Hardware / Cloud</span>
        <h2>스마트 교량 IoT 모니터링 시스템</h2>
        <p>독립형 센싱 유닛, 클라우드 업로드, 자동 분석, 대시보드 시각화를 결합한 교량 건전성 모니터링 시스템입니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2024</dd></div>
            <div><dt>Site</dt><dd>팔당육교, 청담1교, 성산대교 및 국내 교량 현장</dd></div>
            <div><dt>Role</dt><dd>센서 워크플로, 현장 설치, 클라우드 데이터 검토, 시스템 개선</dd></div>
            <div><dt>Data</dt><dd>변형률, 가속도, 변위, 온도</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">관련 프로젝트</a>
    </article>
    <article id="bridge-installation-field" data-field-tags="Bridge|Sensor|Installation|Field">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-07.png' | relative_url }}" alt="교량 현장 설치와 계측 응답 데이터" />
        <span>Bridge Test</span>
        <h2>현장 설치와 응답 데이터</h2>
        <p>실제 교량 조건에서 센서를 설치하고 응답 이력, 현장 검증, 전원 및 통신 디버깅을 수행했습니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2024</dd></div>
            <div><dt>Site</dt><dd>교량 재하시험, 상시 모니터링, 정밀안전진단 적용 현장</dd></div>
            <div><dt>Role</dt><dd>설치, 검증, 트러블슈팅</dd></div>
            <div><dt>Data</dt><dd>응답 이력 및 센서 상태</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">관련 프로젝트</a>
    </article>
    <article id="cloud-dashboard-field" data-field-tags="Bridge|Cloud|Dashboard|Data">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-24.png' | relative_url }}" alt="교량 응답 데이터 클라우드 모니터링 대시보드" />
        <span>Visualization</span>
        <h2>클라우드 모니터링 대시보드</h2>
        <p>센서 상태, 진동, 변위, 변형률, 온도, 해석 코멘트를 확인할 수 있는 온라인 모니터링 인터페이스입니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2022 - 2024</dd></div>
            <div><dt>System</dt><dd>클라우드 DB 및 모니터링 대시보드</dd></div>
            <div><dt>Role</dt><dd>데이터 파이프라인 및 해석 워크플로</dd></div>
            <div><dt>Data</dt><dd>센서 상태, 진동, 변위, 변형률</dd></div>
        </dl>
        <a href="{{ '/projects/bridge-monitoring.html' | relative_url }}">관련 프로젝트</a>
    </article>
    <article id="vehicle-load-field" data-field-tags="Vehicle|WIM|OBM|DAQ|Data">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-26.png' | relative_url }}" alt="차량 하중 센싱과 WIM DAQ 신호 워크플로" />
        <span>DAQ / WIM</span>
        <h2>차량 하중 센싱과 WIM DAQ</h2>
        <p>고속 신호 취득, 실도로 주행 데이터, 하중 구간 탐지, 차량 중량 분석 워크플로를 다룹니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2024 - Present</dd></div>
            <div><dt>Site</dt><dd>도로 및 WIM 계측 환경</dd></div>
            <div><dt>Role</dt><dd>DAQ 검증, 신호 검토, 탐지 워크플로</dd></div>
            <div><dt>Data</dt><dd>고속 하중 신호 및 차량 이벤트</dd></div>
        </dl>
        <a href="{{ '/projects/weight-in-motion.html' | relative_url }}">관련 프로젝트</a>
    </article>
    <article id="precast-transport-field" data-field-tags="Precast|Sensor|Transportation|Field">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-11.png' | relative_url }}" alt="프리캐스트 운송 모니터링을 위한 휴대형 센싱" />
        <span>Precast</span>
        <h2>프리캐스트 운송 중 휴대형 센싱</h2>
        <p>프리캐스트 콘크리트 부재의 변형률, 가속도, 기울기, 운송 단계 응답을 휴대형 시스템으로 모니터링했습니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2020 - 2023</dd></div>
            <div><dt>Site</dt><dd>프리캐스트 제작장, 운송 경로, 패널/거더 모니터링 및 트레일러 설치 사례</dd></div>
            <div><dt>Role</dt><dd>휴대형 센서 설치 및 데이터 해석</dd></div>
            <div><dt>Data</dt><dd>변형률, 가속도, 기울기, 운송 이벤트</dd></div>
        </dl>
        <a href="{{ '/projects/portable-sensing.html' | relative_url }}">관련 프로젝트</a>
    </article>
    <article id="port-monitoring-field" data-field-tags="Port|Sensor|Cloud|AI">
        <img class="field-card-image" src="{{ '/assets/images/projects/portfolio/portfolio-page-19.png' | relative_url }}" alt="안벽 이벤트 모니터링을 위한 패키징 센서" />
        <span>Port Structure</span>
        <h2>안벽 이벤트 모니터링</h2>
        <p>방수 패키징, 열악한 현장 환경, 클라우드 통신, AI 기반 이벤트 분석을 결합한 항만 구조물 모니터링입니다.</p>
        <dl class="field-card-details">
            <div><dt>Date</dt><dd>2021 - 2023</dd></div>
            <div><dt>Site</dt><dd>항만 및 안벽 모니터링 환경</dd></div>
            <div><dt>Role</dt><dd>패키징, 센싱 워크플로, 이벤트 분석</dd></div>
            <div><dt>Data</dt><dd>멀티센서 이벤트 기록</dd></div>
        </dl>
        <a href="{{ '/projects/quay-wall-monitoring.html' | relative_url }}">관련 프로젝트</a>
    </article>
</div>

## Field Record Format

<div class="field-log-template">
    <section>
        <h3>현장 사례 기록 양식</h3>
        <ul>
            <li><strong>Date</strong> 연도, 월, 또는 프로젝트 기간.</li>
            <li><strong>Site</strong> 교량, 도로, 프리캐스트 제작장, 항만, 검증 현장, 또는 익명화한 현장명.</li>
            <li><strong>Role</strong> 센서 설치, DAQ 세팅, 주행 실험, 클라우드 검토, 트러블슈팅, 데이터 분석.</li>
            <li><strong>Hardware</strong> 센서, 게이트웨이, DAQ, 전원, 통신, 패키징 정보.</li>
            <li><strong>Data</strong> 신호 종류, 샘플링 속도, 이벤트 유형, 대시보드, 시각화, 분석 결과.</li>
            <li><strong>Evidence</strong> 사진, 크롭 이미지, 짧은 영상, 대시보드 캡처, 신호 시각화.</li>
        </ul>
    </section>
</div>

## What This Shows

<div class="field-method-grid">
    <section>
        <h3>Build</h3>
        <p>센서 디바이스, DAQ 보드, 게이트웨이, 패키징, 데이터 취득 워크플로를 만듭니다.</p>
    </section>
    <section>
        <h3>Deploy</h3>
        <p>교량, 차량, 프리캐스트, 항만 구조물을 실제 운영 환경에서 모니터링합니다.</p>
    </section>
    <section>
        <h3>Analyze</h3>
        <p>신호 전처리, 데이터 융합, 이벤트 탐지, 클라우드 대시보드, 엔지니어링 해석을 수행합니다.</p>
    </section>
    <section>
        <h3>Publish</h3>
        <p>논문, 프리프린트, 특허, 기술 문서, 프로젝트 산출물을 현장 시스템과 연결합니다.</p>
    </section>
</div>
