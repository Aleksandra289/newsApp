import notFoundImage from "../../assets/Frame 56544.png";
import { StyledNotFound, StyledWrapper, ButtonWrapper } from "./StyledNotFound";
import Text from "../Text/Text";
import Button from "../Button/Button";

type NotFoundProps = {
  title: string;
  description: string;
};

function NotFound({ title, description }: NotFoundProps) {
  return (
    <StyledWrapper>
      <StyledNotFound>
        <img src={notFoundImage} alt="error 404"></img>
        <Text fontSize="extraLarge" fontWeight="extraBold" lineHeight="higher">
          {title}
        </Text>
        <Text
          fontSize="medium"
          fontWeight="regular"
          lineHeight="medium"
          color="grayish"
        >
          {description}
        </Text>
        <ButtonWrapper>
          <Button size="extraLarge" color="blue">
            Back home
          </Button>
        </ButtonWrapper>
      </StyledNotFound>
    </StyledWrapper>
  );
}
export default NotFound;
