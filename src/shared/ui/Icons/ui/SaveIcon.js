/**
 * Иконка "Сохранить"
 */
export const SaveIcon = ({ iconColor = "" } = {}) => {
  return `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V6.66667L13.3333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5ZM5.83333 4.16667H9.16667V5.83333H10.8333V4.16667H12.5V7.5H5.83333V4.16667ZM5.83333 10.8333H14.1667V15.8333H5.83333V10.8333Z" fill="${iconColor ? iconColor : "currentColor"}"/>
        </svg>
`;
};
