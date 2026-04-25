export function Button({ href, label }) {
  return /*html*/ `
    <a
      href="${href}"
      class="w-fit body-sm md:body-md lg:body-lg 3xl:body-xl text-content border border-content px-4 py-2 hover:bg-content hover:text-surface transition-colors duration-200 cursor-pointer"
    >
      ${label}
    </a>
  `;
}
