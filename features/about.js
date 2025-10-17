export function mount(el){
  el.innerHTML = `
    <section class="about-section">
      <h1>About DailyYogaMove</h1>
      <p class="fade-in">Mobile-first yoga teaching and student portal with breath pacing.</p>
      <div style="margin-top:12px;">
        <a class="btn ghost" href="#/explore">Back to Explore</a>
      </div>
    </section>`;
}
export function unmount(){}


