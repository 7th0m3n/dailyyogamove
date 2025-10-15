// app.js
const routes = {
  "#/strengthasana": () => import("./features/strengthasana.js"),
  "#/pranayama": () => import("./features/pranayama.js"),
  "#/postures": () => import("./features/postures.js"),
  "#/mantra-generator": () => import("./features/mantra-generator.js"),
  "#/mantras": () => import("./features/traditional-mantras.js"),
  "#/philosophy": () => import("./features/philosophy.js"),
  "#/assigned-asana": () => import("./features/assigned.js"),
  "#/explore": () => import("./features/explore.js"),
};

let active = null;
let mod = null;
const outlet = document.getElementById("app");

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
  } catch (e) {
    console.error("Route load failed:", hash, e);
    location.hash = "#/explore";
  }
}

window.addEventListener("hashchange", navigate);
navigate();


