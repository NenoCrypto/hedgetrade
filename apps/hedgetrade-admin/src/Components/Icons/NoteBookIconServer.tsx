import React from "react";

interface NoteBookIconProps {
  size?: number; // Size of the icon
  color?: string; // Color of the icon
  className?: string; // Additional classes
}

export const NoteBookIconServer: React.FC<NoteBookIconProps> = ({
  size = 24,
  color = "#ffffff",
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    height={size}
    width={size}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M5 4h1v1H5V4zm2 1h1V4H7v1zm15-3v9H3v3h9v1H2V2h20zm-1 5H3v3h18V7zm0-4H3v3h18V3zM6 8H5v1h1V8zm2 0H7v1h1V8zm-3 4v1h1v-1H5zm2 0v1h1v-1H7zm2-7h1V4H9v1zm1 3H9v1h1V8zm-1 4v1h1v-1H9zm11 0v1h2v9h-2v1h3V12h-3zm-2 1v9h1v1h-5v-2h-1v-1h1v-2h-1v-1h1v-2h-1v-1h1v-2h5v1h-1zm-1 0h-2v1h1v1h-1v2h1v1h-1v2h1v1h-1v1h2v-9z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </g>
  </svg>
);
