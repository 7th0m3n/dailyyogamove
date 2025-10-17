export function mount(host) {
  host.innerHTML = `
    <section class="grid cols-2" aria-label="Explore Demo">
      <div class="card">
        <h3>Students</h3>
        <div class="list">
          <div class="seq-item"><div><strong>Assigned Asana & Sequences</strong><div class="small">See programs assigned by your teacher.</div></div><div class="seq-actions"><a class="btn sm" href="#/assigned-asana">Open</a></div></div>
          <div class="seq-item"><div><strong>Traditional Mantras</strong><div class="small">Recite and study classical Sanskrit mantras.</div></div><div class="seq-actions"><a class="btn sm" href="#/mantras">Open</a></div></div>
          <div class="seq-item"><div><strong>BreathPacer</strong><div class="small">Follow guided pranayama rhythms to calm and balance your mind.</div></div><div class="seq-actions"><a class="btn sm" href="#/breathpacer">Open</a></div></div>
          <div class="seq-item"><div><strong>Complete Postures List</strong><div class="small">Browse the full asana library with filters.</div></div><div class="seq-actions"><a class="btn sm" href="#/postures">Open</a></div></div>
          <div class="seq-item"><div><strong>Yogic Philosophy</strong><div class="small">Short lessons from Sūtra, Gītā, and Upaniṣads.</div></div><div class="seq-actions"><a class="btn sm" href="#/philosophy">Open</a></div></div>
        </div>
      </div>
      <div class="card">
        <h3>Teachers</h3>
        <div class="list">
          <div class="seq-item"><div><strong>Strengthāsana</strong><div class="small">Create and publish Signature Sequences.</div></div><div class="seq-actions"><a class="btn sm" href="#/strengthasana">Open</a></div></div>
          <div class="seq-item"><div><strong>Paripūrṇa Prāṇa</strong><div class="small">Pranayama tools and presets.</div></div><div class="seq-actions"><a class="btn sm" href="#/pranayama">Open</a></div></div>
          <div class="seq-item"><div><strong>Mantra Generator</strong><div class="small">Create custom mantras with AI-assisted guidance.</div></div><div class="seq-actions"><a class="btn sm" href="#/mantra-generator">Open</a></div></div>
        </div>
      </div>
    </section>
  `;
  return {};
}

export function unmount() {}


