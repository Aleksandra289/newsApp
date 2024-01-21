import Card from "./Card";
import { StyledChipDiv, StyledImage, StyledTitleDiv, StyledDescriptionDiv } from "./StyledCard";
import Chip from "../Chip/Chip";
import Text from "../Text/Text";

type NewsCardProps= {
    src: string;
    title: string;
    description: string;
    chipText: string;
    isActive?: boolean
}

function NewsCard({ src, title, description, chipText, isActive = true }: NewsCardProps){
    return <Card>
    <StyledChipDiv>
      <Chip showCircle={isActive}>{chipText}</Chip>
    </StyledChipDiv>

    <StyledImage src={src} alt="new pic"></StyledImage>
    <StyledTitleDiv>
      <Text fontSize="large" fontWeight="bold" lineHeight="high">
        {title}
      </Text>
    </StyledTitleDiv>
    <StyledDescriptionDiv>
      <Text fontSize="medium" fontWeight="regular" lineHeight="medium">
        {description}
      </Text>
    </StyledDescriptionDiv>
  </Card>
}
export default NewsCard;