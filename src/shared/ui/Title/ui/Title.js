/**
 *
 */
export const Title = ({ text = "", extraClasses = [], extraAttrs = [] }) => {
  return `
    <h1 class="title">
      ${text}
    </h1>
  `;
};
