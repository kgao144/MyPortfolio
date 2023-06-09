import * as React from "react";



export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const GlowGithub = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="3em"
        height="3em"
        style={{
            enableBackground: "new 0 0 64 64",
        }}
        viewBox="0 0 64 64"
        {...rest}>
        <linearGradient
            id="a"
            x1={30.999}
            x2={30.999}
            y1={16}
            y2={55.342}
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect">
            <stop offset={0} style={{ stopColor: "#6dc7ff" }}/>
            <stop offset={1} style={{ stopColor: "#e6abff" }}/>
        </linearGradient>
        <path
            d="M25.008 56.007c-.003-.368-.006-1.962-.009-3.454l-.003-1.55c-6.729.915-8.358-3.78-8.376-3.83-.934-2.368-2.211-3.045-2.266-3.073l-.124-.072c-.463-.316-1.691-1.157-1.342-2.263.315-.997 1.536-1.1 2.091-1.082 3.074.215 4.63 2.978 4.694 3.095 1.569 2.689 3.964 2.411 5.509 1.844.144-.688.367-1.32.659-1.878-4.956-.879-10.571-3.515-10.571-13.104 0-2.633.82-4.96 2.441-6.929-.362-1.206-.774-3.666.446-6.765l.174-.442.452-.144c.416-.137 2.688-.624 7.359 2.433a24.959 24.959 0 0 1 6.074-.759c2.115.01 4.158.265 6.09.759 4.667-3.058 6.934-2.565 7.351-2.433l.451.145.174.44c1.225 3.098.813 5.559.451 6.766 1.618 1.963 2.438 4.291 2.438 6.929 0 9.591-5.621 12.219-10.588 13.087.563 1.065.868 2.402.868 3.878 0 1.683-.007 7.204-.015 8.402l-2-.014c.008-1.196.015-6.708.015-8.389 0-2.442-.943-3.522-1.35-3.874l-1.73-1.497 2.274-.253c5.205-.578 10.525-2.379 10.525-11.341 0-2.33-.777-4.361-2.31-6.036l-.43-.469.242-.587c.166-.401.894-2.442-.043-5.291-.758.045-2.568.402-5.584 2.447l-.384.259-.445-.123c-1.863-.518-3.938-.796-6.001-.806-2.052.01-4.124.288-5.984.806l-.445.123-.383-.259c-3.019-2.044-4.833-2.404-5.594-2.449-.935 2.851-.206 4.892-.04 5.293l.242.587-.429.469c-1.536 1.681-2.314 3.712-2.314 6.036 0 8.958 5.31 10.77 10.504 11.361l2.252.256-1.708 1.49c-.372.325-1.03 1.112-1.254 2.727l-.075.549-.506.227c-1.321.592-5.839 2.162-8.548-2.485-.015-.025-.544-.945-1.502-1.557.646.639 1.433 1.673 2.068 3.287.066.19 1.357 3.622 7.28 2.339l1.206-.262.012 3.978c.003 1.487.006 3.076.009 3.444l-1.998.014z"
            style={{ fill: "url(#a)" }}/>
        <linearGradient
            id="b"
            x1={12}
            x2={12}
            y1={5}
            y2={59.167}
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect">
            <stop offset={0} style={{ stopColor: "#1a6dff" }}/>
            <stop offset={1} style={{ stopColor: "#c822ff" }}/>
        </linearGradient>
        <path
        d="M32 58C17.663 58 6 46.337 6 32S17.663 6 32 6s26 11.663 26 26-11.663 26-26 26zm0-50C18.767 8 8 18.767 8 32s10.767 24 24 24 24-10.767 24-24S45.233 8 32 8z"
        style={{ fill: "url(#b)" }}/>
    </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 209"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v209H0z" />
        <path
        fill="#55acee"
        d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
        />
    </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60} />
        <rect width={256} height={256} fill="#0A66C2" rx={60} />
        <path
            fill="#fff"
            d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
        />
        </g>
    </svg>
);

