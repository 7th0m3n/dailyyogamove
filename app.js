// app.js
const routes = {
  "#/about": () => import("./features/about.js"),
  "#/teacher": () => import("./features/teacher.js"),
  "#/strengthasana": () => import("./features/strengthasana.js"),
  "#/pranayama": () => import("./features/pranayama.js"),
  "#/breathpacer": () => import("./features/pranayama.js"),
  "#/postures": () => import("./features/postures.js"),
  "#/mantra-generator": () => import("./features/mantra-generator.js"),
  "#/mantras": () => import("./features/traditional-mantras.js"),
  "#/philosophy": () => import("./features/philosophy.js"),
  "#/assigned-asana": () => import("./features/assigned.js"),
  "#/teacher-network": () => import("./features/teacher-network.js"),
  "#/community": () => import("./features/community.js"),
  "#/explore": () => import("./features/explore.js"),
  "#/how-it-works": () => import("./features/how-it-works.js"),
};

let active = null;
let mod = null;
const outlet = document.getElementById("app");
const toastEl = document.getElementById('toast');

export function showToast(message, type = 'success') {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.className = `toast toast--${type}`;
  toastEl.setAttribute('aria-hidden','false');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toastEl.setAttribute('aria-hidden','true');
  }, 2200);
}

function normalizeHash(h){
  if (!h || h === "#" || h === "#/") return "#/explore";
  return h;
}

async function navigate() {
  const hash = normalizeHash(location.hash);
  const loader = routes[hash] || routes["#/explore"];
  try {
    if (active && mod?.unmount) { mod.unmount(); active = null; }
    mod = await loader();
    active = mod.mount(outlet, { hash });
    // Wire demo CTA loading states (if present on page)
    setTimeout(() => {
      document.querySelectorAll('.btn[aria-label="Join a Class"], .btn[aria-label="Register as Instructor"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const b = e.currentTarget;
          b.setAttribute('aria-busy','true');
          setTimeout(() => {
            b.removeAttribute('aria-busy');
            showToast('Success! You are set.', 'success');
          }, 900);
        }, { once: true });
      });
    }, 0);
  } catch (e) {
    console.error("Route load failed:", hash, e);
    location.hash = "#/explore";
  }
}

window.addEventListener("hashchange", navigate);
navigate();

// Add subtle header shadow on scroll
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  document.documentElement.classList.toggle('scrolled', y > 2);
});


