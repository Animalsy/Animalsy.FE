import { IInfoBox } from "../../../types/infoBox";
import TextComponents from "../../TextComponents";

export const SmallInfoBox = ({ info }: { info: IInfoBox }) => {
  return (
    <div>
      <TextComponents.Subtitle size={1} style={{ textAlign: "center" }} accent>
        {info.title}
      </TextComponents.Subtitle>
      <TextComponents.Body style={{ textAlign: "center" }} size={0.8} opposite>
        {info.subtitle}
      </TextComponents.Body>
    </div>
  );
};
export const SmallInfoBoxContainer = ({ InfoArr }: { InfoArr: IInfoBox[] }) => {
  return (
    <>
      {InfoArr.map((info, i) => {
        return <SmallInfoBox info={info} key={i} />;
      })}
    </>
  );
};
