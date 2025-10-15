export function mount(el) {
  el.innerHTML = `
    <section>
      <h1>Strengthāsana</h1>
      <p>This is a test of the modular system.</p>
      <button onclick="location.hash='#/explore'">Back to Explore</button>
    </section>`;
  return {};
}
export function unmount() {}


