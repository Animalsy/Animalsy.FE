import { useTheme } from "styled-components";
import { squareLogo } from "../../../assets/logo";
import TextComponents from "../../TextComponents";
import { FooterContainer, NavigationFooter } from "./FooterSection.styles";

const FooterSection = () => {
  const theme = useTheme();
  return (
    <FooterContainer>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <img alt="logoinfooter" src={squareLogo} />
        <TextComponents.Body
          size={0.5}
          color={theme.colors.primaryDark}
          style={{ textAlign: "center" }}
        >
          Your Pet Haven: Elevating Pet Care. Seamless, Exclusive, Always There
        </TextComponents.Body>
      </div>
      <NavigationFooter
        style={{ flex: 3, alignItems: "flex-start", display: "flex" }}
      >
        <div>
          <TextComponents.Subtitle size={0.8} color={theme.colors.primaryDark}>
            Usfull links
          </TextComponents.Subtitle>
          <TextComponents.Body size={0.6}>About Us</TextComponents.Body>
          <TextComponents.Body size={0.6}>Events</TextComponents.Body>
          <TextComponents.Body size={0.6}>Blogs</TextComponents.Body>
          <TextComponents.Body size={0.6}>FAQ</TextComponents.Body>
        </div>
        <div>
          <TextComponents.Subtitle size={0.8} color={theme.colors.primaryDark}>
            Services
          </TextComponents.Subtitle>
          <TextComponents.Body size={0.6}>Home</TextComponents.Body>
          <TextComponents.Body size={0.6}>Specials</TextComponents.Body>
          <TextComponents.Body size={0.6}>Vets</TextComponents.Body>
          <TextComponents.Body size={0.6}>Groomers</TextComponents.Body>
        </div>
        <div>
          <TextComponents.Subtitle size={0.8} color={theme.colors.primaryDark}>
            Contact Us
          </TextComponents.Subtitle>
          <TextComponents.Body size={0.6}>
            example@email.com
          </TextComponents.Body>
          <TextComponents.Body size={0.6}>+64 958 248 966</TextComponents.Body>
        </div>
      </NavigationFooter>
    </FooterContainer>
  );
};

export default FooterSection;
