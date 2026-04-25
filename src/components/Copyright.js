export function Copyright({ year = "2026", name = "Tokoi" }) {
  return /*html*/ `
    <div class="fixed bottom-safe right-grid body-sm md:body-md lg:body-lg 3xl:body-xl text-content z-10">
      (c) ${name} ${year}
    </div>
  `;
}
