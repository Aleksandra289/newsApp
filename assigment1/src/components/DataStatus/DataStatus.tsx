import Error404Icon from "../../icons/Error404Icon";
import {
  StyledWrapper,
  StyledNotFound,
  ButtonWrapper
} from "./StyledDataStatus";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";

type DataStatusProps = {
  title: string;
  description: string;
  buttonText: string;
};
export default function DataStatus({
  title,
  description,
  buttonText
}: DataStatusProps) {
  const navigate = useNavigate();

  function onClickButtonHandler() {
    navigate(routes.root);
  }
  return (
    <StyledWrapper>
      <StyledNotFound>
        <Error404Icon />
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
            {buttonText}
          </Button>
        </ButtonWrapper>
      </StyledNotFound>
    </StyledWrapper>
  );
}
