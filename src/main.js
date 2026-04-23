import "./style.css";

document.querySelector("#app").innerHTML = /*html*/ `
<div class="grid grid-cols-12 gap-3 px-3 w-screen overflow-hidden text-black" style="height: 100dvh;">

  <!-- Logo column -->
  <div class="fixed top-0 left-0 lg:left-2 w-12 flex flex-col justify-between items-center"
       style="height: 100dvh; padding-top: max(16px, env(safe-area-inset-top)); padding-bottom: max(16px, env(safe-area-inset-bottom));">
    <img src="/logo/t.svg" alt="" class="h-[20px] lg:h-[24px] w-auto brightness-0" />
    <img src="/logo/o.svg" alt="" class="h-[20px] lg:h-[24px] w-auto brightness-0" />
    <img src="/logo/k.svg" alt="" class="h-[22px] lg:h-[26px] w-auto brightness-0" />
    <img src="/logo/o.svg" alt="" class="h-[20px] lg:h-[24px] w-auto brightness-0" />
    <img src="/logo/i.svg" alt="" class="h-[20px] lg:h-[24px] w-auto brightness-0" />
  </div>

  <!-- Text column -->
  <div class="col-start-3 lg:col-start-2 col-span-9 lg:col-span-10 flex flex-col justify-between"
       style="height: 100dvh; padding-top: max(12px, env(safe-area-inset-top)); padding-bottom: max(12px, env(safe-area-inset-bottom));">

    <p class="max-w-46 text-sm leading-tight font-aether italic tracking-wide">
      Smallest wine bar and cafe in town / Selected vintage furniture
    </p>

    <h1 class="text-2xl lg:text-4xl -translate-y-[16px] lg:-translate-y-[22px] leading-tight font-aether">
      Tokoi Summer Popup<br />
      Opening Soon 13.6.2026
    </h1>

    <span></span>
    <span></span>

    <p class="text-sm leading-tight font-aether tracking-wide">
      Siltasaarenkatu 11<br />
      00580 Helsinki
    </p>

  </div>

  <!-- Background image -->
  <div class="fixed top-0 left-0 w-full overflow-hidden -z-10" style="height: 100dvh;">
    <img
      src="/images/bg-desktop.png"
      alt="wine and cheese"
      class="hidden lg:block absolute inset-0 w-full h-full object-cover"
    />
    <img
      src="/images/bg-mobile.png"
      alt="wine and cheese"
      class="block lg:hidden absolute inset-0 w-full h-full object-cover"
    />
  </div>

</div>
`;