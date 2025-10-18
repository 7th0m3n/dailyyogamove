export function mount(host) {
  host.innerHTML = `
    <section class="container" aria-labelledby="how-title">
      <h1 id="how-title" style="margin: 6px 0 14px;">How it works</h1>

      <div class="grid cols-2" style="align-items:start;">
        <div class="card">
          <h3>For Students</h3>
          <div class="list" style="margin-top:8px;">
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">1</span><strong>Find your teacher</strong></div>
                <div class="small">Browse Teacher Network or Features by style, level, or location.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">2</span><strong>Join a class</strong></div>
                <div class="small">Tap Join. Watch live or on‑demand. Simple checkout placeholder.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">3</span><strong>Stay connected</strong></div>
                <div class="small">Follow your teacher. Get updates in Community.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">4</span><strong>Keep momentum</strong></div>
                <div class="small">Track practice streaks (coming soon).</div>
              </div>
            </div>
          </div>
          <div class="row" style="gap:8px; margin-top:10px;">
            <a class="btn ghost sm" href="#/explore" aria-label="Explore Classes">Explore Classes</a>
            <a class="btn ghost sm" href="#/community" aria-label="Visit Community">Visit Community</a>
          </div>
        </div>

        <div class="card">
          <h3>For Teachers</h3>
          <div class="list" style="margin-top:8px;">
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">1</span><strong>Register</strong></div>
                <div class="small">Create your profile. Verification badge coming soon.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">2</span><strong>Publish classes</strong></div>
                <div class="small">Add live or video classes. Auto landing link generated.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">3</span><strong>Share your link</strong></div>
                <div class="small">Post to social. Students subscribe in minutes.</div>
              </div>
            </div>
            <div class="seq-item">
              <div>
                <div class="row"><span class="chip">4</span><strong>Earn monthly</strong></div>
                <div class="small">$5 per student/month. Dashboard tracks growth.</div>
              </div>
            </div>
          </div>
          <div class="row" style="gap:8px; margin-top:10px;">
            <a class="btn ghost sm" href="#/teacher" aria-label="Register as Teacher">Register as Teacher</a>
            <a class="btn ghost sm" href="#/teacher-network" aria-label="See Teacher Network">See Teacher Network</a>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top:16px;">
        <h3 style="margin-bottom:10px;">FAQ</h3>
        <details class="drawer" style="margin-bottom:8px;">
          <summary style="cursor:pointer; font-weight:600;">Is payment live?</summary>
          <div class="small">Not yet. The Pay screen is a placeholder. Stripe/Supabase next.</div>
        </details>
        <details class="drawer" style="margin-bottom:8px;">
          <summary style="cursor:pointer; font-weight:600;">Can I DM my teacher?</summary>
          <div class="small">Yes via the Message button. Full inbox coming soon.</div>
        </details>
        <details class="drawer">
          <summary style="cursor:pointer; font-weight:600;">What content is in Library?</summary>
          <div class="small">Short how‑tos and sequences: Asana, Pranayama, Philosophy.</div>
        </details>
      </div>
    </section>
  `;
  return {};
}

export function unmount() {}
