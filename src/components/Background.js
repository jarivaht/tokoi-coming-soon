export function Background() {
  return /*html*/ `
      <div class="fixed inset-0 h-dvh w-screen -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/tokoi_coming_soon_bg_desktop.png"
          alt=""
          class="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/images/tokoi_coming_soon_bg_mobile.png"
          alt=""
          class="block md:hidden absolute inset-0 w-full h-full object-cover"
        />
      </div>
    `;
}
