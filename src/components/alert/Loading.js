import React from "react";

function Loading() {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <svg width="205" height="250">
        <g transform="translate(20,20)">
          <g strokeWidth="2" fill="none">
            <path
              d="M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150"
              stroke="#fff"
            />
            <text fill="#000" x="25" y="105">
              Loading
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Loading;
