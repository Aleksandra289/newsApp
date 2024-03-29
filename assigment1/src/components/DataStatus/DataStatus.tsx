import { DataStatusWrapper, ButtonWrapper } from "./StyledDataStatus";
import Text from "../Text/Text";
import Button from "../Button/Button";

type DataStatusProps = {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ComponentType;
  onClick: () => void;
};
export default function DataStatus({
  title,
  description,
  buttonText,
  icon: DataStatusIconComponent,
  onClick
}: DataStatusProps) {
  return (
    <DataStatusWrapper>
      <DataStatusIconComponent />
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
        <Button size="extraLarge" onClick={onClick}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </DataStatusWrapper>
  );
}
