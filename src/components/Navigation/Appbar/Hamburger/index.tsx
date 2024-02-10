import { StyledBurger } from "./Hamburger.styled";

export const HamburgerIcon = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <StyledBurger
      open={isOpen}
      onClick={() => {
        isOpen === true && setIsOpen(false);
        isOpen === false && setIsOpen(true);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
