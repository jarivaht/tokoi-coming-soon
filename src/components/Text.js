// Text.js
// Responsive body text component — all breakpoint classes handled internally.
// Props:
//   text:   string (can include <br>)
//   italic: boolean — uses italic font variant
//   trim:   boolean — applies leading trim for top alignment

export function Text({ text, italic = false, trim = false }) {
  const sizeClasses = "body-sm md:body-md lg:body-lg 3xl:body-xl";
  const trimClasses = trim
    ? "leading-trim-body-sm md:leading-trim-body-md lg:leading-trim-body-lg 3xl:leading-trim-body-xl"
    : "";
  const italicClass = italic ? "italic" : "";

  return /*html*/ `
      <p class="${sizeClasses} ${italicClass} ${trimClasses} text-content">
        ${text}
      </p>
    `;
}
