import "./style.css";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import { Background } from "./components/Background.js";
import { Logo } from "./components/Logo.js";
import { Heading } from "./components/Heading.js";
import { TwoColumnText } from "./components/TwoColumnText.js";
import { Button } from "./components/Button.js";
import { Text } from "./components/Text.js";
import { Copyright } from "./components/Copyright.js";

gsap.registerPlugin(Flip);

// Hide everything except logo initially
const app = document.querySelector("#app");

app.innerHTML = /*html*/ `

  ${Background()}

  ${Logo()}

  <!-- Page: 12-col grid, gap-2 (8px), px-2 (8px) -->
  <div id="page-content" class="grid grid-cols-12 gap-2 px-2 w-screen h-dvh overflow-hidden opacity-0">

    <!-- Content column: 4 rows preserve T O K O alignment -->
    <div class="col-start-3 col-span-10 grid-content lg:grid-content-lg">

      <!-- ROW 1: Tagline — top aligns with T -->
      ${TwoColumnText({
        left: "Smallest wine bar<br>and cafe in town",
        right: "Selected vintage<br>furniture",
        italic: true,
        trim: true,
      })}

      <!-- ROW 2: Headings — top aligns with first O -->
      <div class="grid grid-cols-10 gap-2 self-start items-start">
        <div class="col-span-10 md:col-span-5 flex flex-col">
          ${Heading({ text: "Tokoi<br>Summer<br>Popup", tag: "h1" })}
        </div>
        <div class="col-start-4 col-span-6 md:col-span-5 flex flex-col">
          <span class="heading-sm md:heading-md lg:heading-lg 3xl:heading-xl select-none" aria-hidden="true">&nbsp;</span>
          <span class="heading-sm md:heading-md lg:heading-lg 3xl:heading-xl select-none" aria-hidden="true">&nbsp;</span>
          ${Heading({ text: "Opening<br>Soon<br>13.6.2026", tag: "h2", className: "mb-8" })}
          <div class="hidden">
            ${Button({ href: "/winetasting", label: "Wine tasting reservations →" })}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom info: fixed to viewport bottom, aligned to page grid -->
  <div id="bottom-info" class="fixed bottom-safe left-0 w-screen px-2 z-10 opacity-0">
    <div class="grid grid-cols-12 gap-2">
      <div class="col-start-3 col-span-10">
        ${Text({
          text: "Siltasaarenkatu 11<br>00580 Helsinki",
        })}
      </div>
    </div>
  </div>

  <div id="copyright" class="opacity-0">
    ${Copyright({ name: "Tokoi", year: "2026" })}
  </div>

`;

// Animation sequence
requestAnimationFrame(() => {
  const logo = document.getElementById("logo");
  const letters = ["logo-t", "logo-o1", "logo-k", "logo-o2", "logo-i"].map(
    (id) => document.getElementById(id),
  );
  const bg = document.getElementById("background");
  const pageContent = document.getElementById("page-content");
  const bottomInfo = document.getElementById("bottom-info");
  const copyright = document.getElementById("copyright");

  const tl = gsap.timeline();

  // Step 1: logo fades in — still in CSS centered horizontal position
  tl.from(logo, {
    opacity: 0,
    duration: 0.2, // ← faster fade in
    ease: "power4.inOut",
  })

    // Step 2: after fade, switch layout and animate letters to vertical
    .add(() => {
      const startRects = letters.map((l) => l.getBoundingClientRect());

      // Switch to final state
      logo.classList.remove(
        "top-1/2",
        "left-1/2",
        "-translate-x-1/2",
        "-translate-y-1/2",
        "flex-row",
        "justify-between",
      );
      logo.style.width = "";
      logo.classList.add(
        "top-0",
        "left-0",
        "flex-col",
        "justify-between",
        "items-center",
        "h-dvh",
        "w-12",
      );
      logo.style.paddingTop = "max(1rem, env(safe-area-inset-top))";
      logo.style.paddingBottom = "max(1rem, env(safe-area-inset-bottom))";

      const endRects = letters.map((l) => l.getBoundingClientRect());

      // Center the logo container horizontally
      const logoRect = logo.getBoundingClientRect();
      const slideX = window.innerWidth / 2 - logoRect.width / 2;
      gsap.set(logo, { x: slideX });

      // Put letters back to their horizontal positions
      letters.forEach((letter, i) => {
        const dx = startRects[i].left - endRects[i].left - slideX;
        const dy = startRects[i].top - endRects[i].top;
        gsap.set(letter, { x: dx, y: dy });
      });

      // Animate letters to vertical centered
      gsap.to(letters, {
        x: 0,
        y: 0,
        duration: 0.6, // ← faster vertical transform
        ease: "power4.inOut",
        delay: 0.2, // ← shorter pause after fade
      });
    })

    // Step 3: logo slides left, bg + content fade in
    .to(logo, {
      x: 0,
      duration: 0.8, // ← slower slide
      ease: "power4.inOut",
      delay: 0.8, // ← this controls the pause between vertical and slide
    })
    .to(
      [pageContent, bottomInfo, copyright],
      {
        opacity: 1,
        duration: 0.8, // ← slower content reveal
        ease: "power2.out",
        delay: 0.2,
      },
      "<+0.2",
    );
});
