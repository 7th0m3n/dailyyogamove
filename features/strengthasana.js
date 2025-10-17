import { IMAGES } from "../src/assets/images/index.js";

export function mount(el){
  el.innerHTML = `<section><h1>Strengthāsana</h1>
    <img src="${IMAGES.heroDailyYogaMove}" alt="Yoga room" style="max-width:420px; border-radius:12px; margin:12px 0;" />
    <button class="btn" onclick="location.hash='#/explore'">Back</button></section>`;
}
export function unmount(){}


