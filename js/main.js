(function() {
  // 渲染工具卡片
  const grid = document.getElementById('toolsGrid');
  const search = document.getElementById('toolSearch');

  function renderTools(filter) {
    const q = (filter || '').toLowerCase().trim();
    const filtered = q ? TOOLS.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.kw.some(k => k.includes(q))
    ) : TOOLS;

    grid.innerHTML = filtered.map(t => `
      <a href="${t.page}" class="tool-card" data-id="${t.id}">
        <div class="tool-icon">${t.icon}</div>
        <div class="tool-info">
          <h3>${t.name}</h3>
          <p>${t.desc}</p>
          <span class="tool-cat">${t.cat}</span>
        </div>
      </a>
    `).join('');
  }

  if (grid) renderTools();
  if (search) {
    search.addEventListener('input', e => renderTools(e.target.value));
  }
})();
