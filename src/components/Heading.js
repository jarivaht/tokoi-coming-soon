export function Heading({ text, tag = "h1", className = "" }) {
  return /*html*/ `
      <${tag} class="heading-sm leading-trim-heading-sm md:heading-md md:leading-trim-heading-md lg:heading-lg lg:leading-trim-heading-lg 3xl:heading-xl 3xl:leading-trim-heading-xl text-content ${className}">
        ${text}
      </${tag}>
    `;
}
