import React from "react";

const Spacer = ({ height, width }: { height?: number; width?: number }) => {
  return (
    <div
      style={{
        height: height && `${height}rem`,
        width: width && `${width}rem`,
      }}
    ></div>
  );
};

export default Spacer;
