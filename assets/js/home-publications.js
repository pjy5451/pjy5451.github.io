(function() {
  var input = document.querySelector('[data-pub-search-input]');
  var scopeButtons = document.querySelectorAll('[data-pub-scope]');
  var topicButtons = document.querySelectorAll('[data-pub-topic]');
  var regionButtons = document.querySelectorAll('.publication-language [data-pub-region]');
  var items = document.querySelectorAll('[data-pub-kind="article"]');
  var patentItems = document.querySelectorAll('[data-pub-kind="patent"]');
  var sections = document.querySelectorAll('[data-pub-section]');
  var status = document.querySelector('[data-pub-filter-status]');
  var empty = document.querySelector('[data-pub-empty]');
  var patentToggle = document.querySelector('[data-pub-expand-patents]');
  if (!input || !items.length) return;

  var activeScope = 'all';
  var activeRegion = 'international';
  var activeTopic = 'all';
  var patentsExpanded = false;
  var topicTerms = {
    bridge: ['bridge', 'shm', 'load test'],
    transport: ['wim', 'obm', 'transport'],
    sensing: ['iot', 'sensor', 'cloud', 'low power'],
    data: ['ai', 'data', 'signal', 'machine learning', 'deep learning'],
    precast: ['precast'],
    port: ['port', 'quay']
  };
  var scopeLabels = { all: 'Show all', selected: 'Selected', first: 'First-author' };
  var topicLabels = { bridge: 'Bridge / SHM', transport: 'WIM / OBM', sensing: 'IoT / Sensing', data: 'AI / Data', precast: 'Precast', port: 'Port' };

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

  function matchesRegion(item) {
    return activeRegion === 'all' || item.getAttribute('data-pub-region') === activeRegion;
  }

  function update() {
    var query = input.value.trim().toLowerCase();
    var visibleCount = 0;
    items.forEach(function(item) {
      var searchText = item.getAttribute('data-pub-search') || '';
      var matches = matchesScope(item) && matchesRegion(item) && matchesTopic(item) && (!query || searchText.indexOf(query) !== -1);
      item.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    sections.forEach(function(section) {
      section.hidden = !section.querySelector('[data-pub-item]:not([hidden])');
    });
    var label = 'Filtering by: ' + (activeRegion === 'all' ? 'All venues' : activeRegion.charAt(0).toUpperCase() + activeRegion.slice(1)) + ' + ' + scopeLabels[activeScope];
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

  regionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      activeRegion = button.getAttribute('data-pub-region');
      regionButtons.forEach(function(candidate) {
        var active = candidate === button;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      update();
    });
  });

  input.addEventListener('input', update);
  if (patentToggle) {
      patentToggle.addEventListener('click', function() {
        patentsExpanded = !patentsExpanded;
        updatePatents();
      });
    }
  updatePatents();
  update();
})();
