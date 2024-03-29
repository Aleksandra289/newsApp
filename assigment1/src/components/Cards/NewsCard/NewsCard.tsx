import Card from "../Card/Card";
import {
  StyledChipDiv,
  StyledImage,
  StyledTitleDiv,
  StyledDescriptionDiv,
  StyledNewsCard
} from "../NewsCard/StyledNewsCard";
import Chip from "../../Chip/Chip";
import Text from "../../Text/Text";

type NewsCardProps = {
  src: string;
  title: string;
  description: string;
  chipText: string;
  isActive?: boolean;
};

function NewsCard({
  src,
  title,
  description,
  chipText,
  isActive = true
}: NewsCardProps) {
  return (
    <Card>
      <StyledNewsCard>
        <StyledChipDiv>
          <Chip showCircle={isActive}>{chipText}</Chip>
        </StyledChipDiv>

        <StyledImage src={src} alt="new pic"></StyledImage>

        <StyledTitleDiv>
          <Text
            fontSize="large"
            fontWeight="bold"
            lineHeight="high"
            color="lighterBlack"
          >
            {title}
          </Text>
        </StyledTitleDiv>
        <StyledDescriptionDiv>
          <Text
            fontSize="medium"
            fontWeight="regular"
            lineHeight="medium"
            color="lighterGray"
          >
            {description}
          </Text>
        </StyledDescriptionDiv>
      </StyledNewsCard>
    </Card>
  );
}
export default NewsCard;
