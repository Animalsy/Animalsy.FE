import { CustomCard, CustomModalStyled } from "./modal.styles";
import React from "react";
import { MdClose } from "react-icons/md";

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}
const CustomModal = ({ close, isOpen, children }: ModalProps) => {
  return (
    <CustomModalStyled open={isOpen}>
      <CustomCard>
        <MdClose
          onClick={close}
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <>{children}</>
      </CustomCard>
    </CustomModalStyled>
  );
};

export default CustomModal;
