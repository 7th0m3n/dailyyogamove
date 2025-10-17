let ABORT = null;
const DEFAULT_POSES = [
  { english:"Sun Salutation A", sanskrit:"सूर्य नमस्कार A", transliteration:"Sūrya Namaskāra A", level:"Beginner", category:"Transition", tags:["vinyasa","warmup"] },
  { english:"Extended Triangle Pose", sanskrit:"उत्त्थित त्रिकोणासन", transliteration:"Utthita Trikoṇāsana", level:"Beginner", category:"Standing", tags:["lateral"] },
  { english:"Revolved Triangle Pose", sanskrit:"परिवृत्त त्रिकोणासन", transliteration:"Parivṛtta Trikoṇāsana", level:"Intermediate", category:"Standing", tags:["twist"] },
  { english:"Chair Pose", sanskrit:"उत्कटासन", transliteration:"Utkatāsana", level:"Beginner", category:"Standing", tags:["legs"] },
  { english:"Warrior II", sanskrit:"वीरभद्रासन B", transliteration:"Vīrabhadrāsana B", level:"Beginner", category:"Standing", tags:["legs"] },
  { english:"Seated Forward Fold A", sanskrit:"पश्चिमोत्तानासन A", transliteration:"Paścimottānāsana A", level:"Beginner", category:"Forward Bend", tags:["hamstrings"] },
  { english:"Boat Pose", sanskrit:"नावासन", transliteration:"Nāvāsana", level:"Beginner", category:"Core", tags:["core"] },
  { english:"Locust Pose", sanskrit:"शलभासन", transliteration:"Śalabhāsana", level:"Beginner", category:"Backbend", tags:["back"] },
  { english:"Camel Pose", sanskrit:"उष्ट्रासन", transliteration:"Uṣṭrāsana", level:"Beginner", category:"Backbend", tags:["chest","hip"] },
  { english:"Corpse Pose", sanskrit:"शवासन", transliteration:"Śavāsana", level:"Beginner", category:"Closing", tags:["relaxation"] }
];

export function mount(host) {
  host.innerHTML = `
    <section class="grid" aria-label="Postures">
      <div id="postureFilters" class="posture-filters" role="search">
        <div class="row">
          <input id="poseSearch" class="input" placeholder="Search English, Sanskrit, transliteration, tags" aria-label="Search postures" />
          <select id="poseCategory" class="input" aria-label="Filter by category">
            <option value="">All categories</option>
            <option>Standing</option>
            <option>Seated</option>
            <option>Backbend</option>
            <option>Twist</option>
            <option>Inversion</option>
            <option>Arm Balance</option>
            <option>Hip Opener</option>
            <option>Forward Bend</option>
            <option>Closing</option>
            <option>Core</option>
            <option>Supine</option>
            <option>Kneeling</option>
          </select>
          <select id="poseLevel" class="input" aria-label="Filter by level" style="max-width:160px;">
            <option value="">All levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>
      <div id="p-grid" class="posture-grid" role="list"></div>
    </section>
  `;

  const search = host.querySelector('#poseSearch');
  const cat = host.querySelector('#poseCategory');
  const lvl = host.querySelector('#poseLevel');
  const grid = host.querySelector('#p-grid');

  let poses = [];

  function normalize(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ').trim(); }

  function draw(){
    const q = normalize(search.value);
    const c = cat.value || '';
    const l = lvl.value || '';
    const items = poses.filter(p => {
      if (c && (p.category||'') !== c) return false;
      if (l && (p.level||'') !== l) return false;
      if (!q) return true;
      const hay = normalize(`${p.english} ${p.sanskrit} ${p.transliteration} ${(p.tags||[]).join(' ')}`);
      return hay.includes(q);
    });
    if (!items.length) { grid.innerHTML = '<div class="small">No results.</div>'; return; }
    grid.innerHTML = items.map(p => `
      <div class="posture-card" role="listitem">
        <div class="posture-media">🧘</div>
        <div class="posture-body">
          <div><strong>${p.english}</strong></div>
          <div class="small">${p.sanskrit} • ${p.transliteration||''}</div>
          <div class="row" style="gap:6px;">
            <span class="level level-${(p.level||'').toLowerCase()}">${p.level||''}</span>
            <span class="chip">${p.category||''}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function load(){
    const ctl = new AbortController();
    ABORT = ctl;
    fetch('./assets/poses.json', { signal: ctl.signal })
      .then(r => r.ok ? r.json() : [])
      .then(data => { poses = Array.isArray(data) && data.length ? data : DEFAULT_POSES; draw(); })
      .catch(() => { poses = DEFAULT_POSES; draw(); });
  }

  search.addEventListener('input', draw);
  cat.addEventListener('change', draw);
  lvl.addEventListener('change', draw);
  load();
  return {};
}

export function unmount() { if (ABORT) ABORT.abort(); }


