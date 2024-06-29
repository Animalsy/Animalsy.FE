import React from "react";

const HorizontalContainer = ({
  children = <div>Hello</div>,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalContainer;
