import React from "react";

const MountForm = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[50%] max-h-[50%] m-10 bg-gray-800 flex-1">
        <div className="text-xs uppercase bg-gray-700 text-gray-400 px-6 py-3 text-center">
          <span className="font-bold">AGREGAR INVERSIONES</span>
        </div>
        <form className="max-w-[18rem] mx-auto flex m-4">
          <label
            htmlFor="currency-input"
            className="mb-2 text-sm font-medium  sr-only text-white"
          >
            Your Email
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none ">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </div>
            <input
              type="number"
              id="currency-input"
              className="block p-2.5 w-full z-20 ps-10 text-sm  rounded-s-lg  border-e-2 border  focus:ring-blue-500 focus:outline-none bg-gray-700 border-e-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>
          <button
            id="dropdown-currency-button"
            data-dropdown-toggle="dropdown-currency"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center  border rounded-e-lg  focus:ring-4 focus:outline-none  bg-gray-700 hover:bg-gray-600 focus:ring-blue-500 text-white border-gray-600"
            type="button"
          >
            <svg
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 me-2"
              viewBox="0 0 20 15"
            >
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
              <path
                fill="#D02F44"
                fillRule="evenodd"
                d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                clipRule="evenodd"
              />
              <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
              <g filter="url(#filter0_d_343_121520)">
                <path
                  fill="url(#paint0_linear_343_121520)"
                  fillRule="evenodd"
                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
            USD{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown-currency"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-currency-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.6"
                        height="14"
                        y=".5"
                        fill="#fff"
                        rx="2"
                      />
                      <g mask="url(#a)">
                        <path
                          fill="#D02F44"
                          fillRule="evenodd"
                          d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                          clipRule="evenodd"
                        />
                        <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                        <g filter="url(#filter0_d_343_121520)">
                          <path
                            fill="url(#paint0_linear_343_121520)"
                            fillRule="evenodd"
                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                            clipRule="evenodd"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_343_121520"
                          x1=".933"
                          x2=".933"
                          y1="1.433"
                          y2="6.1"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset="1" stopColor="#F0F0F0" />
                        </linearGradient>
                        <filter
                          id="filter0_d_343_121520"
                          width="6.533"
                          height="5.667"
                          x=".933"
                          y="1.433"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_343_121520"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_343_121520"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    USD
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.6"
                        height="14"
                        y=".5"
                        fill="#fff"
                        rx="2"
                      />
                      <g mask="url(#a)">
                        <path fill="#043CAE" d="M0 .5h19.6v14H0z" />
                        <path
                          fill="#FFD429"
                          fillRule="evenodd"
                          d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                    EUR
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.1"
                        height="13.5"
                        x=".25"
                        y=".75"
                        fill="#fff"
                        stroke="#F5F5F5"
                        strokeWidth=".5"
                        rx="1.75"
                      />
                      <g fill="#FF3131" mask="url(#a)">
                        <path d="M14 .5h5.6v14H14z" />
                        <path
                          fillRule="evenodd"
                          d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                    CAD
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.6"
                        height="14"
                        y=".5"
                        fill="#fff"
                        rx="2"
                      />
                      <g mask="url(#a)">
                        <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
                          clipRule="evenodd"
                        />
                        <path
                          stroke="#DB1F35"
                          strokeLinecap="round"
                          strokeWidth=".667"
                          d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
                        />
                        <path
                          fill="#E6273E"
                          fillRule="evenodd"
                          d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                    GBP
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default MountForm;
