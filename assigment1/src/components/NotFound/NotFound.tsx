import notFoundImage from "../../assets/Frame 56544.png";
import { StyledNotFound, StyledWrapper, ButtonWrapper } from "./StyledNotFound";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";

type NotFoundProps = {
  title: string;
  description: string;
};

function NotFound({ title, description }: NotFoundProps) {
  const navigate = useNavigate();

  function onClickButtonHandler() {
    navigate(routes.root);
  }
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
          <Button size="extraLarge" color="blue" onClick={onClickButtonHandler}>
            Back home
          </Button>
        </ButtonWrapper>
      </StyledNotFound>
    </StyledWrapper>
  );
}
export default NotFound;
