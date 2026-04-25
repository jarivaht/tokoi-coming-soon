import { TextColumnDivider } from "./TextColumnDivider.js";
import { Text } from "./Text.js";

// TwoColumnText.js
// Props:
//   left:   string
//   right:  string
//   italic: boolean — applies italic to left column
//   trim:   boolean — applies leading trim to both columns

export function TwoColumnText({ left, right, italic = false, trim = false }) {
  return /*html*/ `
    <div class="flex flex-row gap-2 md:gap-4 xl:gap-6 w-full self-start">
      ${Text({ text: left, italic, trim })}
      ${TextColumnDivider()}
      ${Text({ text: right, italic, trim })}
    </div>
  `;
}