export const RoundLinkedIn = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={40}
        viewBox="-11.494 -16.312 99.612 97.871"
        {...rest}
        >
        <path
            fill="#0a66c2"
            d="M72.865 61.11a1.2 1.2 0 0 0 1.21-1.27c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.03h.724l-1.389-2.1zm-.783-.473h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.94v15.293h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM59.991.004H4.781A4.728 4.728 0 0 0 0 4.674v55.44a4.731 4.731 0 0 0 4.781 4.674h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67"
        />
        <path
            fill="#0a66c2"
            d="M72.164 56.411a4.418 4.418 0 1 0 .085 0h-.085m0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1"
        />
    </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
        fill="#CB1F27"
        d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
        />
    </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
        fill="#E74D89"
        d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
        />
        <path
        fill="#B2215A"
        d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
        />
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        >
        <g strokeDasharray="2">
            <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="4;2"
            />
            </path>
            <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="4;2"
            />
            </path>
        </g>
        <path
            fill="currentColor"
            d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
            <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
            />
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
            />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
            />
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
            />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
            />
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
            />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
            />
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
            />
        </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
            <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
            />
            <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
            />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
            />
        </circle>
        <circle cx="22" cy="2" r="1">
            <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
            />
            <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
            />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
            />
        </circle>
        </mask>
        <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="6;10"
        />
        </circle>
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="2"
        strokeDashoffset="2"
        strokeLinecap="round"
        strokeWidth="2"
        >
        <path d="M0 0">
            <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
            />
            <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
            />
        </path>
        <path d="M0 0">
            <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
            />
            <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
            />
        </path>
        <animateTransform
            attributeName="transform"
            dur="30s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
        />
        </g>
        <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
            />
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
            <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
            />
        </path>
        </g>
        <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
        <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
            <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
            />
            <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
            />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
            />
        </circle>
        <circle cx="18" cy="6" r="10">
            <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
            />
            <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
            />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
            />
        </circle>
        </mask>
        <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity="0"
        >
        <set attributeName="opacity" begin="0.6s" to="1" />
        <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;6"
        />
        </circle>
    </svg>
);

