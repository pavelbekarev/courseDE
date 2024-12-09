/**
 * Иконка "Закрыть (маленького размера)"
 */
export const CreateRouteIcon = ({
  iconColor = "",
  extraClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
        <svg width="145" height="51" viewBox="0 0 145 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M111.582 40.5474C111.418 40.2182 111.324 39.8603 111.305 39.4959C111.286 39.1315 111.343 38.7685 111.473 38.4295C111.533 38.2697 111.609 38.1163 111.7 37.9713C111.995 37.4999 112.435 37.1356 112.956 36.9301L121.366 33.5531C121.439 33.5242 121.501 33.4758 121.547 33.4133C121.593 33.3508 121.621 33.2765 121.627 33.1988C121.632 33.1211 121.617 33.0429 121.58 32.9729C121.544 32.9029 121.49 32.8438 121.422 32.8022L105.507 22.863C104.997 22.5435 104.624 22.0472 104.462 21.4731C104.3 20.899 104.362 20.2893 104.634 19.7657L104.822 19.4656C105.172 18.9909 105.693 18.668 106.28 18.5614C106.867 18.4548 107.477 18.5724 107.988 18.8906L120.127 26.4712C120.223 26.5296 120.339 26.5482 120.448 26.5232C120.557 26.4982 120.651 26.4316 120.709 26.3376C120.768 26.2437 120.787 26.13 120.761 26.0211C120.736 25.9121 120.669 25.8167 120.574 25.7554L114.25 21.8062C113.984 21.6401 113.753 21.4243 113.569 21.171C113.386 20.9178 113.254 20.632 113.181 20.3301C113.108 20.0283 113.096 19.7162 113.144 19.4116C113.193 19.1071 113.302 18.8161 113.465 18.5553C113.628 18.2944 113.841 18.0689 114.094 17.8915C114.346 17.7141 114.632 17.5883 114.935 17.5213C115.238 17.4543 115.553 17.4475 115.861 17.5011C116.169 17.5547 116.465 17.6678 116.731 17.8339L123.054 21.7831C123.151 21.8436 123.268 21.8638 123.378 21.8395C123.488 21.8151 123.584 21.748 123.643 21.6531C123.702 21.5581 123.721 21.443 123.694 21.3331C123.668 21.2232 123.598 21.1275 123.502 21.067L118.593 18.0008L118.591 17.9994C118.319 17.8361 118.082 17.6213 117.893 17.3676C117.704 17.1139 117.567 16.8262 117.491 16.5215C117.414 16.2168 117.399 15.901 117.447 15.5928C117.495 15.2845 117.605 14.9898 117.769 14.726C117.934 14.4622 118.151 14.2345 118.407 14.0562C118.663 13.8779 118.953 13.7526 119.26 13.6875C119.568 13.6225 119.886 13.6191 120.197 13.6775C120.508 13.7359 120.805 13.855 121.071 14.0277L125.982 17.0946C126.079 17.1529 126.194 17.1716 126.303 17.1466C126.412 17.1216 126.506 17.0549 126.565 16.961C126.624 16.867 126.642 16.7533 126.617 16.6444C126.592 16.5355 126.524 16.4401 126.429 16.3787L122.2 13.7376C121.726 13.4366 121.389 12.9641 121.261 12.4232C121.133 11.8823 121.225 11.3169 121.517 10.8504C121.809 10.3838 122.277 10.0539 122.819 9.93264C123.362 9.81136 123.935 9.90852 124.412 10.2029L136.09 17.4957C139.419 19.5742 141.043 22.8569 140.547 26.5023C139.808 31.9435 134.781 36.6871 127.741 38.5876L114.8 42.0799C113.497 42.4318 112.204 41.8163 111.582 40.5474Z" fill="white"/>
          <path d="M31 27L101 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 8"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1698 25.6873C18.1698 25.6873 10 18.7957 10 12.0145C10 9.62372 10.9482 7.33084 12.636 5.64029C14.3239 3.94974 16.6131 3 19 3C21.3869 3 23.6761 3.94974 25.364 5.64029C27.0518 7.33084 28 9.62372 28 12.0145C28 18.7957 19.8302 25.6873 19.8302 25.6873C19.3757 26.1065 18.6276 26.102 18.1698 25.6873ZM19 15.9584C19.5171 15.9584 20.0291 15.8564 20.5068 15.6582C20.9845 15.46 21.4186 15.1695 21.7842 14.8033C22.1499 14.437 22.4399 14.0023 22.6378 13.5238C22.8357 13.0453 22.9375 12.5324 22.9375 12.0145C22.9375 11.4966 22.8357 10.9838 22.6378 10.5053C22.4399 10.0268 22.1499 9.59202 21.7842 9.2258C21.4186 8.85958 20.9845 8.56908 20.5068 8.37088C20.0291 8.17268 19.5171 8.07067 19 8.07067C17.9557 8.07067 16.9542 8.48618 16.2158 9.2258C15.4773 9.96541 15.0625 10.9685 15.0625 12.0145C15.0625 13.0605 15.4773 14.0636 16.2158 14.8033C16.9542 15.5429 17.9557 15.9584 19 15.9584Z" fill="${iconColor ? iconColor : "currentColor"}" ${extraClasses.join(" ")} ${extraAttrs.join(" ")}/>
        </svg>
`;
};