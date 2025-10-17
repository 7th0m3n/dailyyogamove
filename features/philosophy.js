const PHILOSOPHY = [
  { id:"ys-1-2", title:"Citta-vṛtti-nirodhaḥ", source:"Yoga Sūtra I.2", summary:"Yoga is the stilling of the movements of consciousness.", note:"When fluctuations settle, the seer rests in their own nature. Practice + non-attachment are the method.", reflect:["Where do I notice mental movement most?","What supports abhyāsa and vairāgya today?"], tags:["Sutra","Meditation","Essentials"] },
  { id:"gita-2-47", title:"Karma Yoga, not outcome", source:"Bhagavad Gītā II.47", summary:"Act from duty and clarity, not from hunger for results.", note:"Skill in action is yoga when anchored in steadiness.", reflect:["What duty is clear right now?","What result am I clinging to?"], tags:["Gita","Ethics"] },
  { id:"isa-1", title:"All-pervading Self", source:"Īśa Upaniṣad 1", summary:"All this is pervaded by the Lord; enjoy with renunciation.", note:"Ownership loosens; stewardship and reverence grow.", reflect:["Where can I practice non-grasping?"], tags:["Upanishad","View"] }
];

let modal;

export function mount(host) {
  host.innerHTML = `
    <section class="grid" aria-label="Yogic Philosophy">
      <div class="card">
        <div class="row" style="justify-content:space-between; align-items:center;">
          <strong>Yogic Philosophy</strong>
          <div class="row">
            <a class="btn sm ghost" href="#/explore" aria-label="Back to Explore">Back to Explore</a>
          </div>
        </div>
        <div class="space"></div>
        <div class="row" id="philosophyControls" role="group" aria-label="Filters" style="gap:8px; align-items:center;">
          <input id="ph-search" class="input" placeholder="Search" aria-label="Search" />
          <div id="ph-tags" class="row" style="flex-wrap:wrap; gap:6px;"></div>
        </div>
        <div class="space"></div>
        <div id="ph-list" class="list"></div>
      </div>
    </section>
    <div id="ph-modal" class="modal" aria-hidden="true" aria-label="Philosophy note" role="dialog">
      <div class="modal-card" role="document">
        <div class="row" style="justify-content:space-between; align-items:center;">
          <strong id="phm-title"></strong>
          <button id="phm-close" class="btn sm ghost" aria-label="Close">Close</button>
        </div>
        <div id="phm-body" class="space"></div>
      </div>
    </div>
  `;

  const search = document.getElementById('ph-search');
  const list = document.getElementById('ph-list');
  const tagHost = document.getElementById('ph-tags');
  modal = document.getElementById('ph-modal');
  const phmTitle = document.getElementById('phm-title');
  const phmBody = document.getElementById('phm-body');
  document.getElementById('phm-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', onEsc);

  const allTags = ["Sutra","Gita","Upanishad","Ethics","Meditation","History"];
  let activeTags = new Set();

  function drawTags() {
    tagHost.innerHTML = allTags.map(tag => `
      <button class="chip" data-tag="${tag}" aria-pressed="${activeTags.has(tag) ? 'true' : 'false'}">${tag}</button>
    `).join('');
    tagHost.querySelectorAll('button.chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.getAttribute('data-tag');
        if (activeTags.has(tag)) activeTags.delete(tag); else activeTags.add(tag);
        drawTags(); drawList();
      });
    });
  }

  function matchesQuery(item, q) {
    if (!q) return true;
    const hay = `${item.title} ${item.source} ${item.summary} ${(item.note||'')} ${(item.tags||[]).join(' ')}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  }
  function matchesTags(item) {
    if (!activeTags.size) return true;
    return (item.tags||[]).some(t => activeTags.has(t));
  }
  function openModal(item) {
    phmTitle.textContent = `${item.title} — ${item.source}`;
    phmBody.innerHTML = `
      <div class="space"></div>
      <div>${item.note}</div>
      <div class="space"></div>
      <div><strong>Reflect</strong></div>
      <ul style="margin:8px 0 0 16px;">
        ${(item.reflect||[]).map(r => `<li>${r}</li>`).join('')}
      </ul>
    `;
    modal.setAttribute('open',''); modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){ modal.removeAttribute('open'); modal.setAttribute('aria-hidden','true'); }
  function onEsc(e){ if (e.key === 'Escape') closeModal(); }

  function drawList() {
    const q = (search.value || '').trim();
    const items = PHILOSOPHY.filter(it => matchesQuery(it, q) && matchesTags(it));
    if (!items.length) { list.innerHTML = '<div class="small">No results.</div>'; return; }
    list.innerHTML = items.map((it, idx) => `
      <div class="seq-item" data-idx="${idx}">
        <div>
          <strong>${it.title}</strong>
          <div class="small">${it.source}</div>
          <div class="small" style="opacity:0.9;">${it.summary}</div>
        </div>
        <div class="seq-actions">
          <button class="btn sm" data-act="read">Read</button>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('.seq-item').forEach((row, i) => {
      row.querySelector('[data-act="read"]').addEventListener('click', () => openModal(items[i]));
    });
  }

  drawTags();
  drawList();

  return { unmount };
}

export function unmount() {
  document.removeEventListener('keydown', onEsc);
  if (modal) { modal.removeAttribute('open'); modal.setAttribute('aria-hidden','true'); }
}


