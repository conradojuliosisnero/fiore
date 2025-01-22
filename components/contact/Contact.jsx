const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <p className="text-gray-600 mb-4">
          ¡Nos encantaría saber de ti! Contáctanos a través de cualquiera de las
          siguientes maneras:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="WhatsApp"
              role="img"
              viewBox="0 0 512 512"
              fill="#000000"
              width={24}
              height={24}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                <path
                  fill="#25d366"
                  stroke="#ffffff"
                  stroke-width="26"
                  d="M123 393l14-65a138 138 0 1150 47z"
                ></path>
                <path
                  fill="#ffffff"
                  d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                ></path>
              </g>
            </svg>
            <span className="text-gray-800 ml-2"> 323 3330714</span>
          </div>
          <div className="flex items-center">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint0_radial_87_7153)"
                ></rect>{" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint1_radial_87_7153)"
                ></rect>{" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint2_radial_87_7153)"
                ></rect>{" "}
                <path
                  d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                  fill="white"
                ></path>{" "}
                <defs>
                  {" "}
                  <radialGradient
                    id="paint0_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                  >
                    {" "}
                    <stop stop-color="#B13589"></stop>{" "}
                    <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                    <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                  </radialGradient>{" "}
                  <radialGradient
                    id="paint1_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                  >
                    {" "}
                    <stop stop-color="#E0E8B7"></stop>{" "}
                    <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                    <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                    <stop
                      offset="1"
                      stop-color="#E2425C"
                      stop-opacity="0"
                    ></stop>{" "}
                  </radialGradient>{" "}
                  <radialGradient
                    id="paint2_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                  >
                    {" "}
                    <stop offset="0.156701" stop-color="#406ADC"></stop>{" "}
                    <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                    <stop
                      offset="1"
                      stop-color="#6A45BE"
                      stop-opacity="0"
                    ></stop>{" "}
                  </radialGradient>{" "}
                </defs>{" "}
              </g>
            </svg>
            <span className="text-gray-800 ml-2"> @detalles_fiore_</span>
          </div>
          <div className="flex items-center">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                  fill="#c7c7c7"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-gray-800 ml-2"> Cartagena, Bolivar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
