import { useNavigate } from "react-router-dom";
import { rectLogo } from "../../../assets/logo";
import { AppbarContainer, LogoImage } from "./Appbar.styles";
import MenuList from "./Menu/MenuList";
import { HamburgerIcon } from "./Hamburger";
import { useState } from "react";
import { HamburgerSidemenu } from "./Hamburger/HamburgerSidemenu";

const AppBar = ({ isscrolledtotop }: { isscrolledtotop: boolean }) => {
  const navigate = useNavigate();
  const ClickLogo = () => {
    navigate("/");
  };

  const [open, setOpen] = useState(false);

  return (
    <AppbarContainer isscrolledtotop={isscrolledtotop}>
      <LogoImage src={rectLogo} onClick={ClickLogo} />
      <MenuList isscrolledtotop={isscrolledtotop} />
      <HamburgerIcon isOpen={open} setIsOpen={setOpen} />
      <HamburgerSidemenu isOpen={open} setOpen={setOpen} />
    </AppbarContainer>
  );
};

export default AppBar;
