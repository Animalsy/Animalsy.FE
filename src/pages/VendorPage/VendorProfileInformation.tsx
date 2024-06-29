import { MdEdit } from "react-icons/md";
import { Vendor } from "../../redux/Profile/thunks/types/vendor.types";
import { Container } from "../ProfilePage/ProfileInformation/ProfileInformation.styled";
import TextComponents from "../../components/TextComponents";

export interface ProfileInformationProps {
  profile: Vendor | null;
  openModal: () => void;
}

function ProfileInformation({ profile, openModal }: ProfileInformationProps) {
  if (!profile) {
    return (
      <Container>
        <TextComponents.Title>ProfileInformation</TextComponents.Title>
        <TextComponents.Body>Loading...</TextComponents.Body>
      </Container>
    );
  }

  return (
    <Container>
      <MdEdit
        onClick={() => {
          openModal();
        }}
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
          padding: "0.5rem",
          cursor: "pointer",
        }}
      />
      <TextComponents.Title>{profile.name}</TextComponents.Title>
      <TextComponents.Body>{profile.emailAddress}</TextComponents.Body>
      <TextComponents.Body>{profile.phoneNumber}</TextComponents.Body>
      <TextComponents.Body>
        {profile.city}, {profile.street} {profile.building}
        {profile.flat && ` / ${profile.flat}`}
      </TextComponents.Body>
      <TextComponents.Body>{profile.postalCode}</TextComponents.Body>
    </Container>
  );
}

export default ProfileInformation;
