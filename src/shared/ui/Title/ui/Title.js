/**
 *
 */
export const Title = ({ text = "", extraClasses = [], extraAttrs = [] }) => {
  return `
    <h3 class="title ${extraClasses.join(" ")}">
      ${text}
    </h3>
  `;
};
