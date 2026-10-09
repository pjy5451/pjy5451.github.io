(function() {
  var input = document.querySelector('[data-project-search]');
  var buttons = document.querySelectorAll('[data-project-topic]');
  var items = document.querySelectorAll('[data-project-item]');
  var status = document.querySelector('[data-project-status]');
  var empty = document.querySelector('[data-project-empty]');
  var otherToggle = document.querySelector('[data-project-expand-other]');
  if (!input || !items.length) return;

  var activeTopic = 'all';
  var otherExpanded = false;
  var topicTerms = {
    shm: ['structural health monitoring'],
    wireless: ['wireless sensing'],
    wim: ['weigh-in-motion'],
    'load-testing': ['bridge load testing'],
    ml: ['machine learning']
  };

  function matchesTopics(item) {
    if (activeTopic === 'all') return true;
    var tags = item.getAttribute('data-project-tags') || '';
    return topicTerms[activeTopic].some(function(term) { return tags.indexOf(term) !== -1; });
  }

  function update() {
    var query = input.value.trim().toLowerCase();
    var visibleCount = 0;
    items.forEach(function(item) {
      var searchText = item.getAttribute('data-project-search') || '';
      var isOther = item.hasAttribute('data-project-other');
      var visible = (!isOther || otherExpanded) && matchesTopics(item) && (!query || searchText.indexOf(query) !== -1);
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    var activeButton = document.querySelector('[data-project-topic="' + activeTopic + '"]');
    var label = activeButton ? activeButton.textContent : 'All projects';
    if (query) label += ' + search';
    if (status) status.textContent = 'Filtering by: ' + label + ' (' + visibleCount + ')';
    if (empty) empty.hidden = visibleCount !== 0;
  }

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var topic = button.getAttribute('data-project-topic');
      activeTopic = activeTopic === topic ? 'all' : topic;
      buttons.forEach(function(candidate) {
        var active = candidate.getAttribute('data-project-topic') === activeTopic;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      update();
    });
  });
  input.addEventListener('input', update);
  if (otherToggle) {
    otherToggle.addEventListener('click', function() {
      otherExpanded = !otherExpanded;
      otherToggle.setAttribute('aria-expanded', otherExpanded ? 'true' : 'false');
      otherToggle.textContent = otherExpanded ? '- Hide other projects' : '+ Show other projects';
      update();
    });
  }
  update();
})();
