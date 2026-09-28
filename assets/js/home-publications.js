(function() {
  var input = document.querySelector('[data-pub-search-input]');
  var scopeButtons = document.querySelectorAll('[data-pub-scope]');
  var topicButtons = document.querySelectorAll('[data-pub-topic]');
  var items = document.querySelectorAll('[data-pub-kind="article"]');
  var patentItems = document.querySelectorAll('[data-pub-kind="patent"]');
  var sections = document.querySelectorAll('[data-pub-section]');
  var status = document.querySelector('[data-pub-filter-status]');
  var empty = document.querySelector('[data-pub-empty]');
  var patentToggle = document.querySelector('[data-pub-expand-patents]');
  var koreanToggle = document.querySelector('[data-pub-expand-korean]');
  var koreanList = document.querySelector('[data-pub-korean-list]');
  var koreanSection = document.querySelector('[data-pub-korean-section]');
  if (!input || !items.length) return;

  var activeScope = 'all';
  var activeTopic = 'all';
  var patentsExpanded = false;
  var koreanExpanded = false;
  var topicTerms = {
    shm: ['structural health monitoring'],
    wireless: ['wireless sensing'],
    wim: ['weigh-in-motion'],
    'load-testing': ['bridge load testing'],
    ml: ['machine learning']
  };
  var scopeLabels = { all: 'Show all', selected: 'Selected', first: 'First-author' };
  var topicLabels = { shm: 'Structural Health Monitoring', wireless: 'Wireless Sensing', wim: 'Weigh-in-Motion', 'load-testing': 'Bridge Load Testing', ml: 'Machine Learning' };

  function matchesScope(item) {
    if (activeScope === 'selected') return item.getAttribute('data-pub-selected') === 'true';
    if (activeScope === 'first') return item.getAttribute('data-pub-first-author') === 'true';
    return true;
  }

  function matchesTopic(item) {
    if (activeTopic === 'all') return true;
    var tags = item.getAttribute('data-pub-tags') || '';
    return topicTerms[activeTopic].some(function(term) { return tags.indexOf(term) !== -1; });
  }

  function update() {
    var query = input.value.trim().toLowerCase();
    var visibleCount = 0;
    items.forEach(function(item) {
      var searchText = item.getAttribute('data-pub-search') || '';
      var isKorean = item.getAttribute('data-pub-region') === 'korean';
      var matches = matchesScope(item) && matchesTopic(item) && (!query || searchText.indexOf(query) !== -1);
      var visible = matches && (!isKorean || koreanExpanded);
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (koreanSection) {
      koreanSection.hidden = !koreanExpanded || !koreanSection.querySelector('[data-pub-item]:not([hidden])');
    }
    sections.forEach(function(section) {
      if (section === koreanSection) return;
      section.hidden = !section.querySelector('[data-pub-item]:not([hidden])');
    });
    var label = 'Filtering by: ' + scopeLabels[activeScope];
    if (activeTopic !== 'all') label += ' + ' + topicLabels[activeTopic];
    if (query) label += ' + search';
    if (status) status.textContent = label + ' (' + visibleCount + ')';
    if (empty) empty.hidden = visibleCount !== 0;
  }

  function updatePatents() {
    patentItems.forEach(function(item, index) {
      item.hidden = !patentsExpanded && index > 1;
    });
    if (!patentToggle) return;
    var hiddenPatentCount = Math.max(0, patentItems.length - 2);
    patentToggle.hidden = hiddenPatentCount === 0;
    patentToggle.textContent = patentsExpanded ? '- Hide other patents' : '+ Show more patents (' + hiddenPatentCount + ')';
    patentToggle.setAttribute('aria-expanded', patentsExpanded ? 'true' : 'false');
  }

  scopeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      activeScope = button.getAttribute('data-pub-scope');
      scopeButtons.forEach(function(candidate) {
        var active = candidate === button;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      update();
    });
  });

  topicButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var topic = button.getAttribute('data-pub-topic');
      activeTopic = activeTopic === topic ? 'all' : topic;
      topicButtons.forEach(function(candidate) {
        var active = candidate.getAttribute('data-pub-topic') === activeTopic;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      update();
    });
  });

  input.addEventListener('input', update);
  if (koreanList && koreanToggle) {
    items.forEach(function(item) {
      if (item.getAttribute('data-pub-region') === 'korean') koreanList.appendChild(item);
    });
    var koreanCount = koreanList.querySelectorAll('[data-pub-kind="article"]').length;
    koreanToggle.hidden = koreanCount === 0;
    koreanToggle.addEventListener('click', function() {
      koreanExpanded = !koreanExpanded;
      koreanToggle.textContent = koreanExpanded ? '- Hide other publications (in Korean)' : '+ Show other publications (in Korean)';
      koreanToggle.setAttribute('aria-expanded', koreanExpanded ? 'true' : 'false');
      update();
    });
  }
  if (patentToggle) {
      patentToggle.addEventListener('click', function() {
        patentsExpanded = !patentsExpanded;
        updatePatents();
      });
    }
  updatePatents();
  update();
})();
