import { useNavigate } from "react-router-dom";
import TextComponents from "../../../components/TextComponents";
import { Button } from "../../../components/Touchables/Buttons";
import VerticalContainer from "../../../components/containers/VerticalContainer";
import { VisitDataWithId } from "../../../redux/Profile/thunks/types/visit.types";

export const VisitList = ({
  visits,
}: {
  visits: VisitDataWithId[] | undefined;
}) => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "1rem" }}>
      <TextComponents.Title accent style={{ paddingLeft: "1rem" }}>
        My Visits
      </TextComponents.Title>
      {!visits || visits?.length === 0 ? (
        <>
          <TextComponents.Subtitle opposite>
            You don't have any visits yet. Click the button below to add one.
          </TextComponents.Subtitle>
          <Button
            onClick={() => {
              navigate("/services");
            }}
          >
            Go to Services
          </Button>
        </>
      ) : (
        <VerticalContainer>
          {visits?.map((visit) => (
            <div key={visit.id}></div>
          ))}
        </VerticalContainer>
      )}
    </div>
  );
};
