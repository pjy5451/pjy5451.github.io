(function() {
  var input = document.querySelector('[data-project-search]');
  var buttons = document.querySelectorAll('[data-project-topic]');
  var items = document.querySelectorAll('[data-project-item]');
  var status = document.querySelector('[data-project-status]');
  var empty = document.querySelector('[data-project-empty]');
  if (!input || !items.length) return;

  var activeTopics = [];
  var topicTerms = {
    transport: ['wim', 'obm', 'vehicle sensing', 'dynamic weight'],
    bridge: ['bridge', 'load test', 'lifecycle'],
    sensing: ['iot', 'sensing', 'daq', 'ble'],
    data: ['data', 'ai', 'event detection', 'visualization'],
    precast: ['precast', 'portable sensing'],
    port: ['port structure']
  };

  function matchesTopics(item) {
    if (!activeTopics.length) return true;
    var tags = item.getAttribute('data-project-tags') || '';
    return activeTopics.some(function(topic) {
      return topicTerms[topic].some(function(term) { return tags.indexOf(term) !== -1; });
    });
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
    var label = activeTopics.length ? activeTopics.map(function(topic) {
      return document.querySelector('[data-project-topic="' + topic + '"]').textContent;
    }).join(' + ') : 'All projects';
    if (query) label += ' + search';
    if (status) status.textContent = 'Filtering by: ' + label + ' (' + visibleCount + ')';
    if (empty) empty.hidden = visibleCount !== 0;
  }

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var topic = button.getAttribute('data-project-topic');
      var index = activeTopics.indexOf(topic);
      if (index === -1) activeTopics.push(topic);
      else activeTopics.splice(index, 1);
      button.classList.toggle('is-active', index === -1);
      button.setAttribute('aria-pressed', index === -1 ? 'true' : 'false');
      update();
    });
  });
  input.addEventListener('input', update);
  update();
})();
