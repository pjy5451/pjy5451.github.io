(function() {
  var input = document.querySelector('[data-project-search]');
  var buttons = document.querySelectorAll('[data-project-topic]');
  var items = document.querySelectorAll('[data-project-item]');
  var status = document.querySelector('[data-project-status]');
  var empty = document.querySelector('[data-project-empty]');
  if (!input || !items.length) return;

  var activeTopic = 'all';
  var topicTerms = {
    transport: ['wim', 'obm', 'vehicle sensing', 'dynamic weight'],
    bridge: ['bridge', 'load test', 'lifecycle'],
    sensing: ['iot', 'sensing', 'daq', 'ble'],
    data: ['data', 'ai', 'event detection', 'visualization'],
    precast: ['precast', 'portable sensing'],
    port: ['port structure']
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
      var visible = matchesTopics(item) && (!query || searchText.indexOf(query) !== -1);
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
  update();
})();