export const CircularText = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={400}
        height={400}
        viewBox="0 0 300 300"
        {...rest}
        >
        <path d="M164.6 49.2c-.3 1.8-1 6-1.6 9.2-1 5.9-.7 7.8.9 6 .8-.8 3.1-13.4 3.1-16.8 0-2.9-1.9-1.6-2.4 1.6zM142.5 51.2c-.2.7-.9 3.2-1.5 5.5-.6 2.4-1.4 4.3-1.8 4.3-.4 0-1.8-2-3.1-4.5s-3-4.5-3.7-4.5c-.8 0 0 2.2 2.3 6 1.9 3.3 4.1 6 4.7 6 .7 0 2-2.6 3-5.8 1-3.1 2.1-6.3 2.3-7 .3-.6 0-1.2-.6-1.2-.7 0-1.4.6-1.6 1.2zM148.7 52.8c-4 4.4-.4 11.6 5.5 11 1.7-.2 3.3-.9 3.6-1.6.3-.9-.3-1.1-2.1-.7-2.6.7-6.7-.9-6.7-2.5 0-.6 2.5-1 5.5-1 6 0 6.7-.9 3.9-4.8-1.9-2.8-7.4-3-9.7-.4zm7.8 1.2c1.8 2 1.7 2-2.8 2-4.9 0-6-1.1-2.9-2.9 2.5-1.5 3.7-1.3 5.7.9zM120 56c-4.1 4.1-1.3 11 4.4 11 3.4 0 7.6-2.3 6.4-3.6-.4-.4-1.4-.1-2.2.5-1.8 1.5-6.8 1.1-7.3-.5-.2-.7 1.7-1.7 4.7-2.4 2.7-.7 5-1.5 5-1.9 0-.3-.7-1.7-1.6-2.9-1.9-2.8-6.7-2.9-9.4-.2zm7.7 1.6c.2.7-.7 1.4-2.1 1.8-1.3.3-3.1.9-4 1.2-1.9.7-2.2-1.6-.4-3.4 1.5-1.5 6-1.2 6.5.4zM170.7 55.8c-2.2 2.5-2.1 7.5.1 9.5 2.5 2.2 7.5 2.1 9.5-.1 2.5-2.7 2.2-7.8-.5-9.6-3-2.1-7.1-2-9.1.2zm8.3 1.6c1.6 2.1.9 5.6-1.5 7.2-4.1 2.7-8.8-3.9-5.3-7.4 1.6-1.6 5.3-1.5 6.8.2zM101.3 58.3c-2.4 1.1-4.3 2.5-4.3 2.9 0 1.2 6.9 14.8 7.6 14.8.2 0 2.2-.9 4.4-2 7.5-3.8 9.2-10 4.1-15.1-3.5-3.4-6-3.6-11.8-.6zm10.3 2.2c3.5 3.5 2.9 7.3-1.5 10.2-1.9 1.3-3.7 2.3-4.2 2.3-.8 0-7.1-11.1-6.6-11.6.7-.7 7.3-3.3 8.5-3.4.7 0 2.4 1.1 3.8 2.5zM183.8 66c-2 4.4-3.3 8.2-2.7 8.5.5.4 1.4-.5 2.1-1.9 1.3-3 2.1-3.2 3.8-1.1 1.9 2.3 7.6 1.9 9.4-.7 3.3-4.6.4-10.8-4.9-10.8-1.4 0-2.5-.5-2.5-1 0-2.7-1.8-.2-5.2 7zm10.6-2.4c.9.8 1.6 2 1.6 2.5 0 5.1-7.1 6.9-9.2 2.4-2.1-4.6 4-8.6 7.6-4.9zM200 70c-2.9 2.9-2.6 7.4.6 9.9 2.8 2.2 5.4 2.7 5.4 1.1 0-.6-.6-1-1.3-1-1.9 0-4.7-3.3-4.7-5.3 0-2.3.6-2.2 5.2 1.5 3.2 2.5 4.2 2.8 4.9 1.7 2.5-4-.8-9.9-5.6-9.9-1.4 0-3.4.9-4.5 2zm7.8 1.2c1.2 1.2 1.7 4.8.6 4.8-1.3 0-7.3-4.7-6.7-5.3 1.1-1.1 4.8-.8 6.1.5zM83.1 76.6C81.9 78.1 81 80.1 81 81c0 2.3 2.9 5.7 5.5 6.4 2.9.8 8.5-2.8 8.5-5.6 0-2.3 0-2.3-2.3.4-1.2 1.5-2.9 2.8-3.7 2.9-4.3.5-4.3-.4 0-4.2 4.3-3.8 4.4-4 2.6-5.4-3-2.2-6.2-1.8-8.5 1.1zm6.9.2c0 1.4-5.6 6.3-6.3 5.5-1.2-1.1-.8-3.1.9-4.7 1.6-1.7 5.4-2.2 5.4-.8zM212.2 80.3c-3.9 4-5.3 6.7-3.4 6.7.4 0 2-1.4 3.5-3.1 2.3-2.6 3.2-3 5.7-2.6 3.6.8 5.1-1 1.5-1.9-1.3-.3-2.3-1-2-1.4.3-.5.1-1.1-.3-1.4-.5-.3-2.7 1.4-5 3.7zM75.3 85c-.3 1.1-.9 1.8-1.3 1.5-.5-.3-1.1-.1-1.4.3-.7 1.2 9.1 9.5 10.4 8.7.5-.3-.6-2-2.6-3.7-3-2.6-3.5-3.6-3-6 .6-3.2-1.3-4-2.1-.8zM66.8 95.7c-1.9 2.2-3.3 6.3-2.1 6.3.4 0 1.6-1.4 2.5-3 .9-1.7 2.4-3 3.3-3 1.9 0 1.9 1.4-.1 4.5-.9 1.4-1.3 3.2-.9 4.5 1 3.2 5.5 2.3 7.5-1.5.8-1.7 1.9-3.3 2.3-3.6 1.1-.8-6.8-5.9-9.1-5.9-1.1 0-2.6.8-3.4 1.7zm8.7 3.4c1.3 1.9-.4 5.9-2.5 5.9-2.3 0-2.6-2.1-.8-5 1.4-2.2 2.4-2.5 3.3-.9zM218.7 95.7c-1.2 1.1-.8 2.3.8 2.3.8 0 1.5-.7 1.5-1.5 0-1.6-1.2-2-2.3-.8zM232.5 102.6c-3.3 1.8-6.4 3.5-6.9 3.7-.5.1.4 2.6 1.8 5.5 1.5 2.9 3.1 5 3.7 4.6.6-.3.2-1.9-1.1-4-1.1-2-2-3.8-2-4.2 0-.4 2.9-2.2 6.5-4 3.6-1.9 6.5-3.8 6.5-4.3 0-1.6-2.3-.9-8.5 2.7zM60.6 104.9c-.3.4 1.2 2.2 3.4 4 2.2 1.8 4 3.5 4 4 0 .4-2.5.6-5.5.3-6.8-.6-7.1.6-1.2 5.9l4.2 3.8-6.2.1c-3.5 0-6.3.4-6.3 1 0 1.4 13.7 1.3 14.6-.2.4-.7-1.1-2.7-3.7-4.9l-4.4-3.8 5.8-.1c4.1 0 5.7-.4 5.7-1.3 0-1.8-9.7-10-10.4-8.8zM234 117c-1.1 1.1-2 3.3-2 4.8 0 3.1 2.4 7.1 3.6 6 .4-.4.1-1.4-.5-2.2-1.5-1.7-1.1-6.8.5-7.3.6-.2 1.7 1.7 2.4 4.2 1.5 5.5 2 5.9 4.8 3.9 4.5-3.1 1.4-11.4-4.3-11.4-1.4 0-3.4.9-4.5 2zm8 1.4c1.4 1.7 1 5.8-.6 6.3-.7.2-1.4-.7-1.8-2.1-.3-1.3-.9-3.1-1.2-4-.8-2 1.9-2.2 3.6-.2zM53 128.9c0 1.4-.6 2.1-2 2.1-1.1 0-2 .4-2 1 0 .5.7 1 1.5 1s1.5.8 1.5 1.7c0 1.4.2 1.5.9.5.6-1 2.1-1.2 5.5-.7 3.1.5 5.1.3 6.1-.5 1.7-1.4 2-5 .5-5-.5 0-1 .6-1 1.4 0 2.2-1.5 2.7-6 2-3.4-.6-4.1-1-3.7-2.5.3-1.1.1-2.2-.4-2.5-.5-.3-.9.4-.9 1.5zM246.1 129.1c-.1 1.2-1.4 1.9-4.5 2.3-2.4.4-5 1.3-5.6 2.1-1.4 1.7-1 4.7.7 5.2.7.3 1-.3.6-1.5-.6-2.3 0-2.8 4.9-3.7 3.4-.6 3.9-.5 4.7 1.6 1 2.4 1 2.4 1-.4.1-1.7.6-2.7 1.6-2.7.8 0 1.5-.5 1.5-1 0-.6-.9-1-1.9-1-1.1 0-2.2-.6-2.4-1.3-.4-.7-.6-.6-.6.4zM46 138.5c0 1.8.7 2.8 2.5 3.5 1.4.5 2.5 1.5 2.5 2.2 0 1 .3.9.9-.1.7-1 2.3-1.3 6.5-.8 3.1.3 5.6.2 5.6-.3 0-1-3.7-2-7.7-2-2.6 0-3.3-.4-3.3-2 0-1.1-.4-2-1-2-.5 0-1 .9-1 2.1 0 2.7-2.4 1.9-2.8-.9-.5-3-2.2-2.8-2.2.3zM247 141c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM236.4 147.6c-1.7 6.8 4.8 11.5 6.8 4.9 1.9-6.1 1.7-5.8 3.4-4.5 1 .9 1.3 2.2.9 4.2-.4 1.7-.2 2.8.4 2.8 1.7 0 1.3-7.6-.4-9-2.3-1.9-4.3-.5-5.5 4-1.4 5.3-3.5 4.7-3.4-.9.1-4.6-1.2-5.5-2.2-1.5zM53.2 148.6c-2.7 1.8-3.1 8.4-.6 10.4 4.1 3.5 11.4.1 11.4-5.2 0-5.6-6-8.6-10.8-5.2zm7.2 2c2.3 2.3 2 5.1-.8 6.9-4.5 3-9.1-1.6-6.1-6.1 1.8-2.8 4.7-3.1 6.9-.8zM57.6 163.6c-.9.8-1.6 3.2-1.6 5.3 0 2.1-.6 4.4-1.4 5-2.1 1.7-4.6-1.3-4.6-5.5 0-2.1-.4-3.3-1-2.9-2.2 1.3-.5 8.8 2.4 10.7 3.3 2.2 6.6-.9 6.6-6.1 0-2.1.6-4.4 1.4-5 2.2-1.8 4.6 1.3 4.6 6 0 2.4.4 3.8 1 3.4 1.4-.8 1.3-6.1-.1-8.8-2.1-4-4.7-4.7-7.3-2.1zM236 167c-2.2 2.2-3.3 5.7-2.8 9.1.5 3.6 2.3 2.6 2-1.1-.8-6.9 7.5-10.7 11.7-5.4 2.5 3.1 2.6 5.3.6 8-2.3 3-1.9 5.1.5 2.9 3.9-3.6 3.5-10.8-.9-14.2-2.6-2-8.8-1.6-11.1.7zM230.1 183.4c-2.9 3.1-2.5 7.3 1.1 9.9 3.4 2.6 7.3 1.6 9.3-2.3 3.7-7.1-4.9-13.4-10.4-7.6zm7 .6c2.7 1.5 2.6 6.6-.2 8-1.6.9-2.6.8-4.5-.5-2.8-1.8-3.1-4.6-.8-6.9 1.8-1.9 2.8-2 5.5-.6zM64.4 185.1l-6.2 3 2.3 4.8c2.8 5.7 5.7 7 9.5 4.2 3.3-2.4 3.8-6.7 1-9.6-1.4-1.5-1.8-2.5-1.1-3 2.3-1.4 5.1.7 6.2 4.6 1.5 4.7 3.4 5.3 2.5.7-.7-3.7-4.2-7.8-6.5-7.7-.9 0-4.4 1.4-7.7 3zm5.4 3.1c3 3 .3 8.2-4 7.6-2.9-.4-4.7-5-2.8-7.2 1.5-1.9 5.1-2.1 6.8-.4zM224 194.4c0 .8 1.5 2.4 3.4 3.5 4.2 2.6 4.9 4.3 3 7-2 2.7-3 2.7-7.6-.5s-6.4-2.3-2.3 1.1c5.7 4.7 9.9 4.5 11.8-.5.6-1.7 1.5-3 1.9-3 1.9 0 .5-2-3.4-4.6-6.8-4.6-6.8-4.6-6.8-3zM72.8 199.6c-2.1 1.5-4 3.5-4.3 4.5-.8 2.4 1 5.6 3.4 6.4 1.2.4 1.8 1.2 1.4 2.1-.3.7-.2 1.4.2 1.4 1.3 0 10.5-7.1 10.5-8.1 0-1.4-.7-1.1-5.1 1.8-4.6 3-7.2 2.4-7.7-1.9-.2-2 .5-3 3.2-4.8 2-1.2 3.6-2.6 3.6-3.1 0-1.5-1.3-1.1-5.2 1.7zM214.7 206.6c-.4.4.9 2.4 2.8 4.6 3 3.2 3.4 4.2 2.5 5.9-1.9 3.4-3.9 3.4-7.4 0-3-2.9-5.6-4-5.6-2.4.1 1.5 7.9 7.3 9.8 7.3 2.1 0 5.2-2.9 5.2-4.9 0-.7.4-1 .9-.6.5.3 1.2.2 1.5-.3.7-1.1-8.8-10.5-9.7-9.6zM82.6 213.7c-3.1 2.7-4.6 4.7-4 5.3.6.6 2.8-.8 5.8-3.9 6.1-6.2 4.7-7.3-1.8-1.4zM91.1 219.1c-1.7 2.3-2.9 3-4.9 2.8-3.2-.4-4.6 1.5-1.5 1.9 1.5.2 2 .8 1.6 1.9-1 2.5.9 1.2 5.5-3.8 3.7-4 4.4-5.9 2.2-5.9-.3 0-1.6 1.4-2.9 3.1zM198.2 221.7c-1.8 1.8-2.2 2.8-1.3 3.1.7.2 1.9-.5 2.7-1.7 1.5-2.1 5.8-2.9 6.8-1.2.3.5-1.2 2-3.4 3.5-4.3 2.8-4.7 3.5-2.8 5.4 3.5 3.5 11.7-1.4 10.2-6.2-1.8-6-7.7-7.4-12.2-2.9zm9.9 5.6c-.6 1.5-1.8 2.3-4 2.5-4 .4-4-1.1.1-3.6 3.7-2.4 5-2 3.9 1.1zM74.5 221c-.4.6-.3 1.6.3 2.2.6.6 1.2.6 1.7-.2.4-.6.3-1.6-.3-2.2-.6-.6-1.2-.6-1.7.2zM95.3 225c-3.5 5.3-3.8 6-2.4 6 .4 0 2.1-1.9 3.7-4.2 4.6-6.7 4.6-6.8 3.2-6.8-.7 0-2.8 2.3-4.5 5zM113.8 226.5c-1.4 3-1.9 3.1-3.6.5-1.8-2.9-7.6-2.7-9.6.2-3.3 4.7-.7 10.8 4.6 10.8 1 0 1.8.4 1.8 1 0 2.7 2.2.3 5.9-6.6 4.5-8.3 4.5-8.4 3.1-8.4-.6 0-1.6 1.1-2.2 2.5zm-4.4 2.1c2 1.9 2 2.4 0 5.2-3.3 4.7-10 1-7.6-4.2 1.3-3 5.1-3.5 7.6-1zM185.5 229c-2.3 2.5-1.2 3.9 1.3 1.7 3.5-3.2 8.2-1.5 8.2 2.8 0 2.7-1.8 4.5-4.7 4.5-1.3 0-2.3.4-2.3 1 0 1.7 4.6 1.1 7-.8 2.7-2.2 2.9-6.5.5-9.2-2.4-2.6-7.6-2.6-10 0zM116.2 232.2c-2 2-1.4 3.5 2.3 5.8 1.9 1.2 3.5 2.5 3.5 3 0 1.6-2.8 1.8-5.4.5-1.5-.8-2.8-1-3.2-.4-.7 1.2 6 4.1 8 3.3.8-.3 1.8-1.5 2.2-2.7.6-2 .3-2.5-5.1-6.2-1.9-1.2-1.9-1.4-.2-2 1-.4 3-.2 4.5.5 1.5.8 3.1 1.4 3.7 1.4.5.1 1.8 3.8 2.9 8.4 1.4 6 2.3 8.2 3.4 8 1.8-.4 11.7-14.6 10.8-15.6-.4-.3-1.5.3-2.4 1.6-1.5 1.9-2.3 2.1-6.4 1.6-3.6-.5-4.8-1.1-5.2-2.8-.3-1.3-2.2-2.8-4.8-3.9-5.1-2-7-2.1-8.6-.5zm21.2 9.6c.6 1-3.3 7.2-4.5 7.2-.5 0-.9-.8-.9-1.8 0-.9-.3-2.7-.6-4-.6-1.9-.3-2.2 2.4-2.2 1.7 0 3.3.4 3.6.8zM174.7 232.7c-1.5 1.4-.6 2.3 1.3 1.3 1.8-1 2.3-.6 4 3.2 2 4.4 1.8 5.8-.6 5.8-.8 0-1.4.5-1.4 1.1 0 .7 1 .9 2.5.5 1.9-.5 2.5-.3 2.5 1.1 0 2.1 1.5.6 2.5-2.5.4-1.6.2-2.2-.8-2.2-.8 0-1.7-1.4-2.1-3.2-.3-1.7-1.1-3.7-1.7-4.5-1.2-1.4-5.1-1.8-6.2-.6zM88.2 234.2c.5 1.5 2.8 1.8 2.9.3 0-.6-.7-1.2-1.7-1.3-1-.3-1.5.1-1.2 1zM169.5 234c-.4.6-.3 1.6.3 2.2.6.6 1.2.6 1.7-.2.4-.6.3-1.6-.3-2.2-.6-.6-1.2-.6-1.7.2zM157.5 236c-.7 1.2.2 3 1.6 3 1.2 0 1.2-2.7 0-3.5-.5-.3-1.2-.1-1.6.5zM171.3 241.2c.3 1.3.9 4 1.3 6.1.3 2.1 1.1 3.6 1.6 3.5 1.2-.4 1.2-.9-.3-6.8-.7-2.8-1.7-5-2.2-5-.5 0-.7 1-.4 2.2z" />
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);

export const FramerMotionIcon = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    viewBox="3.7 3.7 43.6 43.6"
    {...rest}
    >
        <path
        fill="#59529d"
        d="M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z"
        />
        <path fill="#5271b4" d="M47.3 25.5v21.8L36.4 36.4z" />
        <path fill="#bb4b96" d="M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z" />
    </svg>
);

export const NextJSIcon = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...rest}
    >
        <path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5Z" />
    </svg>
);

export const TailwindIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 32 32"
        {...rest}
        >
        <title>{"file_type_tailwind"}</title>
        <path
            d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
            style={{
                fill: "#44a8b3",
            }}
        />
    </svg>
);