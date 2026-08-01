import "./style.css";

import { gsap } from "gsap";

import { Logo } from "./components/Logo.js";
import { Text } from "./components/Text.js";

const app = document.querySelector("#app");

const marqueeItems = [
  "Coffee",
  "/",
  "Wine",
  "/",
  "Beer",
  "/",
  "Tapas",
  "/",
  "Selected vintage furniture",
  "/",
];

const marqueeHTML = marqueeItems
  .map(
    (item) =>
      `<span class="shrink-0 body-md md:body-lg lg:body-xl 3xl:body-xl italic text-content">${item}</span>`,
  )
  .join("");

app.innerHTML = /*html*/ `

  <img src="/images/tokoi-top-center.svg"   aria-hidden="true" class="fixed top-0 left-5/8 -translate-x-1/2 pointer-events-none z-0 w-80 lg:w-auto" />
  <img src="/images/tokoi-bottom-left.svg"  aria-hidden="true" class="fixed bottom-0 left-0 pointer-events-none z-0 w-40 lg:w-60" />
  <img src="/images/tokoi-bottom-right.svg" aria-hidden="true" class="fixed bottom-0 right-0 pointer-events-none z-20 w-24 lg:w-auto" />
 
  ${Logo()}

  <div class="grid grid-cols-12 gap-2 pl-10 px-2 w-screen lg:h-dvh lg:overflow-hidden">

    <div class="col-start-2 col-span-11 lg:col-start-8 lg:col-span-5 lg:h-dvh py-2 overflow-hidden z-10">
      <img
        id="fp-image"
        src="/images/tokoi_fp_image.jpg"
        alt="Tokoi bar"
        class="w-full h-auto lg:h-full lg:object-cover opacity-0"
      />
    </div>

    <div class="col-start-2 col-span-11 lg:col-start-2 lg:col-span-5 lg:py-2 flex lg:order-first flex-col gap-24 lg:gap-0 pb-safe lg:pb-2 lg:justify-between lg:h-screen z-100">


      <div class="overflow-hidden w-full">
        <div id="marquee" class="flex flex-row gap-6 w-max">
          ${marqueeHTML}${marqueeHTML}
        </div>
      </div>

      <div class="flex flex-row justify-between items-start w-full">
        ${Text({ text: "Open", trim: true })}
        ${Text({ text: "Tue–Sat", trim: true })}
        ${Text({ text: "15–22", trim: true })}
      </div>

      <!-- Info -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-row justify-between">
          ${Text({ text: "+358" })}
          ${Text({ text: "40" })}
          ${Text({ text: "673" })}
          ${Text({ text: "8770" })}
        </div>
        <div class="flex flex-row justify-between">
          ${Text({ text: "ig" })}
          ${Text({ text: "@" })}
          ${Text({ text: "roihupellonvintagevarasto" })}
        </div>
        <div class="flex flex-row justify-between">
          ${Text({ text: "anna" })}
          ${Text({ text: "@" })}
          ${Text({ text: "brukhelsinki" })}
          ${Text({ text: ".fi" })}
        </div>
        <div class="flex flex-row justify-between">
          ${Text({ text: "Siltasaarenkatu" })}
          ${Text({ text: "11" })}
          ${Text({ text: "00530" })}
          ${Text({ text: "Helsinki" })}
        </div>
      </div>

    </div>

  </div>

`;

// Image fade on load
const fpImage = document.getElementById("fp-image");
if (fpImage) {
  if (fpImage.complete) {
    gsap.to(fpImage, { opacity: 1, duration: 0.8, ease: "power2.out" });
  } else {
    fpImage.addEventListener("load", () => {
      gsap.to(fpImage, { opacity: 1, duration: 0.8, ease: "power2.out" });
    });
  }
}

// Marquee animation
const marquee = document.getElementById("marquee");
if (marquee) {
  // Width of one set of items (half the total)
  const totalWidth = marquee.scrollWidth / 2;

  gsap.to(marquee, {
    x: -totalWidth,
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });
}
