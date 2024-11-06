/**
 * Иконка "Поиск (при наведении)"
 */
export const SearchHoverIcon = ({ iconColor = "" } = {}) => {
  return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3233 15.9048C18.5703 14.2971 19.158 12.2748 18.9668 10.2492C18.7757 8.22367 17.82 6.34701 16.2943 5.00104C14.7685 3.65507 12.7873 2.9409 10.7537 3.00383C8.72015 3.06676 6.7869 3.90205 5.34731 5.33978C3.90647 6.77851 3.06844 8.7125 3.00401 10.7476C2.93958 12.7828 3.65359 14.7659 5.00054 16.2929C6.34749 17.8199 8.22601 18.7758 10.2533 18.9659C12.2806 19.1559 14.304 18.5658 15.9113 17.3158L15.9543 17.3608L20.1963 21.6038C20.2892 21.6967 20.3995 21.7704 20.5209 21.8207C20.6423 21.871 20.7724 21.8968 20.9038 21.8968C21.0352 21.8968 21.1653 21.871 21.2867 21.8207C21.4081 21.7704 21.5184 21.6967 21.6113 21.6038C21.7042 21.5109 21.7779 21.4006 21.8282 21.2792C21.8785 21.1578 21.9044 21.0277 21.9044 20.8963C21.9044 20.7649 21.8785 20.6348 21.8282 20.5134C21.7779 20.392 21.7042 20.2817 21.6113 20.1888L17.3683 15.9468L17.3233 15.9048ZM15.2473 6.75478C15.8119 7.31026 16.2609 7.97203 16.5685 8.70192C16.8761 9.43181 17.0361 10.2154 17.0393 11.0074C17.0425 11.7994 16.8889 12.5843 16.5873 13.3166C16.2857 14.049 15.8421 14.7144 15.282 15.2745C14.7219 15.8345 14.0565 16.2782 13.3242 16.5798C12.5918 16.8814 11.807 17.035 11.0149 17.0318C10.2229 17.0286 9.43933 16.8686 8.70945 16.561C7.97956 16.2534 7.31779 15.8044 6.76231 15.2398C5.65223 14.1115 5.03297 12.5902 5.03941 11.0074C5.04586 9.42458 5.67749 7.90843 6.79672 6.78919C7.91596 5.66996 9.43211 5.03833 11.0149 5.03188C12.5978 5.02544 14.119 5.6447 15.2473 6.75478Z" fill="${iconColor ? iconColor : "currentColor"}" fill-opacity="0.4"/>
        </svg>
`;
};
