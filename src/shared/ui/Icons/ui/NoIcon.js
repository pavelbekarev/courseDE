/**
 * Иконка "Отмена"
 */
export const NoIcon = ({ iconColor = "" } = {}) => {
  return `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/>
          <path d="M14.8 5.19995L5.20001 14.8" stroke="${iconColor ? iconColor : "currentColor"}" stroke-width="2"/>
        </svg>
`;
};
