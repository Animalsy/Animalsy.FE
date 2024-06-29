import React from "react";

const VerticalContainer = ({
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
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default VerticalContainer;
