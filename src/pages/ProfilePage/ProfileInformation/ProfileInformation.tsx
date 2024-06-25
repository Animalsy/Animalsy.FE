import TextComponents from "../../../components/TextComponents";
import { Container } from "./ProfileInformation.styled";
import { ProfileData } from "../../../redux/Profile/thunks/GetProfile.thunk";
import { MdEdit } from "react-icons/md";

export interface ProfileInformationProps {
  profile: ProfileData | null;
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
      <TextComponents.Title>
        {profile.customer.name} {profile.customer.lastName.toLocaleUpperCase()}
      </TextComponents.Title>
      <TextComponents.Body>{profile.customer.emailAddress}</TextComponents.Body>
      <TextComponents.Body>{profile.customer.phoneNumber}</TextComponents.Body>
      <TextComponents.Body>
        {profile.customer.city}, {profile.customer.street}{" "}
        {profile.customer.building}
        {profile.customer.flat && ` / ${profile.customer.flat}`}
      </TextComponents.Body>
      <TextComponents.Body>{profile.customer.postalCode}</TextComponents.Body>
    </Container>
  );
}

export default ProfileInformation;
