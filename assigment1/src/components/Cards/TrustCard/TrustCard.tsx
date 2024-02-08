import Card from "../Card/Card";
import {
  StyledTextDiv,
  StyledTitle,
  StyledDescription,
  StyledIconAndText,
  Wrapper
} from "./StyledTrustCard";
import Text from "../../Text/Text";
import CircleIcon from "../../CircleIcon/CircleIcon";
type TrustCardProps = {
  title: string;
  description: string;
};

function TrustCard({ title, description }: TrustCardProps) {
  return (
    <Wrapper>
      <Card
        borderRadius="large"
        backgroundColor="mint"
        borderColor="green"
        padding="1rem"
      >
        <StyledIconAndText>
          <CircleIcon status="success" />
          <StyledTextDiv>
            <StyledTitle>
              <Text
                fontSize="medium"
                fontWeight="extraBold"
                lineHeight="medium"
                color="lighterBlack"
              >
                {title}
              </Text>
            </StyledTitle>
            <StyledDescription>
              <Text
                fontSize="small"
                fontWeight="regular"
                lineHeight="low"
                color="lighterGray"
              >
                {description}
              </Text>
            </StyledDescription>
          </StyledTextDiv>
        </StyledIconAndText>
      </Card>
    </Wrapper>
  );
}
export default TrustCard;
