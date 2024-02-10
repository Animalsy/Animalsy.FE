import { useTheme } from "styled-components";
import { squareLogo } from "../../../assets/logo";
import TextComponents from "../../TextComponents";
import { FooterContainer, NavigationFooter } from "./FooterSection.styles";
import { useNavigate } from "react-router-dom";

const FooterSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };
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
          <TextComponents.Body
            type={"Link"}
            onClick={() => {
              handleNavigate("/aboutUs");
            }}
            size={0.6}
          >
            About Us
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/events");
            }}
          >
            Events
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/blog");
            }}
          >
            Blogs
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/faq");
            }}
          >
            FAQ
          </TextComponents.Body>
        </div>
        <div>
          <TextComponents.Subtitle size={0.8} color={theme.colors.primaryDark}>
            Services
          </TextComponents.Subtitle>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/home");
            }}
          >
            Home
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/services/specialoffer");
            }}
          >
            Specials
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/services/vet");
            }}
          >
            Vets
          </TextComponents.Body>
          <TextComponents.Body
            size={0.6}
            type={"Link"}
            onClick={() => {
              handleNavigate("/services/groomer");
            }}
          >
            Groomers
          </TextComponents.Body>
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
