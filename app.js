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

async function navigate() {
  const hash = location.hash || "#/explore";
  if (active && mod?.unmount) {
    mod.unmount();
    active = null;
  }
  const loader = routes[hash] || routes["#/explore"];
  mod = await loader();
  active = mod.mount(outlet, { hash });
}

window.addEventListener("hashchange", navigate);
navigate();


