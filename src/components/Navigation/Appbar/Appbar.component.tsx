import { Link, useNavigate } from "react-router-dom";
import { rectLogo } from "../../../assets/logo";
import { AppbarContainer, LogoImage } from "./Appbar.styles";
import MenuList from "./Menu/MenuList";

const AppBar = ({ isscrolledtotop }: { isscrolledtotop: boolean }) => {
  const navigate = useNavigate();
  const ClickLogo = () => {
    navigate("/");
  };
  return (
    <AppbarContainer isscrolledtotop={isscrolledtotop}>
      <LogoImage src={rectLogo} onClick={ClickLogo} />
      <MenuList />
      {/* <HamburgerSideList /> */}
    </AppbarContainer>
  );
};

export default AppBar;
