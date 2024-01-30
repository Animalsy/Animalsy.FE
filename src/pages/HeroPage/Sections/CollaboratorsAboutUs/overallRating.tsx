import { CiStar } from "react-icons/ci";
import TextComponents from "../../../../components/TextComponents";
import { commentsAboutUs } from "../../../../static/commentsAboutUs";
import { RatingContainer, RatingImage } from "./ComentsAboutUs.styles";

const OverallRating = () => {
  const data = commentsAboutUs;
  const images = commentsAboutUs.map((item) => item.userAvatarUrl);

  const averageRating = data.length
    ? data.reduce((sum, comment) => sum + comment.rating, 0) / data.length
    : 0;

  return (
    <RatingContainer>
      <div>
        {images.map(
          (image, i) => image && <RatingImage src={image} key={i} style={{}} />
        )}
      </div>
      <TextComponents.Subtitle
        accent
        style={{ display: "flex", alignItems: "center" }}
      >
        {averageRating.toFixed(1)}
        <CiStar style={{ alignSelf: "center" }} />
      </TextComponents.Subtitle>
    </RatingContainer>
  );
};

export default OverallRating;
