import ratingIcon from "../../../../assets/rating";
import TextComponents from "../../../../components/TextComponents";
import { useJumpyScroll } from "../../../../hooks/useJumpyScroll";
import { commentsAboutUs } from "../../../../static/commentsAboutUs";
import { IComentsAboutUs } from "../../../../types/ComentsAboutUs";
import {
  CharacterContainer,
  Header,
  ScrollContainer,
  SignleCommentContent,
} from "./ComentsAboutUs.styles";
import { RatingImage } from "./Rating.styles";

const ComentsAboutUs = () => {
  const data = commentsAboutUs;
  const scrollRef = useJumpyScroll();
  return (
    <ScrollContainer ref={scrollRef}>
      {data.map((item, index) => {
        return <SignleComment review={item} key={index} />;
      })}
    </ScrollContainer>
  );
};

export const RatingToStars = ({ rating }: { rating: number }) => {
  switch (rating) {
    case 1:
      return <RatingImage alt="rating-1" src={ratingIcon.one} />;
    case 2:
      return <RatingImage alt="rating-2" src={ratingIcon.two} />;
    case 3:
      return <RatingImage alt="rating-3" src={ratingIcon.three} />;
    case 4:
      return <RatingImage alt="rating-4" src={ratingIcon.four} />;
    case 5:
      return <RatingImage alt="rating-5" src={ratingIcon.five} />;
    default:
      return <RatingImage alt="rating-5" src={ratingIcon.one} />;
  }
};

const SignleComment = ({ review }: { review: IComentsAboutUs }) => {
  return (
    <div>
      <SignleCommentContent>
        <CharacterContainer>
          {review.userAvatarUrl ? (
            <img
              src={review.userAvatarUrl}
              style={{ width: "100%", objectFit: "cover" }}
            />
          ) : (
            <TextComponents.Body accent>
              {review.userName[0]}
            </TextComponents.Body>
          )}
        </CharacterContainer>
        <Header>
          <TextComponents.Body opposite size={0.6}>
            {review.userName}
          </TextComponents.Body>
          <TextComponents.Body opposite size={0.5}>
            {review.date}
          </TextComponents.Body>
        </Header>
      </SignleCommentContent>
      <TextComponents.Body opposite size={0.6}>
        {review.comment}
      </TextComponents.Body>

      <RatingToStars rating={review.rating} />
    </div>
  );
};
export default ComentsAboutUs;
