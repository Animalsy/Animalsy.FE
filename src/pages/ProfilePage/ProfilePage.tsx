import { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate";
import ProfileInformation from "./ProfileInformation";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getProfile } from "../../redux/Profile/thunks/profile/GetProfile.thunk";
import EditProfileInfoModal from "../../components/modals/EditProfileInfo.modal";
import { PetList } from "./Pets";
import { VisitList } from "./Visits";

export interface ProfilePageProps {
  prop?: string;
}

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const { profile } = useAppSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);

  return (
    <PageTemplate offsetTop={2} offsetColor={1}>
      {profile && (
        <EditProfileInfoModal
          initialProfileData={profile}
          isOpen={editProfileModalOpen}
          onClose={() => {
            setEditProfileModalOpen(false);
          }}
        />
      )}
      <div>
        <ProfileInformation
          profile={profile}
          openModal={() => {
            setEditProfileModalOpen(true);
          }}
        />
        <PetList pets={profile?.pets} />
        <VisitList visits={profile?.visits} />
      </div>
    </PageTemplate>
  );
};

export default ProfilePage;
